export interface BusinessHour {
  day: string;
  start: Date | "";
  end: Date | "";
  checked: boolean;
}

import { useMemo, useState } from "react";
import countryList from "react-select-country-list";
import FileUploader from "../../../components/FileUploader";
import BusinessHoursSetter from "./BusinessHoursSetter";
import { useFormik } from "formik";
import * as Yup from "yup";
import { states } from "./Data";

const Form: React.FC<{
  showBusinessHoursSetter: boolean;
  onShowBusinessHoursSetter: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ showBusinessHoursSetter, onShowBusinessHoursSetter }) => {
  const options = useMemo(() => countryList().getData(), []);

  const handleBusinessHoursClick = () => {
    onShowBusinessHoursSetter(true);
  };

  const [businessHours, setBusinessHours] = useState<BusinessHour[]>([
    { day: "Monday", start: "", end: "", checked: false },
    { day: "Tuesday", start: "", end: "", checked: false },
    { day: "Wednesday", start: "", end: "", checked: false },
    { day: "Thursday", start: "", end: "", checked: false },
    { day: "Friday", start: "", end: "", checked: false },
    { day: "Saturday", start: "", end: "", checked: false },
    { day: "Sunday", start: "", end: "", checked: false },
  ]);

  const handleTimeChange = (
    index: number,
    field: "start" | "end",
    value: Date
  ) => {
    const updatedHours = [...businessHours];
    updatedHours[index][field] = value;
    setBusinessHours(updatedHours);
  };

  const handleCheckboxChange = (index: number) => {
    const updatedHours = [...businessHours];
    updatedHours[index].checked = !updatedHours[index].checked;
    setBusinessHours(updatedHours);
  };

  const formik = useFormik({
    initialValues: {
      businessName: "",
      bookingPage: "",
      email: "",
      phoneNumber: "",
      country: "United States",
      streetAddress: "",
      address2: "",
      city: "",
      state: "",
      zipCode: "",
    },
    validationSchema: Yup.object().shape({
      businessName: Yup.string().required("Business Name is required"),
      bookingPage: Yup.string().required("Booking Page is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phoneNumber: Yup.string().required("Phone Number is required"),
      country: Yup.string().required("Country is required"),
      streetAddress: Yup.string().required("Street Address is required"),
      city: Yup.string().required("City is required"),
      state: Yup.string(),
      zipCode: Yup.string().required("Zip Code is required"),
    }),
    onSubmit: (values) => {
      // Handle form submission
      console.log("Form values:", values);
    },
  });

  const formComponent = (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <label htmlFor="businessName" className="form-label">
              Business Name
            </label>
          </div>
          <div className="col-lg-9">
            <div className="input-group">
              <span className="badge d-flex align-items-center text-dark rounded-0 rounded-start py-2 px-3 border border-light-200 fs-16">
                <i className="bi bi-building"></i>
              </span>
              <input
                type="text"
                // className={`form-control ${
                //   formik.touched.businessName && formik.errors.businessName
                //     ? "is-invalid"
                //     : ""
                // }`}
                className={`form-control`}
                id="businessName"
                name="businessName"
                value={formik.values.businessName}
                placeholder="Business Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              {/* {formik.touched.businessName && formik.errors.businessName && (
                <div className="invalid-feedback icon-input">
                  {formik.errors.businessName}
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>

      <div className="form-group">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <label htmlFor="bookingPage" className="form-label">
              Booking Page
            </label>
          </div>
          <div className="col-lg-9">
            <div className="input-group has-validation ">
              <span
                className="badge d-flex align-items-center text-white rounded-0 rounded-start py-2 px-3 fs-16 bg-primary business-url-input"
                id="inputGroupPrepend"
              >
                appointment.blueberrynow.com/
              </span>

              <input
                type="text"
                // className={`form-control ${
                //   formik.touched.bookingPage && formik.errors.bookingPage
                //     ? "is-invalid"
                //     : ""
                // }`}
                className={`form-control`}
                id="bookingPage"
                name="bookingPage"
                value={formik.values.bookingPage}
                placeholder="your-business-name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              {/* {formik.touched.bookingPage && formik.errors.bookingPage && (
                <div className="invalid-feedback icon-input">
                  {formik.errors.bookingPage}
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>

      <div className="form-group">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <label htmlFor="validationEmail" className="form-label">
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
                className="form-control "
                id="validationEmail"
                value=""
                required
                placeholder="Email Address"
              />
              <div className="invalid-feedback">Enter your Email</div>
            </div>
          </div>
        </div>
      </div>

      <div className="form-group">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <label htmlFor="validationEmail" className="form-label">
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
                className="form-control"
                id="validationEmail"
                value=""
                placeholder="Example: (123) 456-7890"
                required
              />
            </div>
          </div>
        </div>
      </div>

      <div className="form-group">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <label htmlFor="validationCustomUsername" className="form-label">
              Country
            </label>
          </div>
          <div className="col-lg-9">
            <div className="input-group">
              <span className="badge d-flex align-items-center text-dark rounded-0 rounded-start py-2 px-3 border border-light-200 fs-16">
                <i className="bi bi-globe"></i>
              </span>
              <select
                className={`form-control form-select custom-select ${
                  formik.touched.country && formik.errors.country
                    ? "is-invalid"
                    : ""
                }`}
                id="country"
                name="country"
                required
                defaultValue={"United States"}
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option selected disabled value="">
                  Select...
                </option>
                {options.map((state, index) => (
                  <option key={index}>{state.label}</option>
                ))}
              </select>
              {formik.touched.country && formik.errors.country && (
                <div className="invalid-feedback icon-input">
                  {formik.errors.country}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="form-group">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <label htmlFor="validationCustomUsername" className="form-label">
              Street Address
            </label>
          </div>
          <div className="col-lg-9">
            <div className="input-group">
              <span className="badge d-flex align-items-center text-dark rounded-0 rounded-start py-2 px-3 border border-light-200 fs-16">
                <i className="bi bi-house-door"></i>
              </span>
              <input
                type="text"
                className="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
                placeholder="Street Address"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="form-group">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <label htmlFor="validationCustomUsername" className="form-label">
              Address 2
            </label>
          </div>
          <div className="col-lg-9">
            <div className="input-group">
              <span className="badge d-flex align-items-center text-dark rounded-0 rounded-start py-2 px-3 border border-light-200 fs-16">
                <i className="bi bi-house-door-fill"></i>
              </span>
              <input
                type="text"
                className="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
                placeholder="Address 2"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="form-group">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <label htmlFor="validationCustom03" className="form-label">
              City
            </label>
          </div>
          <div className="col-lg-9">
            <div className="input-group">
              <span className="badge d-flex align-items-center text-dark rounded-0 rounded-start py-2 px-3 border border-light-200 fs-16">
                <i className="bi bi-geo-alt"></i>
              </span>
              <input
                type="text"
                className="form-control"
                id="validationCustom03"
                required
                placeholder="City"
              />
            </div>
          </div>
        </div>
      </div>

      {formik.values.country === "United States" && (
        <div className="form-group">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <label htmlFor="validationCustom04" className="form-label ">
                State
              </label>
            </div>
            <div className="col-lg-9">
              <div className="input-group">
                <span className="badge d-flex align-items-center text-dark rounded-0 rounded-start py-2 px-3 border border-light-200 fs-16">
                  <i className="bi bi-flag"></i>
                </span>
                <select
                  className="form-control form-select custom-select"
                  id="validationCustom04"
                  required
                >
                  <option selected disabled value="">
                    Select...
                  </option>
                  {states.map((state, index) => (
                    <option key={index}>{state}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="form-group">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <label htmlFor="validationCustom05" className="form-label">
              Zip Code
            </label>
          </div>
          <div className="col-lg-9">
            <div className="input-group">
              <span className="badge d-flex align-items-center text-dark rounded-0 rounded-start py-2 px-3 border border-light-200 fs-16">
                <i className="bi bi-geo-alt"></i>
              </span>
              <input
                type="text"
                className="form-control"
                id="validationCustom05"
                required
                placeholder="Zip Code"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="form-group">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <label htmlFor="validationCustom05" className="form-label">
              Business Hours
            </label>
          </div>
          <div className="col-lg-9">
            <div className="input-group">
              <span className="badge d-flex align-items-center text-dark rounded-0 rounded-start py-2 px-3 border border-light-200 fs-16">
                <i className="bi bi-clock"></i>
              </span>

              <button
                type="button"
                className="btn btn-primary m-0 flex-grow-1"
                onClick={() => handleBusinessHoursClick()}
              >
                Set Business Hours <i className="bi bi-arrow-right ms-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="form-group">
        <div className="row ">
          <div className="col-lg-3">
            <label className="form-label">Upload Logo</label>
          </div>
          <div className="col-lg-9">
            <div className="input-group">
              {/* <span className="badge d-flex align-items-center text-dark rounded-0 rounded-start py-2 px-3 border border-light-200 fs-16">
                      <i className="bi bi-cloud-upload"></i>
                    </span> */}
              {/* <input
                      type="file"
                      className="form-control "
                      name="fileUpload"
                    /> */}

              <FileUploader />
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
            <button type="reset" className="btn btn-secondary text-white">
              Reset
            </button>
          </div>
        </div>
      </div>
    </form>
  );

  return (
    <div className="d-flex justify-content-center">
      <div className="card border-0 px-4 py-2">
        <div className="card-body p-0">
          {showBusinessHoursSetter ? (
            <BusinessHoursSetter
              businessHours={businessHours}
              onCheckboxChange={handleCheckboxChange}
              onTimeChange={handleTimeChange}
              onShowBusinessHoursSetter={onShowBusinessHoursSetter}
            />
          ) : (
            formComponent
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
