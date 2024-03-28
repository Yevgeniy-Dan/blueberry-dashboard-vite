import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap";

const Calendar = () => {
  const events = [
    {
      id: "1",
      title: "Hey!",
      start: new Date().setDate(new Date().getDate() + 1),
      className: "bg-warning text-white",
    },
    {
      id: "2",
      title: "See John Deo",
      start: new Date(),
      end: new Date(),
      className: "bg-success text-white",
    },
    {
      id: "3",
      title: "Meet John Deo",
      start: new Date().setDate(new Date().getDate() + 2),
      className: "bg-info text-white",
    },
    {
      id: "4",
      title: "Buy a Theme",
      start: new Date().setDate(new Date().getDate() + 1),
      className: "bg-primary text-white",
    },
    {
      id: "5",
      title: "Discussion on Sprint 1",
      start: new Date().setDate(new Date().getDate() + 2),
      className: "bg-danger text-white",
    },
  ];

  return (
    <FullCalendar
      initialView="dayGridMonth"
      plugins={[BootstrapTheme, dayGridPlugin, interactionPlugin]}
      events={events}
    />
  );
};

export default Calendar;
