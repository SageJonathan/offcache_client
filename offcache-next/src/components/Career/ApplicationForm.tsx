"use client";
import React, { useState } from "react";
// Styles imported globally in _app.tsx

interface ApplicationFormProps {
  position: string;
  onClose: () => void;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({
  position,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    position: position,
    experience: "",
    portfolio: "",
    availability: "",
    motivation: "",
    references: "",
    additionalInfo: "",
    resume: null as File | null,
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      resume: file,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application submitted:", formData);
    // Here you would typically send the data to your backend
    alert("Thank you for your application! We'll be in touch soon.");
    onClose();
  };

  const isBlogWriter = position === "Blog Content Writer";
  const isEventHost = position === "Event Host";

  return (
    <div className="application-form-overlay">
      <div className="application-form">
        <div className="application-form__header">
          <h2 className="application-form__title">Apply for {position}</h2>
          <button className="application-form__close" onClick={onClose}>
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="application-form__content">
          <div className="application-form__section">
            <h3 className="application-form__section-title">
              Personal Information
            </h3>

            <div className="application-form__row">
              <div className="application-form__field">
                <label htmlFor="firstName" className="application-form__label">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  className="application-form__input"
                  required
                />
              </div>

              <div className="application-form__field">
                <label htmlFor="lastName" className="application-form__label">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  className="application-form__input"
                  required
                />
              </div>
            </div>

            <div className="application-form__row">
              <div className="application-form__field">
                <label htmlFor="email" className="application-form__label">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="application-form__input"
                  required
                />
              </div>

              <div className="application-form__field">
                <label htmlFor="phone" className="application-form__label">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="application-form__input"
                />
              </div>
            </div>

            <div className="application-form__field">
              <label htmlFor="location" className="application-form__label">
                Your Location *
              </label>
              <input
                type="text"
                id="location"
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                className="application-form__input"
                placeholder={
                  isEventHost ? "e.g., Vancouver, BC" : "e.g., Remote"
                }
                required
              />
            </div>

            <div className="application-form__field">
              <label htmlFor="resume" className="application-form__label">
                Resume/CV *
              </label>
              <div className="application-form__file-upload">
                <input
                  type="file"
                  id="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="application-form__file-input"
                  required
                />
                <label
                  htmlFor="resume"
                  className="application-form__file-label"
                >
                  <span className="application-form__file-icon">📄</span>
                  <span className="application-form__file-text">
                    {formData.resume
                      ? formData.resume.name
                      : "Choose a file (PDF, DOC, DOCX)"}
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="application-form__section">
            <h3 className="application-form__section-title">
              Experience & Skills
            </h3>

            <div className="application-form__field">
              <label htmlFor="experience" className="application-form__label">
                {isBlogWriter
                  ? "Writing Experience"
                  : "Event/Community Experience"}{" "}
                *
              </label>
              <textarea
                id="experience"
                value={formData.experience}
                onChange={(e) =>
                  handleInputChange("experience", e.target.value)
                }
                className="application-form__textarea"
                rows={4}
                placeholder={
                  isBlogWriter
                    ? "Tell us about your writing experience, topics you've covered, and any relevant publications..."
                    : "Tell us about your experience hosting events, facilitating groups, or building communities..."
                }
                required
              />
            </div>

            <div className="application-form__field">
              <label htmlFor="portfolio" className="application-form__label">
                {isBlogWriter ? "Writing Portfolio" : "Portfolio/Examples"} *
              </label>
              <textarea
                id="portfolio"
                value={formData.portfolio}
                onChange={(e) => handleInputChange("portfolio", e.target.value)}
                className="application-form__textarea"
                rows={3}
                placeholder={
                  isBlogWriter
                    ? "Share links to your published articles, blog posts, or writing samples..."
                    : "Share links to photos, videos, or descriptions of events you've hosted..."
                }
                required
              />
            </div>

            {isEventHost && (
              <div className="application-form__field">
                <label
                  htmlFor="photography"
                  className="application-form__label"
                >
                  Photography Experience
                </label>
                <textarea
                  id="photography"
                  value={formData.additionalInfo}
                  onChange={(e) =>
                    handleInputChange("additionalInfo", e.target.value)
                  }
                  className="application-form__textarea"
                  rows={3}
                  placeholder="Tell us about your photography experience and equipment..."
                />
              </div>
            )}
          </div>

          <div className="application-form__section">
            <h3 className="application-form__section-title">
              Availability & Motivation
            </h3>

            <div className="application-form__field">
              <label htmlFor="availability" className="application-form__label">
                Availability *
              </label>
              <textarea
                id="availability"
                value={formData.availability}
                onChange={(e) =>
                  handleInputChange("availability", e.target.value)
                }
                className="application-form__textarea"
                rows={3}
                placeholder="How many hours per week can you commit? What's your preferred schedule?"
                required
              />
            </div>

            <div className="application-form__field">
              <label htmlFor="motivation" className="application-form__label">
                Why do you want to work with us? *
              </label>
              <textarea
                id="motivation"
                value={formData.motivation}
                onChange={(e) =>
                  handleInputChange("motivation", e.target.value)
                }
                className="application-form__textarea"
                rows={4}
                placeholder="Tell us why you're interested in this position and what you hope to contribute..."
                required
              />
            </div>
          </div>

          <div className="application-form__section">
            <h3 className="application-form__section-title">References</h3>

            <div className="application-form__field">
              <label htmlFor="references" className="application-form__label">
                References
              </label>
              <textarea
                id="references"
                value={formData.references}
                onChange={(e) =>
                  handleInputChange("references", e.target.value)
                }
                className="application-form__textarea"
                rows={3}
                placeholder="Please provide 2-3 professional references with their contact information..."
              />
            </div>
          </div>

          <div className="application-form__actions">
            <button
              type="button"
              className="application-form__cancel"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="application-form__submit">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
