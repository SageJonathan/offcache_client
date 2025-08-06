import { useState } from "react";
import ApplicationForm from "./ApplicationForm";
// Styles imported globally in _app.tsx

const Career = () => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");
  const openPositions = [
    {
      id: 1,
      title: "Blog Content Writer",
      department: "Content",
      location: "Remote (Canada)",
      type: "Contract",
      description:
        "Help us create compelling content that explores the intersection of technology and human connection. We're looking for writers who can research deeply and write clearly about meaningful relationships in the digital age.",
      requirements: [
        "Strong research skills and ability to find fresh angles on topics",
        "Clear, engaging writing style that connects with tech professionals",
        "Experience writing about technology, human psychology, or social connection",
        "Ability to generate fresh ideas and perspectives on human experience",
        "Understanding of the tech industry and its impact on relationships",
      ],
      benefits: [
        "Paid per article/blog post",
        "Flexible remote work schedule",
        "Creative freedom to explore topics you're passionate about",
        "Opportunity to build your portfolio and personal brand",
        "Collaboration with our community of writers",
      ],
    },
    {
      id: 2,
      title: "Event Host",
      department: "Events",
      location: "Multiple Cities (BC, ON, QC)",
      type: "Contract",
      description:
        "Facilitate meaningful connections at our community events. You'll be the friendly face that helps people feel comfortable and engaged, while capturing the magic of these moments through photography.",
      requirements: [
        "Outgoing personality with strong interpersonal skills",
        "Empathetic nature and ability to make people feel welcome",
        "Experience in event facilitation or community building",
        "Photography skills to capture event moments",
        "Ability to create inclusive, engaging environments",
      ],
      benefits: [
        "Paid per event hosted",
        "Opportunity to build meaningful relationships",
        "Creative freedom in event facilitation",
        "Professional photography portfolio building",
        "Flexible scheduling around your availability",
      ],
    },
  ];

  return (
    <div className="career">
      <div className="career__container">
        <div className="career__header">
          <h1 className="career__title">Join Our Mission</h1>
          <p className="career__subtitle">
            Help us build a world where meaningful connections happen naturally,
            not by accident.
          </p>
        </div>

        <div className="career__values">
          <h2 className="career__section-title">Our Values</h2>
          <div className="career__values-grid">
            <div className="career__value-item">
              <span className="career__value-icon">💬</span>
              <h3 className="career__value-title">Communication</h3>
              <p className="career__value-description">
                Honest dialogue and transparent feedback.
              </p>
            </div>
            <div className="career__value-item">
              <span className="career__value-icon">🎯</span>
              <h3 className="career__value-title">Results-Driven</h3>
              <p className="career__value-description">
                Focus on real outcomes, not busy schedules.
              </p>
            </div>
            <div className="career__value-item">
              <span className="career__value-icon">🤗</span>
              <h3 className="career__value-title">Supportive Team</h3>
              <p className="career__value-description">
                We lift each other up and celebrate wins together.
              </p>
            </div>
            <div className="career__value-item">
              <span className="career__value-icon">🎨</span>
              <h3 className="career__value-title">Creative Freedom</h3>
              <p className="career__value-description">
                Bring your unique perspective and creative solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="career__positions">
          <h2 className="career__section-title">Open Positions</h2>
          <div className="career__positions-list">
            {openPositions.map((position) => (
              <div key={position.id} className="career__position">
                <div className="career__position-header">
                  <div className="career__position-info">
                    <h3 className="career__position-title">{position.title}</h3>
                    <div className="career__position-meta">
                      <span className="career__position-department">
                        {position.department}
                      </span>
                      <span className="career__position-location">
                        {position.location}
                      </span>
                      <span className="career__position-type">
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <button
                    className="career__position-button"
                    onClick={() => {
                      setSelectedPosition(position.title);
                      setShowApplicationForm(true);
                    }}
                  >
                    Apply Now
                  </button>
                </div>
                <p className="career__position-description">
                  {position.description}
                </p>

                <div className="career__position-details">
                  <div className="career__position-section">
                    <h4 className="career__position-section-title">
                      Requirements
                    </h4>
                    <ul className="career__position-list">
                      {position.requirements.map((req, index) => (
                        <li key={index} className="career__position-list-item">
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="career__position-section">
                    <h4 className="career__position-section-title">Benefits</h4>
                    <ul className="career__position-list">
                      {position.benefits.map((benefit, index) => (
                        <li key={index} className="career__position-list-item">
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="career__contact">
          <h2 className="career__section-title">Don't See a Perfect Fit?</h2>
          <p className="career__contact-text">
            We're always looking for talented people who share our vision. Send
            us your resume and tell us how you'd like to contribute to our
            mission.
          </p>
          <div className="career__contact-actions">
            <a href="/contact" className="career__contact-button">
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {showApplicationForm && (
        <ApplicationForm
          position={selectedPosition}
          onClose={() => setShowApplicationForm(false)}
        />
      )}
    </div>
  );
};

export default Career;
