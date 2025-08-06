import React, { useState } from "react";
// Styles imported globally in _app.tsx

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  attendees: number;
  maxAttendees: number;
  category: string;
  organizer: string;
  organizerAvatar: string;
}

const EventsSection = () => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const [events] = useState<Event[]>([
    {
      id: 1,
      title: "Hiking Adventure at Mount Seymour",
      description:
        "Join us for a challenging hike with stunning views. Perfect for outdoor enthusiasts looking to connect with nature and like-minded people.",
      date: "2024-01-15",
      time: "9:00 AM",
      location: "Mount Seymour Provincial Park, North Vancouver",
      image:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=250&fit=crop",
      attendees: 8,
      maxAttendees: 12,
      category: "Outdoor",
      organizer: "Sarah Chen",
      organizerAvatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
    },
    {
      id: 2,
      title: "Tech Meetup: AI & Machine Learning",
      description:
        "An evening of networking and knowledge sharing about the latest developments in AI and machine learning. Great for tech professionals.",
      date: "2024-01-20",
      time: "6:30 PM",
      location: "Vancouver Tech Hub, Downtown",
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop",
      attendees: 15,
      maxAttendees: 25,
      category: "Technology",
      organizer: "Mike Rodriguez",
      organizerAvatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
    },
    {
      id: 3,
      title: "Meditation & Mindfulness Workshop",
      description:
        "A peaceful session focused on mindfulness and meditation techniques. Perfect for beginners and experienced practitioners alike.",
      date: "2024-01-25",
      time: "10:00 AM",
      location: "Zen Garden Community Center",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      attendees: 6,
      maxAttendees: 10,
      category: "Wellness",
      organizer: "Emma Wilson",
      organizerAvatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
    },
    {
      id: 4,
      title: "Coffee & Conversation",
      description:
        "A casual meetup for meaningful conversations over coffee. Great way to make new friends and share experiences.",
      date: "2024-01-10",
      time: "2:00 PM",
      location: "Revolver Coffee, Gastown",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=250&fit=crop",
      attendees: 4,
      maxAttendees: 8,
      category: "Social",
      organizer: "David Kim",
      organizerAvatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
    },
    {
      id: 5,
      title: "Board Game Night",
      description:
        "An evening of strategy and fun with classic and modern board games. All skill levels welcome!",
      date: "2024-01-05",
      time: "7:00 PM",
      location: "Game Theory Cafe, Kitsilano",
      image:
        "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=400&h=250&fit=crop",
      attendees: 12,
      maxAttendees: 15,
      category: "Games",
      organizer: "Lisa Park",
      organizerAvatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop&crop=face",
    },
  ]);

  const upcomingEvents = events.filter(
    (event) => new Date(event.date) > new Date()
  );
  const pastEvents = events.filter(
    (event) => new Date(event.date) <= new Date()
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const getEventStatus = (event: Event) => {
    const now = new Date();
    const eventDate = new Date(event.date);
    const diffTime = eventDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return "Past";
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Tomorrow";
    if (diffDays <= 7) return `${diffDays} days`;
    return formatDate(event.date);
  };

  const getAttendanceStatus = (event: Event) => {
    const percentage = (event.attendees / event.maxAttendees) * 100;
    if (percentage >= 90) return "Almost Full";
    if (percentage >= 70) return "Filling Up";
    return "Spots Available";
  };

  return (
    <div className="dashboard__section">
      <div className="dashboard__section-header">
        <h1 className="dashboard__section-title">Events</h1>
        <p className="dashboard__section-subtitle">
          Discover and join events with like-minded people
        </p>
      </div>

      <div className="dashboard__section-content">
        <div className="events__tabs">
          <button
            className={`events__tab ${
              activeTab === "upcoming" ? "events__tab--active" : ""
            }`}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming ({upcomingEvents.length})
          </button>
          <button
            className={`events__tab ${
              activeTab === "past" ? "events__tab--active" : ""
            }`}
            onClick={() => setActiveTab("past")}
          >
            Past ({pastEvents.length})
          </button>
        </div>

        <div className="events__content">
          {activeTab === "upcoming" ? (
            <div className="events__grid">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="events__card">
                  <div className="events__card-image">
                    <img src={event.image} alt={event.title} />
                    <div className="events__card-category">
                      {event.category}
                    </div>
                    <div className="events__card-status">
                      {getAttendanceStatus(event)}
                    </div>
                  </div>

                  <div className="events__card-content">
                    <h3 className="events__card-title">{event.title}</h3>
                    <p className="events__card-description">
                      {event.description}
                    </p>

                    <div className="events__card-details">
                      <div className="events__card-detail">
                        <span className="events__card-icon">📅</span>
                        <span>
                          {formatDate(event.date)} at {event.time}
                        </span>
                      </div>
                      <div className="events__card-detail">
                        <span className="events__card-icon">📍</span>
                        <span>{event.location}</span>
                      </div>
                      <div className="events__card-detail">
                        <span className="events__card-icon">👥</span>
                        <span>
                          {event.attendees}/{event.maxAttendees} attendees
                        </span>
                      </div>
                    </div>

                    <div className="events__card-actions">
                      <button className="events__card-btn events__card-btn--primary">
                        Join Event
                      </button>
                      <button className="events__card-btn events__card-btn--secondary">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="events__grid">
              {pastEvents.map((event) => (
                <div key={event.id} className="events__card events__card--past">
                  <div className="events__card-image">
                    <img src={event.image} alt={event.title} />
                    <div className="events__card-category">
                      {event.category}
                    </div>
                    <div className="events__card-status events__card-status--past">
                      Completed
                    </div>
                  </div>

                  <div className="events__card-content">
                    <h3 className="events__card-title">{event.title}</h3>
                    <p className="events__card-description">
                      {event.description}
                    </p>

                    <div className="events__card-details">
                      <div className="events__card-detail">
                        <span className="events__card-icon">📅</span>
                        <span>
                          {formatDate(event.date)} at {event.time}
                        </span>
                      </div>
                      <div className="events__card-detail">
                        <span className="events__card-icon">📍</span>
                        <span>{event.location}</span>
                      </div>
                      <div className="events__card-detail">
                        <span className="events__card-icon">👥</span>
                        <span>{event.attendees} attended</span>
                      </div>
                    </div>

                    <div className="events__card-actions">
                      <button className="events__card-btn events__card-btn--secondary">
                        View Photos
                      </button>
                      <button className="events__card-btn events__card-btn--secondary">
                        Leave Review
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
