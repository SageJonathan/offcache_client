import React from "react";

interface DemographicsStepProps {
  data: any;
  onChange: (field: string, value: any) => void;
}

const DemographicsStep: React.FC<DemographicsStepProps> = ({
  data,
  onChange,
}) => {
  return (
    <div className="survey__step">
      <h2 className="survey__step-title">Basic Information</h2>
      <p className="survey__step-subtitle">
        Help us understand your background
      </p>

      <div className="survey__form">
        <div className="survey__form-group">
          <label className="survey__label">Age</label>
          <select
            className="survey__select"
            value={data.age}
            onChange={(e) => onChange("age", e.target.value)}
          >
            <option value="">Select your age</option>
            <option value="18-24">18-24</option>
            <option value="25-29">25-29</option>
            <option value="30-34">30-34</option>
            <option value="35-39">35-39</option>
            <option value="40-44">40-44</option>
            <option value="45-49">45-49</option>
            <option value="50+">50+</option>
          </select>
        </div>

        <div className="survey__form-group">
          <label className="survey__label">Gender</label>
          <select
            className="survey__select"
            value={data.gender}
            onChange={(e) => onChange("gender", e.target.value)}
          >
            <option value="">Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="non-binary">Non-binary</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
        </div>

        <div className="survey__form-group">
          <label className="survey__label">Phone Number (Optional)</label>
          <input
            type="tel"
            className="survey__input"
            placeholder="+1 (555) 123-4567"
            value={data.phone}
            onChange={(e) => onChange("phone", e.target.value)}
          />
          <small className="survey__help-text">
            For urgent match notifications and event updates
          </small>
        </div>
      </div>
    </div>
  );
};

export default DemographicsStep;
