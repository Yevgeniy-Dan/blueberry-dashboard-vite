import { useState } from "react";
import Form from "./Form";

const BusinessInfo = () => {
  const [showBusinessHoursSetter, setShowBusinessHoursSetter] = useState(false);

  return (
    <div>
      {!showBusinessHoursSetter && (
        <div className="page-header d-flex align-items-center justify-content-between mr-bottom-30">
          <div className="left-part">
            <h2 className="text-dark">Business Info</h2>
            <p>Your business info displays on your booking page</p>
          </div>
        </div>
      )}
      <Form
        showBusinessHoursSetter={showBusinessHoursSetter}
        onShowBusinessHoursSetter={setShowBusinessHoursSetter}
      />
    </div>
  );
};

export default BusinessInfo;
