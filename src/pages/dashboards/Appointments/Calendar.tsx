import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap5";

const Calendar = () => {
  const customButtons = {
    myCustomButton: {
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
        center: "prev,next today dayGridMonth",
        left: "title",
        right: "myCustomButton",
      }}
      dayHeaderClassNames={"bg-primary text-white"}
    />
  );
};
export default Calendar;
