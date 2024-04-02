import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap5";

const Calendar = () => {
  const customButtons = {
    myCustomButton: {
      text: "+ Create Appointment",
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
        left: "prev,next today",
        right: "myCustomButton",
      }}
    />
  );
};
export default Calendar;
