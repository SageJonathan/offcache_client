import React from "react";
import "./howItWorks.scss";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Share Your Story",
      description:
        "Tell us about your interests, passions, and what drives you. We focus on who you are, not just what you do.",
      icon: "🎯",
    },
    {
      number: "02",
      title: "Get Curated Matches",
      description:
        "Every month, we introduce you to one new member based on shared interests and complementary perspectives.",
      icon: "✨",
    },
    {
      number: "03",
      title: "Build & Connect",
      description:
        "Climb a mountain, float down a river, visit an art gallery, or join our monthly members-only events to deepen your network authentically.",
      icon: "🚀",
    },
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-it-works__container">
        <div className="how-it-works__header">
          <h2 className="how-it-works__title">How It Works</h2>
          <p className="how-it-works__subtitle">
            Simple, thoughtful, and designed for real connections
          </p>
        </div>

        <div className="how-it-works__steps">
          {steps.map((step, index) => (
            <div key={index} className="how-it-works__step">
              <div className="how-it-works__step-icon">
                <span className="how-it-works__step-number">{step.number}</span>
                <div className="how-it-works__step-emoji">{step.icon}</div>
              </div>
              <div className="how-it-works__step-content">
                <h3 className="how-it-works__step-title">{step.title}</h3>
                <p className="how-it-works__step-description">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="how-it-works__features">
          <div className="how-it-works__feature">
            <div className="how-it-works__feature-icon">🎯</div>
            <h4>Interest-Based Matching</h4>
            <p>Connect over shared passions, not just job titles</p>
          </div>
          <div className="how-it-works__feature">
            <div className="how-it-works__feature-icon">🤝</div>
            <h4>Monthly 1-on-1 Matches</h4>
            <p>Quality over quantity with thoughtfully curated introductions</p>
          </div>
          <div className="how-it-works__feature">
            <div className="how-it-works__feature-icon">🎉</div>
            <h4>Exclusive Monthly Events</h4>
            <p>Members-only gatherings to foster deeper community bonds</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
