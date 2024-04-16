import { Modal, ModalBody } from "reactstrap";

const AppModal: React.FC<{
  isOpen: boolean;
  toggle: () => void;
}> = ({ isOpen, toggle }) => {
  return (
    <Modal
      isOpen={isOpen}
      toggle={() => toggle()}
      className="modal-dialog modal-xl modal-dialog-centered"
    >
      {/* <ModalHeader>Appointment Details</ModalHeader> */}
      <ModalBody className="p-0">
        <div className="modal-content rounded-2 p-0 p-sm-5">
          <div className="modal-header">
            <h3 className="modal-title fw-bold">Appointment Details</h3>
            <button
              type="button"
              className="btn-close p-0 border-0"
              onClick={() => toggle()}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row mb-3">
              <div className="col-lg-4 d-flex align-items-center gap-3 py-2">
                <div className="fs-20 text-primary">
                  <i className="bi bi-person-fill"></i>
                </div>
                <div>
                  <p className="mb-0 fw-semibold">Ron Sagi</p>
                  <p className="mb-0">
                    w/ <span className="mb-0 fw-semibold">Albert</span>
                  </p>
                </div>
              </div>

              <div className="col-lg-4 d-flex align-items-center gap-3 bg-light-200 pe-5 py-2 rounded-2">
                <div className="fs-20 text-primary">
                  <i className="bi bi-clock-fill"></i>
                </div>
                <div>
                  <p className="mb-0">Monday, 10:24 AM</p>
                  <p className="mb-0 fw-semibold">October 31th 2023</p>
                </div>
              </div>

              <div className="col-lg-4 d-flex align-items-center gap-3 py-2">
                <div className="fs-20 text-primary">
                  <i className="bi bi-tools"></i>
                </div>
                <div>
                  <p className="mb-0">Haircut</p>
                  {/* <p className="mb-0 fw-semibold">London, United Kingdom</p> */}
                </div>
              </div>
            </div>
            <div className="row  mb-3">
              <div className="col-lg-4 d-flex align-items-center gap-3 py-2">
                <div>
                  <button className="btn btn-secondary text-white">
                    Cancel
                  </button>
                </div>
              </div>

              <div className="col-lg-4 d-flex align-items-center gap-3 py-2 rounded-2">
                <div className="fs-20 text-primary">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div>
                  <p className="mb-0">456-7890</p>
                </div>
              </div>

              <div className="col-lg-4 d-flex align-items-center gap-3 py-2 rounded-2">
                <div className="fs-20 text-primary">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div>
                  <p className="mb-0">ron@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default AppModal;
