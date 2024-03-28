import logo from "../../assets/images/logo.svg";
import company from "../../assets/images/company.jpg";

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
              <div className="card-header border-0 p-0">
                <a href="index.html" className="w-100 d-inline-block mb-5">
                  <img src={logo} alt="img" />
                </a>
                <h2>Welcome back!</h2>
                <p className="text-dark mt-4 mb-5">
                  Please login using your account.
                </p>
              </div>

              <div className="card-body p-0">
                <form className="form-horizontal" method="post">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="u_name"
                      value=""
                      placeholder="Username"
                      required
                    />
                  </div>

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

                  <a
                    href="index.html"
                    className="btn btn-primary w-100 text-uppercase text-white rounded-2 lh-34 ff-heading fw-bold shadow"
                  >
                    Login
                  </a>

                  <p className="d-flex align-items-center justify-content-between mt-4 mb-4">
                    Forgot your password?
                    <a
                      href="forgot-password-2.html"
                      className="text-primary fw-bold text-decoration-underline"
                    >
                      Reset Here
                    </a>
                  </p>

                  <a
                    href="register-2.html"
                    className="btn btn-secondary w-100 text-uppercase text-white rounded-2 lh-34 ff-heading fw-bold"
                  >
                    Create an Account
                  </a>
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
