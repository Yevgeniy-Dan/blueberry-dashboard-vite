import { ServiceModel } from "../../../redux/services/models";
import {
  ColumnDef,
  FilterFn,
  SortingFn,
  flexRender,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  sortingFns,
  useReactTable,
} from "@tanstack/react-table";
import { DebouncedInput } from "./DebounceInput";
import {
  RankingInfo,
  compareItems,
  rankItem,
} from "@tanstack/match-sorter-utils";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { SERVICES } from "../../../routes/constants";
import { removeService } from "../../../redux/services/slice";

import sortAscPng from "../../../assets/images/sort_asc.png";
import sortDescPng from "../../../assets/images/sort_desc.png";
import sortBothPng from "../../../assets/images/sort_both.png";

declare module "@tanstack/react-table" {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

const Table = () => {
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
  const fuzzySort: SortingFn<any> = (rowA, rowB, columnId) => {
    let dir = 0;

    // Only sort by rank if the column has ranking information
    if (rowA.columnFiltersMeta[columnId]) {
      dir = compareItems(
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        rowA.columnFiltersMeta[columnId]?.itemRank!,
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        rowB.columnFiltersMeta[columnId]?.itemRank!
      );
    }

    // Provide an alphanumeric fallback for when the item ranks are equal
    return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir;
  };

  const { items: services } = useAppSelector((state) => state.services);

  const dispatch = useAppDispatch();

  const removeServiceHandler = useMemo(() => {
    return (id: string) => {
      dispatch(removeService(id));
    };
  }, [dispatch]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns = useMemo<ColumnDef<ServiceModel, any>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        sortingFn: fuzzySort,
      },
      {
        accessorKey: "duration",
        header: "Duration",
        enableSorting: false,
      },
      {
        accessorKey: "price",
        header: "Price",
        cell: ({ row }) => {
          const price: string = row.getValue("price");
          const currencyCode = row.original.currencyCode;
          return (
            <span>
              {currencyCode} {price}
            </span>
          );
        },
      },
      {
        accessorKey: "staffMembers",
        header: "Staff",
        enableSorting: false,
      },
      {
        header: "Actions",
        cell: ({ row }) => (
          <div>
            <NavLink to="/" className="action-icon">
              {" "}
              <i className="bi bi-eye"></i>
            </NavLink>
            <NavLink
              to={`${SERVICES}/add/${row.original.id}`}
              className="action-icon"
            >
              {" "}
              <i className="bi bi-pencil-square"></i>
            </NavLink>
            <button
              onClick={() => removeServiceHandler(row.original.id)}
              className="btn p-0 btn-link"
            >
              {" "}
              <i className="bi bi-trash"></i>
            </button>
          </div>
        ),
      },
    ],
    [removeServiceHandler]
  );

  const [pagination, setPagination] = useState({
    pageIndex: 0, //initial page index
    pageSize: 10, //default page size
  });

  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    columns,
    data: services,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      //...
      pagination,
      globalFilter,
    },
    onPaginationChange: setPagination,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    globalFilterFn: fuzzyFilter,
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

  useEffect(() => {
    if (table.getState().columnFilters[0]?.id === "name") {
      if (table.getState().sorting[0]?.id !== "name") {
        table.setSorting([{ id: "name", desc: false }]);
      }
    }
  }, [table.getState().columnFilters[0]?.id]);

  return (
    <div className="p-2">
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
        <div className="col-lg-6 d-flex justify-content-end">
          <DebouncedInput
            value={globalFilter ?? ""}
            onChange={(value) => setGlobalFilter(String(value))}
            className="form-control"
            placeholder="Search all columns..."
          />
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
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {{
                          asc: <img src={sortAscPng} alt="sort asc" />,
                          desc: <img src={sortDescPng} alt="sort desc" />,
                        }[header.column.getIsSorted() as string] ?? (
                          <img src={sortBothPng} alt="sort both" />
                        )}
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
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
  );
};

export default Table;
