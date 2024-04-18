import Flatpickr from "react-flatpickr";
import { BusinessHour } from "./Form";

const BusinessHoursSetter: React.FC<{
  businessHours: BusinessHour[];
  onTimeChange: (index: number, field: "start" | "end", value: Date) => void;
  onCheckboxChange: (index: number) => void;
  onShowBusinessHoursSetter: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({
  businessHours,
  onTimeChange,
  onCheckboxChange,
  onShowBusinessHoursSetter,
}) => {
  return (
    <>
      <button
        className="btn btn-primary "
        onClick={() => onShowBusinessHoursSetter(false)}
      >
        <i className="bi bi-arrow-left"></i>
      </button>
      <h3 className="mb-5 text-center">Set Business Hours</h3>
      <div className="form-group">
        {businessHours.map((item, index) => (
          <div key={index} className="mb-4">
            <label className="fw-bold mb-2">{item.day}</label>
            <div className="row align-items-center ">
              <div className="col-9">
                <div className="d-flex align-items-center gap-1">
                  <Flatpickr
                    className="form-control bg-transparent"
                    value={item.start}
                    onChange={([date]) => onTimeChange(index, "start", date)}
                    options={{
                      enableTime: true,
                      noCalendar: true,
                      dateFormat: "H:i",
                      disableMobile: true,
                    }}
                    placeholder="Start Time"
                    required
                  />
                  <span className="bi-arrow-right"></span>
                  <Flatpickr
                    className="form-control bg-transparent"
                    value={item.end}
                    onChange={([date]) => onTimeChange(index, "end", date)}
                    options={{
                      enableTime: true,
                      noCalendar: true,
                      dateFormat: "H:i",
                      disableMobile: true,
                    }}
                    placeholder="End Time"
                    required
                  />
                </div>
              </div>
              <div className="col-3">
                <div className="switch">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => onCheckboxChange(index)}
                  />
                  <div className={`shutter ${item.checked && "bg-primary"}`}>
                    <span className="lbl-off"></span>
                    <span className="lbl-on"></span>
                    <div
                      className={`slider ${
                        item.checked ? "bg-white" : "bg-primary"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="text-center">
          <button
            className="btn btn-primary"
            onClick={() => onShowBusinessHoursSetter(false)}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default BusinessHoursSetter;
