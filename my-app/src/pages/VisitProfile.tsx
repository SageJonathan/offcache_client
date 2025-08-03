import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import VisitProfile from "../components/Dashboard/VisitProfile";
import "../components/Dashboard/visitProfile.scss";

// Mock data - in a real app, this would come from an API
const mockUsers = [
  {
    id: 1,
    name: "Sarah Chen",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
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
        image:
          "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=200&fit=crop",
      },
      {
        id: 2,
        title: "Meditation & Mindfulness Workshop",
        date: "2024-01-10",
        location: "Zen Garden Community Center",
        category: "Wellness",
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
      },
      {
        id: 3,
        title: "Coffee & Conversation",
        date: "2024-01-15",
        location: "Revolver Coffee, Gastown",
        category: "Social",
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=200&fit=crop",
      },
    ],
  },
  {
    id: 2,
    name: "Mike Rodriguez",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
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
        image:
          "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=200&fit=crop",
      },
      {
        id: 5,
        title: "Coffee & Conversation",
        date: "2024-01-18",
        location: "Revolver Coffee, Gastown",
        category: "Social",
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=200&fit=crop",
      },
    ],
  },
  {
    id: 3,
    name: "Emma Wilson",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
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
        image:
          "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=200&fit=crop",
      },
      {
        id: 7,
        title: "Coffee & Conversation",
        date: "2024-01-20",
        location: "Revolver Coffee, Gastown",
        category: "Social",
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=200&fit=crop",
      },
    ],
  },
];

const VisitProfilePage = () => {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();

  const user = mockUsers.find((u) => u.id === parseInt(userId || "1"));

  if (!user) {
    return (
      <div className="dashboard__section">
        <div className="dashboard__section-header">
          <h1 className="dashboard__section-title">User Not Found</h1>
        </div>
        <div className="dashboard__section-content">
          <p>The user you're looking for doesn't exist.</p>
          <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
      </div>
    );
  }

  const handleBack = () => {
    navigate(-1);
  };

  return <VisitProfile user={user} onBack={handleBack} />;
};

export default VisitProfilePage;
