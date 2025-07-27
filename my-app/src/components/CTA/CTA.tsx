import React from "react";
import "./cta.scss";

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta__container">
        <div className="cta__content">
          <h2 className="cta__title">
            Forget the Script. <br />
            Clear the Cache. <br /> 
            Connect for Real.
          </h2>
          <p className="cta__subtitle">
            Join thousands of professionals who've found meaningful
            relationships, business partners, and lifelong friends through
            shared passions. No awkward networking events. Just authentic human
            connections.
          </p>

          <div className="cta__buttons">
            <button className="cta__button cta__button--primary">
              Start Your Free Trial
            </button>
            <button className="cta__button cta__button--secondary">
              Schedule a Call
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
              <span>14-day free trial</span>
            </div>
            <div className="cta__feature">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  fill="currentColor"
                />
              </svg>
              <span>Cancel anytime</span>
            </div>
            <div className="cta__feature">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  fill="currentColor"
                />
              </svg>
              <span>Vetted members only</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
