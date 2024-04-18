import { useMemo, useState } from "react";
import { useAppointmentQuery } from "../../../hooks/useAppointments";
import {
  ColumnDef,
  FilterFn,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { IAppointment } from "../../../interfaces/appointment.interface";
import { rankItem } from "@tanstack/match-sorter-utils";
import ReusableAppointmentTable from "./ReusableAppointmentTable";
import { useAppSelector } from "../../../hooks/redux";

const AppointmentSearchTable = () => {
  const { data: appts } = useAppointmentQuery();

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

  const searchText = useAppSelector((state) => state.navbar.searchText);

  const table = useReactTable({
    columns,
    data: appts || [],
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      pagination,
      globalFilter: searchText,
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

  return <ReusableAppointmentTable table={table} />;
};

export default AppointmentSearchTable;
