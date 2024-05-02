import { useEffect, useMemo, useState } from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { toggleActivationAppointmentSearchBar } from "../../../redux/appNavigation/slice";
import {
  ColumnDef,
  FilterFn,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { getFacetedUniqueValues } from "@tanstack/react-table";
import { rankItem } from "@tanstack/match-sorter-utils";
import Flatpickr from "react-flatpickr";
import { IAppointment } from "../../../interfaces/appointment.interface";
import { useAppointmentQuery } from "../../../hooks/useAppointments";
import ReusableAppointmentTable from "./ReusableAppointmentTable";

const AllAppointments = () => {
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

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(toggleActivationAppointmentSearchBar(true));
    return () => {
      dispatch(toggleActivationAppointmentSearchBar(false));
    };
  }, [dispatch]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns = useMemo<ColumnDef<IAppointment, any>[]>(
    () => [
      {
        accessorKey: "service",
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

  const { data: appointments } = useAppointmentQuery();

  const table = useReactTable({
    columns,
    data: appointments || [],
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
    debugAll: false,
  });

  return (
    <div>
      <div className="row">
        <div className="page-header d-flex align-items-center justify-content-between mr-bottom-30 pt-5">
          <div className="left-part d-flex align-items-center ">
            <div>
              <h2 className="text-dark ">All Appointments</h2>
            </div>
          </div>
          <div>
            <a
              href=""
              className="btn btn-primary rounded-2 ff-heading fs-18 fw-bold py-4"
              download
            >
              <i className="bi bi-pie-chart-fill me-1"></i> Download Report
            </a>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-4">
            <Flatpickr
              placeholder="Select Date Range"
              className={`form-control  flatpickr-input bg-primary text-white fs-18 fw-bold`}
              options={{
                mode: "range",
                dateFormat: "F j, Y",
              }}
            />
          </div>
        </div>
        <div className="p-5">
          <ReusableAppointmentTable table={table} />
        </div>
      </div>
    </div>
  );
};

export default AllAppointments;
