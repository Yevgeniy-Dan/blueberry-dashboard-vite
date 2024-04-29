import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap5";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useEffect, useRef } from "react";
import { onChangeCalendarSize } from "../../../redux/calendar/slice";

const Calendar: React.FC<{
  selectedDate: Date;
  onCalendarDateClick: (info: DateClickArg) => void;
}> = ({ selectedDate, onCalendarDateClick }) => {
  const navigate = useNavigate();

  const calendar = useRef<FullCalendar | null>(null);

  const { isSizeChanged } = useAppSelector((state) => state.calendar);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | undefined;
    if (calendar.current && !isSizeChanged) {
      console.log(isSizeChanged);
      intervalId = setInterval(() => {
        if (calendar.current && !isSizeChanged) {
          console.log("calendar size changed");
          calendar.current.getApi().updateSize();
          dispatch(onChangeCalendarSize(true));
        }
      }, 500);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isSizeChanged, dispatch]);

  function handleDateClick(info: DateClickArg): void {
    onCalendarDateClick(info);
  }

  const renderDayCell = (arg: { date: Date }): React.ReactNode => {
    const cellDate = moment(arg.date);
    const isToday = cellDate.isSame(moment(), "day");
    const isSelected = selectedDate
      ? cellDate.isSame(selectedDate, "day")
      : false;
    const classNames = `fc-daygrid-day-number${isSelected ? " selected" : ""}${
      isToday ? " today" : ""
    }`;
    return <div className={classNames}>{cellDate.format("D")}</div>;
  };

  return (
    <div className="bg-transparent">
      <div className="d-flex justify-content-center w-100 mb-3">
        <div>
          <button
            className="btn btn-secondary btn-space-1 text-white fw-bold"
            onClick={() => navigate("./add")}
          >
            + Add Appointment
          </button>
        </div>
      </div>
      <FullCalendar
        ref={calendar}
        windowResizeDelay={2000}
        initialView="dayGridMonth"
        themeSystem="bootstrap5"
        plugins={[BootstrapTheme, dayGridPlugin, interactionPlugin]}
        // customButtons={customButtons}
        headerToolbar={{
          center: "prev title next",
          left: "",
          // right: "addAppointment",
          right: "",
        }}
        dayCellContent={renderDayCell}
        dayHeaderClassNames={"bg-primary text-white"}
        dayCellClassNames={"bg-transparent"}
        dateClick={handleDateClick}
      />
    </div>
  );
};
export default Calendar;
