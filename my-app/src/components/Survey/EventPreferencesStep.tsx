import React from "react";

interface EventPreferencesStepProps {
  data: any;
  onChange: (field: string, value: any) => void;
}

const EventPreferencesStep: React.FC<EventPreferencesStepProps> = ({
  data,
  onChange,
}) => {
  return (
    <div className="survey__step">
      <h2 className="survey__step-title">Event Preferences</h2>
      <p className="survey__step-subtitle">
        These questions help us gauge interest in bigger events. Most events
        will span a couple to a few hours and are well within the city.
      </p>

      <div className="survey__preferences-container">
        {/* Full Day Activities */}
        <div className="survey__preference-section">
          <h3 className="survey__section-title">Full Day Activities</h3>
          <p className="survey__section-subtitle">
            How do you feel about full-day activities like climbing, spa
            getaways, etc.?
          </p>
          <div className="survey__radio-group">
            <label className="survey__radio-option">
              <input
                type="radio"
                name="multiDayEvents"
                value="very-interested"
                checked={data.multiDayEvents === "very-interested"}
                onChange={(e) => onChange("multiDayEvents", e.target.value)}
              />
              <span className="survey__radio-label">
                Very Interested - I love immersive full-day experiences
              </span>
            </label>
            <label className="survey__radio-option">
              <input
                type="radio"
                name="multiDayEvents"
                value="interested"
                checked={data.multiDayEvents === "interested"}
                onChange={(e) => onChange("multiDayEvents", e.target.value)}
              />
              <span className="survey__radio-label">
                Interested - I'd like to try them occasionally
              </span>
            </label>
            <label className="survey__radio-option">
              <input
                type="radio"
                name="multiDayEvents"
                value="neutral"
                checked={data.multiDayEvents === "neutral"}
                onChange={(e) => onChange("multiDayEvents", e.target.value)}
              />
              <span className="survey__radio-label">
                Neutral - I'm open to them
              </span>
            </label>
            <label className="survey__radio-option">
              <input
                type="radio"
                name="multiDayEvents"
                value="not-interested"
                checked={data.multiDayEvents === "not-interested"}
                onChange={(e) => onChange("multiDayEvents", e.target.value)}
              />
              <span className="survey__radio-label">
                Not Interested - I prefer shorter activities
              </span>
            </label>
          </div>
        </div>

        {/* International Retreats */}
        <div className="survey__preference-section">
          <h3 className="survey__section-title">International Retreats</h3>
          <p className="survey__section-subtitle">
            How do you feel about international retreats and travel experiences?
          </p>
          <div className="survey__radio-group">
            <label className="survey__radio-option">
              <input
                type="radio"
                name="internationalTravel"
                value="very-interested"
                checked={data.internationalTravel === "very-interested"}
                onChange={(e) =>
                  onChange("internationalTravel", e.target.value)
                }
              />
              <span className="survey__radio-label">
                Very Interested - I love international travel and retreats
              </span>
            </label>
            <label className="survey__radio-option">
              <input
                type="radio"
                name="internationalTravel"
                value="interested"
                checked={data.internationalTravel === "interested"}
                onChange={(e) =>
                  onChange("internationalTravel", e.target.value)
                }
              />
              <span className="survey__radio-label">
                Interested - I'd like to try international retreats occasionally
              </span>
            </label>
            <label className="survey__radio-option">
              <input
                type="radio"
                name="internationalTravel"
                value="neutral"
                checked={data.internationalTravel === "neutral"}
                onChange={(e) =>
                  onChange("internationalTravel", e.target.value)
                }
              />
              <span className="survey__radio-label">
                Neutral - I'm open to them if the retreat is compelling
              </span>
            </label>
            <label className="survey__radio-option">
              <input
                type="radio"
                name="internationalTravel"
                value="not-interested"
                checked={data.internationalTravel === "not-interested"}
                onChange={(e) =>
                  onChange("internationalTravel", e.target.value)
                }
              />
              <span className="survey__radio-label">
                Not Interested - I prefer local events only
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPreferencesStep;
