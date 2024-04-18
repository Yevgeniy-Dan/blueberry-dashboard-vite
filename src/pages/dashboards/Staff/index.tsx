import { useNavigate } from "react-router-dom";
import { IStaff } from "../../../interfaces/staff.interface";
import { useStaffMutation, useStaffQuery } from "../../../hooks/useStaff";

const Staff = () => {
  const { data: staffList } = useStaffQuery();
  const { mutate } = useStaffMutation();

  const navigate = useNavigate();
  function removeStaffHandler(staff: IStaff): void {
    mutate({
      method: "delete",
      staff,
    });
  }

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
            <div className="tab-content">
              <div
                // className="tab-pane fade active show"
                id="result1"
                role="tabpanel"
              >
                <table className="table" style={{ minWidth: "500px" }}>
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {staffList?.map((staffItem, index) => (
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{staffItem.name}</td>
                        <td>
                          <div className="d-flex gap-3">
                            <button
                              type="button"
                              className="btn p-0  btn-link"
                              onClick={() => {
                                navigate(`./add/${staffItem.id}`);
                              }}
                            >
                              <span className="py-2 fs-20">
                                <i className="bi bi-pencil-square"></i>
                              </span>
                            </button>
                            <button
                              type="button"
                              className="btn p-0 btn-link"
                              onClick={() => removeStaffHandler(staffItem)}
                            >
                              <span className="py-2 fs-20">
                                <i className="bi bi-trash"></i>
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Staff;
