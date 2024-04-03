import { useState } from "react";
import Default from "../../../layouts/Default";
import Vertical from "../../../layouts/Vertical";
import { useNavigate } from "react-router-dom";

const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

const AddStaffForm = () => {
  const navigate = useNavigate();

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [isMobileCollapsed, setIsMobileCollapsed] = useState<boolean>(false);

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
                  <form>
                    <div className="form-group">
                      <div className="row align-items-center">
                        <div className="col-lg-3">
                          <label
                            htmlFor="validationCustom01"
                            className="form-label"
                          >
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
                              id="validationCustom01"
                              value=""
                              placeholder="Name"
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
                          <label
                            htmlFor="validationEmail"
                            className="form-label"
                          >
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
                          <label
                            htmlFor="validationEmail"
                            className="form-label"
                          >
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
                                  id="inlineCheckbox1"
                                  value={day}
                                  onChange={() => {}}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={day}
                                >
                                  {day}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-9 offset-lg-3">
                        <div className="button_group">
                          <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={() => navigate("./..")}
                          >
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

export default AddStaffForm;
