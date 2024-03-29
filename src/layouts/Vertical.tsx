import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import {
  DASHBOARD_APPOINTMENTS,
  DASHBOARD_BUSINESS_INFO,
} from "../routes/constants";

const Vertical = () => {
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
          <img src={logo} alt="logo" />
          {/* <div className="position-relative flex-shrink-0">
            <img src={logoText} alt="" className="logo-text" />
            <img src={logoTextWhite} alt="" className="logo-text-white" />
          </div> */}
        </NavLink>
        <button type="button" className="kleon-vertical-nav-toggle bg-light">
          <i className="bi bi-list"></i>
        </button>
      </div>

      <div className=" bg-primary pt-4 h-100">
        <div className="kleon-navmenu p-4">
          <ul className="main-menu">
            <li
              className={`menu-item ${
                location.pathname === DASHBOARD_APPOINTMENTS && "active"
              }`}
            >
              <NavLink to={"./../appointments"}>
                {" "}
                <span className="nav-icon flex-shrink-0">
                  <i className="bi bi-calendar-check fs-18"></i>
                </span>{" "}
                <span className="nav-text">My Appointments</span>
              </NavLink>
            </li>
            <li
              className={`menu-item ${
                location.pathname === DASHBOARD_BUSINESS_INFO && "active"
              }`}
            >
              <NavLink to={"./../business-info"}>
                {" "}
                <span className="nav-icon flex-shrink-0">
                  <i className="bi bi-bank fs-18"></i>
                </span>{" "}
                <span className="nav-text">Business Info</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Vertical;
