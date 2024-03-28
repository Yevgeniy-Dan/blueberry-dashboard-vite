import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.jpg";

const Vertical = () => {
  return (
    //  <!-- Vertical Nav -->
    <div className="kleon-vertical-nav">
      {/* <!-- Logo  --> */}
      <div className="logo d-flex align-items-center justify-content-between">
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
        <button type="button" className="kleon-vertical-nav-toggle">
          <i className="bi bi-list"></i>
        </button>
      </div>

      <div className="kleon-navmenu">
        <h6 className="hidden-header text-gray text-uppercase ls-1 ms-4 mb-4">
          Main Menu
        </h6>
        <ul className="main-menu">
          <li className="menu-item menu-item-has-children">
            <NavLink to={"./../appoitments"}>
              {" "}
              <span className="nav-icon flex-shrink-0">
                <i className="bi bi-calendar-check fs-18"></i>
              </span>{" "}
              <span className="nav-text">My Appoitments</span>
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
  );
};

export default Vertical;
