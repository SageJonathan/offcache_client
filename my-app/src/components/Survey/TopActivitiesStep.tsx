import React from "react";
import { allActivities } from "../../data/static/surveyData";

interface TopActivitiesStepProps {
  data: any;
  onChange: (field: string, value: any) => void;
}

const TopActivitiesStep: React.FC<TopActivitiesStepProps> = ({
  data,
  onChange,
}) => {
  const selectedActivities = allActivities.filter(
    (activity) => data[activity.key] === true
  );

  const handleTopActivityChange = (activityKey: string) => {
    const currentTop = data.topActivities || [];
    let newTop;

    if (currentTop.includes(activityKey)) {
      newTop = currentTop.filter((key: string) => key !== activityKey);
    } else if (currentTop.length < 5) {
      newTop = [...currentTop, activityKey];
    } else {
      // Replace the last one
      newTop = [...currentTop.slice(0, 4), activityKey];
    }

    onChange("topActivities", newTop);
  };

  return (
    <div className="survey__step">
      <h2 className="survey__step-title">Your Top 5 Activities</h2>
      <p className="survey__step-subtitle">
        Choose the 5 activities you'd most like to do with others
      </p>

      <div className="survey__top-activities">
        <div className="survey__selected-count">
          Selected: {data.topActivities?.length || 0}/5
        </div>

        <div className="survey__activities-grid">
          {selectedActivities.map((activity) => {
            const isSelected = data.topActivities?.includes(activity.key);
            return (
              <div key={activity.key} className="survey__activity-item">
                <label
                  className={`survey__activity-checkbox ${
                    isSelected ? "survey__activity-checkbox--selected" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isSelected || false}
                    onChange={() => handleTopActivityChange(activity.key)}
                  />
                  <span className="survey__activity-icon">{activity.icon}</span>
                  <span className="survey__activity-name">{activity.name}</span>
                </label>
              </div>
            );
          })}
        </div>

        {selectedActivities.length === 0 && (
          <p className="survey__no-activities">
            No activities selected yet. Please go back and select some
            activities first.
          </p>
        )}
      </div>
    </div>
  );
};

export default TopActivitiesStep;
