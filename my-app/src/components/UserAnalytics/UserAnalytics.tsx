import { useState } from "react";
import "./userAnalytics.scss";
import {
  userAnalyticsQuestions,
  surveySteps,
} from "../../data/static/userAnalyticsData";

const UserAnalytics = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [surveyData, setSurveyData] = useState({
    // Demographics
    dateOfBirth: "",
    countryOfOrigin: "",
    currentCountry: "",
    dreamCountry: "",

    // Professional Background
    fieldOfWork: "",
    jobTitle: "",
    yearsInIndustry: "",
    income: "",

    // Usage Patterns
    howDidYouHear: "",
    primaryGoal: "",
    frequency: "",
    preferredActivities: [],

    // Feedback
    biggestChallenge: "",
    platformExpectations: "",
    concerns: "",
    willingnessToPay: "",

    // Business Insights
    referralLikelihood: "",
    featureImportance: [],
    improvementAreas: "",
    successMetrics: "",
  });

  const totalSteps = surveySteps.length;

  const handleInputChange = (field: string, value: any) => {
    setSurveyData(
      (prev) =>
        ({
          ...prev,
          [field]: value,
        } as typeof surveyData)
    );
  };

  const handleMultiSelectChange = (field: string, value: string) => {
    setSurveyData((prev) => {
      const currentValues = (prev as any)[field] || [];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((item: string) => item !== value)
        : [...currentValues, value];
      return {
        ...prev,
        [field]: newValues,
      };
    });
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
    console.log("User Analytics Survey completed:", surveyData);
    // Handle survey submission
  };

  const renderStep = () => {
    const currentStepData = surveySteps[currentStep - 1];
    let questions: any[] = [];

    switch (currentStep) {
      case 1:
        questions = userAnalyticsQuestions.demographics;
        break;
      case 2:
        questions = userAnalyticsQuestions.professional;
        break;
      case 3:
        questions = userAnalyticsQuestions.usage;
        break;
      case 4:
        questions = userAnalyticsQuestions.feedback;
        break;
      case 5:
        questions = userAnalyticsQuestions.businessInsights;
        break;
      default:
        return null;
    }

    return (
      <div className="user-analytics__step">
        <h2 className="user-analytics__step-title">{currentStepData.title}</h2>
        <p className="user-analytics__step-subtitle">
          {currentStepData.subtitle}
        </p>

        <div className="user-analytics__form">
          {questions.map((question) => (
            <div key={question.key} className="user-analytics__form-group">
              <label className="user-analytics__label">{question.label}</label>

              {question.type === "select" && (
                <select
                  className="user-analytics__select"
                  value={
                    surveyData[question.key as keyof typeof surveyData] || ""
                  }
                  onChange={(e) =>
                    handleInputChange(question.key, e.target.value)
                  }
                >
                  <option value="">Select an option</option>
                  {question.options.map((option: string) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}

              {question.type === "text" && (
                <input
                  type="text"
                  className="user-analytics__input"
                  placeholder={question.placeholder}
                  value={
                    surveyData[question.key as keyof typeof surveyData] || ""
                  }
                  onChange={(e) =>
                    handleInputChange(question.key, e.target.value)
                  }
                />
              )}

              {question.type === "date" && (
                <input
                  type="date"
                  className="user-analytics__input"
                  placeholder={question.placeholder}
                  value={
                    surveyData[question.key as keyof typeof surveyData] || ""
                  }
                  onChange={(e) =>
                    handleInputChange(question.key, e.target.value)
                  }
                />
              )}

              {question.type === "multiselect" && (
                <div className="user-analytics__multiselect">
                  {question.options.map((option: string) => {
                    const isSelected = (
                      (surveyData[
                        question.key as keyof typeof surveyData
                      ] as string[]) || []
                    ).includes(option);
                    return (
                      <label key={option} className="user-analytics__checkbox">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() =>
                            handleMultiSelectChange(question.key, option)
                          }
                        />
                        <span>{option}</span>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="user-analytics">
      <div className="user-analytics__container">
        <div className="user-analytics__header">
          <h1 className="user-analytics__title">Help Us Build Better</h1>
          <p className="user-analytics__subtitle">
            Your insights help us create a better platform for tech
            professionals like you
          </p>

          <div className="user-analytics__progress">
            <div className="user-analytics__progress-bar">
              <div
                className="user-analytics__progress-fill"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
            <span className="user-analytics__progress-text">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
        </div>

        <div className="user-analytics__content">{renderStep()}</div>

        <div className="user-analytics__navigation">
          {currentStep > 1 && (
            <button
              className="user-analytics__btn user-analytics__btn--secondary"
              onClick={prevStep}
            >
              Back
            </button>
          )}

          {currentStep < totalSteps ? (
            <button
              className="user-analytics__btn user-analytics__btn--primary"
              onClick={nextStep}
            >
              Next
            </button>
          ) : (
            <button
              className="user-analytics__btn user-analytics__btn--primary"
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

export default UserAnalytics;
