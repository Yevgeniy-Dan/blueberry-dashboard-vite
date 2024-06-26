import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const ForgetPassword = () => {
  return (
    <div className="bg-primary">
      <div className="row align-items-center justify-content-center vh-100">
        <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-6">
          <div className="card rounded-2 border-0 p-5 m-6 m-md-0">
            <div className="card-header border-0 p-0 text-center">
              <NavLink to="/" className="w-100 d-inline-block mb-5">
                <img src={logo} alt="img" />
              </NavLink>
              <h3>Forgot your password?</h3>
              <p className="fs-14 text-dark my-4">
                Enter your user account's verified email address and we will
                send you a password reset link.
              </p>
            </div>

            <div className="card-body p-0">
              <form className="form-horizontal" method="post">
                <div className="form-group">
                  <div className="input-group">
                    <span className="badge d-flex align-items-center text-dark rounded-0 rounded-start py-2 px-3 border border-light-200 fs-16">
                      <i className="bi bi-envelope"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value=""
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-secondary w-100 text-uppercase text-white rounded-2 lh-34 ff-heading fw-bold shadow"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
