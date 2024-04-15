import { useState } from "react";
import Default from "../../../layouts/Default";
import Vertical from "../../../layouts/Vertical";
import InvoicesStatistic from "./InvoicesStatistic";
import TotalBalance from "./TotalBalance";

const Analytics = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [isMobileCollapsed, setIsMobileCollapsed] = useState<boolean>(false);

  const [showDropdown, setShowDropdown] = useState<boolean>(false);

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
              <div className="left-part">
                <h2 className="text-dark">Analytics</h2>
              </div>
              <div className="right-part">
                <div className="btn-group">
                  <button
                    className="btn btn-outline-primary dropdown-toggle m-1 py-2 px-4"
                    type="button"
                    onClick={() => setShowDropdown(!showDropdown)}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sort
                  </button>
                  <ul
                    className={`dropdown-menu ${
                      showDropdown && "show dropdown-btn-show"
                    }`}
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Today
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Yesterday
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Weekly
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Monthly
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Custom
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xxl-6 col-lg-12">
                <div className="row">
                  <div className="col col-12">
                    <TotalBalance />
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-lg-12">
                <InvoicesStatistic />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
