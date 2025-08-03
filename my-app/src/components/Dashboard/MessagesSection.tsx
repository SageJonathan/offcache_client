import { useState } from "react";
import "./messagesSection.scss";

const MessagesSection = () => {
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null);
  const [messages] = useState([
    {
      id: 1,
      name: "Sarah Chen",
      lastMessage: "Hey! I saw we both love hiking. Want to grab coffee?",
      timestamp: "2 hours ago",
      unread: true,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
      conversation: [
        {
          id: 1,
          sender: "Sarah Chen",
          message: "Hey! I saw we both love hiking. Want to grab coffee?",
          timestamp: "2:30 PM",
          isOwn: false,
        },
        {
          id: 2,
          sender: "You",
          message: "Absolutely! I'd love to. When works for you?",
          timestamp: "2:35 PM",
          isOwn: true,
        },
        {
          id: 3,
          sender: "Sarah Chen",
          message: "How about tomorrow at 3 PM? There's a great cafe downtown.",
          timestamp: "2:40 PM",
          isOwn: false,
        },
        {
          id: 4,
          sender: "You",
          message: "Perfect! I'll see you there. Looking forward to it!",
          timestamp: "2:42 PM",
          isOwn: true,
        },
      ],
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      lastMessage: "That meditation retreat sounds amazing!",
      timestamp: "1 day ago",
      unread: false,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      conversation: [
        {
          id: 1,
          sender: "Mike Rodriguez",
          message: "That meditation retreat sounds amazing!",
          timestamp: "Yesterday",
          isOwn: false,
        },
        {
          id: 2,
          sender: "You",
          message: "Right? I've been wanting to try one for months.",
          timestamp: "Yesterday",
          isOwn: true,
        },
      ],
    },
    {
      id: 3,
      name: "Emma Wilson",
      lastMessage: "Thanks for the book recommendation!",
      timestamp: "3 days ago",
      unread: false,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
      conversation: [
        {
          id: 1,
          sender: "You",
          message: "Have you read 'The Power of Now'? It's incredible!",
          timestamp: "3 days ago",
          isOwn: true,
        },
        {
          id: 2,
          sender: "Emma Wilson",
          message: "Thanks for the book recommendation!",
          timestamp: "3 days ago",
          isOwn: false,
        },
      ],
    },
  ]);

  const selectedMessageData = selectedMessage
    ? messages.find((m) => m.id === selectedMessage)
    : null;

  const handleMessageClick = (messageId: number) => {
    setSelectedMessage(messageId);
  };

  const handleBackToMessages = () => {
    setSelectedMessage(null);
  };

  return (
    <div className="dashboard__section">
      <div className="dashboard__section-header">
        <h1 className="dashboard__section-title">
          {selectedMessage ? "Messages" : "Messages"}
        </h1>
        <p className="dashboard__section-subtitle">
          {selectedMessage
            ? "Connect with your matches"
            : "Connect with your matches"}
        </p>
      </div>

      <div className="dashboard__section-content">
        {!selectedMessage ? (
          // Message List View
          <div className="messages__list">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`messages__item ${
                  message.unread ? "messages__item--unread" : ""
                }`}
                onClick={() => handleMessageClick(message.id)}
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
                {message.unread && (
                  <div className="messages__unread-indicator" />
                )}
              </div>
            ))}
          </div>
        ) : (
          // Conversation Detail View
          <div className="conversation">
            <div className="conversation__header">
              <button
                className="conversation__back-button"
                onClick={handleBackToMessages}
              >
                ← Back to Messages
              </button>
              <div className="conversation__contact">
                <img
                  src={selectedMessageData?.avatar}
                  alt={selectedMessageData?.name}
                  className="conversation__avatar"
                />
                <div className="conversation__contact-info">
                  <h3 className="conversation__name">
                    {selectedMessageData?.name}
                  </h3>
                  <span className="conversation__status">Online</span>
                </div>
              </div>
            </div>

            <div className="conversation__messages">
              {selectedMessageData?.conversation.map((msg) => (
                <div
                  key={msg.id}
                  className={`conversation__message ${
                    msg.isOwn ? "conversation__message--own" : ""
                  }`}
                >
                  <div className="conversation__message-content">
                    <p className="conversation__message-text">{msg.message}</p>
                    <span className="conversation__message-time">
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="conversation__input">
              <input
                type="text"
                placeholder="Type a message..."
                className="conversation__input-field"
              />
              <button className="conversation__send-button">Send</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagesSection;
