import React from "react";
import { useAppSelector } from "../../../hooks/redux";
import { selectAppointmentByCustomer } from "../../../redux/appointment/slice";

const AppointmentCards: React.FC<{ customer: string }> = ({ customer }) => {
  const appts = useAppSelector((state) =>
    selectAppointmentByCustomer(state)(customer)
  );

  return (
    <>
      <div className="row">
        {appts.map(({ customerName }) => (
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="mb-5 text-center">
                  <div className="card-content mt-3">
                    <h5 className="mb-0">
                      <a href="#" className="text-dark">
                        {customerName}
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AppointmentCards;
