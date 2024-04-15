const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

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

  const formComponent = (
    <form>
      <div className="form-group">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <label htmlFor="validationCustom01" className="form-label">
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
                className="form-control "
                id="validationCustom01"
                value=""
                placeholder="Business Name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
          </div>
        </div>
      </div>

      <div className="form-group">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <label htmlFor="validationCustom02" className="form-label">
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
                className="form-control "
                id="validationCustom02"
                value=""
                placeholder="your-business-name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
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
                className="form-control form-select custom-select"
                id="validationCustom04"
                required
              >
                <option selected disabled value="">
                  Select...
                </option>
                {options.map((state, index) => (
                  <option key={index}>{state.label}</option>
                ))}
              </select>
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
                <option>Arizona</option>
                <option>Arizona</option>
              </select>
            </div>
          </div>
        </div>
      </div>

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
