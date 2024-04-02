import logo from "../../assets/images/logo.png";
import company from "../../assets/images/company.jpg";
import { NavLink } from "react-router-dom";
import { APPOINTMENTS } from "../../routes/constants";

const SignIn = () => {
  return (
    <div className="bg-primary">
      <div className="row">
        <div className="col-xl-7 col-lg-7 col-md-6">
          <div
            className="d-none d-md-flex align-items-center justify-content-center"
            style={{ height: " calc(100vh - 100px)" }}
          >
            <img src={company} alt="img" className="img-fluid" />
          </div>
        </div>

        <div className="col-xl-5 col-lg-5 col-md-6">
          <div className="d-flex align-items-center justify-content-center vh-100 bg-white">
            <div className="card rounded-0 border-0 p-5 m-0 w-100">
              <div className="card-header border-0 p-0 text-center mb-8">
                <NavLink to="/" className="w-100 d-inline-block">
                  <img src={logo} alt="img" />
                </NavLink>
              </div>
              <h2 className="mb-5 text-center">Login</h2>

              <div className="card-body p-0">
                <form className="form-horizontal" method="post">
                  <div className="form-group">
                    <label htmlFor="validationCustom01" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="text"
                      className="form-control border-gray-400"
                      name="u_name"
                      value=""
                      placeholder="Email Address"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="validationCustom01" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control border-gray-400"
                      name="password"
                      value=""
                      placeholder="Password"
                      required
                    />
                  </div>

                  <div className="form-group d-flex justify-content-between align-items-center">
                    <div className="form-check ">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="invalidCheck"
                        required
                      />
                      <label
                        className="form-check-label fw-bold"
                        htmlFor="invalidCheck"
                      >
                        Remember Me
                      </label>
                    </div>
                    <div>
                      <NavLink
                        to={"/account/forget-password"}
                        className="d-flex align-items-center justify-content-between mt-4 mb-4 text-primary fw-bold text-decoration-underline"
                      >
                        Forget Password?
                      </NavLink>
                    </div>
                  </div>

                  <NavLink
                    to={APPOINTMENTS}
                    className="btn btn-secondary w-100 text-uppercase text-white rounded-2 lh-34 ff-heading fw-bold shadow"
                  >
                    Login
                  </NavLink>

                  <div className="d-flex flex-column align-items-center justify-content-between mt-4 mb-4 fw-bold text-center gap-2 ">
                    Don't have an account?
                    <NavLink
                      to={"/account/sign-up"}
                      className="text-primary fw-bold text-decoration-underline"
                    >
                      Sign Up
                    </NavLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
