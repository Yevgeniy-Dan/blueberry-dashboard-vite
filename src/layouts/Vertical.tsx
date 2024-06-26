import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import logoIconMin from "../assets/images/logo-icon-min.png";

import {
  ALL_APPOINTMENTS,
  ANALYTICS,
  APPOINTMENTS,
  BUSINESS_INFO,
  CANCELED_APPOINTMENTS,
  CUSTOMERS,
  ENABLE_PAYMENTS,
  ROLES,
  SERVICES,
  STAFF,
} from "../routes/constants";
import { useState } from "react";

const Vertical: React.FC<{
  onToggleCollapse: () => void;
  isCollapsed: boolean;
}> = ({ onToggleCollapse, isCollapsed }) => {
  const location = useLocation();

  const [apptsToggle, setApptsToggle] = useState<boolean>(false);

  const handleAppointmentsMenuToggleCollapse = () => {
    setApptsToggle(!apptsToggle);
  };

  return (
    //  <!-- Vertical Nav -->
    <div className="bg-white kleon-vertical-nav p-0">
      {/* <!-- Logo  --> */}
      <div className="logo d-flex align-items-center justify-content-between pt-4">
        <NavLink
          to={APPOINTMENTS}
          className="d-flex align-items-center gap-3 flex-shrink-0"
        >
          <img src={`${isCollapsed ? logoIconMin : logo}`} alt="logo" />
          {/* <div className="position-relative flex-shrink-0">
            <img src={logoText} alt="" className="logo-text" />
            <img src={logoTextWhite} alt="" className="logo-text-white" />
          </div> */}
        </NavLink>
        <button
          type="button"
          className="kleon-vertical-nav-toggle bg-light"
          onClick={() => onToggleCollapse()}
        >
          <i className="bi bi-list"></i>
        </button>
      </div>

      <div className="  pt-4 h-100">
        <div className="kleon-navmenu p-4">
          <ul className="main-menu">
            <button
              type="button"
              className="btn btn-primary btn-sm rounded-1 w-100 text-center"
            >
              Booking Page <i className="bi bi-clipboard ms-1"></i>
            </button>
            <li
              className={`menu-item menu-item-has-children  ${
                apptsToggle && "active"
              }`}
            >
              <a
                onClick={() => handleAppointmentsMenuToggleCollapse()}
                className="cursor-pointer"
              >
                {" "}
                <span className="nav-icon flex-shrink-0">
                  <i className="bi bi-calendar-check fs-18"></i>
                </span>{" "}
                {!isCollapsed && <span className="nav-text">Appointments</span>}
              </a>
              <ul className="sub-menu">
                <li
                  className={`menu-item ${
                    location.pathname === APPOINTMENTS && "active"
                  } `}
                >
                  <NavLink to={APPOINTMENTS}>My Appointments</NavLink>
                </li>
                <li
                  className={`menu-item ${
                    location.pathname === ALL_APPOINTMENTS && "active"
                  } `}
                >
                  <NavLink to={ALL_APPOINTMENTS}>All Appointments</NavLink>
                </li>
                <li
                  className={`menu-item ${
                    location.pathname === CANCELED_APPOINTMENTS && "active"
                  } `}
                >
                  <NavLink to={CANCELED_APPOINTMENTS}>Canceled</NavLink>
                </li>
              </ul>
            </li>
            <li
              className={`menu-item ${
                location.pathname === BUSINESS_INFO && "active"
              }`}
            >
              <NavLink to={BUSINESS_INFO} onClick={() => setApptsToggle(false)}>
                {" "}
                <span className="nav-icon flex-shrink-0">
                  <i className="bi bi-bank fs-18"></i>
                </span>{" "}
                {!isCollapsed && (
                  <span className="nav-text">Business Info</span>
                )}
              </NavLink>
            </li>
            <li
              className={`menu-item ${location.pathname === STAFF && "active"}`}
            >
              <NavLink to={STAFF} onClick={() => setApptsToggle(false)}>
                {" "}
                <span className="nav-icon flex-shrink-0">
                  <i className="bi bi-people fs-18"></i>
                </span>{" "}
                {!isCollapsed && <span className="nav-text">Staff</span>}
              </NavLink>
            </li>
            <li
              className={`menu-item ${
                location.pathname === SERVICES && "active"
              }`}
            >
              <NavLink to={SERVICES} onClick={() => setApptsToggle(false)}>
                {" "}
                <span className="nav-icon flex-shrink-0">
                  <i className="bi bi-tools fs-18"></i>
                </span>{" "}
                {!isCollapsed && <span className="nav-text">Services</span>}
              </NavLink>
            </li>
            <li
              className={`menu-item ${
                location.pathname === CUSTOMERS && "active"
              }`}
            >
              <NavLink to={CUSTOMERS} onClick={() => setApptsToggle(false)}>
                {" "}
                <span className="nav-icon flex-shrink-0">
                  <i className="bi bi-tools fs-18"></i>
                </span>{" "}
                {!isCollapsed && <span className="nav-text">Customers</span>}
              </NavLink>
            </li>
            <li
              className={`menu-item ${
                location.pathname === ANALYTICS && "active"
              }`}
            >
              <NavLink to={ANALYTICS} onClick={() => setApptsToggle(false)}>
                {" "}
                <span className="nav-icon flex-shrink-0">
                  <i className="bi bi-graph-up fs-18"></i>
                </span>{" "}
                {!isCollapsed && <span className="nav-text">Analytics</span>}
              </NavLink>
            </li>
            <li
              className={`menu-item ${location.pathname === ROLES && "active"}`}
            >
              <NavLink to={ROLES} onClick={() => setApptsToggle(false)}>
                {" "}
                <span className="nav-icon flex-shrink-0">
                  <i className="bi bi-shield-check fs-18"></i>
                </span>{" "}
                {!isCollapsed && <span className="nav-text">Roles</span>}
              </NavLink>
            </li>
            <li
              className={`menu-item ${
                location.pathname === ENABLE_PAYMENTS && "active"
              }`}
            >
              <NavLink
                to={ENABLE_PAYMENTS}
                onClick={() => setApptsToggle(false)}
              >
                {" "}
                <span className="nav-icon flex-shrink-0">
                  <i className="bi bi-credit-card fs-18"></i>
                </span>{" "}
                {!isCollapsed && (
                  <span className="nav-text">Enable Payments</span>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Vertical;
