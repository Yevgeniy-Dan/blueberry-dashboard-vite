import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { toggleActivationSearchBar } from "../../../redux/appNavigation/slice";
import Default from "../../../layouts/Default";
import Vertical from "../../../layouts/Vertical";
import {
  ColumnDef,
  FilterFn,
  flexRender,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { AppointmentModel } from "../../../redux/appointment/model";
import { getFacetedUniqueValues } from "@tanstack/react-table";
import { rankItem } from "@tanstack/match-sorter-utils";

const CanceledAppointments = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
    // Rank the item
    const itemRank = rankItem(row.getValue(columnId), value);

    // Store the itemRank info
    addMeta({
      itemRank,
    });

    // Return if the item should be filtered in/out
    return itemRank.passed;
  };

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [isMobileCollapsed, setIsMobileCollapsed] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(toggleActivationSearchBar(true));
    return () => {
      dispatch(toggleActivationSearchBar(false));
    };
  }, [dispatch]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns = useMemo<ColumnDef<AppointmentModel, any>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        // sortingFn: fuzzySort,
      },
      {
        accessorKey: "date",
        header: "Date & Time",
        enableSorting: false,
      },
      {
        accessorKey: "service",
        header: "Service",
        enableSorting: false,
      },
      {
        accessorKey: "staff",
        header: "Staff",
        enableSorting: false,
      },
      {
        accessorKey: "status",
        header: "Status",
        enableSorting: false,
      },
    ],
    []
  );

  const [pagination, setPagination] = useState({
    pageIndex: 0, //initial page index
    pageSize: 10, //default page size
  });

  const { items: appointments } = useAppSelector((state) => state.appointments);

  const table = useReactTable({
    columns,
    data: appointments,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    // onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    // globalFilterFn: fuzzyFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });

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
            <div className="row">
              <div className="col-xxl-6 col-12">
                <div className="page-header d-flex align-items-center justify-content-between mr-bottom-30">
                  <div className="left-part">
                    <h2 className="text-dark pt-5">Canceled Appointments</h2>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="row">
                  <div className="col-lg-6">
                    <h4 className="pb-5">Appointments</h4>
                  </div>
                  <div className="col-lg-6 d-flex justify-content-end">
                    <div className="dropdown">
                      <a
                        href="#"
                        data-bs-toggle="dropdown"
                        className="fs-24 text-gray"
                      >
                        <i className="bi bi-three-dots-vertical"></i>
                      </a>
                      <div className="dropdown-menu p-0">
                        <a className="dropdown-item" href="#">
                          View
                        </a>
                        <a className="dropdown-item" href="#">
                          Edit
                        </a>
                        <a className="dropdown-item text-danger" href="#">
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 d-flex justify-content-start align-items-center gap-3 w-50">
                    <label>Show</label>

                    <select
                      className="form-select w-auto pe-6"
                      value={table.getState().pagination.pageSize}
                      onChange={(e) => {
                        table.setPageSize(Number(e.target.value));
                      }}
                    >
                      {[10, 25, 50, 100].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                          {pageSize}
                        </option>
                      ))}
                    </select>
                    <label>entries</label>
                  </div>
                </div>
                <table className="dataTable">
                  <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                      <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                          <th key={header.id}>
                            {header.isPlaceholder ? null : (
                              <>
                                <div
                                  {...{
                                    style: { cursor: "pointer" },
                                    className: header.column.getCanSort()
                                      ? "select-none"
                                      : "",
                                    onClick:
                                      header.column.getToggleSortingHandler(),
                                  }}
                                >
                                  {flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                  )}
                                </div>
                              </>
                            )}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody>
                    {table.getRowModel().rows.map((row) => (
                      <tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                          <td key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    {table.getFooterGroups().map((footerGroup) => (
                      <tr key={footerGroup.id}>
                        {footerGroup.headers.map((header) => (
                          <th key={header.id}>
                            {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef.footer,
                                  header.getContext()
                                )}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </tfoot>
                </table>
                <div className="row">
                  <div className="col">
                    <p className="fw-bold">
                      {table.getRowCount() === 0 ? (
                        "No entries to show"
                      ) : (
                        <>
                          Showing from{" "}
                          {table.getState().pagination.pageIndex *
                            table.getState().pagination.pageSize +
                            1}{" "}
                          to{" "}
                          {Math.min(
                            (table.getState().pagination.pageIndex + 1) *
                              table.getState().pagination.pageSize,
                            table.getRowCount()
                          )}{" "}
                          of {table.getRowCount().toLocaleString()} Entries
                        </>
                      )}
                    </p>
                  </div>
                  <div className="col d-flex align-items-center justify-content-end gap-3">
                    <div>
                      <button
                        className="btn btn-primary"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                      >
                        {"<"}
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                      >
                        {">"}
                      </button>
                    </div>
                    <div>
                      <p className="m-0">
                        Page{" "}
                        <strong>
                          {table.getPageCount() === 0
                            ? 0
                            : table.getState().pagination.pageIndex + 1}{" "}
                          of{" "}
                          {table.getPageCount() === 0
                            ? 0
                            : table.getPageCount().toLocaleString()}
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CanceledAppointments;
