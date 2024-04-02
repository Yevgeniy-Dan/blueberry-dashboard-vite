import calendarIcon from "../../../assets/images/calendar-icon.png";
import avatar1 from "../../../assets/images/1.jpg";
import avatar2 from "../../../assets/images/2.jpg";
import avatar3 from "../../../assets/images/3.jpg";
import Calendar from "./Calendar";
import Default from "../../../layouts/Default";
import Vertical from "../../../layouts/Vertical";
import { useState } from "react";

const Appointments = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [isMobileCollapsed, setIsMobileCollapsed] = useState<boolean>(false);

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

  return (
    <div
      className={`bg-white has-right-panel ${
        isCollapsed && "kleon-vertical-nav--collapse"
      } ${isMobileCollapsed && "kleon-vertical-nav--active"}`}
    >
      <Default
        isCollapsed={isMobileCollapsed}
        onToggleCollapse={() => setIsMobileCollapsed(!isMobileCollapsed)}
      />
      <Vertical
        isCollapsed={isCollapsed}
        onToggleCollapse={() => setIsCollapsed(!isCollapsed)}
      />
      <main className="main-wrapper ">
        <div className="container-fluid">
          <div className="inner-contents">
            <div className="row">
              <div className="col-xxl-6 col-12">
                <div className="page-header d-flex align-items-center justify-content-between mr-bottom-30">
                  <div className="left-part">
                    <h2 className="text-dark">My Appointments</h2>
                  </div>
                </div>

                <div className="row">
                  <div className="col-xxl-12 col-12">
                    <div className="card border-0 bg-transparent rounded-0 overflow-visible">
                      <div className="card-body p-0">
                        <div className="row">
                          <div className="dropdown-widget dropdown-schedule p-2 col-md-6 col-12">
                            <div className="card border-0 shadow-sm pd-top-40 pd-bottom-40 bg-light-200">
                              <div className="card-body py-0">
                                <h4 className="mb-3">Today</h4>
                                <h2 className="fs-38 d-flex align-items-center gap-4">
                                  {" "}
                                  12{" "}
                                </h2>
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
                                        <p className="fs-14 mb-0">
                                          {appointment.month}
                                        </p>
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
                                        <a
                                          className="dropdown-item text-danger"
                                          href="#"
                                        >
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
                            <div className="card border-0 shadow-sm pd-top-40 pd-bottom-40 bg-light-200">
                              <div className="card-body py-0">
                                <h4 className="mb-3">Tomorrow</h4>
                                <h2 className="fs-38 d-flex align-items-center gap-4">
                                  {" "}
                                  15{" "}
                                </h2>
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
                                        <p className="fs-14 mb-0">
                                          {appointment.month}
                                        </p>
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
                                        <a
                                          className="dropdown-item text-danger"
                                          href="#"
                                        >
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
              </div>

              <div className="col-xxl-6">
                <div className="card border-0">
                  <div className="card-body">
                    {/* <div id="calendar" className="kleon-fullcalendar"> */}
                    <Calendar />
                    {/* </div> */}
                  </div>
                </div>
              </div>

              {/*  Modal Add New Event */}
              <div className="modal fade" id="add-event">
                <div className="modal-dialog modal-xl">
                  <div className="modal-content rounded-2 p-0 p-sm-5">
                    <div className="modal-header">
                      <h2 className="modal-title fw-bold">Add New Event</h2>
                      <button
                        type="button"
                        className="btn-close p-0 border-0"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form className="" method="post">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="form-label fs-14 fw-semibold text-uppercase ls-1 text-gray-300">
                                Start Date
                              </label>
                              <input
                                type="text"
                                className="flatpickr form-control"
                                name="calendar"
                                placeholder=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="form-label fs-14 fw-semibold text-uppercase ls-1 text-gray-300">
                                End Date
                              </label>
                              <input
                                type="text"
                                className="flatpickr form-control"
                                name="calendar"
                                placeholder=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="form-label fs-14 fw-semibold text-uppercase ls-1 text-gray-300">
                                Start Time
                              </label>
                              <input
                                type="time"
                                className="form-control"
                                name="calendar"
                                placeholder=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="form-label fs-14 fw-semibold text-uppercase ls-1 text-gray-300">
                                End Time
                              </label>
                              <input
                                type="time"
                                className="form-control"
                                name="calendar"
                                placeholder=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <label className="form-label fs-14 fw-semibold text-uppercase ls-1 text-gray-300">
                                Event Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="event_name"
                                value="National Envato Meetup With Blueberry Team"
                                placeholder=""
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <label className="form-label fs-14 fw-semibold text-uppercase ls-1 text-gray-300">
                                Description
                              </label>
                              <textarea
                                className="form-control"
                                name="textarea"
                                placeholder="Enter Text"
                              >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur
                              </textarea>
                            </div>
                          </div>
                        </div>

                        <div className="form-group d-flex align-items-center justify-content-between mb-0">
                          <div
                            id="dpz-multiple-files"
                            className="dropzone file-upload btn btn-info text-white fs-18 text-uppercase mx-0"
                          >
                            <i className="bi bi-paperclip me-2"></i> Add
                            Attachment
                          </div>
                          <button
                            type="submit"
                            className="btn btn-secondary fs-18 text-uppercase mx-0"
                          >
                            <i className="bi bi-send me-2"></i> Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Modal Event Details --> */}
              <div className="modal fade" id="event-details">
                <div className="modal-dialog modal-xl modal-dialog-centered">
                  <div className="modal-content rounded-2 p-0 p-sm-5">
                    <div className="modal-header">
                      <h3 className="modal-title fw-bold">Event Details</h3>
                      <button
                        type="button"
                        className="btn-close p-0 border-0"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="d-flex justify-content-between mb-3">
                        <div className="d-flex align-items-start gap-5">
                          <div className="bg-info p-3 rounded-2 ">
                            <img src={calendarIcon} alt="" />
                          </div>
                          <div>
                            <h4 className="event-title fs-20 text-dark mb-3">
                              Weekly Meeting Projects
                            </h4>
                            <p className="fs-14 lh-24">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur
                            </p>

                            <div className="d-flex justify-content-between align-items-center gap-4 flex-wrap">
                              {/* <!-- Avatar Group --> */}
                              <div className="avatar-group">
                                <span className="avatar rounded-circle bg-gray-200">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src={avatar1}
                                  />
                                </span>
                                <span className="avatar rounded-circle bg-gray-200">
                                  <span className="avatar-initials rounded-circle">
                                    A
                                  </span>
                                </span>
                                <span className="avatar rounded-circle bg-gray-200">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src={avatar2}
                                  />
                                </span>
                                <span className="avatar rounded-circle bg-gray-200">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src={avatar3}
                                  />
                                </span>
                                <span className="avatar rounded-circle bg-gray-200">
                                  <span className="avatar-initials rounded-circle text-white bg-primary">
                                    5+
                                  </span>
                                </span>
                              </div>

                              <div className="d-flex align-items-center gap-3">
                                <div className="fs-20 text-primary">
                                  <i className="bi bi-clock-fill"></i>
                                </div>
                                <div>
                                  <p className="mb-0">Monday, 10:24 AM</p>
                                  <p className="mb-0 fw-semibold">
                                    October 31th 2023
                                  </p>
                                </div>
                              </div>

                              <div className="d-flex align-items-center gap-3">
                                <div className="fs-20 text-primary">
                                  <i className="bi bi-geo-alt-fill"></i>
                                </div>
                                <div>
                                  <p className="mb-0">Corner Rounded St</p>
                                  <p className="mb-0 fw-semibold">
                                    London, United Kingdom
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="dropdown">
                          <a
                            href="#"
                            data-bs-toggle="dropdown"
                            className="fs-24"
                          >
                            <i className="bi bi-three-dots"></i>
                          </a>
                          <div className="dropdown-menu p-0">
                            <div className="btn-group">
                              <button
                                className="btn border-0 p-1 px-2 fs-30 rounded-2 text-danger"
                                type="button"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Delete"
                                data-bs-custom-className="tooltip-primary"
                              >
                                <i className="bi bi-x"></i>
                              </button>
                              <button
                                className="btn border-0 p-1 px-2 fs-30 rounded-2 text-success"
                                type="button"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Reply"
                                data-bs-custom-className="tooltip-primary"
                              >
                                <i className="bi bi-check"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Appointments;
