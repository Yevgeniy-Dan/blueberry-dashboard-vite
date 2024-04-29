import React, { Suspense } from "react";

import Default from "./Default";
import Vertical from "./Vertical";
import Preloader from "../pages/Preloader";
import { useAppDispatch } from "../hooks/redux";
import { onChangeCalendarSize } from "../redux/calendar/slice";

const AdminWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isCollapsed, setIsCollapsed] = React.useState<boolean>(false);
  const [isMobileCollapsed, setIsMobileCollapsed] =
    React.useState<boolean>(false);

  const dispatch = useAppDispatch();

  return (
    <Suspense fallback={<Preloader />}>
      <div
        className={`bg-white has-right-panel ${
          isCollapsed && "kleon-vertical-nav--collapse"
        } ${isMobileCollapsed && "kleon-vertical-nav--active"}`}
      >
        <Default
          isCollapsed={isMobileCollapsed}
          onToggleCollapse={() => {
            setIsMobileCollapsed(!isMobileCollapsed);
            dispatch(onChangeCalendarSize(false));
          }}
        />
        <Vertical
          isCollapsed={isCollapsed}
          onToggleCollapse={() => {
            setIsCollapsed(!isCollapsed);
            dispatch(onChangeCalendarSize(false));
          }}
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

export default AdminWrapper;
