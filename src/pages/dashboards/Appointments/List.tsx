const currentDate = new Date();
const currentDay = currentDate.getDate();
currentDate.setDate(currentDay + 1);
const tomorrowDay = currentDate.getDate();

const todaysAppointments = [
  {
    day: currentDay,
    month: new Date().toLocaleString("default", { month: "short" }),
    title: "Client Meeting",
    time: "10.00 - 11.00",
  },
  {
    day: currentDay,
    month: new Date().toLocaleString("default", { month: "short" }),
    title: "Client Meeting",
    time: "10.00 - 11.00",
  },
  {
    day: currentDay,
    month: new Date().toLocaleString("default", { month: "short" }),
    title: "Team Lunch",
    time: "12.00 - 13.00",
  },
  {
    day: currentDay,
    month: new Date().toLocaleString("default", { month: "short" }),
    title: "Project Deadline",
    time: "09.00 - 17.00",
  },
  {
    day: currentDay,
    month: new Date().toLocaleString("default", { month: "short" }),
    title: "Conference Call",
    time: "14.00 - 15.00",
  },
  {
    day: currentDay,
    month: new Date().toLocaleString("default", { month: "short" }),
    title: "Workshop",
    time: "11.00 - 12.30",
  },
  {
    day: currentDay,
    month: new Date().toLocaleString("default", { month: "short" }),
    title: "Team Building Activity",
    time: "09.30 - 12.30",
  },
  {
    day: currentDay,
    month: new Date().toLocaleString("default", { month: "short" }),
    title: "Client Presentation",
    time: "15.00 - 16.30",
  },
  {
    day: currentDay,
    month: new Date().toLocaleString("default", { month: "short" }),
    title: "Training Session",
    time: "13.00 - 15.00",
  },
  {
    day: currentDay,
    month: new Date().toLocaleString("default", { month: "short" }),
    title: "Product Launch",
    time: "10.00 - 11.30",
  },
];

