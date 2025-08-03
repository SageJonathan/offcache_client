import React, { useState } from "react";
import "./messagesSection.scss";

const MessagesSection = () => {
  const [messages] = useState([
    {
      id: 1,
      name: "Sarah Chen",
      lastMessage: "Hey! I saw we both love hiking. Want to grab coffee?",
      timestamp: "2 hours ago",
      unread: true,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      lastMessage: "That meditation retreat sounds amazing!",
      timestamp: "1 day ago",
      unread: false,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Emma Wilson",
      lastMessage: "Thanks for the book recommendation!",
      timestamp: "3 days ago",
      unread: false,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
    },
  ]);

  return (
    <div className="dashboard__section">
      <div className="dashboard__section-header">
        <h1 className="dashboard__section-title">Messages</h1>
        <p className="dashboard__section-subtitle">Connect with your matches</p>
      </div>

      <div className="dashboard__section-content">
        <div className="messages__list">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`messages__item ${
                message.unread ? "messages__item--unread" : ""
              }`}
            >
              <img
                src={message.avatar}
                alt={message.name}
                className="messages__avatar"
              />
              <div className="messages__content">
                <div className="messages__header">
                  <h3 className="messages__name">{message.name}</h3>
                  <span className="messages__timestamp">
                    {message.timestamp}
                  </span>
                </div>
                <p className="messages__preview">{message.lastMessage}</p>
              </div>
              {message.unread && <div className="messages__unread-indicator" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessagesSection;
