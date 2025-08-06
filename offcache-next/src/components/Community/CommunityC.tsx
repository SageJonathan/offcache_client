import { useState } from "react";
// Styles imported globally in _app.tsx

const CommunityC = () => {
  const [searchCity, setSearchCity] = useState("");
  const [selectedCity, setSelectedCity] = useState("All Cities");

  const galleryPhotos = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop",
      caption: "Community gathering",
      category: "Connection",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      caption: "Group meditation",
      category: "Mindfulness",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      caption: "Nature walk",
      category: "Nature",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      caption: "Beach yoga",
      category: "Wellness",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop",
      caption: "Hiking group",
      category: "Movement",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=400&h=300&fit=crop",
      caption: "Art exploration",
      category: "Culture",
    },
  ];

  const events = [
    {
      id: 1,
      title: "Monthly Forest Walk",
      date: "March 15, 2024",
      location: "Golden Gate Park, SF",
      city: "San Francisco",
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
      city: "San Francisco",
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
      city: "San Francisco",
      description:
        "Combine physical movement with deep conversations about life, purpose, and growth.",
      image:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop",
      attendees: 12,
      type: "Movement",
    },
    {
      id: 4,
      title: "Urban Art Walk",
      date: "April 5, 2024",
      location: "Mission District, SF",
      city: "San Francisco",
      description:
        "Explore street art and murals while connecting with fellow art enthusiasts.",
      image:
        "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=400&h=300&fit=crop",
      attendees: 15,
      type: "Culture",
    },
    {
      id: 5,
      title: "Beach Yoga & Connection",
      date: "April 12, 2024",
      location: "Venice Beach",
      city: "Los Angeles",
      description:
        "Start your day with yoga on the beach, followed by meaningful conversations.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      attendees: 20,
      type: "Wellness",
    },
    {
      id: 6,
      title: "Tech & Nature Meetup",
      date: "April 19, 2024",
      location: "Griffith Observatory",
      city: "Los Angeles",
      description:
        "Discuss the intersection of technology and nature while enjoying city views.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      attendees: 16,
      type: "Technology",
    },
  ];

  // Get unique cities for the dropdown
  const cities = [
    "All Cities",
    ...Array.from(new Set(events.map((event) => event.city))),
  ];

  // Filter events based on selected city
  const filteredEvents =
    selectedCity === "All Cities"
      ? events
      : events.filter((event) => event.city === selectedCity);

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCity(e.target.value);
  };

  // Filter events by search term
  const searchFilteredEvents = filteredEvents.filter(
    (event) =>
      event.title.toLowerCase().includes(searchCity.toLowerCase()) ||
      event.location.toLowerCase().includes(searchCity.toLowerCase()) ||
      event.type.toLowerCase().includes(searchCity.toLowerCase())
  );

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
        <section className="community__gallery">
          <div className="community__gallery-grid">
            {galleryPhotos.map((photo) => (
              <div key={photo.id} className="community__gallery-item">
                <img src={photo.image} alt={photo.caption} />
              </div>
            ))}
          </div>
        </section>

        <section className="community__events">
          <div className="community__section-header">
            <h2 className="community__section-title">Upcoming Events</h2>
            <p className="community__section-subtitle">
              Join our monthly community gatherings designed for authentic
              connection
            </p>
          </div>

          <div className="community__search">
            <div className="community__search-container">
              <div className="community__search-input-group">
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchCity}
                  onChange={handleSearchChange}
                  className="community__search-input"
                />
                <svg
                  className="community__search-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </div>
              <select
                value={selectedCity}
                onChange={handleCityChange}
                className="community__city-select"
              >
                {cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            {searchCity && (
              <p className="community__search-results">
                {searchFilteredEvents.length} event
                {searchFilteredEvents.length !== 1 ? "s" : ""} found
              </p>
            )}
          </div>

          <div className="community__events-grid">
            {searchFilteredEvents.map((event) => (
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

          {searchFilteredEvents.length === 0 && (
            <div className="community__no-events">
              <h3 className="community__no-events-title">No events found</h3>
              <p className="community__no-events-text">
                Try adjusting your search or city filter to find more events.
              </p>
            </div>
          )}
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

export default CommunityC;
