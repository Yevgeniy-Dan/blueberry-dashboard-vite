import { useState } from "react";
import Default from "../../../layouts/Default";
import Vertical from "../../../layouts/Vertical";
import { users } from "./Data";
import { useQuery } from "@tanstack/react-query";
import search from "../../../assets/images/search.svg";

const Customers = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [isMobileCollapsed, setIsMobileCollapsed] = useState<boolean>(false);

  const [page /*setPage*/] = useState(0);

  // const fetchCustomers = (page = 0) => {
  const fetchCustomers = () => {
    return users;
  };

  const { isLoading, isError, error, data, isFetching } = useQuery({
    queryKey: ["customers", page],
    // queryFn: () => fetchCustomers(page),
    queryFn: () => fetchCustomers(),
  });

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
                        className="keyword form-control w-100 bg-muted"
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
            <div>
              {isLoading ? (
                <div>Loading...</div>
              ) : isError ? (
                <div>Error: {error.message}</div>
              ) : (
                <>
                  {isFetching ? (
                    <span> Loading...</span>
                  ) : (
                    data && (
                      <>
                        <div className="row">
                          {data &&
                            data.customers.map(() => (
                              <div className="col-xxl-3 col-lg-4">
                                <div className="card border-0 shadow-sm">
                                  <div className="card-body">
                                    <div className="mb-5 text-center">
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
                            ))}
                        </div>
                        <div className="row">
                          <div className="col-sm-6">
                            <span>
                              {" "}
                              Showing {page * 10 + 1}-
                              {Math.min((page + 1) * 10, data?.total)} from{" "}
                              {data?.total} data
                            </span>
                          </div>
                          {/* <div className="col-sm-6 d-flex justify-content-end">
                            <button
                              className="btn btn-primary"
                              onClick={() =>
                                setPage((old) => Math.max(old - 1, 0))
                              }
                              disabled={page === 0}
                            >
                              {"<"}
                            </button>{" "}
                            {Array.from(
                              {
                                length: Math.min(
                                  Math.ceil(data.total / 10),
                                  10
                                ),
                              },
                              (_, index) => {
                                const numPages = Math.min(
                                  Math.ceil(data.total / 10),
                                  10
                                );
                                const firstDisplayedPage = Math.max(
                                  page - 1,
                                  0
                                ); // Ensure the first displayed page is not less than 0
                                const displayedPage =
                                  firstDisplayedPage + index;
                                if (displayedPage >= numPages) return null; // Skip rendering if the page number exceeds the total number of pages
                                return (
                                  <button
                                    key={index}
                                    className={`btn btn-primary ${
                                      page === displayedPage ? "active" : ""
                                    }`}
                                    onClick={() => setPage(displayedPage)}
                                  >
                                    {displayedPage + 1}
                                  </button>
                                );
                              }
                            )}
                            <button
                              className="btn btn-primary"
                              onClick={() => {
                                setPage((old) =>
                                  data?.total &&
                                  data.total > data?.pageSize * old
                                    ? old + 1
                                    : old
                                );
                              }}
                              disabled={
                                !(data?.total && data.total > (page + 1) * 10)
                              }
                            >
                              {">"}
                            </button>
                          </div> */}
                          <nav
                            aria-label="Page navigation"
                            className="col-sm-6 d-flex justify-content-end"
                          >
                            <ul className="pagination">
                              <li className="page-item">
                                <a
                                  className="page-link"
                                  href="#"
                                  aria-label="Previous"
                                >
                                  <span aria-hidden="true">&laquo;</span>
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  1
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  2
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  3
                                </a>
                              </li>
                              <li className="page-item">
                                <a
                                  className="page-link"
                                  href="#"
                                  aria-label="Next"
                                >
                                  <span aria-hidden="true">&raquo;</span>
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </>
                    )
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Customers;
