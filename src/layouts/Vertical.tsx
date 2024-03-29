import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Vertical = () => {
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
          <h6 className="hidden-header text-gray text-uppercase ls-1 ms-4 mb-4">
            Main Menu
          </h6>
          <ul className="main-menu">
            <li className="menu-item menu-item-has-children">
              <NavLink to={"./../appointments"}>
                {" "}
                <span className="nav-icon flex-shrink-0">
                  <i className="bi bi-calendar-check fs-18"></i>
                </span>{" "}
                <span className="nav-text">My Appointments</span>
              </NavLink>
            </li>
            <li className="menu-item menu-item-has-children">
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
