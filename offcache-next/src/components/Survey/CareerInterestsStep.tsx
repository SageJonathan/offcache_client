"use client";
import React from "react";
import { careerInterests } from "../../data/static/surveyData";

interface CareerInterestsStepProps {
  data: any;
  onChange: (field: string, value: any) => void;
}

const CareerInterestsStep: React.FC<CareerInterestsStepProps> = ({
  data,
  onChange,
}) => {
  return (
    <div className="survey__step">
      <h2 className="survey__step-title">Career & Professional Interests</h2>
      <p className="survey__step-subtitle">
        Which professional and career-related topics interest you? Select all
        that apply
      </p>

      <div className="survey__activities-grid">
        {careerInterests.map((interest) => (
          <div key={interest.key} className="survey__activity-item">
            <label className="survey__activity-checkbox">
              <input
                type="checkbox"
                checked={data[interest.key] || false}
                onChange={(e) => onChange(interest.key, e.target.checked)}
              />
              <span className="survey__activity-icon">{interest.icon}</span>
              <span className="survey__activity-name">{interest.name}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerInterestsStep;
