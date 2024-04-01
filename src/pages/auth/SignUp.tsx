import logo from "../../assets/images/logo.png";
import company from "../../assets/images/company.jpg";
import { NavLink } from "react-router-dom";
import { DASHBOARD_APPOINTMENTS } from "../../routes/constants";

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
              <div className="card-header border-0 p-0 pt-8 text-center mb-8">
                <NavLink to="/" className="w-100 d-inline-block ">
                  <img src={logo} alt="img" />
                </NavLink>
              </div>
              <h2 className="text-center">Welcome to Blueberry!</h2>

              <div className="card-body p-0 my-4">
                <form className="form-horizontal" method="post">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label
                          htmlFor="validationCustom01"
                          className="form-label"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control border-gray-400"
                          name="first_name"
                          value=""
                          placeholder="First Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label
                          htmlFor="validationCustom01"
                          className="form-label"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control border-gray-400"
                          name="last_name"
                          value=""
                          placeholder="Last Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label
                          htmlFor="validationCustom01"
                          className="form-label"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control border-gray-400"
                          name="email"
                          value=""
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label
                          htmlFor="validationCustom01"
                          className="form-label"
                        >
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
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label
                          htmlFor="validationCustom01"
                          className="form-label"
                        >
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          className="form-control border-gray-400"
                          name="c_password"
                          value=""
                          placeholder="Confirm Password"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <NavLink
                    to={DASHBOARD_APPOINTMENTS}
                    className="btn btn-secondary w-100 text-uppercase text-white rounded-2 lh-34 ff-heading fw-bold shadow"
                  >
                    Sign Up
                  </NavLink>

                  <div className="d-flex flex-column align-items-center gap-2  mt-4 mb-0 text-center">
                    Already have an account?
                    <NavLink
                      to={"/account/sign-in"}
                      className="text-primary fw-bold text-decoration-underline"
                    >
                      Log In
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

export default SignUp;
