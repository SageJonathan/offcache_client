import React from "react";

interface SocialPreferencesStepProps {
  data: any;
  onChange: (field: string, value: any) => void;
}

const SocialPreferencesStep: React.FC<SocialPreferencesStepProps> = ({
  data,
  onChange,
}) => {
  return (
    <div className="survey__step">
      <h2 className="survey__step-title">Social Preferences</h2>
      <p className="survey__step-subtitle">
        How do you like to connect with others?
      </p>

      <div className="survey__form">
        <div className="survey__form-group">
          <label className="survey__label">What's your social style?</label>
          <select
            className="survey__select"
            value={data.socialStyle}
            onChange={(e) => onChange("socialStyle", e.target.value)}
          >
            <option value="">Select your style</option>
            <option value="introvert">
              Introvert - I prefer deep 1-on-1 conversations
            </option>
            <option value="extrovert">
              Extrovert - I love group activities
            </option>
            <option value="ambivert">Ambivert - I enjoy both</option>
          </select>
        </div>

        <div className="survey__form-group">
          <label className="survey__label">
            What group size do you prefer for activities?
          </label>
          <select
            className="survey__select"
            value={data.groupSize}
            onChange={(e) => onChange("groupSize", e.target.value)}
          >
            <option value="">Select preference</option>
            <option value="1-on-1">1-on-1</option>
            <option value="small-group">Small group (2-4 people)</option>
            <option value="medium-group">Medium group (5-8 people)</option>
            <option value="large-group">Large group (8+ people)</option>
          </select>
        </div>

        <div className="survey__form-group">
          <label className="survey__label">
            How do you prefer to meet people?
          </label>
          <select
            className="survey__select"
            value={data.meetingStyle}
            onChange={(e) => onChange("meetingStyle", e.target.value)}
          >
            <option value="">Select preference</option>
            <option value="activity-based">Through shared activities</option>
            <option value="conversation">Over coffee/conversation</option>
            <option value="events">At events/meetups</option>
            <option value="flexible">I'm flexible</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SocialPreferencesStep;
