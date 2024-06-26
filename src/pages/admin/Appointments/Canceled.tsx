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
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });

  return (
    <div>
      <div className="row">
        <div className="page-header d-flex align-items-center justify-content-between mr-bottom-30">
          <div className="left-part">
            <h2 className="text-dark pt-5">Canceled Appointments</h2>
          </div>
          <div className="w-25">
            <Flatpickr
              className={`form-control form-select bg-white`}
              options={{
                mode: "range",
                dateFormat: "Y-m-d",
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

export default CanceledAppointments;
