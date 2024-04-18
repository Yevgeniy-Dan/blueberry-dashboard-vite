import { Table, flexRender } from "@tanstack/react-table";
import React from "react";
import { IAppointment } from "../../../interfaces/appointment.interface";

const ReusableAppointmentTable: React.FC<{ table: Table<IAppointment> }> = ({
  table,
}) => {
  return (
    <div className="row overflow-auto">
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
                          onClick: header.column.getToggleSortingHandler(),
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

export default ReusableAppointmentTable;
