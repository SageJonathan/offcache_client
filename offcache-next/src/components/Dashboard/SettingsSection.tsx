"use client";
import { useState } from "react";
// Styles imported globally in _app.tsx

const SettingsSection = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    matchNotifications: true,
    eventNotifications: true,
    privacyProfile: "public",
    autoRenew: true,
  });

  const handleToggle = (setting: string) => {
    setSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting as keyof typeof prev],
    }));
  };

  return (
    <div className="dashboard__section">
      <div className="dashboard__section-header">
        <h1 className="dashboard__section-title">Settings</h1>
        <p className="dashboard__section-subtitle">Customize your experience</p>
      </div>

      <div className="dashboard__section-content">
        <div className="settings__group">
          <h3 className="settings__group-title">Notifications</h3>
          <div className="settings__options">
            <div className="settings__option">
              <div className="settings__option-info">
                <label className="settings__option-label">
                  Email Notifications
                </label>
                <p className="settings__option-description">
                  Receive updates via email
                </p>
              </div>
              <button
                className={`settings__toggle ${
                  settings.emailNotifications ? "settings__toggle--active" : ""
                }`}
                onClick={() => handleToggle("emailNotifications")}
              >
                <span className="settings__toggle-slider" />
              </button>
            </div>

            <div className="settings__option">
              <div className="settings__option-info">
                <label className="settings__option-label">
                  Push Notifications
                </label>
                <p className="settings__option-description">
                  Receive notifications on your device
                </p>
              </div>
              <button
                className={`settings__toggle ${
                  settings.pushNotifications ? "settings__toggle--active" : ""
                }`}
                onClick={() => handleToggle("pushNotifications")}
              >
                <span className="settings__toggle-slider" />
              </button>
            </div>

            <div className="settings__option">
              <div className="settings__option-info">
                <label className="settings__option-label">
                  Match Notifications
                </label>
                <p className="settings__option-description">
                  Get notified about new matches
                </p>
              </div>
              <button
                className={`settings__toggle ${
                  settings.matchNotifications ? "settings__toggle--active" : ""
                }`}
                onClick={() => handleToggle("matchNotifications")}
              >
                <span className="settings__toggle-slider" />
              </button>
            </div>

            <div className="settings__option">
              <div className="settings__option-info">
                <label className="settings__option-label">
                  Event Notifications
                </label>
                <p className="settings__option-description">
                  Get notified about upcoming events
                </p>
              </div>
              <button
                className={`settings__toggle ${
                  settings.eventNotifications ? "settings__toggle--active" : ""
                }`}
                onClick={() => handleToggle("eventNotifications")}
              >
                <span className="settings__toggle-slider" />
              </button>
            </div>
          </div>
        </div>

        <div className="settings__group">
          <h3 className="settings__group-title">Privacy</h3>
          <div className="settings__options">
            <div className="settings__option">
              <div className="settings__option-info">
                <label className="settings__option-label">
                  Profile Visibility
                </label>
                <p className="settings__option-description">
                  Control who can see your profile
                </p>
              </div>
              <select
                className="settings__select"
                value={settings.privacyProfile}
              >
                <option value="public">Public</option>
                <option value="members">Members Only</option>
                <option value="matches">Matches Only</option>
              </select>
            </div>
          </div>
        </div>

        <div className="settings__group">
          <h3 className="settings__group-title">Billing</h3>
          <div className="settings__options">
            <div className="settings__option">
              <div className="settings__option-info">
                <label className="settings__option-label">Auto-Renew</label>
                <p className="settings__option-description">
                  Automatically renew your subscription
                </p>
              </div>
              <button
                className={`settings__toggle ${
                  settings.autoRenew ? "settings__toggle--active" : ""
                }`}
                onClick={() => handleToggle("autoRenew")}
              >
                <span className="settings__toggle-slider" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsSection;
