import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown,
} from "reactstrap";

import moment from "moment";
import { useAppSelector } from "../../../hooks/redux";
import { selectAppointmentByDate } from "../../../redux/appointment/slice";

const List: React.FC<{ selectedDate: Date }> = ({ selectedDate }) => {
  const todaysAppointments = useAppSelector((state) =>
    selectAppointmentByDate(state)(selectedDate)
  );
  const tomorrowsAppointments = useAppSelector((state) =>
    selectAppointmentByDate(state)(moment(selectedDate).add(1, "day").toDate())
  );
  return (
    <div className="row">
      <div className="col-xxl-12 col-12">
        <div className="card border-0 bg-transparent rounded-0 overflow-visible">
          <div className="card-body p-0">
            <div className="row">
              <div className="dropdown-widget dropdown-schedule p-2 col-md-6 col-12">
                <div className="card border-0 shadow-sm pd-top-40 pd-bottom-40 bg-primary">
                  <div className="card-body py-0 text-center">
                    <h4 className="mb-3 fs-medium  text-white">
                      {moment(selectedDate).format("MMMM D")}
                    </h4>
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
                      <li className="author-online has-new-message bg-light-200 d-flex  align-items-center justify-content-between">
                        <div className="flex-grow-1">
                          <div>
                            <p className="text-center fw-bold">
                              {moment(appointment.time).format("h:mmA")}
                            </p>
                          </div>
                          <div className="d-flex justify-content-between w-100">
                            <div>
                              <p className="fw-bold">
                                {appointment.customerName}
                              </p>
                            </div>
                            <div>
                              <UncontrolledButtonDropdown className="float-right">
                                <DropdownToggle
                                  tag="button"
                                  className="btn btn-link arrow-none card-drop p-0"
                                >
                                  <span className="badge text-bg-primary text-white mb-1">
                                    {appointment.status}
                                  </span>
                                </DropdownToggle>

                                <DropdownMenu right>
                                  <DropdownItem>Pending</DropdownItem>
                                  <DropdownItem>Confirmed</DropdownItem>
                                  <DropdownItem>Done</DropdownItem>
                                  <DropdownItem>Canceled</DropdownItem>
                                  <DropdownItem>No-Show</DropdownItem>
                                </DropdownMenu>
                              </UncontrolledButtonDropdown>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between w-100">
                            <div>
                              <p className="fw-bold">{appointment.staff}</p>
                            </div>
                            <div>
                              <p className="text-dark">{appointment.service}</p>
                            </div>
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
                    <h4 className="mb-3 fs-medium  text-white">
                      {moment(selectedDate).add(1, "day").format("MMMM D")}
                    </h4>
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
                      <li className="author-online has-new-message bg-light-200 d-flex  align-items-center justify-content-between">
                        <div className="flex-grow-1">
                          <div>
                            <p className="text-center fw-bold">
                              {moment(appointment.time).format("h:mmA")}
                            </p>
                          </div>
                          <div className="d-flex justify-content-between w-100">
                            <div>
                              <p className="fw-bold">
                                {appointment.customerName}
                              </p>
                            </div>
                            <div>
                              <UncontrolledButtonDropdown className="float-right">
                                <DropdownToggle
                                  tag="button"
                                  className="btn btn-link arrow-none card-drop p-0"
                                >
                                  <span className="badge text-bg-secondary text-white mb-1">
                                    {appointment.status}
                                  </span>
                                </DropdownToggle>

                                <DropdownMenu right>
                                  <DropdownItem>Pending</DropdownItem>
                                  <DropdownItem>Confirmed</DropdownItem>
                                  <DropdownItem>Done</DropdownItem>
                                  <DropdownItem>Canceled</DropdownItem>
                                  <DropdownItem>No-Show</DropdownItem>
                                </DropdownMenu>
                              </UncontrolledButtonDropdown>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between w-100">
                            <div>
                              <p className="fw-bold">{appointment.staff}</p>
                            </div>
                            <div>
                              <p className="text-dark">{appointment.service}</p>
                            </div>
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
