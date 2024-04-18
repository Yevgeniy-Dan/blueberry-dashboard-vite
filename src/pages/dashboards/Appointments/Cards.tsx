import React from "react";
import { IAppointment } from "../../../interfaces/appointment.interface";
import { useAppointmentQuery } from "../../../hooks/useAppointments";

const AppointmentCards: React.FC<{ customer: string }> = ({ customer }) => {
  const { data: appts } = useAppointmentQuery<IAppointment[]>();

  const filterAppts = appts?.filter((appt) => appt.customerName === customer);

  return (
    <>
      <div className="row">
        {filterAppts?.map(({ customerName }) => (
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
