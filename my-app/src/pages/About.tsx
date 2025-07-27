import React from "react";
import "./about.scss";

const About = () => {
  const values = [
    {
      title: "Authentic Connection",
      description:
        "We believe real relationships are built through shared experiences, not just conversations.",
      icon: "🤝",
    },
    {
      title: "Quality Over Quantity",
      description:
        "One meaningful connection is worth more than a hundred superficial ones.",
      icon: "✨",
    },
    {
      title: "Growth Through Movement",
      description:
        "Physical activity and mental growth go hand in hand for personal development.",
      icon: "🌱",
    },
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Former tech executive who realized the power of authentic human connections through outdoor adventures.",
      avatar: "A",
    },
    {
      name: "Sarah Kim",
      role: "Head of Community",
      bio: "Passionate about creating spaces where people can connect meaningfully through shared experiences.",
      avatar: "S",
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Product",
      bio: "Believes technology should bring people together in real life, not keep them apart.",
      avatar: "M",
    },
  ];

  return (
    <div className="about">
      <div className="about__hero">
        <div className="about__hero-content">
          <h1 className="about__hero-title">About OffCache</h1>
          <p className="about__hero-subtitle">
            We're building a world where meaningful connections happen through
            shared experiences, not just conversations.
          </p>
        </div>
      </div>

      <div className="about__container">
        <section className="about__story">
          <div className="about__story-content">
            <h2 className="about__section-title">Our Story</h2>
            <p className="about__story-text">
              OffCache was born from a simple realization: the best
              conversations happen when we're moving, exploring, or experiencing
              something together. Too many of us are stuck in endless coffee
              chats and networking events that feel transactional and shallow.
            </p>
            <p className="about__story-text">
              We believe real connections are built through shared experiences.
              Whether it's hiking a mountain, meditating in nature, or exploring
              a new city together, these moments create the foundation for
              authentic relationships that last.
            </p>
            <p className="about__story-text">
              Our platform matches you with people who share your interests in
              movement, mindfulness, and personal growth. No job titles, no
              elevator pitches—just real humans connecting through real
              experiences.
            </p>
          </div>
        </section>

        <section className="about__values">
          <div className="about__section-header">
            <h2 className="about__section-title">Our Values</h2>
            <p className="about__section-subtitle">
              The principles that guide everything we do
            </p>
          </div>

          <div className="about__values-grid">
            {values.map((value, index) => (
              <div key={index} className="about__value-card">
                <div className="about__value-icon">{value.icon}</div>
                <h3 className="about__value-title">{value.title}</h3>
                <p className="about__value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about__team">
          <div className="about__section-header">
            <h2 className="about__section-title">Meet Our Team</h2>
            <p className="about__section-subtitle">
              The humans behind OffCache
            </p>
          </div>

          <div className="about__team-grid">
            {team.map((member, index) => (
              <div key={index} className="about__team-card">
                <div className="about__team-avatar">{member.avatar}</div>
                <h3 className="about__team-name">{member.name}</h3>
                <p className="about__team-role">{member.role}</p>
                <p className="about__team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about__mission">
          <div className="about__mission-content">
            <h2 className="about__mission-title">Our Mission</h2>
            <p className="about__mission-text">
              To create a world where meaningful human connections are built
              through shared experiences, not just conversations. We're helping
              people find authentic relationships through movement, mindfulness,
              and personal growth.
            </p>
            <div className="about__mission-stats">
              <div className="about__mission-stat">
                <span className="about__mission-stat-number">500+</span>
                <span className="about__mission-stat-label">On Waitlist</span>
              </div>
              <div className="about__mission-stat">
                <span className="about__mission-stat-number">12</span>
                <span className="about__mission-stat-label">
                  Cities Planned
                </span>
              </div>
              <div className="about__mission-stat">
                <span className="about__mission-stat-number">Q3 2025</span>
                <span className="about__mission-stat-label">Launch Date</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about__join">
          <div className="about__join-content">
            <h2 className="about__join-title">
              Join Us in Building Something Meaningful
            </h2>
            <p className="about__join-subtitle">
              Be part of a community that values authentic connections and
              shared experiences.
            </p>
            <button className="about__join-button">Join Waitlist</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
