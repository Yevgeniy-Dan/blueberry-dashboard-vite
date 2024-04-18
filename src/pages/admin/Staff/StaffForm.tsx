import { useId } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import ReactSelect from "react-select";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IStaff } from "../../../interfaces/staff.interface";
import { useStaffMutation, useStaffQuery } from "../../../hooks/useStaff";

const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

const StaffForm = () => {
  const { userId } = useParams();
  const { data: staffList } = useStaffQuery();

  const { mutate } = useStaffMutation();

  const randomId = useId();
  const id = userId || randomId;

  const staff = staffList?.find((staff) => staff.id === id);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: staff ? staff.name : "",
      email: staff ? staff.email : "",
      phoneNumber: staff ? staff.phoneNumber : "",
      selectedDays: staff ? staff.daysOff : [],
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Enter a valid email address")
        .required("Email is required"),
      phoneNumber: Yup.string().required("Phone number is required"),
    }),
    onSubmit: (values) => {
      const staffData: IStaff = {
        id,
        name: values.name,
        email: values.email,
        phoneNumber: values.phoneNumber,
        daysOff: values.selectedDays,
      };

      if (userId) {
        mutate(
          {
            method: "put",
            staff: staffData,
          },
          {
            onSuccess() {
              navigate("./../..");
            },
          }
        );
      } else {
        mutate(
          {
            method: "post",
            staff: staffData,
          },
          {
            onSuccess() {
              navigate("./..");
            },
          }
        );
      }
    },
  });

  const handleDayCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      formik.setFieldValue("selectedDays", [
        ...formik.values.selectedDays,
        value,
      ]);
    } else {
      formik.setFieldValue(
        "selectedDays",
        formik.values.selectedDays.filter((day: string) => day !== value)
      );
    }
  };

  return (
    <div>
      <div className="page-header d-flex align-items-center justify-content-between mr-bottom-30">
        <div className="left-part ">
          <h2 className="text-dark">Add Staff</h2>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="card border-0 px-5 py-2">
          <div className="card-body p-0">
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <div className="row align-items-center">
                  <div className="col-lg-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                  </div>
                  <div className="col-lg-9">
                    <div className="input-group">
                      <span className="badge d-flex align-items-center text-dark rounded-0 rounded-start py-2 px-3 border border-light-200 fs-16">
                        <i className="bi bi-building"></i>
                      </span>
                      <input
                        type="text"
                        className={`form-control ${
                          formik.touched.name && formik.errors.name
                            ? "is-invalid"
                            : ""
                        }`}
                        id="name"
                        name="name"
                        value={formik.values.name}
                        placeholder="Name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.name && formik.errors.name && (
                        <div className="invalid-feedback icon-input">
                          {formik.errors.name}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="row align-items-center">
                  <div className="col-lg-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                  </div>
                  <div className="col-lg-9">
                    <div className="input-group">
                      <span className="badge d-flex align-items-center text-dark rounded-0 rounded-start py-2 px-3 border border-light-200 fs-16">
                        <i className="bi bi-envelope"></i>
                      </span>
                      <input
                        type="text"
                        className={`form-control ${
                          formik.touched.email && formik.errors.email
                            ? "is-invalid"
                            : ""
                        }`}
                        id="email"
                        name="email"
                        value={formik.values.email}
                        placeholder="Email Address"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <div className="invalid-feedback icon-input">
                          {formik.errors.email}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="row align-items-center">
                  <div className="col-lg-3">
                    <label htmlFor="phoneNumber" className="form-label">
                      Phone Number
                    </label>
                  </div>
                  <div className="col-lg-9">
                    <div className="input-group">
                      <span className="badge d-flex align-items-center text-dark rounded-0 rounded-start py-2 px-3 border border-light-200 fs-16">
                        <i className="bi bi-telephone"></i>
                      </span>
                      <input
                        type="text"
                        className={`form-control ${
                          formik.touched.phoneNumber &&
                          formik.errors.phoneNumber
                            ? "is-invalid"
                            : ""
                        }`}
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Example: (123) 456-7890"
                      />
                      {formik.touched.phoneNumber &&
                        formik.errors.phoneNumber && (
                          <div className="invalid-feedback icon-input">
                            {formik.errors.phoneNumber}
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="row ">
                  <div className="col-lg-3">
                    <label className="form-label">Select days off</label>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-group">
                      {days.map((day, index) => (
                        <div
                          className="form-check form-check-inline"
                          key={index}
                        >
                          <input
                            className={`form-check-input`}
                            type="checkbox"
                            id={`checkbox_${day}`}
                            value={day}
                            checked={formik.values.selectedDays.includes(day)}
                            onChange={handleDayCheckboxChange}
                          />
                          <label className="form-check-label" htmlFor={day}>
                            {day}
                          </label>
                        </div>
                      ))}
                      {/* <span className="badge d-flex align-items-center text-dark rounded-0 rounded-start py-2 px-3 border border-light-200 fs-16">
                              <i className="bi bi-telephone"></i>
                            </span>
                            <ReactSelect
                              name="daysOff"
                              closeMenuOnSelect={false}
                              isMulti
                              options={days}
                              onChange={(days) => {
                                const values = days.map((day) => day.value);
                                setSelectedDays(values);
                              }}
                              className="form-control"
                            /> */}
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

export default StaffForm;
