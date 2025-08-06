import React, { useState } from "react";
// Styles imported globally in _app.tsx

const SignupC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    agreeToMarketing: false,
  });

  const [step, setStep] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      // Handle final signup logic here
      console.log("Sign up:", formData);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  return (
    <div className="signup">
      <div className="signup__container">
        <div className="signup__content">
          <div className="signup__header">
            <h1 className="signup__title">Join Our Community</h1>
            <p className="signup__subtitle">
              Start your journey toward meaningful connections
            </p>
          </div>

          <form className="signup__form" onSubmit={handleSubmit}>
            {step === 1 ? (
              <>
                <div className="signup__form-row">
                  <div className="signup__form-group">
                    <label htmlFor="firstName" className="signup__label">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="signup__input"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>

                  <div className="signup__form-group">
                    <label htmlFor="lastName" className="signup__label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="signup__input"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div className="signup__form-group">
                  <label htmlFor="email" className="signup__label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="signup__input"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="signup__form-group">
                  <label htmlFor="password" className="signup__label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="signup__input"
                    placeholder="Create a password"
                    required
                  />
                </div>

                <div className="signup__form-group">
                  <label htmlFor="confirmPassword" className="signup__label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="signup__input"
                    placeholder="Confirm your password"
                    required
                  />
                </div>

                <div className="signup__checkboxes">
                  <label className="signup__checkbox-label">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className="signup__checkbox"
                      required
                    />
                    <span className="signup__checkbox-text">
                      I agree to the{" "}
                      <a href="#" className="signup__link">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="signup__link">
                        Privacy Policy
                      </a>
                    </span>
                  </label>

                  <label className="signup__checkbox-label">
                    <input
                      type="checkbox"
                      name="agreeToMarketing"
                      checked={formData.agreeToMarketing}
                      onChange={handleInputChange}
                      className="signup__checkbox"
                    />
                    <span className="signup__checkbox-text">
                      I'd like to receive updates about new features and events
                    </span>
                  </label>
                </div>

                <button type="submit" className="signup__submit">
                  Continue
                </button>
              </>
            ) : (
              <>
                <div className="signup__step-header">
                  <h2 className="signup__step-title">Tell Us About Yourself</h2>
                  <p className="signup__step-subtitle">
                    Help us match you with like-minded individuals
                  </p>
                </div>

                <div className="signup__form-group">
                  <label className="signup__label">
                    What interests you most?
                  </label>
                  <div className="signup__interests">
                    {[
                      "Movement & Fitness",
                      "Mindfulness & Meditation",
                      "Philosophy & Growth",
                      "Nature & Outdoors",
                      "Art & Culture",
                      "Technology & Innovation",
                    ].map((interest) => (
                      <label key={interest} className="signup__interest-option">
                        <input
                          type="checkbox"
                          className="signup__interest-checkbox"
                        />
                        <span className="signup__interest-text">
                          {interest}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="signup__form-group">
                  <label htmlFor="location" className="signup__label">
                    Where are you located?
                  </label>
                  <select id="location" className="signup__input">
                    <option value="">Select your city</option>
                    <option value="san-francisco">San Francisco</option>
                    <option value="los-angeles">Los Angeles</option>
                    <option value="new-york">New York</option>
                    <option value="chicago">Chicago</option>
                    <option value="austin">Austin</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="signup__form-group">
                  <label className="signup__label">
                    How did you hear about us?
                  </label>
                  <div className="signup__radio-group">
                    {[
                      "Social Media",
                      "Friend Recommendation",
                      "Online Search",
                      "Event or Conference",
                      "Other",
                    ].map((source) => (
                      <label key={source} className="signup__radio-option">
                        <input
                          type="radio"
                          name="hearAbout"
                          value={source.toLowerCase().replace(" ", "-")}
                          className="signup__radio"
                        />
                        <span className="signup__radio-text">{source}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="signup__form-actions">
                  <button
                    type="button"
                    className="signup__back-button"
                    onClick={handleBack}
                  >
                    Back
                  </button>
                  <button type="submit" className="signup__submit">
                    Complete Signup
                  </button>
                </div>
              </>
            )}
          </form>

          <div className="signup__divider">
            <span className="signup__divider-text">or</span>
          </div>

          <div className="signup__social">
            <button className="signup__social-button signup__social-button--google">
              <svg className="signup__social-icon" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </button>
          </div>

          <div className="signup__social">
            <button className="signup__social-button signup__social-button--outlook">
              <svg
                className="signup__social-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
              </svg>
              Continue with Microsoft Outlook
            </button>
          </div>

          <div className="signup__social">
            <button className="signup__social-button signup__social-button--github">
              <svg
                className="signup__social-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Continue with GitHub
            </button>
          </div>

          <div className="signup__footer">
            <p className="signup__footer-text">
              Already have an account?{" "}
              <a href="/signin" className="signup__footer-link">
                Sign in
              </a>
            </p>
          </div>
        </div>

        <div className="signup__image">
          <div className="signup__image-content">
            <h2 className="signup__image-title">Start Your Journey</h2>
            <p className="signup__image-subtitle">
              Join thousands of people building meaningful connections through
              shared experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupC;
