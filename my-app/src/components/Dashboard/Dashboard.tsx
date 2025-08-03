import React, { useState } from "react";
import ProfileSection from "./ProfileSection";
import MessagesSection from "./MessagesSection";
import EventsSection from "./EventsSection";
import PaymentsSection from "./PaymentsSection";
import SettingsSection from "./SettingsSection";
import "./dashboard.scss";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("profile");

  const sections = [
    { id: "profile", name: "Profile", icon: "👤" },
    { id: "messages", name: "Messages", icon: "💬" },
    { id: "events", name: "Events", icon: "📅" },
    { id: "settings", name: "Settings", icon: "⚙️" },
    { id: "payments", name: "Payments", icon: "💳" },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <div className="dashboard__sidebar">
          <div className="dashboard__sidebar-header">
            <h2 className="dashboard__sidebar-title">Dashboard</h2>
            <p className="dashboard__sidebar-subtitle">Manage your account</p>
          </div>

          <nav className="dashboard__nav">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`dashboard__nav-item ${
                  activeSection === section.id
                    ? "dashboard__nav-item--active"
                    : ""
                }`}
                onClick={() => setActiveSection(section.id)}
              >
                <span className="dashboard__nav-icon">{section.icon}</span>
                <span className="dashboard__nav-text">{section.name}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="dashboard__content">
          {activeSection === "profile" && <ProfileSection />}
          {activeSection === "messages" && <MessagesSection />}
          {activeSection === "events" && <EventsSection />}
          {activeSection === "payments" && <PaymentsSection />}
          {activeSection === "settings" && <SettingsSection />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
