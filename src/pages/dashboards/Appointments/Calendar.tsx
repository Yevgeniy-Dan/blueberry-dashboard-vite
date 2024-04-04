import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap5";

const Calendar: React.FC<{
  onCalendarDateClick: () => void;
}> = ({ onCalendarDateClick }) => {
  const customButtons = {
    addAppointment: {
      text: "+ Add Appointment",
      click: () => {},
    },
  };

  function handleDateClick(): void {
    onCalendarDateClick();
  }

  return (
    <div>
      <div className="d-flex justify-content-end w-100 mb-5">
        <div>
          <button className="btn btn-secondary text-white">
            + Add Appointment
          </button>
        </div>
      </div>
      <FullCalendar
        initialView="dayGridMonth"
        themeSystem="bootstrap5"
        plugins={[BootstrapTheme, dayGridPlugin, interactionPlugin]}
        customButtons={customButtons}
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
