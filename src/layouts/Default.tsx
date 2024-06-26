// import sun from "../assets/images/sun.svg";
// import moon from "../assets/images/moon.svg";
// import bell from "../assets/images/bell.svg";
// import settings from "../assets/images/settings.svg";
import logo from "../assets/images/logo.png";
// import search from "../assets/images/search.svg";
import { NavLink } from "react-router-dom";
import {
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown,
} from "reactstrap";

import { useState } from "react";
import { useAppSelector } from "../hooks/redux";
import AppointmentSearchBar from "../components/AppointmentSearchBar";
import { NOTIFICATIONS } from "../routes/constants";

const Default: React.FC<{
  onToggleCollapse: () => void;
  isCollapsed: boolean;
}> = ({ onToggleCollapse }) => {
  const [showUserProfileDropdown, setShowUserProfileDropdown] =
    useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [showUserProfileMobileDropdown, setShowUserProfileMobileDropdown] =
    useState<boolean>(false);

  const { isActivateAppointmentSearchBar } = useAppSelector(
    (state) => state.navbar
  );

  return (
    // <!-- Default Nav -->
    <header className="header kleon-default-nav">
      <div className="d-none d-xl-block">
        <div className="header-inner d-flex align-items-center justify-content-around justify-content-xl-between flex-wrap flex-xl-nowrap gap-3 gap-xl-5">
          <div className="header-left-part d-flex align-items-center w-50">
            <div className="header-search w-100">
              {isActivateAppointmentSearchBar && <AppointmentSearchBar />}
            </div>
          </div>

          <div className="header-right-part d-flex align-items-center flex-shrink-0">
            <ul className="nav-elements d-flex align-items-center list-unstyled m-0 p-0">
              <li className="nav-item nav-notification dropdown">
                <UncontrolledButtonDropdown>
                  <DropdownToggle
                    tag="a"
                    className="nav-toggler cursor-pointer"
                  >
                    <i className="bi bi-bell-fill text-primary"></i>
                    <div className="badge rounded-circle bg-secondary text-primary">
                      12
                    </div>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-widget dropdown-menu  p-0">
                    <div className="dropdown-wrapper pd-50">
                      <div className="dropdown-wrapper--title">
                        <h4 className="d-flex align-items-center justify-content-between">
                          Notifications <a href="#">View All</a>
                        </h4>
                      </div>
                      <ul className="notification-board list-unstyled">
                        <li className="author-online has-new-message d-flex gap-3">
                          <div className="media bg-primary text-white">
                            <i className="bi bi-lightning"></i>
                          </div>
                          <div className="user-message">
                            <h6 className="message">
                              <a href="#">Jackie Kun</a> mentioned you at{" "}
                              <a href="#">Blueberry Projects</a>
                            </h6>
                            <p className="message-footer d-flex align-items-center justify-content-between">
                              {" "}
                              <span className="fs-14 text-gray fw-normal">
                                2m ago
                              </span>{" "}
                              <span>Mark as read</span>
                            </p>
                          </div>
                        </li>
                        <li className="author-online has-new-message d-flex gap-3">
                          <div className="media bg-secondary text-white">
                            <i className="bi bi-lightning"></i>
                          </div>
                          <div className="user-message">
                            <h6 className="message">
                              <a href="#">Olivia Johanna</a> has created new
                              task at <a href="#">Blueberry Projects</a>
                            </h6>
                            <p className="message-footer d-flex align-items-center justify-content-between">
                              {" "}
                              <span className="fs-14 text-gray fw-normal">
                                2m ago
                              </span>{" "}
                              <span>Mark as read</span>
                            </p>
                          </div>
                        </li>
                        <li className="author-online has-new-message d-flex gap-3">
                          <div className="media media-outline-red text-red">
                            <i className="bi bi-clock-fill"></i>
                          </div>
                          <div className="user-message">
                            <h6 className="message">
                              [REMINDER] Due date of{" "}
                              <a href="#">Highspeed Studios Projects</a> te task
                              will be coming
                            </h6>
                            <p className="message-footer d-flex align-items-center justify-content-between">
                              {" "}
                              <span className="fs-14 text-gray fw-normal">
                                2m ago
                              </span>{" "}
                              <span>Mark as read</span>
                            </p>
                          </div>
                        </li>
                      </ul>
                      <h6 className="all-notifications">
                        {" "}
                        <NavLink
                          to={NOTIFICATIONS}
                          className="btn bg-muted text-primary w-100 fw-bold mt-3 ff-heading px-0"
                        >
                          View All Notifications
                        </NavLink>{" "}
                      </h6>
                    </div>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
              </li>

              <li className="nav-item nav-author">
                <a
                  href="#"
                  className={`nav-toggler ${showUserProfileDropdown && "show"}`}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={() =>
                    setShowUserProfileDropdown(!showUserProfileDropdown)
                  }
                >
                  <div className="nav-toggler-content">
                    <h6 className="mb-0">John S.</h6>
                  </div>
                </a>
                <div
                  className={`dropdown-widget dropdown-menu p-0 admin-card ${
                    showUserProfileDropdown &&
                    "show position-absolute top-95 header-dropdown  py-3 w-56 max-h-200  overflow-y-auto flex justify-center flex-wrap"
                  }`}
                >
                  <div className="dropdown-wrapper">
                    <div className="card mb-0">
                      <div className="card-header p-3 text-center">
                        <div className="mt-2">
                          <h6 className="mb-0 lh-18">John S.</h6>
                        </div>
                      </div>
                      <div className="card-body p-3">
                        <ul className="list-unstyled p-0 m-0">
                          <li>
                            <a
                              href="profile.html"
                              className="fs-14 fw-normal text-dark d-block p-1"
                            >
                              <i className="bi bi-person me-2"></i> Profile
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="fs-14 fw-normal text-dark d-block p-1"
                            >
                              <i className="bi bi-book me-2"></i> Terms
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="fs-14 fw-normal text-dark d-block p-1"
                            >
                              <i className="bi bi-lock me-2"></i> Privacy
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-footer p-3">
                        <NavLink
                          to={"../account/logout"}
                          className="btn btn-outline-gray bg-transparent w-100 py-1 rounded-1 text-dark fs-14 fw-medium"
                        >
                          <i className="bi bi-box-arrow-right"></i> Logout
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="small-header d-flex align-items-center justify-content-between d-xl-none">
        <div className="logo">
          <NavLink
            to={"/"}
            className="d-flex align-items-center gap-3 flex-shrink-0"
          >
            {/* <img src={logoIcon} alt="logo" /> */}
            <img src={logo} alt="logo" />
            <div className="position-relative flex-shrink-0">
              <img
                src="assets/img/logo-text.svg"
                alt=""
                className="logo-text"
              />
              <img
                src="assets/img/logo-text-white.svg"
                alt=""
                className="logo-text-white"
              />
            </div>
          </NavLink>
        </div>
        <div>
          <button
            type="button"
            className="kleon-header-expand-toggle"
            onClick={() => {
              setShowMobileMenu(!showMobileMenu);
            }}
          >
            <span className="fs-24">
              <i className="bi bi-three-dots-vertical"></i>
            </span>
          </button>
          <button
            type="button"
            className="kleon-mobile-menu-opener"
            onClick={() => onToggleCollapse()}
          >
            <span className="close">
              <i className="bi bi-arrow-left"></i>
            </span>{" "}
            <span className="open">
              <i className="bi bi-list"></i>
            </span>
          </button>
        </div>
      </div>

      <div className={`header-mobile-option ${showMobileMenu && "expand"}`}>
        <div className="header-inner">
          <div className="d-flex align-items-center justify-content-end flex-shrink-0">
            <ul className="nav-elements d-flex align-items-center list-unstyled m-0 p-0">
              <li className="nav-item nav-search">
                <button
                  type="button"
                  className="btn p-0 m-0 border-0"
                  data-bs-toggle="modal"
                  data-bs-target="#searchModal"
                >
                  <i className="bi bi-search"></i>
                </button>
              </li>
              <li className="nav-item nav-notification dropdown">
                <UncontrolledButtonDropdown>
                  <DropdownToggle
                    tag="a"
                    className="nav-toggler cursor-pointer"
                  >
                    <i className="bi bi-bell-fill text-primary"></i>
                    <div className="badge rounded-circle bg-secondary text-primary">
                      12
                    </div>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-widget dropdown-menu  p-0">
                    <div className="dropdown-wrapper pd-50">
                      <div className="dropdown-wrapper--title">
                        <h4 className="d-flex align-items-center justify-content-between">
                          Notifications <a href="#">View All</a>
                        </h4>
                      </div>
                      <ul className="notification-board list-unstyled">
                        <li className="author-online has-new-message d-flex gap-3">
                          <div className="media bg-primary text-white">
                            <i className="bi bi-lightning"></i>
                          </div>
                          <div className="user-message">
                            <h6 className="message">
                              <a href="#">Jackie Kun</a> mentioned you at{" "}
                              <a href="#">Blueberry Projects</a>
                            </h6>
                            <p className="message-footer d-flex align-items-center justify-content-between">
                              {" "}
                              <span className="fs-14 text-gray fw-normal">
                                2m ago
                              </span>{" "}
                              <span>Mark as read</span>
                            </p>
                          </div>
                        </li>
                        <li className="author-online has-new-message d-flex gap-3">
                          <div className="media bg-secondary text-white">
                            <i className="bi bi-lightning"></i>
                          </div>
                          <div className="user-message">
                            <h6 className="message">
                              <a href="#">Olivia Johanna</a> has created new
                              task at <a href="#">Blueberry Projects</a>
                            </h6>
                            <p className="message-footer d-flex align-items-center justify-content-between">
                              {" "}
                              <span className="fs-14 text-gray fw-normal">
                                2m ago
                              </span>{" "}
                              <span>Mark as read</span>
                            </p>
                          </div>
                        </li>
                        <li className="author-online has-new-message d-flex gap-3">
                          <div className="media media-outline-red text-red">
                            <i className="bi bi-clock-fill"></i>
                          </div>
                          <div className="user-message">
                            <h6 className="message">
                              [REMINDER] Due date of{" "}
                              <a href="#">Highspeed Studios Projects</a> te task
                              will be coming
                            </h6>
                            <p className="message-footer d-flex align-items-center justify-content-between">
                              {" "}
                              <span className="fs-14 text-gray fw-normal">
                                2m ago
                              </span>{" "}
                              <span>Mark as read</span>
                            </p>
                          </div>
                        </li>
                      </ul>
                      <h6 className="all-notifications">
                        {" "}
                        <NavLink
                          to={NOTIFICATIONS}
                          className="btn bg-muted text-primary w-100 fw-bold mt-3 ff-heading px-0"
                        >
                          View All Notifications
                        </NavLink>{" "}
                      </h6>
                    </div>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
              </li>

              <li className="nav-item nav-settings">
                <a href="#" className="nav-toggler">
                  <i className="bi bi-gear-fill"></i>
                </a>
              </li>

              <li className="nav-item nav-author px-3">
                <a
                  href="#"
                  className={`nav-toggler ${
                    showUserProfileMobileDropdown && "show"
                  }`}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={() =>
                    setShowUserProfileMobileDropdown(
                      !showUserProfileMobileDropdown
                    )
                  }
                >
                  <div className="nav-toggler-content">
                    <h6 className="mb-0">John S.</h6>
                  </div>
                </a>
                <div
                  className={`dropdown-widget dropdown-menu p-0 admin-card ${
                    showUserProfileMobileDropdown &&
                    "show position-absolute top-95 header-dropdown  py-3 w-56 max-h-200  overflow-y-auto flex justify-center flex-wrap"
                  }`}
                >
                  <div className="dropdown-wrapper">
                    <div className="card mb-0">
                      <div className="card-header p-3 text-center">
                        <div className="mt-2">
                          <h6 className="mb-0 lh-18">John S.</h6>
                        </div>
                      </div>
                      <div className="card-body p-3">
                        <ul className="list-unstyled p-0 m-0">
                          <li>
                            <a
                              href="profile.html"
                              className="fs-14 fw-normal text-dark d-block p-1"
                            >
                              <i className="bi bi-person me-2"></i> Profile
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="fs-14 fw-normal text-dark d-block p-1"
                            >
                              <i className="bi bi-book me-2"></i> Terms
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="fs-14 fw-normal text-dark d-block p-1"
                            >
                              <i className="bi bi-lock me-2"></i> Privacy
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-footer p-3">
                        <NavLink
                          to={"../account/logout"}
                          className="btn btn-outline-gray bg-transparent w-100 py-1 rounded-1 text-dark fs-14 fw-medium"
                        >
                          <i className="bi bi-box-arrow-right"></i> Logout
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Default;
