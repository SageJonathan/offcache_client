import React from "react";
import { physicalActivities } from "../../data/static/surveyData";

interface PhysicalActivitiesStepProps {
  data: any;
  onChange: (field: string, value: any) => void;
}

const PhysicalActivitiesStep: React.FC<PhysicalActivitiesStepProps> = ({
  data,
  onChange,
}) => {
  return (
    <div className="survey__step">
      <h2 className="survey__step-title">Physical Activities</h2>
      <p className="survey__step-subtitle">
        Which activities do you enjoy? Select all that apply
      </p>

      <div className="survey__activities-grid">
        {physicalActivities.map((activity) => (
          <div key={activity.key} className="survey__activity-item">
            <label className="survey__activity-checkbox">
              <input
                type="checkbox"
                checked={data[activity.key] || false}
                onChange={(e) => onChange(activity.key, e.target.checked)}
              />
              <span className="survey__activity-icon">{activity.icon}</span>
              <span className="survey__activity-name">{activity.name}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhysicalActivitiesStep;
