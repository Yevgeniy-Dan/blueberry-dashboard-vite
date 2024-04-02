import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import logoIconMin from "../assets/images/logo-icon-min.png";

import {
  ANALYTICS,
  APPOINTMENTS,
  BOOKING_PAGE,
  BUSINESS_INFO,
  ENABLE_PAYMENTS,
  ROLES,
  SERVICES,
  STAFF,
} from "../routes/constants";

const Vertical: React.FC<{
  onToggleCollapse: () => void;
  isCollapsed: boolean;
}> = ({ onToggleCollapse, isCollapsed }) => {
  const location = useLocation();

  return (
    //  <!-- Vertical Nav -->
    <div className="kleon-vertical-nav p-0">
      {/* <!-- Logo  --> */}
      <div className="logo d-flex align-items-center justify-content-between pt-4">
        <NavLink
          to={"./"}
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

      <div className=" bg-primary pt-4 h-100">
        <div className="kleon-navmenu p-4">
          <ul className="main-menu">
            <li
              className={`menu-item ${
                location.pathname === APPOINTMENTS && "active"
              }`}
            >
              <NavLink to={APPOINTMENTS}>
                {" "}
                <span className="nav-icon flex-shrink-0">
                  <i className="bi bi-calendar-check fs-18"></i>
                </span>{" "}
                {!isCollapsed && (
                  <span className="nav-text">My Appointments</span>
                )}
              </NavLink>
            </li>
            <li
              className={`menu-item ${
                location.pathname === BUSINESS_INFO && "active"
              }`}
            >
              <NavLink to={BUSINESS_INFO}>
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
              <NavLink to={STAFF}>
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
              <NavLink to={SERVICES}>
                {" "}
                <span className="nav-icon flex-shrink-0">
                  <i className="bi bi-tools fs-18"></i>
                </span>{" "}
                {!isCollapsed && <span className="nav-text">Services</span>}
              </NavLink>
            </li>
            <li
              className={`menu-item ${
                location.pathname === BOOKING_PAGE && "active"
              }`}
            >
              <NavLink to={BOOKING_PAGE}>
                {" "}
                <span className="nav-icon flex-shrink-0">
                  <i className="bi bi-calendar2 fs-18"></i>
                </span>{" "}
                {!isCollapsed && <span className="nav-text">Booking Page</span>}
              </NavLink>
            </li>
            <li
              className={`menu-item ${
                location.pathname === ANALYTICS && "active"
              }`}
            >
              <NavLink to={ANALYTICS}>
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
              <NavLink to={ROLES}>
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
              <NavLink to={ENABLE_PAYMENTS}>
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
