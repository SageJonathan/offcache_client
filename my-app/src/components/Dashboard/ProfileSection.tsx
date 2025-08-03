import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./profileSection.scss";

const ProfileSection = () => {
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    bio: "Love hiking and meditation. Looking for meaningful connections.",
    interests: ["Hiking", "Meditation", "Technology"],
    location: "San Francisco, CA",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="dashboard__section">
      <div className="dashboard__section-header">
        <h1 className="dashboard__section-title">Profile</h1>
        <p className="dashboard__section-subtitle">
          Manage your personal information
        </p>
      </div>

      <div className="dashboard__section-content">
        <div className="profile__form">
          <div className="profile__form-row">
            <div className="profile__form-group">
              <label htmlFor="firstName" className="profile__label">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={profile.firstName}
                onChange={handleInputChange}
                className="profile__input"
              />
            </div>
            <div className="profile__form-group">
              <label htmlFor="lastName" className="profile__label">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={profile.lastName}
                onChange={handleInputChange}
                className="profile__input"
              />
            </div>
          </div>

          <div className="profile__form-group">
            <label htmlFor="email" className="profile__label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
              className="profile__input"
            />
          </div>

          <div className="profile__form-group">
            <label htmlFor="phone" className="profile__label">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={profile.phone}
              onChange={handleInputChange}
              className="profile__input"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div className="profile__form-group">
            <label htmlFor="location" className="profile__label">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={profile.location}
              onChange={handleInputChange}
              className="profile__input"
            />
          </div>

          <div className="profile__form-group">
            <label htmlFor="bio" className="profile__label">
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              value={profile.bio}
              onChange={handleInputChange}
              className="profile__textarea"
              rows={4}
            />
          </div>

          <div className="profile__form-group">
            <label className="profile__label">Interests</label>
            <div className="profile__interests">
              {profile.interests.map((interest, index) => (
                <span key={index} className="profile__interest-tag">
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <div className="profile__actions">
            <button className="profile__save-button">Save Changes</button>
            <Link to="/survey" className="profile__survey-link">
              Re-take Survey
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
