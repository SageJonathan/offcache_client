import React, { useState } from "react";
import "./survey.scss";

const Survey = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [surveyData, setSurveyData] = useState({
    // Demographics
    age: "",
    gender: "",
    email: "",
    phone: "",

    // Location
    country: "",
    stateProvince: "",
    city: "",

    // Tech Work
    techRole: "",
    workStyle: "",
    experienceLevel: "",

    // Physical Activities (Yes/No)
    basketball: false,
    climbing: false,
    cycling: false,
    gym: false,
    hiking: false,
    martialArts: false,
    meditation: false,
    pickleball: false,
    running: false,
    skiing: false,
    snowboarding: false,
    soccer: false,
    swimming: false,
    tennis: false,
    yoga: false,
    dance: false,

    // Mental Activities (Yes/No)
    reading: false,
    writing: false,
    coding: false,
    gaming: false,
    chess: false,
    puzzles: false,
    art: false,
    music: false,
    cooking: false,
    photography: false,
    languages: false,
    theatre: false,

    // Social Preferences
    socialStyle: "",
    groupSize: "",
    meetingStyle: "",

    // Schedule
    availability: [],
    timePreference: "",

    // Top 5 Activities
    topActivities: [],
  });

  const totalSteps = 8;

  const handleInputChange = (field: string, value: any) => {
    setSurveyData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Survey completed:", surveyData);
    // Handle survey submission
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <DemographicsStep data={surveyData} onChange={handleInputChange} />
        );
      case 2:
        return <LocationStep data={surveyData} onChange={handleInputChange} />;
      case 3:
        return <TechWorkStep data={surveyData} onChange={handleInputChange} />;
      case 4:
        return (
          <PhysicalActivitiesStep
            data={surveyData}
            onChange={handleInputChange}
          />
        );
      case 5:
        return (
          <MentalActivitiesStep
            data={surveyData}
            onChange={handleInputChange}
          />
        );
      case 6:
        return (
          <SocialPreferencesStep
            data={surveyData}
            onChange={handleInputChange}
          />
        );
      case 7:
        return <ScheduleStep data={surveyData} onChange={handleInputChange} />;
      case 8:
        return (
          <TopActivitiesStep data={surveyData} onChange={handleInputChange} />
        );
      default:
        return null;
    }
  };

  return (
    <div className="survey">
      <div className="survey__container">
        <div className="survey__header">
          <h1 className="survey__title">Help Us Find Your Perfect Matches</h1>
          <p className="survey__subtitle">
            Tell us about your interests and preferences so we can connect you
            with like-minded people
          </p>

          <div className="survey__progress">
            <div className="survey__progress-bar">
              <div
                className="survey__progress-fill"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
            <span className="survey__progress-text">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
        </div>

        <div className="survey__content">{renderStep()}</div>

        <div className="survey__navigation">
          {currentStep > 1 && (
            <button
              className="survey__btn survey__btn--secondary"
              onClick={prevStep}
            >
              Back
            </button>
          )}

          {currentStep < totalSteps ? (
            <button
              className="survey__btn survey__btn--primary"
              onClick={nextStep}
            >
              Next
            </button>
          ) : (
            <button
              className="survey__btn survey__btn--primary"
              onClick={handleSubmit}
            >
              Complete Survey
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const DemographicsStep = ({ data, onChange }: any) => {
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
          <label className="survey__label">Email Address</label>
          <input
            type="email"
            className="survey__input"
            placeholder="your.email@example.com"
            value={data.email}
            onChange={(e) => onChange("email", e.target.value)}
          />
          <small className="survey__help-text">
            We'll use this to send you match notifications and updates
          </small>
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

const LocationStep = ({ data, onChange }: any) => {
  const locationData = {
    Canada: {
      "British Columbia": [
        "Vancouver",
        "Kelowna",
        "Victoria",
      ],
      Alberta: [
        "Calgary",
        "Edmonton",
      ]
    },
  };

  const countries = Object.keys(locationData);
  const statesProvinces = data.country
    ? Object.keys(locationData[data.country] || {})
    : [];
  const cities =
    data.country && data.stateProvince
      ? locationData[data.country][data.stateProvince] || []
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
              {cities.map((city) => (
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

const TechWorkStep = ({ data, onChange }: any) => {
  return (
    <div className="survey__step">
      <h2 className="survey__step-title">Your Tech Work</h2>
      <p className="survey__step-subtitle">
        Tell us about your professional background
      </p>

      <div className="survey__form">
        <div className="survey__form-group">
          <label className="survey__label">
            What's your primary tech role?
          </label>
          <select
            className="survey__select"
            value={data.techRole}
            onChange={(e) => onChange("techRole", e.target.value)}
          >
            <option value="">Select your role</option>
            <option value="software-engineer">Software Engineer</option>
            <option value="product-manager">Product Manager</option>
            <option value="data-scientist">Data Scientist</option>
            <option value="designer">Designer</option>
            <option value="devops">DevOps</option>
            <option value="qa">QA/Testing</option>
            <option value="founder">Founder/Entrepreneur</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="survey__form-group">
          <label className="survey__label">How do you prefer to work?</label>
          <select
            className="survey__select"
            value={data.workStyle}
            onChange={(e) => onChange("workStyle", e.target.value)}
          >
            <option value="">Select your preference</option>
            <option value="remote">Fully remote</option>
            <option value="hybrid">Hybrid</option>
            <option value="office">Office-based</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>

        <div className="survey__form-group">
          <label className="survey__label">Years of experience</label>
          <select
            className="survey__select"
            value={data.experienceLevel}
            onChange={(e) => onChange("experienceLevel", e.target.value)}
          >
            <option value="">Select experience level</option>
            <option value="0-2">0-2 years</option>
            <option value="3-5">3-5 years</option>
            <option value="6-10">6-10 years</option>
            <option value="10+">10+ years</option>
          </select>
        </div>
      </div>
    </div>
  );
};

const PhysicalActivitiesStep = ({ data, onChange }: any) => {
  const activities = [
    { key: "basketball", name: "Basketball", icon: "🏀" },
    { key: "climbing", name: "Climbing", icon: "🧗‍♂️" },
    { key: "cycling", name: "Cycling", icon: "🚴‍♂️" },
    { key: "gym", name: "Gym / Weight Training", icon: "🏋️‍♂️" },
    { key: "hiking", name: "Hiking", icon: "🥾" },
    { key: "martialArts", name: "Martial Arts", icon: "🥋" },
    { key: "meditation", name: "Meditation", icon: "🧘‍♂️" },
    { key: "pickleball", name: "Pickleball", icon: "🏓" },
    { key: "running", name: "Running", icon: "🏃‍♂️" },
    { key: "skiing", name: "Skiing", icon: "⛷️" },
    { key: "snowboarding", name: "Snowboarding", icon: "🏂" },
    { key: "soccer", name: "Soccer", icon: "⚽" },
    { key: "swimming", name: "Swimming", icon: "🏊‍♂️" },
    { key: "tennis", name: "Tennis", icon: "🎾" },
    { key: "yoga", name: "Yoga", icon: "🧘‍♀️" },
    { key: "dance", name: "Dance", icon: "💃" },
  ];

  return (
    <div className="survey__step">
      <h2 className="survey__step-title">Physical Activities</h2>
      <p className="survey__step-subtitle">
        Which activities do you enjoy? Select all that apply
      </p>

      <div className="survey__activities-grid">
        {activities.map((activity) => (
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

const MentalActivitiesStep = ({ data, onChange }: any) => {
  const activities = [
    { key: "reading", name: "Reading", icon: "📚" },
    { key: "writing", name: "Writing", icon: "✍️" },
    { key: "coding", name: "Coding/Programming", icon: "💻" },
    { key: "gaming", name: "Gaming", icon: "🎮" },
    { key: "chess", name: "Chess", icon: "♟️" },
    { key: "puzzles", name: "Puzzles", icon: "🧩" },
    { key: "art", name: "Art", icon: "🎨" },
    { key: "music", name: "Music", icon: "🎵" },
    { key: "cooking", name: "Cooking", icon: "👨‍🍳" },
    { key: "photography", name: "Photography", icon: "📸" },
    { key: "languages", name: "Languages", icon: "🗣️" },
    { key: "theatre", name: "Improv / Theatre Games", icon: "🎭" },
  ];

  return (
    <div className="survey__step">
      <h2 className="survey__step-title">Mental & Learning Activities</h2>
      <p className="survey__step-subtitle">
        Which activities do you enjoy? Select all that apply
      </p>

      <div className="survey__activities-grid">
        {activities.map((activity) => (
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

const SocialPreferencesStep = ({ data, onChange }: any) => {
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

const ScheduleStep = ({ data, onChange }: any) => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const times = [
    "Early Morning (6AM-9AM)",
    "Late Morning (9AM-12PM)",
    "Early Afternoon (12PM-3PM)",
    "Late Afternoon (3PM-6PM)",
    "Early Evening (6PM-8PM)",
    "Late Evening (8PM-10PM)",
    "Night (10PM-12AM)",
    "Late Night (12AM-2AM)",
    "Early Dawn (2AM-6AM)"
  ];
  

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

const TopActivitiesStep = ({ data, onChange }: any) => {
  // Get all selected activities
  const allActivities = [
    // Physical activities
    { key: "basketball", name: "Basketball", icon: "🏀", type: "physical" },
    { key: "climbing", name: "Climbing", icon: "🧗‍♂️", type: "physical" },
    { key: "cycling", name: "Cycling", icon: "🚴‍♂️", type: "physical" },
    { key: "gym", name: "Gym / Weight Training", icon: "🏋️‍♂️", type: "physical" },
    { key: "hiking", name: "Hiking", icon: "🥾", type: "physical" },
    { key: "martialArts", name: "Martial Arts", icon: "🥋", type: "physical" },
    { key: "meditation", name: "Meditation", icon: "🧘‍♂️", type: "physical" },
    { key: "pickleball", name: "Pickleball", icon: "🏓", type: "physical" },
    { key: "running", name: "Running", icon: "🏃‍♂️", type: "physical" },
    { key: "skiing", name: "Skiing", icon: "⛷️", type: "physical" },
    { key: "snowboarding", name: "Snowboarding", icon: "🏂", type: "physical" },
    { key: "soccer", name: "Soccer", icon: "⚽", type: "physical" },
    { key: "swimming", name: "Swimming", icon: "🏊‍♂️", type: "physical" },
    { key: "tennis", name: "Tennis", icon: "🎾", type: "physical" },
    { key: "yoga", name: "Yoga", icon: "🧘‍♀️", type: "physical" },
    { key: "dance", name: "Dance", icon: "💃", type: "physical" },

    // Mental activities
    { key: "reading", name: "Reading", icon: "📚", type: "mental" },
    { key: "writing", name: "Writing", icon: "✍️", type: "mental" },
    { key: "coding", name: "Coding/Programming", icon: "💻", type: "mental" },
    { key: "gaming", name: "Gaming", icon: "🎮", type: "mental" },
    { key: "chess", name: "Chess", icon: "♟️", type: "mental" },
    { key: "puzzles", name: "Puzzles", icon: "🧩", type: "mental" },
    { key: "art", name: "Art", icon: "🎨", type: "mental" },
    { key: "music", name: "Music", icon: "🎵", type: "mental" },
    { key: "cooking", name: "Cooking", icon: "👨‍🍳", type: "mental" },
    { key: "photography", name: "Photography", icon: "📸", type: "mental" },
    { key: "languages", name: "Languages", icon: "🗣️", type: "mental" },
    {
      key: "theatre",
      name: "Improv / Theatre Games",
      icon: "🎭",
      type: "mental",
    },
  ];

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

export default Survey;
