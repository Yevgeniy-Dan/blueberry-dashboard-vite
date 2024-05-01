import { useNavigate } from "react-router-dom";
import Table from "./Table";

const Staff = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="page-header d-flex align-items-center justify-content-between mr-bottom-30">
        <div className="left-part">
          <h2 className="text-dark">Staff</h2>
        </div>
      </div>
      <section className="col-lg-8 mb-5 w-100">
        <div className="card border-1 shadow-sm">
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
          <div className="card-body">
            <Table />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Staff;
