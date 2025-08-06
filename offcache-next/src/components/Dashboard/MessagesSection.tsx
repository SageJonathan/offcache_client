import { useState } from "react";
import { useRouter } from "next/navigation";
// Styles imported globally in layout.tsx

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  category: string;
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

interface MessageUser {
  id: number;
  name: string;
  avatar: string;
  bio: string;
  interests: string[];
  location: string;
  pastEvents: Event[];
}

interface Message {
  id: number;
  sender: MessageUser;
  message: string;
  timestamp: string;
  isOwn: boolean;
}

interface Conversation {
  id: number;
  user: User;
  messages: Message[];
}

const MessagesSection = () => {
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null);
  const router = useRouter();

  const [conversations] = useState<Conversation[]>([
    {
      id: 1,
      user: {
        id: 1,
        name: "Sarah Chen",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
        bio: "Love hiking and meditation. Looking for meaningful connections and outdoor adventures. Always up for trying new activities and meeting interesting people.",
        interests: ["Hiking", "Meditation", "Photography", "Cooking", "Travel"],
        location: "Vancouver, BC",
        verificationStatus: "verified" as const,
        joinDate: "2023-06-15",
        pastEvents: [
          {
            id: 1,
            title: "Hiking Adventure at Mount Seymour",
            date: "2024-01-05",
            location: "Mount Seymour Provincial Park",
            category: "Outdoor",
          },
          {
            id: 2,
            title: "Meditation & Mindfulness Workshop",
            date: "2024-01-10",
            location: "Zen Garden Community Center",
            category: "Wellness",
          },
          {
            id: 3,
            title: "Coffee & Conversation",
            date: "2024-01-15",
            location: "Revolver Coffee, Gastown",
            category: "Social",
          },
        ],
      },
      messages: [
        {
          id: 1,
          sender: {
            id: 1,
            name: "Sarah Chen",
            avatar: "",
            bio: "",
            interests: [],
            location: "",
            pastEvents: [],
          },
          message: "Hey! I saw we both love hiking. Want to grab coffee?",
          timestamp: "2:30 PM",
          isOwn: false,
        },
        {
          id: 2,
          sender: {
            id: 0,
            name: "You",
            avatar: "",
            bio: "",
            interests: [],
            location: "",
            pastEvents: [],
          },
          message: "Absolutely! I'd love to. When works for you?",
          timestamp: "2:35 PM",
          isOwn: true,
        },
        {
          id: 3,
          sender: {
            id: 1,
            name: "Sarah Chen",
            avatar: "",
            bio: "",
            interests: [],
            location: "",
            pastEvents: [],
          },
          message: "How about tomorrow at 3 PM? There's a great cafe downtown.",
          timestamp: "2:40 PM",
          isOwn: false,
        },
        {
          id: 4,
          sender: {
            id: 0,
            name: "You",
            avatar: "",
            bio: "",
            interests: [],
            location: "",
            pastEvents: [],
          },
          message: "Perfect! I'll see you there. Looking forward to it!",
          timestamp: "2:42 PM",
          isOwn: true,
        },
      ],
    },
    {
      id: 2,
      user: {
        id: 2,
        name: "Mike Rodriguez",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
        bio: "Tech enthusiast and startup founder. Passionate about AI, machine learning, and building meaningful products. Love connecting with fellow entrepreneurs.",
        interests: ["Technology", "AI/ML", "Startups", "Networking", "Coffee"],
        location: "Vancouver, BC",
        verificationStatus: "verified" as const,
        joinDate: "2023-08-22",
        pastEvents: [
          {
            id: 4,
            title: "Tech Meetup: AI & Machine Learning",
            date: "2024-01-12",
            location: "Vancouver Tech Hub",
            category: "Technology",
          },
          {
            id: 5,
            title: "Coffee & Conversation",
            date: "2024-01-18",
            location: "Revolver Coffee, Gastown",
            category: "Social",
          },
        ],
      },
      messages: [
        {
          id: 1,
          sender: {
            id: 2,
            name: "Mike Rodriguez",
            avatar: "",
            bio: "",
            interests: [],
            location: "",
            pastEvents: [],
          },
          message: "That meditation retreat sounds amazing!",
          timestamp: "Yesterday",
          isOwn: false,
        },
        {
          id: 2,
          sender: {
            id: 0,
            name: "You",
            avatar: "",
            bio: "",
            interests: [],
            location: "",
            pastEvents: [],
          },
          message: "Right? I've been wanting to try one for months.",
          timestamp: "Yesterday",
          isOwn: true,
        },
      ],
    },
    {
      id: 3,
      user: {
        id: 3,
        name: "Emma Wilson",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
        bio: "Book lover and creative writer. Always exploring new stories and ideas. Looking for deep conversations and shared reading experiences.",
        interests: ["Reading", "Writing", "Literature", "Art", "Museums"],
        location: "Vancouver, BC",
        verificationStatus: "pending" as const,
        joinDate: "2023-09-10",
        pastEvents: [
          {
            id: 6,
            title: "Book Club Meetup",
            date: "2024-01-08",
            location: "Vancouver Public Library",
            category: "Social",
          },
          {
            id: 7,
            title: "Coffee & Conversation",
            date: "2024-01-20",
            location: "Revolver Coffee, Gastown",
            category: "Social",
          },
        ],
      },
      messages: [
        {
          id: 1,
          sender: {
            id: 0,
            name: "You",
            avatar: "",
            bio: "",
            interests: [],
            location: "",
            pastEvents: [],
          },
          message: "Have you read 'The Power of Now'? It's incredible!",
          timestamp: "3 days ago",
          isOwn: true,
        },
        {
          id: 2,
          sender: {
            id: 3,
            name: "Emma Wilson",
            avatar: "",
            bio: "",
            interests: [],
            location: "",
            pastEvents: [],
          },
          message: "Thanks for the book recommendation!",
          timestamp: "3 days ago",
          isOwn: false,
        },
      ],
    },
  ]);

  const selectedConversation = selectedMessage
    ? conversations.find((c) => c.id === selectedMessage)
    : null;

  const handleMessageClick = (conversationId: number) => {
    setSelectedMessage(conversationId);
  };

  const handleBackToMessages = () => {
    setSelectedMessage(null);
  };

  const handleViewProfile = (user: User) => {
    router.push(`/profile/${user.id}`);
  };

  return (
    <div className="dashboard__section">
      <div className="dashboard__section-header">
        <h1 className="dashboard__section-title">
          {selectedMessage ? "Messages" : "Messages"}
        </h1>
        <p className="dashboard__section-subtitle">Connect with your matches</p>
      </div>

      <div className="dashboard__section-content">
        {!selectedMessage ? (
          // Message List View
          <div className="messages__list">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className="messages__item"
                onClick={() => handleMessageClick(conversation.id)}
              >
                <img
                  src={conversation.user.avatar}
                  alt={conversation.user.name}
                  className="messages__avatar"
                />
                <div className="messages__content">
                  <div className="messages__header">
                    <h3 className="messages__name">{conversation.user.name}</h3>
                    <span className="messages__timestamp">
                      {
                        conversation.messages[conversation.messages.length - 1]
                          .timestamp
                      }
                    </span>
                  </div>
                  <p className="messages__preview">
                    {
                      conversation.messages[conversation.messages.length - 1]
                        .message
                    }
                  </p>
                </div>
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
                  src={selectedConversation?.user.avatar}
                  alt={selectedConversation?.user.name}
                  className="conversation__avatar"
                />
                <div className="conversation__contact-info">
                  <h3 className="conversation__name">
                    {selectedConversation?.user.name}
                  </h3>
                  <span className="conversation__status">Online</span>
                </div>
                <button
                  className="conversation__profile-button"
                  onClick={() => handleViewProfile(selectedConversation!.user)}
                >
                  View Profile
                </button>
              </div>
            </div>

            <div className="conversation__messages">
              {selectedConversation?.messages.map((msg) => (
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
