import React from "react";
import "./community.scss";

const Community = () => {
  const events = [
    {
      id: 1,
      title: "Monthly Forest Walk",
      date: "March 15, 2024",
      location: "Golden Gate Park, SF",
      description:
        "Join us for a peaceful walk through the forest, followed by mindful conversation and connection.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      attendees: 24,
      type: "Nature",
    },
    {
      id: 2,
      title: "Sunset Meditation Circle",
      date: "March 22, 2024",
      location: "Baker Beach, SF",
      description:
        "Experience mindfulness together as the sun sets over the ocean. All levels welcome.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      attendees: 18,
      type: "Mindfulness",
    },
    {
      id: 3,
      title: "Hiking & Philosophy",
      date: "March 29, 2024",
      location: "Mount Tamalpais",
      description:
        "Combine physical movement with deep conversations about life, purpose, and growth.",
      image:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop",
      attendees: 12,
      type: "Movement",
    },
  ];

  const members = [
    { name: "Sarah", role: "Hiking Enthusiast", avatar: "S" },
    { name: "Marcus", role: "Mindfulness Explorer", avatar: "M" },
    { name: "Alex", role: "Philosophy Lover", avatar: "A" },
    { name: "Emma", role: "Nature Walker", avatar: "E" },
    { name: "David", role: "Growth Seeker", avatar: "D" },
    { name: "Lisa", role: "Connection Builder", avatar: "L" },
  ];

  return (
    <div className="community">
      <div className="community__hero">
        <div className="community__hero-content">
          <h1 className="community__hero-title">Our Community</h1>
          <p className="community__hero-subtitle">
            Connect with like-minded humans through shared experiences,
            meaningful conversations, and authentic relationships.
          </p>
        </div>
      </div>

      <div className="community__container">
        <section className="community__events">
          <div className="community__section-header">
            <h2 className="community__section-title">Upcoming Events</h2>
            <p className="community__section-subtitle">
              Join our monthly community gatherings designed for authentic
              connection
            </p>
          </div>

          <div className="community__events-grid">
            {events.map((event) => (
              <div key={event.id} className="community__event-card">
                <div className="community__event-image">
                  <img src={event.image} alt={event.title} />
                  <div className="community__event-type">{event.type}</div>
                </div>
                <div className="community__event-content">
                  <h3 className="community__event-title">{event.title}</h3>
                  <div className="community__event-meta">
                    <span className="community__event-date">{event.date}</span>
                    <span className="community__event-location">
                      {event.location}
                    </span>
                  </div>
                  <p className="community__event-description">
                    {event.description}
                  </p>
                  <div className="community__event-footer">
                    <span className="community__event-attendees">
                      {event.attendees} attending
                    </span>
                    <button className="community__event-button">
                      Join Event
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="community__members">
          <div className="community__section-header">
            <h2 className="community__section-title">Meet Our Members</h2>
            <p className="community__section-subtitle">
              Real people building real connections through shared passions
            </p>
          </div>

          <div className="community__members-grid">
            {members.map((member, index) => (
              <div key={index} className="community__member-card">
                <div className="community__member-avatar">{member.avatar}</div>
                <h3 className="community__member-name">{member.name}</h3>
                <p className="community__member-role">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="community__join">
          <div className="community__join-content">
            <h2 className="community__join-title">
              Ready to Join Our Community?
            </h2>
            <p className="community__join-subtitle">
              Be part of something meaningful. Connect with humans who share
              your curiosity for life.
            </p>
            <button className="community__join-button">Join Waitlist</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Community;
