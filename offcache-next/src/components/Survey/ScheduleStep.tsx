import React from "react";
import { days, times } from "../../data/static/surveyData";

interface ScheduleStepProps {
  data: any;
  onChange: (field: string, value: any) => void;
}

const ScheduleStep: React.FC<ScheduleStepProps> = ({ data, onChange }) => {
  return (
    <div className="survey__step">
      <h2 className="survey__step-title">Schedule & Availability</h2>

      <div className="survey__form">
        <div className="survey__form-group">
          <label className="survey__label">
            Which days are you typically available?
          </label>
          <div className="survey__checkboxes">
            {days.map((day) => (
              <label key={day} className="survey__checkbox">
                <input
                  type="checkbox"
                  checked={data.availability.includes(day)}
                  onChange={(e) => {
                    const newAvailability = e.target.checked
                      ? [...data.availability, day]
                      : data.availability.filter((d: string) => d !== day);
                    onChange("availability", newAvailability);
                  }}
                />
                <span>{day}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="survey__form-group">
          <label className="survey__label">
            What time of day do you prefer?
          </label>
          <select
            className="survey__select"
            value={data.timePreference}
            onChange={(e) => onChange("timePreference", e.target.value)}
          >
            <option value="">Select preference</option>
            {times.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ScheduleStep;
