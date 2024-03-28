const BusinessInfo = () => {
  return (
    <main className="main-wrapper ">
      <div className="container-fluid">
        <div className="inner-contents">
          <div className="page-header d-flex align-items-center justify-content-between mr-bottom-30">
            <div className="left-part">
              <h2 className="text-dark">Business Info</h2>
              <p className="text-gray mb-0">Lorem ipsum dolor sit amet </p>
            </div>
          </div>

          <div className="card border-0 p-5">
            <div className="card-body p-0 pt-4">
              <form className="needs-validation" noValidate>
                <div className="form-group">
                  <label htmlFor="validationCustom01" className="form-label">
                    Business Name
                  </label>
                  <input
                    type="text"
                    className="form-control border-gray-400"
                    id="validationCustom01"
                    value=""
                    placeholder="Business Name"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="form-group">
                  <label htmlFor="validationCustom02" className="form-label">
                    Business URL
                  </label>
                  <div className="input-group has-validation">
                    <span
                      className="badge d-flex align-items-center text-dark rounded-0 rounded-start py-2 px-3 border border-gray-400 fs-16 bg-gray-100"
                      id="inputGroupPrepend"
                    >
                      blueberrynow.com/
                    </span>
                    <input
                      type="text"
                      className="form-control border-gray-400"
                      id="validationCustom02"
                      value=""
                      placeholder="your-business-name"
                      required
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="validationEmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control border-gray-400"
                    id="validationEmail"
                    value=""
                    required
                    placeholder="Email Address"
                  />
                  <div className="invalid-feedback">Enter your Email</div>
                </div>
                <div className="form-group">
                  <label htmlFor="validationEmail" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control border-gray-400"
                    id="validationEmail"
                    value=""
                    placeholder="Example: (123) 456-7890"
                    required
                  />
                  <div className="invalid-feedback">Enter your Email</div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="validationCustomUsername"
                    className="form-label"
                  >
                    Address (Optional) *title field
                  </label>

                  <input
                    type="text"
                    className="form-control border-gray-400"
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    required
                    placeholder="Click to select or choose a location by code"
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="validationCustomUsername"
                    className="form-label"
                  >
                    Street Address
                  </label>

                  <input
                    type="text"
                    className="form-control border-gray-400"
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    required
                    placeholder="Street Address"
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="validationCustomUsername"
                    className="form-label"
                  >
                    Address 2
                  </label>

                  <input
                    type="text"
                    className="form-control border-gray-400"
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    required
                    placeholder="Address 2"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="validationCustom03" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control border-gray-400"
                    id="validationCustom03"
                    required
                    placeholder="City"
                  />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="validationCustom04" className="form-label ">
                    State
                  </label>
                  <select
                    className="form-control border-gray-400"
                    id="validationCustom04"
                    required
                  >
                    <option selected disabled value="">
                      Choose...
                    </option>
                    <option>Arizona</option>
                    <option>Arizona</option>
                    <option>Arizona</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="validationCustom05" className="form-label">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    className="form-control border-gray-400"
                    id="validationCustom05"
                    required
                    placeholder="Zip Code"
                  />
                  <div className="invalid-feedback">
                    Please provide a valid zip.
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="validationCustom05" className="form-label">
                    Business Hours
                  </label>
                  <input
                    type="text"
                    className="form-contro border-gray-400l"
                    id="validationCustom05"
                    required
                    placeholder="Business Hours"
                  />
                  <div className="invalid-feedback">
                    Please provide a valid zip.
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Upload Logo</label>
                  <input
                    type="file"
                    className="form-control border-gray-400"
                    name="fileUpload"
                  />
                </div>
                <div className="form-group mb-0 text-center">
                  <button type="submit" className="btn btn-secondary">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BusinessInfo;
