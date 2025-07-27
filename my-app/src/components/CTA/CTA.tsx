import React from "react";
import "./cta.scss";

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta__container">
        <div className="cta__content">
          <h2 className="cta__title">Ready for Real Connections?</h2>
          <p className="cta__subtitle">
            Join thousands of humans who've found meaningful relationships
            through shared passions for movement and growth
          </p>

          <div className="cta__buttons">
            <button className="cta__button cta__button--primary">
              Start Your Journey
            </button>
            <button className="cta__button cta__button--secondary">
              Learn More
            </button>
          </div>

          <div className="cta__features">
            <div className="cta__feature">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  fill="currentColor"
                />
              </svg>
              <span>No awkward small talk</span>
            </div>
            <div className="cta__feature">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  fill="currentColor"
                />
              </svg>
              <span>Shared experiences</span>
            </div>
            <div className="cta__feature">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  fill="currentColor"
                />
              </svg>
              <span>Authentic conversations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
