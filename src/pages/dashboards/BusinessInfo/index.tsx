import { useState } from "react";
import Default from "../../../layouts/Default";
import Vertical from "../../../layouts/Vertical";
import Form from "./Form";

const BusinessInfo = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [isMobileCollapsed, setIsMobileCollapsed] = useState<boolean>(false);

  const [showBusinessHoursSetter, setShowBusinessHoursSetter] = useState(false);

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
            {!showBusinessHoursSetter && (
              <div className="page-header d-flex align-items-center justify-content-between mr-bottom-30">
                <div className="left-part">
                  <h2 className="text-dark">Business Info</h2>
                </div>
              </div>
            )}
            <Form
              showBusinessHoursSetter={showBusinessHoursSetter}
              onShowBusinessHoursSetter={setShowBusinessHoursSetter}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default BusinessInfo;
