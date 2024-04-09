import { useId, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";

import { useFormik } from "formik";
import * as Yup from "yup";
import {
  addService,
  selectServiceById,
  udpateService,
} from "../../../redux/services/slice";
import { ServiceModel } from "../../../redux/services/models";
import Default from "../../../layouts/Default";
import Vertical from "../../../layouts/Vertical";

import currencyCodes from "currency-codes";
import ReactSelect from "react-select";

const timeOptions = [
  { label: "20 Mins" },
  { label: "30 Mins" },
  { label: "45 Mins" },
  { label: "1 Hour" },
  { label: "1.5 Hours" },
  { label: "2 Hours" },
  { label: "2.5 Hours" },
  { label: "3 Hours" },
  { label: "3.5 Hours" },
  { label: "4 Hours" },
];

const staffDummyData = [
  { label: "John Smith", value: "john_smith" },
  { label: "Emma Johnson", value: "emma_johnson" },
  { label: "Michael Williams", value: "michael_williams" },
  { label: "Sophia Jones", value: "sophia_jones" },
  { label: "William Brown", value: "william_brown" },
  { label: "Olivia Davis", value: "olivia_davis" },
  { label: "James Miller", value: "james_miller" },
  { label: "Ava Wilson", value: "ava_wilson" },
  { label: "Alexander Moore", value: "alexander_moore" },
  { label: "Isabella Taylor", value: "isabella_taylor" },
];

const ServiceForm = () => {
  const { serviceId } = useParams();
  const service = useAppSelector((state) =>
    selectServiceById(state)(serviceId || "")
  );
  const id = useId();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [isMobileCollapsed, setIsMobileCollapsed] = useState<boolean>(false);

  const currencyCodesOptions = currencyCodes.codes();

  const formik = useFormik({
    initialValues: {
      name: service ? service.name : "",
      currency: currencyCodesOptions[0],
      duration: service ? service.duration : "",
      price: service ? service.price : "",
      staffMembers: service ? service.staffMembers : [],
      isNoPreferenceEnabled: service
        ? service.isNoPreferenceEnabled
        : Boolean("false"),
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
      duration: Yup.string().required("Duration is required"),
      price: Yup.string().required("Price is required"),
      staffMembers: Yup.array().required("Staff members are required"),
    }),
    onSubmit: (values) => {
      const serviceRecord: ServiceModel = {
        id,
        name: values.name,
        duration: values.duration,
        price: values.price,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        staffMembers: values.staffMembers.map((m) => m.label),
        currencyCode: values.currency,
        isNoPreferenceEnabled: values.isNoPreferenceEnabled,
      };

      if (serviceId) {
        dispatch(udpateService({ serviceId, service: serviceRecord }));
        navigate("./../..");
      } else {
        dispatch(addService(serviceRecord));
        navigate("./..");
      }
    },
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
            <div className="page-header d-flex align-items-center justify-content-between mr-bottom-30">
              <div className="left-part ">
                <h2 className="text-dark">Add Service</h2>
              </div>
            </div>
            <div className="col-lg-8  bg-light">
              <div className="card overflow-visible border-0 px-5 py-2">
                <div className="card-body p-0">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                      <div className="row align-items-center">
                        <div className="col-lg-3">
                          <label htmlFor="name" className="form-label">
                            Service Name
                          </label>
                        </div>
                        <div className="col-lg-9">
                          <div className="input-group">
                            <span className="badge d-flex align-items-center text-dark rounded-0 rounded-start py-2 px-3 border border-light-200 fs-16">
                              <i className="bi bi-building"></i>
                            </span>
                            <input
                              type="text"
                              className={`form-control ${
                                formik.touched.name && formik.errors.name
                                  ? "is-invalid"
                                  : ""
                              }`}
                              id="name"
                              name="name"
                              value={formik.values.name}
                              placeholder="Name"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            {formik.touched.name && formik.errors.name && (
                              <div className="invalid-feedback icon-input">
                                {formik.errors.name}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="row align-items-center">
                        <div className="col-lg-3">
                          <label htmlFor="duration" className="form-label">
                            Duration
                          </label>
                        </div>
                        <div className="col-lg-9">
                          <div className="input-group">
                            <span className="badge d-flex align-items-center text-dark rounded-0 rounded-start py-2 px-3 border border-light-200 fs-16">
                              <i className="bi bi-globe"></i>
                            </span>
                            <select
                              className={`form-control form-select custom-select ${
                                formik.touched.duration &&
                                formik.errors.duration
                                  ? "is-invalid"
                                  : ""
                              }`}
                              id="duration"
                              name="duration"
                              value={formik.values.duration}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            >
                              <option selected disabled value="">
                                Select...
                              </option>
                              {timeOptions.map((state, index) => (
                                <option key={index}>{state.label}</option>
                              ))}
                            </select>
                            {formik.touched.duration &&
                              formik.errors.duration && (
                                <div className="invalid-feedback icon-input">
                                  {formik.errors.duration}
                                </div>
                              )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="row align-items-center">
                        <div className="col-lg-3">
                          <label htmlFor="name" className="form-label">
                            Price
                          </label>
                        </div>
                        <div className="col-lg-9">
                          <div className="input-group">
                            <span className="badge d-flex align-items-center text-dark rounded-0 rounded-start py-2 px-3 border border-light-200 fs-16">
                              <i className="bi bi-building"></i>
                            </span>
                            <select
                              className={`form-control form-select custom-select`}
                              id="currency"
                              name="currency"
                              defaultValue={formik.values.currency}
                              onChange={formik.handleChange}
                            >
                              <option selected disabled value="">
                                Select...
                              </option>
                              {currencyCodesOptions.map((state, index) => (
                                <option key={index}>{state}</option>
                              ))}
                            </select>
                            <input
                              type="text"
                              className={`form-control ${
                                formik.touched.price && formik.errors.price
                                  ? "is-invalid"
                                  : ""
                              }`}
                              id="price"
                              name="price"
                              value={formik.values.price}
                              placeholder="Price"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            {formik.touched.price && formik.errors.price && (
                              <div className="invalid-feedback icon-input">
                                {formik.errors.price}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="">
                      <div className="row align-items-center">
                        <div className="col-lg-3">
                          <label htmlFor="duration" className="form-label">
                            Select Staff members who provide this service
                          </label>
                        </div>
                        <div className="col-lg-9">
                          <div className="input-group">
                            <span className="badge d-flex align-items-center text-dark rounded-0 rounded-start py-2 px-3 border border-light-200 fs-16">
                              <i className="bi bi-globe"></i>
                            </span>
                            <ReactSelect
                              closeMenuOnSelect={false}
                              id="staffMembers"
                              name="staffMembers"
                              className={`form-control h-auto ${
                                formik.touched.staffMembers &&
                                formik.errors.staffMembers
                                  ? "is-invalid"
                                  : ""
                              }`}
                              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                              // @ts-expect-error
                              options={staffDummyData}
                              value={formik.values.staffMembers}
                              onChange={(selectedOptions) => {
                                formik.setFieldValue(
                                  "staffMembers",
                                  selectedOptions.map((option) => option)
                                );
                              }}
                              onBlur={formik.handleBlur}
                              isMulti
                            />
                            {formik.touched.staffMembers &&
                              formik.errors.staffMembers && (
                                <div className="invalid-feedback icon-input">
                                  {formik.errors.staffMembers}
                                </div>
                              )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="row ">
                        <div className="col-lg-3">
                          <label className="form-label">
                            {" "}
                            Do you want to enable No Preference for staff
                            Selection?
                          </label>
                        </div>
                        <div className="col-lg-9">
                          <div className="input-group">
                            <div className="form-check form-check-inline">
                              <input
                                className={`form-check-input`}
                                type="radio"
                                id={`radio_btn_yes`}
                                name="isNoPreferenceEnabled"
                                value="true"
                                checked={formik.values.isNoPreferenceEnabled}
                                onChange={formik.handleChange}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="radio_btn_yes"
                              >
                                Yes
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input
                                className={`form-check-input`}
                                type="radio"
                                id={`radio_btn_no`}
                                name="isNoPreferenceEnabled"
                                value="false"
                                checked={formik.values.isNoPreferenceEnabled}
                                onChange={formik.handleChange}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="radio_btn_no"
                              >
                                No
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-9 offset-lg-3">
                        <div className="button_group text-center">
                          <button type="submit" className="btn btn-primary">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServiceForm;
