import React from "react";
import "./howItWorks.scss";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Share What Moves You",
      description:
        "Tell us about your love for movement—hiking, climbing, yoga—or your curiosity about philosophy, mindfulness, and personal growth. We focus on what makes you human.",
      icon: "🌱",
    },
    {
      number: "02",
      title: "Meet Someone Like You",
      description:
        "Every month, we introduce you to one person who shares your interests in movement or mental growth. Whether it's a fellow hiker or someone exploring the same questions.",
      icon: "✨",
    },
    {
      number: "03",
      title: "Connect Through Experience",
      description:
        "Meet for a hike, join a meditation session, or attend our monthly community events like spa days and forest walks. Real connections happen through shared experiences.",
      icon: "🚀",
    },
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-it-works__container">
        <div className="how-it-works__header">
          <h2 className="how-it-works__title">How It Works</h2>
          <p className="how-it-works__subtitle">
            Simple, thoughtful, and designed for authentic human connections
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
      </div>
    </section>
  );
};

export default HowItWorks;
