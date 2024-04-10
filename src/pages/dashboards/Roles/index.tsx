import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Default from "../../../layouts/Default";
import Vertical from "../../../layouts/Vertical";
import RolesTable from "./RolesTable";

const Roles = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [isMobileCollapsed, setIsMobileCollapsed] = useState<boolean>(false);

  const navigate = useNavigate();

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
                <h2 className="text-dark">Roles</h2>
              </div>
            </div>
            <div className="card border-1 p-5 shadow-sm">
              <div className="card-header d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-secondary text-white"
                  onClick={() => {
                    navigate("./add");
                  }}
                >
                  Add
                </button>
              </div>
              <RolesTable />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Roles;
