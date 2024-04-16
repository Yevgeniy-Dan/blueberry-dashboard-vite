// import calendarIcon from "../../../assets/images/calendar-icon.png";
// import avatar1 from "../../../assets/images/1.jpg";
// import avatar2 from "../../../assets/images/2.jpg";
// import avatar3 from "../../../assets/images/3.jpg";
import Calendar from "./Calendar";
import Default from "../../../layouts/Default";
import Vertical from "../../../layouts/Vertical";
import { useEffect, useState } from "react";
import List from "./List";
import { DateClickArg } from "@fullcalendar/interaction/index.js";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { toggleActivationSearchBar } from "../../../redux/appNavigation/slice";
import AppointmentCards from "./Cards";
import AppModal from "../../../components/Modal";

const Appointments = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [isMobileCollapsed, setIsMobileCollapsed] = useState<boolean>(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const { searchText } = useAppSelector((state) => state.navbar);

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const toggle = () => setModalIsOpen(!modalIsOpen);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(toggleActivationSearchBar(true));
    return () => {
      dispatch(toggleActivationSearchBar(false));
    };
  }, [dispatch]);

  const handleCalendarDateClick = (info: DateClickArg) => {
    setSelectedDate(info.date);
    setShowCalendar(false);
  };

  const toggleView = () => {
    setShowCalendar(!showCalendar);
  };

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
            <div className="row">
              <div className="col-xxl-6 col-12">
                <div className="page-header d-flex align-items-center justify-content-between mr-bottom-30  pt-6">
                  <div className="left-part">
                    <h2 className="text-dark">My Appointments</h2>
                  </div>

                  <div className="d-block d-xxl-none">
                    <button
                      type="submit"
                      className={`btn btn-primary ${showCalendar && "d-none"}`}
                      onClick={toggleView}
                    >
                      Calendar
                    </button>
                  </div>

                  {showCalendar && (
                    <div>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        color="secondary"
                        onClick={toggleView}
                      >
                        X
                      </button>
                    </div>
                  )}
                </div>

                <div
                  className="d-
                  block  d-xxl-none"
                >
                  {showCalendar ? (
                    <Calendar
                      selectedDate={selectedDate}
                      onCalendarDateClick={handleCalendarDateClick}
                    />
                  ) : (
                    <>
                      {searchText ? (
                        <AppointmentCards customer={searchText} />
                      ) : (
                        <List
                          selectedDate={selectedDate}
                          onCardViewList={toggle}
                        />
                      )}
                    </>
                  )}
                </div>

                <div className="d-none d-xxl-block">
                  <>
                    {searchText ? (
                      <AppointmentCards customer={searchText} />
                    ) : (
                      <List
                        selectedDate={selectedDate}
                        onCardViewList={toggle}
                      />
                    )}
                  </>
                </div>
              </div>

              <div className="col-xxl-6 d-none d-xxl-block">
                <div className="card border-0">
                  <div className="card-body">
                    {/* <div id="calendar" className="kleon-fullcalendar"> */}
                    <Calendar
                      selectedDate={selectedDate}
                      onCalendarDateClick={handleCalendarDateClick}
                    />
                    {/* </div> */}
                  </div>
                </div>
              </div>

              <AppModal isOpen={modalIsOpen} toggle={toggle} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Appointments;
