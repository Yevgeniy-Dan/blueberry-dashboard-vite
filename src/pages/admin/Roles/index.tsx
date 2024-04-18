import { useNavigate } from "react-router-dom";
import RolesTable from "./RolesTable";

const Roles = () => {
  const navigate = useNavigate();

  return (
    <div>
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
  );
};

export default Roles;
