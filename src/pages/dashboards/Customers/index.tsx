import { useState } from "react";
import Default from "../../../layouts/Default";
import Vertical from "../../../layouts/Vertical";
import { users } from "./Data";
import search from "../../../assets/images/search.svg";

const Customers = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [isMobileCollapsed, setIsMobileCollapsed] = useState<boolean>(false);

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
                <div className=" d-flex align-items-center d-block py-5">
                  <div className="header-search w-100">
                    <form className="search-form" action="search.php">
                      <input
                        type="text"
                        name="search"
                        className="keyword form-control w-100"
                        placeholder="Search customer by name, email or phone"
                      />
                      <button type="submit" className="btn">
                        <img src={search} alt="" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="page-header d-flex align-items-center justify-content-between mr-bottom-30">
              <div className="left-part">
                <h2 className="text-dark">Customers</h2>
              </div>
            </div>
            <div className="row">
              {users.map(() => {
                return (
                  <div className="col-xxl-3 col-lg-4">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body">
                        <div className="mb-5 text-center">
                          <div
                            className="avatar-img m-auto position-relative"
                            style={{ width: "105px", height: "105px" }}
                          >
                            {/* <img
                              src={`${user.avatar}`}
                              alt="img"
                              className="rounded-2 w-100"
                            /> */}
                          </div>
                          <div className="card-content mt-3">
                            <h5 className="mb-0">
                              <a href="#" className="text-dark">
                                Samantha William
                              </a>
                            </h5>
                          </div>
                        </div>

                        <div>
                          <div>
                            <div className="fw-semibold text-center">
                              <p className="bg-muted rounded-1 d-inline-block text-center text-primary lh-36 px-2 py-0 me-2">
                                <i className="bi bi-telephone-fill"></i>
                              </p>{" "}
                              <p>+12 345 6789 0</p>
                            </div>
                          </div>
                          <div>
                            <div className="fw-semibold text-center">
                              <p className="bg-muted rounded-1 d-inline-block text-center text-primary lh-36 px-2 py-0 me-2">
                                <i className="bi bi-envelope-fill"></i>
                              </p>{" "}
                              <p>samantha@mail.com</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Customers;
