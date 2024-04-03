import { useEffect, useId, useState } from "react";
import Default from "../../../layouts/Default";
import Vertical from "../../../layouts/Vertical";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  addStaff,
  selectStaffById,
  udpateStaff,
} from "../../../redux/staff/slice";
// import ReactSelect from "react-select";
import { StaffModel } from "../../../redux/staff/models";

const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

const StaffForm = () => {
  const { userId } = useParams();
  const staff = useAppSelector((state) => selectStaffById(state)(userId || ""));
  const id = useId();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [isMobileCollapsed, setIsMobileCollapsed] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const { name, email, phoneNumber } = formData;

  useEffect(() => {
    if (userId && staff) {
      setFormData({
        name: staff.name,
        email: staff.email,
        phoneNumber: staff.phoneNumber,
      });
      setSelectedDays(staff.daysOff);
    }
  }, [userId, staff]);

  const handleDayCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedDays([...selectedDays, value]);
    } else {
      setSelectedDays(selectedDays.filter((day) => day !== value));
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const staffData: StaffModel = {
      id,
      name,
      email,
      phoneNumber,
      daysOff: selectedDays,
    };

    if (userId) {
      dispatch(udpateStaff({ userId, staff: staffData }));
      navigate("./../.."); //TODO: move t othe saga later since this is side effect
    } else {
      dispatch(addStaff(staffData));
      navigate("./.."); //TODO: move t othe saga later since this is side effect
    }
  };

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
              <div className="left-part ">
                <h2 className="text-dark">Add Staff</h2>
              </div>
            </div>
            <div className="col-lg-8  bg-light">
              <div className="card border-0 p-5">
                <div className="card-body p-0 pt-4">
                  <form onSubmit={onSubmitHandler}>
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
                              className="form-control "
                              id="name"
                              name="name"
                              value={name}
                              placeholder="Name"
                              required
                              onChange={onChange}
                            />
                            <div className="valid-feedback">Looks good!</div>
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
                              className="form-control "
                              id="email"
                              name="email"
                              value={email}
                              onChange={onChange}
                              required
                              placeholder="Email Address"
                            />
                            <div className="invalid-feedback">
                              Enter your Email
                            </div>
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
                              className="form-control"
                              id="phoneNumber"
                              name="phoneNumber"
                              value={phoneNumber}
                              onChange={onChange}
                              placeholder="Example: (123) 456-7890"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="row ">
                        <div className="col-lg-3">
                          <label
                            htmlFor="validationCustomUsername"
                            className="form-label"
                          >
                            Select days off
                          </label>
                        </div>
                        <div className="col-lg-9">
                          <div className="input-group">
                            {days.map((day, index) => (
                              <div
                                className="form-check form-check-inline"
                                key={index}
                              >
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id={`checkbox_${day}`}
                                  value={day}
                                  checked={selectedDays.includes(day)}
                                  onChange={handleDayCheckboxChange}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={day}
                                >
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
                        <div className="button_group">
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
        </div>
      </main>
    </div>
  );
};

export default StaffForm;
