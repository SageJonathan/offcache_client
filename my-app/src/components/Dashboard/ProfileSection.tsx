import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./profileSection.scss";
import VerificationStatus from "../Verification/VerificationStatus";
import SelfieVerification from "../Verification/SelfieVerification";

const ProfileSection = () => {
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    bio: "Love hiking and meditation. Looking for meaningful connections.",
    interests: ["Hiking", "Meditation", "Technology"],
    location: "San Francisco, CA",
    profilePicture:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  });

  const [verificationStatus, setVerificationStatus] = useState<
    "pending" | "approved" | "rejected" | "not_verified"
  >("not_verified");
  const [showVerification, setShowVerification] = useState(false);
  const [showProfilePictureModal, setShowProfilePictureModal] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfilePictureChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setProfile((prev) => ({ ...prev, profilePicture: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVerificationComplete = (verificationData: any) => {
    setVerificationStatus("pending");
    setShowVerification(false);
    // Here you would typically send the verification data to your backend
    console.log("Verification data:", verificationData);
  };

  const handleVerificationCancel = () => {
    setShowVerification(false);
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
        <div className="profile__verification">
          <h3 className="profile__verification-title">Identity Verification</h3>
          <VerificationStatus
            status={verificationStatus}
            onVerify={() => setShowVerification(true)}
          />
        </div>

        <div className="profile__form">
          <div className="profile__picture-section">
            <div className="profile__picture-container">
              <img
                src={profile.profilePicture}
                alt="Profile"
                className="profile__picture"
              />
              <button
                className="profile__picture-edit"
                onClick={() => setShowProfilePictureModal(true)}
              >
                <span className="profile__picture-edit-icon">📷</span>
                Edit
              </button>
            </div>
            <div className="profile__picture-info">
              <h3>Profile Picture</h3>
              <p>Add a clear photo of yourself to help others recognize you</p>
            </div>
          </div>

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
            <label className="profile__label">Main Interests</label>
            <div className="profile__interests">
              {profile.interests.slice(0, 5).map((interest, index) => (
                <span key={index} className="profile__interest-tag">
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <div className="profile__actions">
            <button className="profile__save-button">Save Changes</button>
            <Link to="/survey" className="profile__survey-button">
              Re-take Survey
            </Link>
          </div>
        </div>
      </div>

      {/* Profile Picture Upload Modal */}
      {showProfilePictureModal && (
        <div className="profile__picture-modal">
          <div
            className="profile__picture-modal-overlay"
            onClick={() => setShowProfilePictureModal(false)}
          />
          <div className="profile__picture-modal-content">
            <div className="profile__picture-modal-header">
              <h3>Update Profile Picture</h3>
              <button
                className="profile__picture-modal-close"
                onClick={() => setShowProfilePictureModal(false)}
              >
                ×
              </button>
            </div>
            <div className="profile__picture-modal-body">
              <div className="profile__picture-upload-area">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePictureChange}
                  id="profile-picture-upload"
                  className="profile__picture-file-input"
                />
                <label
                  htmlFor="profile-picture-upload"
                  className="profile__picture-upload-label"
                >
                  <div className="profile__picture-upload-placeholder">
                    <div className="profile__picture-upload-icon">📷</div>
                    <p>Click to upload a new profile picture</p>
                    <small>Supported formats: JPG, PNG</small>
                  </div>
                </label>
              </div>
              <div className="profile__picture-preview">
                <h4>Current Picture</h4>
                <img src={profile.profilePicture} alt="Current profile" />
              </div>
            </div>
            <div className="profile__picture-modal-actions">
              <button
                className="profile__picture-modal-btn profile__picture-modal-btn--secondary"
                onClick={() => setShowProfilePictureModal(false)}
              >
                Cancel
              </button>
              <button
                className="profile__picture-modal-btn profile__picture-modal-btn--primary"
                onClick={() => setShowProfilePictureModal(false)}
              >
                Save Picture
              </button>
            </div>
          </div>
        </div>
      )}

      {showVerification && (
        <SelfieVerification
          onComplete={handleVerificationComplete}
          onCancel={handleVerificationCancel}
        />
      )}
    </div>
  );
};

export default ProfileSection;
