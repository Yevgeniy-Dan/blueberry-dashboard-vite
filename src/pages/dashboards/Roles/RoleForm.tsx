import { useId } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";
import { IRole } from "../../../interfaces/role.interface";
import { useRoleMutation, useRoleQuery } from "../../../hooks/useRoles";

const RoleForm = () => {
  const { data: roles } = useRoleQuery();

  const { roleId } = useParams();

  const role = roles?.find((role) => role.id === id);
  const { mutate } = useRoleMutation();

  const navigate = useNavigate();

  const id = useId();

  const formik = useFormik({
    initialValues: {
      name: role ? role.name : "",
      email: role ? role.email : "",
      password: role ? role.password : "",
      roles: role
        ? role.roles
        : {
            businessInfo: false,
            staff: false,
            services: false,
            customers: false,
            payments: false,
            analytics: false,
          },
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Enter a valid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
      roles: Yup.object().test(
        "at-least-one-role",
        "At least one role must be selected",
        (value) => {
          return Object.values(value).some((role) => role === true);
        }
      ),
    }),
    onSubmit: (values) => {
      const roleRecord: IRole = {
        id,
        name: values.name,
        email: values.email,
        password: values.password,
        roles: values.roles,
      };

      if (roleId) {
        mutate(
          { method: "put", role: roleRecord },
          {
            onSuccess() {
              navigate("./../..");
            },
          }
        );
      } else {
        mutate(
          { method: "post", role: roleRecord },
          {
            onSuccess() {
              navigate("./..");
            },
          }
        );
      }
    },
  });

  return (
    <div>
      <div className="page-header d-flex align-items-center justify-content-between mr-bottom-30">
        <div className="left-part ">
          <h2 className="text-dark">Add Role</h2>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-lg-4">
                <div className="form-group">
                  <label className="form-label fs-16 fw-bold text-uppercase ls-1 text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      formik.touched.name && formik.errors.name
                        ? "is-invalid"
                        : ""
                    }`}
                    name="name"
                    value={formik.values.name}
                    placeholder="Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div className="invalid-feedback">
                      {formik.errors.name?.toString()}
                    </div>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="col-lg-4">
                <div className="form-group">
                  <label className="form-label fs-16 fw-bold text-uppercase ls-1 text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    className={`form-control ${
                      formik.touched.email && formik.errors.email
                        ? "is-invalid"
                        : ""
                    }`}
                    name="email"
                    value={formik.values.email}
                    placeholder="Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="invalid-feedback">
                      {formik.errors.email.toString()}
                    </div>
                  )}
                </div>
              </div>

              {/* Password */}
              <div className="col-lg-4">
                <div className="form-group">
                  <label className="form-label fs-16 fw-bold text-uppercase ls-1 text-gray-300">
                    Password
                  </label>
                  <input
                    type="password"
                    className={`form-control ${
                      formik.touched.password && formik.errors.password
                        ? "is-invalid"
                        : ""
                    }`}
                    name="password"
                    value={formik.values.password}
                    placeholder="Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className="invalid-feedback">
                      {formik.errors.password.toString()}
                    </div>
                  )}
                </div>
              </div>

              <div className="col-lg-9">
                <div className="form-group">
                  <label className="form-label fs-16 fw-bold text-uppercase ls-1 text-gray-300">
                    Roles
                  </label>
                  <div className="row">
                    {/* Business Info */}
                    <div className="col-sm-4">
                      <div className="form-check form-check-inline">
                        <label
                          className="form-label mb-0 fs-18 fw-semibold"
                          htmlFor="businessInfo"
                        >
                          Business Info
                        </label>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="businessInfo"
                          name="roles.businessInfo"
                          checked={formik.values.roles.businessInfo}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </div>
                    </div>
                    {/* Staff */}
                    <div className="col-sm-4">
                      <div className="form-check form-check-inline">
                        <label
                          className="form-label mb-0 fs-18 fw-semibold"
                          htmlFor="staff"
                        >
                          Staff
                        </label>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="staff"
                          name="roles.staff"
                          checked={formik.values.roles.staff}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </div>
                    </div>
                    {/* Services */}
                    <div className="col-sm-4">
                      <div className="form-check form-check-inline">
                        <label
                          className="form-label mb-0 fs-18 fw-semibold"
                          htmlFor="services"
                        >
                          Services
                        </label>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="services"
                          name="roles.services"
                          checked={formik.values.roles.services}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </div>
                    </div>
                    {/* Customers */}
                    <div className="col-sm-4">
                      <div className="form-check form-check-inline">
                        <label
                          className="form-label mb-0 fs-18 fw-semibold"
                          htmlFor="customers"
                        >
                          Customers
                        </label>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customers"
                          name="roles.customers"
                          checked={formik.values.roles.customers}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </div>
                    </div>
                    {/* Payments */}
                    <div className="col-sm-4">
                      <div className="form-check form-check-inline">
                        <label
                          className="form-label mb-0 fs-18 fw-semibold"
                          htmlFor="payments"
                        >
                          Payments
                        </label>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="payments"
                          name="roles.payments"
                          checked={formik.values.roles.payments}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </div>
                    </div>
                    {/* Analytics */}
                    <div className="col-sm-4">
                      <div className="form-check form-check-inline">
                        <label
                          className="form-label mb-0 fs-18 fw-semibold"
                          htmlFor="analytics"
                        >
                          Analytics
                        </label>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="analytics"
                          name="roles.analytics"
                          checked={formik.values.roles.analytics}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Rendering roles error */}
                  {formik.touched.roles && formik.errors.roles ? (
                    <div className="text-red">
                      {formik.errors.roles?.toString()}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="form-group mb-0">
              <button
                type="submit"
                className="btn btn-primary fs-18 text-uppercase mx-0"
              >
                <i className="bi bi-file-arrow-down-fill me-2"></i> Save Role
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RoleForm;
