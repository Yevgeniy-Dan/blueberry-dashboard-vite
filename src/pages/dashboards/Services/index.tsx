import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { NavLink, useNavigate } from "react-router-dom";
import Default from "../../../layouts/Default";
import Vertical from "../../../layouts/Vertical";

import BootstrapTable, {
  ColumnDescription,
  PaginationOptions,
  SizePerPageRendererOptions,
} from "react-bootstrap-table-next";

import ToolkitProvider from "react-bootstrap-table2-toolkit";
import paginationFactory, {
  PaginationProvider,
  SizePerPageDropdownStandalone,
  PaginationTotalStandalone,
  PaginationListStandalone,
} from "react-bootstrap-table2-paginator";
import ServiceSearch from "./ServiceSearch";
import { ServiceModel } from "../../../redux/services/models";
import { removeService } from "../../../redux/services/slice";
import { SERVICES } from "../../../routes/constants";

const ServiceTable = ({
  paginationOptions,
  columns,
  data,
}: {
  paginationOptions: PaginationOptions;
  columns: ColumnDescription[];
  data: ServiceModel[];
}) => {
  const customTotal = (from: number, to: number, size: number) => (
    <label className="react-bootstrap-table-pagination-total ml-2 fw-bold">
      Showing {from} to {to} of {size} entries
    </label>
  );

  const sizePerPageRenderer = ({
    options,
    currSizePerPage,
    onSizePerPageChange,
  }: SizePerPageRendererOptions) => (
    <>
      <label className="d-inline mr-1">Show</label>
      <div className="d-inline-block mx-2">
        <select
          className="form-control  custom-select"
          onChange={(e) => onSizePerPageChange(Number(e.target.value))}
        >
          {options.map((option, idx) => (
            <option
              key={idx}
              value={option.page}
              selected={currSizePerPage === option.page.toString()}
            >
              {option.text}
            </option>
          ))}
        </select>
      </div>
      <label className="d-inline ml-1">entries</label>
    </>
  );

  return (
    <PaginationProvider
      pagination={paginationFactory({
        ...paginationOptions,
        paginationTotalRenderer: customTotal,
        custom: true,
        sizePerPageRenderer: sizePerPageRenderer,
      })}
      key="id"
    >
      {({ paginationProps, paginationTableProps }) => (
        <ToolkitProvider keyField="id" data={data} columns={columns} search>
          {(props) => (
            <>
              <div className="row mt-2">
                <div className="col-md-6">
                  <SizePerPageDropdownStandalone {...paginationProps} />
                </div>
                <div className="col-md-6 text-sm-right mt-2 mt-sm-0">
                  <ServiceSearch onSearch={props.searchProps.onSearch} />
                </div>
              </div>

              <BootstrapTable
                {...props.baseProps}
                bordered={false}
                wrapperClasses="table-responsive"
                {...paginationTableProps}
                classes="table dataTable"
              />

              <div className="row">
                <div className="col">
                  <PaginationTotalStandalone
                    {...paginationProps}
                    totalSize={data.length}
                  />
                </div>
                <div className="col d-flex justify-content-end">
                  <PaginationListStandalone {...paginationProps} />
                </div>
              </div>
            </>
          )}
        </ToolkitProvider>
      )}
    </PaginationProvider>
  );
};

const Services = () => {
  const { items: services } = useAppSelector((state) => state.services);
  const dispatch = useAppDispatch();

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [isMobileCollapsed, setIsMobileCollapsed] = useState<boolean>(false);

  const navigate = useNavigate();

  function removeServiceHandler(id: string): void {
    dispatch(removeService(id));
  }

  const ActionColumn = (_cell: undefined, row: ServiceModel) => {
    return (
      <>
        <NavLink to="/" className="action-icon">
          {" "}
          <i className="bi bi-eye"></i>
        </NavLink>
        <NavLink to={`${SERVICES}/add/${row.id}`} className="action-icon">
          {" "}
          <i className="bi bi-pencil-square"></i>
        </NavLink>
        <button
          onClick={() => removeServiceHandler(row.id)}
          className="btn p-0 btn-link"
        >
          {" "}
          <i className="bi bi-trash"></i>
        </button>
      </>
    );
  };

  const columns: ColumnDescription[] = [
    {
      dataField: "name",
      text: "Service",
      sort: true,
      headerFormatter: (column) => (
        <div style={{ cursor: "pointer" }}>
          <span>
            <i className="bi bi-sort-up"></i>
            {column.text}
          </span>
        </div>
      ),
      //   formatter: NameColumn,
      classes: "table-user",
    },
    {
      dataField: "duration",
      text: "Duration",
      sort: false,
    },
    {
      dataField: "price",
      text: "Price",
      sort: true,
      headerFormatter: (column) => (
        <div style={{ cursor: "pointer" }}>
          <span>
            <i className="bi bi-sort-up"></i>
            {column.text}
          </span>
        </div>
      ),
    },
    {
      dataField: "staffMembers",
      text: "Staff Members",
      sort: false,
    },
    {
      dataField: "action",
      text: "Action",
      sort: false,
      classes: "table-action",
      formatter: ActionColumn,
    },
  ];

  const paginationOptions = {
    paginationSize: 5,
    pageStartIndex: 1,
    withFirstAndLast: false,
    showTotal: true,
    sizePerPageList: [
      {
        text: "10",
        value: 10,
      },
      {
        text: "25",
        value: 25,
      },
      {
        text: "50",
        value: 50,
      },
    ],
  };

  return (
    <div
      className={`bg-white has-right-panel ${
        isCollapsed && "kleon-vertical-nav--collapse"
      } ${isMobileCollapsed && "kleon-vertical-nav--active"}`}
    >
      <Default
        isCollapsed={isMobileCollapsed}
        onToggleCollapse={() => setIsMobileCollapsed(!isMobileCollapsed)}
      />
      <Vertical
        isCollapsed={isCollapsed}
        onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
      />
      <main className="main-wrapper ">
        <div className="container-fluid">
          <div className="inner-contents">
            <div className="page-header d-flex align-items-center justify-content-between mr-bottom-30">
              <div className="left-part">
                <h2 className="text-dark">Services</h2>
              </div>
            </div>
            <div className="card border-1 p-5 shadow-sm">
              <div className="card-header d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-secondary text-white"
                  onClick={() => {
                    navigate("./add");
                  }}
                >
                  Add
                </button>
              </div>

              <ServiceTable
                columns={columns}
                data={services}
                paginationOptions={paginationOptions}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;
