const Notifications = () => {
  return (
    <div>
      <div className="page-header d-flex align-items-center justify-content-between mr-bottom-30">
        <div className="left-part">
          <h2 className="text-dark">Notifications</h2>
        </div>
      </div>

      <div>
        <ul className="notification-board page list-unstyled">
          <li className="author-online has-new-message d-flex gap-3">
            <div className="media bg-primary text-white">
              <i className="bi bi-lightning"></i>
            </div>
            <div className="user-message">
              <h6 className="message">
                <a href="#">Jackie Kun</a> mentioned you at{" "}
                <a href="#">Blueberry Projects</a>
              </h6>
              <p className="message-footer d-flex align-items-center justify-content-between">
                {" "}
                <span className="fs-14 text-gray fw-normal">2m ago</span>{" "}
                <span>Mark as read</span>
              </p>
            </div>
          </li>
          <li className="author-online has-new-message d-flex gap-3">
            <div className="media bg-secondary text-white">
              <i className="bi bi-lightning"></i>
            </div>
            <div className="user-message">
              <h6 className="message">
                <a href="#">Olivia Johanna</a> has created new task at{" "}
                <a href="#">Blueberry Projects</a>
              </h6>
              <p className="message-footer d-flex align-items-center justify-content-between">
                {" "}
                <span className="fs-14 text-gray fw-normal">2m ago</span>{" "}
                <span>Mark as read</span>
              </p>
            </div>
          </li>
          <li className="author-online has-new-message d-flex gap-3">
            <div className="media media-outline-red text-red">
              <i className="bi bi-clock-fill"></i>
            </div>
            <div className="user-message">
              <h6 className="message">
                [REMINDER] Due date of{" "}
                <a href="#">Highspeed Studios Projects</a> te task will be
                coming
              </h6>
              <p className="message-footer d-flex align-items-center justify-content-between">
                {" "}
                <span className="fs-14 text-gray fw-normal">2m ago</span>{" "}
                <span>Mark as read</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
