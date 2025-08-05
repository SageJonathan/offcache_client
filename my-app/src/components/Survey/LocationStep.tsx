import React from "react";
import { locationData } from "../../data/static/surveyData";

interface LocationStepProps {
  data: any;
  onChange: (field: string, value: any) => void;
}

const LocationStep: React.FC<LocationStepProps> = ({ data, onChange }) => {
  const countries = Object.keys(locationData);
  const statesProvinces = data.country
    ? Object.keys(locationData[data.country as keyof typeof locationData] || {})
    : [];
  const cities =
    data.country && data.stateProvince
      ? locationData[data.country as keyof typeof locationData]?.[
          data.stateProvince as keyof (typeof locationData)["Canada"]
        ] || []
      : [];

  const handleCountryChange = (country: string) => {
    onChange("country", country);
    onChange("stateProvince", "");
    onChange("city", "");
  };

  const handleStateProvinceChange = (stateProvince: string) => {
    onChange("stateProvince", stateProvince);
    onChange("city", "");
  };

  return (
    <div className="survey__step">
      <h2 className="survey__step-title">Your Home Base</h2>
      <p className="survey__step-subtitle">
        Tell us where you're located - this helps us find local matches
      </p>

      <div className="survey__location-note">
        <div className="survey__note">
          <span className="survey__note-icon">🌍</span>
          <div className="survey__note-content">
            <strong>Currently Serving Major Western Canadian Cities</strong>
            <p>
              We're currently focused on selected cities for our initial launch.
            </p>
          </div>
        </div>
      </div>

      <div className="survey__form">
        <div className="survey__form-group">
          <label className="survey__label">Country</label>
          <select
            className="survey__select"
            value={data.country}
            onChange={(e) => handleCountryChange(e.target.value)}
          >
            <option value="">Select your country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        {data.country && (
          <div className="survey__form-group">
            <label className="survey__label">Province/Territory</label>
            <select
              className="survey__select"
              value={data.stateProvince}
              onChange={(e) => handleStateProvinceChange(e.target.value)}
            >
              <option value="">Select your province/territory</option>
              {statesProvinces.map((stateProvince) => (
                <option key={stateProvince} value={stateProvince}>
                  {stateProvince}
                </option>
              ))}
            </select>
          </div>
        )}

        {data.country && data.stateProvince && (
          <div className="survey__form-group">
            <label className="survey__label">City</label>
            <select
              className="survey__select"
              value={data.city}
              onChange={(e) => onChange("city", e.target.value)}
            >
              <option value="">Select your city</option>
              {cities.map((city: string) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        )}

        {!data.country && (
          <div className="survey__form-group">
            <label className="survey__label">City (if not listed above)</label>
            <input
              type="text"
              className="survey__input"
              placeholder="Enter your city name"
              value={data.city}
              onChange={(e) => onChange("city", e.target.value)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationStep;
