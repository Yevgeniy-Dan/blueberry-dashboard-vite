import { useNavigate } from "react-router-dom";
import { useId } from "react";

import Flatpickr from "react-flatpickr";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IAppointment } from "../../../interfaces/appointment.interface";
import { useAppointmentMutation } from "../../../hooks/useAppointments";

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
  const { mutate } = useAppointmentMutation();

  const navigate = useNavigate();
  const id = useId();

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      customerName: "",
      staff: "",
      service: "",
    },
    validationSchema: Yup.object().shape({
      date: Yup.date().required("Date is required"),
      time: Yup.string().required("Time is required"),
      customerName: Yup.string().required("Name is required"),
      staff: Yup.string().required("Staff is required"),
      service: Yup.string().required("Service is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      const appointmentRecord: IAppointment = {
        id,
        date: values.date,
        time: values.time,
        customerName: values.customerName,
        service: values.service,
        staff: values.staff,
        status: "Pending",
      };

      mutate(
        { method: "post", appointment: appointmentRecord },
        {
          onSuccess() {
            navigate("./..");
          },
        }
      );
    },
  });

  return (
    <div>
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
                    <label htmlFor="validationCustom01" className="form-label">
                      Date
                    </label>
                  </div>
                  <div className="col-lg-9">
                    <div className="input-group">
                      <span className="badge d-flex align-items-center text-dark rounded-0 rounded-start py-2 px-3 border border-light-200 fs-16">
                        <i className="bi bi-calendar"></i>
                      </span>
                      <Flatpickr
                        id="date"
                        className={`form-control form-select bg-white ${
                          formik.errors.date && formik.touched.date
                            ? "is-invalid"
                            : ""
                        }`}
                        value={formik.values.date}
                        onChange={([date]) =>
                          formik.setFieldValue("date", date)
                        }
                        options={{
                          altInput: true,
                          altFormat: "F j",
                          dateFormat: "Y-m-d",
                          disableMobile: true,
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
                    <label htmlFor="validationCustom02" className="form-label">
                      Time
                    </label>
                  </div>
                  <div className="col-lg-9">
                    <div className="input-group has-validation ">
                      <span className="badge d-flex align-items-center text-dark rounded-0 rounded-start py-2 px-3 border border-light-200 fs-16">
                        <i className="bi bi-clock"></i>
                      </span>
                      <Flatpickr
                        id="time"
                        className={`form-control form-select  bg-white ${
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
                          dateFormat: "h:i K",
                          disableMobile: true,
                          time_24hr: false,
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
                    <label htmlFor="validationEmail" className="form-label">
                      Service
                    </label>
                  </div>
                  <div className="col-lg-9">
                    <div className="input-group">
                      <span className="badge d-flex align-items-center text-dark rounded-0 rounded-start py-2 px-3 border border-light-200 fs-16">
                        <i className="bi bi-tools"></i>
                      </span>
                      <select
                        id="service"
                        className={`form-control form-select ${
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
                      {formik.errors.service && formik.touched.service && (
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
                    <label htmlFor="validationEmail" className="form-label">
                      Staff
                    </label>
                  </div>
                  <div className="col-lg-9">
                    <div className="input-group">
                      <span className="badge d-flex align-items-center text-dark rounded-0 rounded-start py-2 px-3 border border-light-200 fs-16">
                        <i className="bi bi-person"></i>
                      </span>
                      <select
                        id="staff"
                        className={`form-control  form-select ${
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
                      Name
                    </label>
                  </div>
                  <div className="col-lg-9">
                    <div className="input-group">
                      <span className="badge d-flex align-items-center text-dark rounded-0 rounded-start py-2 px-3 border border-light-200 fs-16">
                        <i className="bi bi-person-check"></i>
                      </span>

                      <input
                        type="text"
                        id="customerName"
                        className={`form-control ${
                          formik.errors.customerName &&
                          formik.touched.customerName
                            ? "is-invalid"
                            : ""
                        }`}
                        value={formik.values.customerName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.errors.customerName &&
                        formik.touched.customerName && (
                          <div className="invalid-feedback icon-input">
                            {formik.errors.customerName}
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
  );
};

export default AddForm;
