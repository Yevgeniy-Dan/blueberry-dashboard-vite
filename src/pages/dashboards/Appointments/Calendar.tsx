import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap5";
import { useNavigate } from "react-router-dom";

const Calendar: React.FC<{
  onCalendarDateClick: () => void;
}> = ({ onCalendarDateClick }) => {
  const navigate = useNavigate();

  // const customButtons = {
  //   addAppointment: {
  //     text: "+ Add Appointment",
  //     click: () => {},
  //   },
  // };

  function handleDateClick(): void {
    onCalendarDateClick();
  }

  return (
    <div>
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
        dayHeaderClassNames={"bg-primary text-white"}
        dateClick={handleDateClick}
      />
    </div>
  );
};
export default Calendar;
