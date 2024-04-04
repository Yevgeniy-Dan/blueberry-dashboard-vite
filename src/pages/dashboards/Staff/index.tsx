import { useState } from "react";
import Default from "../../../layouts/Default";
import Vertical from "../../../layouts/Vertical";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { removeStaff } from "../../../redux/staff/slice";

const Staff = () => {
  const { items: staffs } = useAppSelector((state) => state.staff);
  const dispatch = useAppDispatch();

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [isMobileCollapsed, setIsMobileCollapsed] = useState<boolean>(false);

  const navigate = useNavigate();
  function removeStaffHandler(id: string): void {
    dispatch(removeStaff(id));
  }

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
                          {staffs.map((s, i) => (
                            <tr>
                              <th scope="row">{i + 1}</th>
                              <td>{s.name}</td>
                              <td>
                                <div className="d-flex gap-3">
                                  <button
                                    type="button"
                                    className="btn p-0  btn-link"
                                    onClick={() => {
                                      navigate(`./add/${s.id}`);
                                    }}
                                  >
                                    <span className="py-2 fs-20">
                                      <i className="bi bi-pencil-square"></i>
                                    </span>
                                  </button>
                                  <button
                                    type="button"
                                    className="btn p-0 btn-link"
                                    onClick={() => removeStaffHandler(s.id)}
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
        </div>
      </main>
    </div>
  );
};

export default Staff;
