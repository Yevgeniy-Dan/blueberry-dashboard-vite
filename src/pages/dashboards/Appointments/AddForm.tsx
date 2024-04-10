import { useNavigate } from "react-router-dom";
import Default from "../../../layouts/Default";
import Vertical from "../../../layouts/Vertical";
import { useId, useState } from "react";

import Flatpickr from "react-flatpickr";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AppointmentModel } from "../../../redux/appointment/model";
import { addAppointment } from "../../../redux/appointment/slice";
import { useAppDispatch } from "../../../hooks/redux";

const services = [
  "Administrative Support",
  "Data Entry",
  "Technical Support",
  "Customer Service",
  "Marketing Assistance",
  "Project Management",
  "Accounting Services",
  "Human Resources",
  "Legal Consultation",
  "IT Solutions",
];

const staff = [
  "John Smith",
  "Emily Johnson",
  "Michael Brown",
  "Sarah Wilson",
  "David Martinez",
  "Jennifer Davis",
  "Robert Taylor",
  "Jessica Anderson",
  "William Thomas",
  "Laura Garcia",
];

const AddForm = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [isMobileCollapsed, setIsMobileCollapsed] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const id = useId();

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      customer: "",
      staff: "",
      service: "",
    },
    validationSchema: Yup.object().shape({
      date: Yup.date().required("Date is required"),
      time: Yup.string().required("Time is required"),
      customer: Yup.string().required("Customer is required"),
      staff: Yup.string().required("Staff is required"),
      service: Yup.string().required("Service is required"),
    }),
    onSubmit: (values) => {
      const appointmentRecord: AppointmentModel = {
        id,
        date: values.date,
        time: values.time,
        customer: values.customer,
        service: values.service,
        staff: values.staff,
      };

      dispatch(addAppointment(appointmentRecord));
      navigate("./..");
    },
  });

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
            <div className="page-header d-flex align-items-center justify-content-between mr-bottom-30">
              <div className="left-part">
                <h2 className="text-dark">Add Appointment</h2>
              </div>
            </div>

            <div className="col-lg-8 bg-light">
              <div className="card border-0 px-4 py-2">
                <div className="card-body p-0">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                      <div className="row align-items-center">
                        <div className="col-lg-3">
                          <label
                            htmlFor="validationCustom01"
                            className="form-label"
                          >
                            Date
                          </label>
                        </div>
                        <div className="col-lg-9">
                          <div className="input-group">
                            <span className="badge d-flex align-items-center text-dark rounded-0 rounded-start py-2 px-3 border border-light-200 fs-16">
                              <i className="bi bi-building"></i>
                            </span>
                            <Flatpickr
                              id="date"
                              className={`form-control ${
                                formik.errors.date && formik.touched.date
                                  ? "is-invalid"
                                  : ""
                              }`}
                              value={formik.values.date}
                              onChange={(date) =>
                                formik.setFieldValue("date", date)
                              }
                              options={{
                                altInput: true,
                                altFormat: "F j",
                                dateFormat: "Y-m-d",
                              }}
                            />
                            {formik.errors.date && formik.touched.date && (
                              <div className="invalid-feedback icon-input">
                                {formik.errors.date}
                              </div>
                            )}
                            <div className="valid-feedback">Looks good!</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="row align-items-center">
                        <div className="col-lg-3">
                          <label
                            htmlFor="validationCustom02"
                            className="form-label"
                          >
                            Time
                          </label>
                        </div>
                        <div className="col-lg-9">
                          <div className="input-group has-validation ">
                            <span className="badge d-flex align-items-center text-dark rounded-0 rounded-start py-2 px-3 border border-light-200 fs-16">
                              <i className="bi bi-building"></i>
                            </span>
                            <Flatpickr
                              id="time"
                              className={`form-control ${
                                formik.errors.time && formik.touched.time
                                  ? "is-invalid"
                                  : ""
                              }`}
                              value={formik.values.time}
                              onChange={([time]) =>
                                formik.setFieldValue("time", time)
                              }
                              options={{
                                enableTime: true,
                                noCalendar: true,
                                dateFormat: "H:i",
                              }}
                            />
                            {formik.errors.time && formik.touched.time && (
                              <div className="invalid-feedback icon-input">
                                {formik.errors.time}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="row align-items-center">
                        <div className="col-lg-3">
                          <label
                            htmlFor="validationEmail"
                            className="form-label"
                          >
                            Service
                          </label>
                        </div>
                        <div className="col-lg-9">
                          <div className="input-group">
                            <span className="badge d-flex align-items-center text-dark rounded-0 rounded-start py-2 px-3 border border-light-200 fs-16">
                              <i className="bi bi-envelope"></i>
                            </span>
                            <select
                              id="service"
                              className={`form-control ${
                                formik.errors.service && formik.touched.service
                                  ? "is-invalid"
                                  : ""
                              }`}
                              value={formik.values.service}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            >
                              <option value="" disabled>
                                Select...
                              </option>
                              {services.map((service, index) => (
                                <option key={index} value={service}>
                                  {service}
                                </option>
                              ))}
                            </select>
                            {formik.errors.service &&
                              formik.touched.service && (
                                <div className="invalid-feedback icon-input">
                                  {formik.errors.service}
                                </div>
                              )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="row align-items-center">
                        <div className="col-lg-3">
                          <label
                            htmlFor="validationEmail"
                            className="form-label"
                          >
                            Staff
                          </label>
                        </div>
                        <div className="col-lg-9">
                          <div className="input-group">
                            <span className="badge d-flex align-items-center text-dark rounded-0 rounded-start py-2 px-3 border border-light-200 fs-16">
                              <i className="bi bi-telephone"></i>
                            </span>
                            <select
                              id="staff"
                              className={`form-control ${
                                formik.errors.staff && formik.touched.staff
                                  ? "is-invalid"
                                  : ""
                              }`}
                              value={formik.values.staff}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            >
                              <option value="" disabled>
                                Select...
                              </option>
                              {staff.map((s, index) => (
                                <option key={index} value={s}>
                                  {s}
                                </option>
                              ))}
                            </select>
                            {formik.errors.staff && formik.touched.staff && (
                              <div className="invalid-feedback icon-input">
                                {formik.errors.staff}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row align-items-center">
                        <div className="col-lg-3">
                          <label
                            htmlFor="validationCustomUsername"
                            className="form-label"
                          >
                            Customer
                          </label>
                        </div>
                        <div className="col-lg-9">
                          <div className="input-group">
                            <span className="badge d-flex align-items-center text-dark rounded-0 rounded-start py-2 px-3 border border-light-200 fs-16">
                              <i className="bi bi-globe"></i>
                            </span>

                            <input
                              type="text"
                              id="customer"
                              className={`form-control ${
                                formik.errors.customer &&
                                formik.touched.customer
                                  ? "is-invalid"
                                  : ""
                              }`}
                              value={formik.values.customer}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            {formik.errors.customer &&
                              formik.touched.customer && (
                                <div className="invalid-feedback icon-input">
                                  {formik.errors.customer}
                                </div>
                              )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-9 offset-lg-3">
                        <div className="button_group text-center">
                          <button type="submit" className="btn btn-primary">
                            Save
                          </button>
                          <button
                            type="reset"
                            className="btn btn-secondary text-white"
                          >
                            Reset
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddForm;
