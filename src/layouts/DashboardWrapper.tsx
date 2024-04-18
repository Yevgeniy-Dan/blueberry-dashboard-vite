import React, { Suspense } from "react";

import Default from "./Default";
import Vertical from "./Vertical";
import Preloader from "../pages/Preloader";

const DashboardWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isCollapsed, setIsCollapsed] = React.useState<boolean>(false);
  const [isMobileCollapsed, setIsMobileCollapsed] =
    React.useState<boolean>(false);

  return (
    <Suspense fallback={<Preloader />}>
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
            <div className="inner-contents">{children}</div>
          </div>
        </main>
      </div>
    </Suspense>
  );
};

export default DashboardWrapper;
