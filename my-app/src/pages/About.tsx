import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about__hero">
        <div className="about__hero-content">
          <h1 className="about__hero-title">This Is About You</h1>
          <p className="about__hero-subtitle">
            You're tired of networking that feels transactional. You want real
            connections with people who share your interests in movement,
            growth, and authentic experiences.
          </p>
        </div>
      </div>

      <div className="about__container">
        <section className="about__story">
          <div className="about__story-content">
            <h2 className="about__section-title">Why We Built This For You</h2>
            <p className="about__story-text">
              We believe the best conversations happen when you're doing
              something together—hiking, meditating, exploring. Not sitting
              across from each other with coffee and business cards.
            </p>
            <p className="about__story-text">
              OffCache matches you with people who share your curiosity for
              movement, mindfulness, and personal growth. No job titles. No
              elevator pitches. Just real humans connecting through real
              experiences.
            </p>
          </div>
        </section>

        <section className="about__values">
          <div className="about__section-header">
            <h2 className="about__section-title">What You Can Expect</h2>
            <p className="about__section-subtitle">
              Authentic connections built around shared interests
            </p>
          </div>

          <div className="about__values-grid">
            <div className="about__value-card">
              <div className="about__value-icon">🤝</div>
              <h3 className="about__value-title">Real Connections</h3>
              <p className="about__value-description">
                Meet people who share your interests in movement, mindfulness,
                and growth—not just your industry.
              </p>
            </div>
            <div className="about__value-card">
              <div className="about__value-icon">✨</div>
              <h3 className="about__value-title">Quality Over Quantity</h3>
              <p className="about__value-description">
                One meaningful connection is worth more than a hundred
                superficial networking events.
              </p>
            </div>
            <div className="about__value-card">
              <div className="about__value-icon">🌱</div>
              <h3 className="about__value-title">Growth Together</h3>
              <p className="about__value-description">
                Build relationships through shared experiences that push you
                both to grow.
              </p>
            </div>
          </div>
        </section>

        <section className="about__join">
          <div className="about__join-content">
            <h2 className="about__join-title">Ready to Connect?</h2>
            <p className="about__join-subtitle">
              Join the waitlist and be among the first to experience meaningful
              connections through shared experiences.
            </p>
            <button className="about__join-button">Join Waitlist</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
