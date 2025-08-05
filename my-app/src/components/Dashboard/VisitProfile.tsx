import React from "react";
import "./visitProfile.scss";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  category: string;
  image?: string;
}

interface User {
  id: number;
  name: string;
  avatar: string;
  bio: string;
  interests: string[];
  location: string;
  pastEvents: Event[];
  verificationStatus: "verified" | "pending" | "not_verified";
  joinDate: string;
}

interface VisitProfileProps {
  user: User;
  onBack: () => void;
}

const VisitProfile: React.FC<VisitProfileProps> = ({ user, onBack }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getVerificationBadge = (status: string) => {
    switch (status) {
      case "verified":
        return (
          <span className="visit-profile__verification-badge visit-profile__verification-badge--verified">
            ✓ Verified
          </span>
        );
      case "pending":
        return (
          <span className="visit-profile__verification-badge visit-profile__verification-badge--pending">
            ⏳ Pending
          </span>
        );
      default:
        return (
          <span className="visit-profile__verification-badge visit-profile__verification-badge--not-verified">
            Not Verified
          </span>
        );
    }
  };

  return (
    <div className="dashboard__section">
      <div className="dashboard__section-header">
        <div className="dashboard__section-header-content">
          <button className="visit-profile__back-button" onClick={onBack}>
            ← Back to Messages
          </button>
          <h1 className="dashboard__section-title">Profile</h1>
          <p className="dashboard__section-subtitle">
            {user.name}'s profile and activity
          </p>
        </div>
      </div>

      <div className="dashboard__section-content">
        <div className="visit-profile">
          {/* Profile Header */}
          <div className="visit-profile__header">
            <div className="visit-profile__user-info">
              <img
                src={user.avatar}
                alt={user.name}
                className="visit-profile__avatar"
              />
              <div className="visit-profile__user-details">
                <div className="visit-profile__name-section">
                  <h2 className="visit-profile__name">{user.name}</h2>
                  {getVerificationBadge(user.verificationStatus)}
                </div>
                <p className="visit-profile__location">📍 {user.location}</p>
                <p className="visit-profile__join-date">
                  Member since {formatDate(user.joinDate)}
                </p>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="visit-profile__section">
            <h3 className="visit-profile__section-title">About</h3>
            <div className="visit-profile__bio">
              <p>{user.bio}</p>
            </div>
          </div>

          {/* Interests Section */}
          <div className="visit-profile__section">
            <h3 className="visit-profile__section-title">Interests</h3>
            <div className="visit-profile__interests">
              {user.interests.map((interest, index) => (
                <span key={index} className="visit-profile__interest">
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Past Events Section */}
          <div className="visit-profile__section">
            <h3 className="visit-profile__section-title">
              Past Events ({user.pastEvents.length})
            </h3>
            <div className="visit-profile__events">
              {user.pastEvents.map((event) => (
                <div key={event.id} className="visit-profile__event">
                  {event.image && (
                    <img
                      src={event.image}
                      alt={event.title}
                      className="visit-profile__event-image"
                    />
                  )}
                  <div className="visit-profile__event-content">
                    <h4 className="visit-profile__event-title">
                      {event.title}
                    </h4>
                    <p className="visit-profile__event-details">
                      {formatDate(event.date)} • {event.location}
                    </p>
                    <span className="visit-profile__event-category">
                      {event.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitProfile;
