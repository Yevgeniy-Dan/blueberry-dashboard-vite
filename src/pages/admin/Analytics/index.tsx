import { useState } from "react";
import InvoicesStatistic from "./InvoicesStatistic";
import TotalBalance from "./TotalBalance";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown,
} from "reactstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap5";
import DaysOfWeek from "./DaysOfWeek";

const Analytics = () => {
  const [showCustomDatePicker, setShowCustomDatePicker] = useState(false);

  function handleDateClick(/*arg: DateClickArg*/): void {
    setShowCustomDatePicker(false);
  }

  return (
    <div>
      <div className="page-header d-flex align-items-center justify-content-between mr-bottom-30">
        <div className="left-part">
          <h2 className="text-dark">Analytics</h2>
        </div>
        <div className="right-part position-relative">
          <UncontrolledButtonDropdown className="float-right">
            <DropdownToggle
              tag="button"
              className="btn btn-link arrow-none card-drop p-0"
              onClick={() => {
                setShowCustomDatePicker(false);
              }}
            >
              <button
                className="btn btn-outline-primary dropdown-toggle m-1 py-2 px-4"
                type="button"
              >
                Sort
              </button>
            </DropdownToggle>

            <DropdownMenu right>
              <DropdownItem>Today</DropdownItem>
              <DropdownItem>Yesterday</DropdownItem>
              <DropdownItem>Weekly</DropdownItem>
              <DropdownItem>Monthly</DropdownItem>
              <DropdownItem onClick={() => setShowCustomDatePicker(true)}>
                Custom
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
          {showCustomDatePicker && (
            <div className="bg-white date-picker-popup">
              <FullCalendar
                initialView="dayGridMonth"
                themeSystem="bootstrap5"
                plugins={[BootstrapTheme, dayGridPlugin, interactionPlugin]}
                headerToolbar={{
                  center: "prev title next",
                  left: "",
                  right: "",
                }}
                dayCellClassNames={"bg-white"}
                dateClick={handleDateClick}
              />
            </div>
          )}
        </div>
      </div>

      <div className="row">
        <div className="col-xxl-6 col-lg-12">
          <TotalBalance />
        </div>
        <div className="col-xxl-6 col-lg-12">
          <InvoicesStatistic />
        </div>
        <div className="col-xxl-12 col-lg-12">
          <DaysOfWeek />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
