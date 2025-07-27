import React from "react";
import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            Join 2,847+ tech professionals building authentic connections
          </div>

          <h1 className="hero__title">
            Meaningful Connections,
            <span className="hero__title-highlight"> Not Just Networking</span>
          </h1>

          <p className="hero__subtitle">
            Get matched monthly with like-minded tech professionals for genuine
            conversations. No scripts, no awkward small talk—just authentic
            human connections.
          </p>

          <div className="hero__cta">
            <button className="hero__cta-primary">Start Your Journey</button>
            <button className="hero__cta-secondary">
              <span>How It Works</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M4 10H16M16 10L10 4M16 10L10 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">94%</span>
              <span className="hero__stat-label">Match Success Rate</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">156</span>
              <span className="hero__stat-label">Cities Worldwide</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">2.8k+</span>
              <span className="hero__stat-label">Active Members</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__cards">
            <div className="hero__card hero__card--1">
              <div className="hero__card-avatar">👩‍💻</div>
              <div className="hero__card-info">
                <span className="hero__card-name">Sarah Chen</span>
                <span className="hero__card-role">Product Manager</span>
              </div>
            </div>
            <div className="hero__card hero__card--2">
              <div className="hero__card-avatar">👨‍💻</div>
              <div className="hero__card-info">
                <span className="hero__card-name">Marcus Rodriguez</span>
                <span className="hero__card-role">Engineering Lead</span>
              </div>
            </div>
            <div className="hero__card hero__card--3">
              <div className="hero__card-avatar">👩‍💼</div>
              <div className="hero__card-info">
                <span className="hero__card-name">Alex Thompson</span>
                <span className="hero__card-role">Founder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
