import logo from "../../assets/images/logo.svg";
import company from "../../assets/images/company.jpg";

const SignUp = () => {
  return (
    <div className="bg-soft-primary">
      <div className="row">
        <div className="col-xl-7 col-lg-7 col-md-6">
          <div
            className="d-none d-md-flex align-items-center justify-content-center"
            style={{ height: "calc(100vh - 100px)" }}
          >
            <img src={company} alt="img" className="img-fluid" />
          </div>
        </div>

        <div className="col-xl-5 col-lg-5 col-md-6">
          <div className="d-flex align-items-center justify-content-center vh-100 bg-white">
            <div className="card rounded-0 border-0 p-5 m-0 w-100">
              <div className="card-header border-0 p-0">
                <a href="index.html" className="w-100 d-inline-block mb-5">
                  <img src={logo} alt="img" />
                </a>
                <h2>Welcome to Kleon!</h2>
                <p className="text-dark mt-4 mb-5">
                  Signup here to create your own dashboard.
                </p>
              </div>

              <div className="position-relative text-center my-4">
                <p className="mb-0 position-relative z-index-1 d-inline-block bg-white px-3">
                  Signup with
                </p>
                <span className="border border-light position-absolute top-50 start-50 translate-middle d-inline-block w-100"></span>
              </div>

              <div className="card-body p-0">
                <form className="form-horizontal" method="post">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          value=""
                          placeholder="Name or User Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value=""
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          value=""
                          placeholder="Type Password"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          name="c_password"
                          value=""
                          placeholder="Re-type Password"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="btn btn-primary w-100 text-uppercase text-white rounded-2 lh-34 ff-heading fw-bold shadow"
                  >
                    Register
                  </a>

                  <p className="d-flex align-items-center gap-2 mt-4 mb-0">
                    Already have an account?{" "}
                    <a
                      href="login-2.html"
                      className="text-secondary fw-bold text-decoration-underline"
                    >
                      Sign In
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
