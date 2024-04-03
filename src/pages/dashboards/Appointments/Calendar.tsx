import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap5";

const Calendar = () => {
  const customButtons = {
    addAppointment: {
      text: "+ Add Appointment",
      click: () => {},
    },
  };

  return (
    <FullCalendar
      initialView="dayGridMonth"
      themeSystem="bootstrap5"
      plugins={[BootstrapTheme, dayGridPlugin, interactionPlugin]}
      customButtons={customButtons}
      headerToolbar={{
        center: "prev dayGridMonth next",
        left: "title",
        right: "addAppointment",
      }}
      dayHeaderClassNames={"bg-primary text-white"}
    />
  );
};
export default Calendar;