const tomorrowsAppointments = [
  {
    day: tomorrowDay,
    month: new Date().toLocaleString("default", { month: "short" }),
    title: "Code Review",
    time: "09.00 - 11.00",
  },
  {
    day: tomorrowDay,
    month: new Date().toLocaleString("default", { month: "short" }),
    title: "Company Anniversary",
    time: "14.00 - 17.00",
  },
  {
    day: tomorrowDay,
    month: new Date().toLocaleString("default", { month: "short" }),
    title: "Client Visit",
    time: "11.00 - 12.30",
  },
  {
    day: tomorrowDay,
    month: new Date().toLocaleString("default", { month: "short" }),
    title: "Quarterly Review",
    time: "09.30 - 12.30",
  },
  {
    day: tomorrowDay,
    month: new Date().toLocaleString("default", { month: "short" }),
    title: "Holiday Party",
    time: "18.00 - 21.00",
  },
  {
    day: tomorrowDay,
    month: new Date().toLocaleString("default", { month: "short" }),
    title: "Training Workshop",
    time: "10.00 - 15.00",
  },
  {
    day: tomorrowDay,
    month: new Date().toLocaleString("default", { month: "short" }),
    title: "Team Meeting",
    time: "09.30 - 10.30",
  },
  {
    day: tomorrowDay,
    month: new Date().toLocaleString("default", { month: "short" }),
    title: "Client Demo",
    time: "14.00 - 15.00",
  },
  {
    day: tomorrowDay,
    month: new Date().toLocaleString("default", { month: "short" }),
    title: "Product Training",
    time: "11.00 - 12.30",
  },
  {
    day: tomorrowDay,
    month: new Date().toLocaleString("default", { month: "short" }),
    title: "Design Review",
    time: "10.30 - 12.00",
  },
];
const List = () => {
  return (
    <div className="row">
      <div className="col-xxl-12 col-12">
        <div className="card border-0 bg-transparent rounded-0 overflow-visible">
          <div className="card-body p-0">
            <div className="row">
              <div className="dropdown-widget dropdown-schedule p-2 col-md-6 col-12">
                <div className="card border-0 shadow-sm pd-top-40 pd-bottom-40 bg-primary">
                  <div className="card-body py-0 text-center">
                    <h4 className="mb-3 fs-medium  text-white">Today</h4>
                    <h2 className="fs-big gap-4  text-white"> 12 </h2>
                    <button
                      className="btn btn-sm btn-primary rounded-pill text-white border-white"
                      type="button"
                    >
                      <i className="bi bi-eye"></i> View
                    </button>
                  </div>
                </div>
                <div className="dropdown-wrapper">
                  <ul className="notification-board calendar-schedule list-unstyled">
                    {todaysAppointments.map((appointment) => (
                      <li className="author-online has-new-message bg-light-200 d-flex align-items-center justify-content-between gap-3">
                        <div className="d-flex align-items-center gap-3">
                          <div className="calendar-date bg-soft-primary text-center d-flex flex-column justify-content-center">
                            <h5 className="text-primary ff-heading fs-18 fw-bold lh-18 mb-0">
                              {appointment.day}
                            </h5>
                            <p className="fs-14 mb-0">{appointment.month}</p>
                          </div>
                          <div className="user-message">
                            <h6 className="message mb-1">
                              <a
                                href="#"
                                className="text-dark d-inline-block text-truncate"
                                style={{ maxWidth: "100px" }}
                              >
                                {appointment.title}
                              </a>
                            </h6>
                            <p className="message-footer d-flex align-items-center justify-content-between">
                              <span>
                                <i className="bi bi-clock-fill"></i>{" "}
                                {appointment.time}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <a
                            href="#"
                            data-bs-toggle="dropdown"
                            className="fs-24 text-gray"
                          >
                            <i className="bi bi-three-dots-vertical"></i>
                          </a>
                          <div className="dropdown-menu p-0">
                            <a className="dropdown-item" href="#">
                              View
                            </a>
                            <a className="dropdown-item" href="#">
                              Edit
                            </a>
                            <a className="dropdown-item text-danger" href="#">
                              Remove
                            </a>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="dropdown-widget dropdown-schedule p-2 col-md-6 col-12">
                <div className="card border-0 shadow-sm pd-top-40 pd-bottom-40 bg-secondary">
                  <div className="card-body py-0 text-center">
                    <h4 className="mb-3 fs-medium  text-white">Tomorrow</h4>
                    <h2 className="fs-big gap-4  text-white"> 15 </h2>
                    <button
                      className="btn btn-sm btn-secondary rounded-pill text-white border border-white"
                      type="button"
                    >
                      <i className="bi bi-eye"></i> View
                    </button>
                  </div>
                </div>
                <div className="dropdown-wrapper">
                  <ul className="notification-board calendar-schedule list-unstyled">
                    {tomorrowsAppointments.map((appointment) => (
                      <li className="author-online has-new-message bg-light-200 d-flex align-items-center justify-content-between gap-3">
                        <div className="d-flex align-items-center gap-3">
                          <div className="calendar-date bg-soft-primary text-center d-flex flex-column justify-content-center">
                            <h5 className="text-primary ff-heading fs-18 fw-bold lh-18 mb-0">
                              {appointment.day}
                            </h5>
                            <p className="fs-14 mb-0">{appointment.month}</p>
                          </div>
                          <div className="user-message">
                            <h6 className="message mb-1">
                              <a
                                href="#"
                                className="text-dark d-inline-block text-truncate"
                                style={{ maxWidth: "100px" }}
                              >
                                {appointment.title}
                              </a>
                            </h6>
                            <p className="message-footer d-flex align-items-center justify-content-between">
                              <span>
                                <i className="bi bi-clock-fill"></i>{" "}
                                {appointment.time}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div>
                          <a
                            href="#"
                            data-bs-toggle="dropdown"
                            className="fs-24 text-gray"
                          >
                            <i className="bi bi-three-dots-vertical"></i>
                          </a>
                          <div className="dropdown-menu p-0">
                            <a className="dropdown-item" href="#">
                              View
                            </a>
                            <a className="dropdown-item" href="#">
                              Edit
                            </a>
                            <a className="dropdown-item text-danger" href="#">
                              Remove
                            </a>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
