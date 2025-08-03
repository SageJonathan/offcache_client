import React, { useState } from "react";
import "./admin.scss";
import AddEvent from "../components/Admin/AddEvent";
import Verification from "../components/Admin/Verification";
import Users from "../components/Admin/Users";
import EventMedia from "../components/Admin/EventMedia";

const Admin = () => {
  const [activeSection, setActiveSection] = useState<
    "add-event" | "verification" | "users" | "event-media"
  >("add-event");

  const sections = [
    { id: "add-event", label: "Add Event", icon: "📅" },
    { id: "verification", label: "Verification", icon: "✅" },
    { id: "users", label: "Users", icon: "👥" },
    { id: "event-media", label: "Event Media", icon: "📸" },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "add-event":
        return <AddEvent />;
      case "verification":
        return <Verification />;
      case "users":
        return <Users />;
      case "event-media":
        return <EventMedia />;
      default:
        return <AddEvent />;
    }
  };

  return (
    <div className="admin">
      <div className="admin__container">
        <div className="admin__header">
          <h1 className="admin__title">Admin Panel</h1>
          <p className="admin__subtitle">
            Manage events, verifications, and users
          </p>
        </div>

        <div className="admin__navigation">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`admin__nav-button ${
                activeSection === section.id ? "admin__nav-button--active" : ""
              }`}
              onClick={() => setActiveSection(section.id as any)}
            >
              <span className="admin__nav-icon">{section.icon}</span>
              <span className="admin__nav-label">{section.label}</span>
            </button>
          ))}
        </div>

        <div className="admin__content">{renderSection()}</div>
      </div>
    </div>
  );
};

export default Admin;
