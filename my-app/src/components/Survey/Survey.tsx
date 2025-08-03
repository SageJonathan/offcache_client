import React, { useState } from "react";
import "./survey.scss";
import DemographicsStep from "./DemographicsStep";
import LocationStep from "./LocationStep";
import PhysicalActivitiesStep from "./PhysicalActivitiesStep";
import MentalActivitiesStep from "./MentalActivitiesStep";
import SocialPreferencesStep from "./SocialPreferencesStep";
import ScheduleStep from "./ScheduleStep";
import TopActivitiesStep from "./TopActivitiesStep";

const Survey = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [surveyData, setSurveyData] = useState({
    // Demographics
    age: "",
    gender: "",
    phone: "",

    // Location
    country: "",
    stateProvince: "",
    city: "",

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

  const totalSteps = 7;

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
        return <LocationStep data={surveyData} onChange={handleInputChange} />;
      case 2:
        return (
          <DemographicsStep data={surveyData} onChange={handleInputChange} />
        );
      case 3:
        return (
          <PhysicalActivitiesStep
            data={surveyData}
            onChange={handleInputChange}
          />
        );
      case 4:
        return (
          <MentalActivitiesStep
            data={surveyData}
            onChange={handleInputChange}
          />
        );
      case 5:
        return (
          <SocialPreferencesStep
            data={surveyData}
            onChange={handleInputChange}
          />
        );
      case 6:
        return <ScheduleStep data={surveyData} onChange={handleInputChange} />;
      case 7:
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

export default Survey;
