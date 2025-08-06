import React, { useState } from "react";
import "./connections.scss";

interface Connection {
  id: number;
  user1: {
    id: number;
    name: string;
    avatar: string;
  };
  user2: {
    id: number;
    name: string;
    avatar: string;
  };
  location: {
    city: string;
    province: string;
    country: string;
    venue?: string;
  };
  sharedInterests: string[]; // e.g., ["hiking", "meditation", "reading"]
  matchMonth: string; // e.g., "January 2024"
  status: "pending" | "completed";
  createdAt: string;
  lastInteraction: string;
  interactionCount: number;
}

const Connections = () => {
  const [connections, setConnections] = useState<Connection[]>([
    {
      id: 1,
      user1: {
        id: 1,
        name: "Sarah Chen",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
      },
      user2: {
        id: 2,
        name: "Mike Rodriguez",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      },
      location: {
        city: "Vancouver",
        province: "British Columbia",
        country: "Canada",
        venue: "Mount Seymour Hiking Trail",
      },
      sharedInterests: ["hiking", "meditation", "reading"],
      matchMonth: "January 2024",
      status: "completed",
      createdAt: "2024-01-05T10:30:00Z",
      lastInteraction: "2024-01-20T14:20:00Z",
      interactionCount: 8,
    },
    {
      id: 2,
      user1: {
        id: 3,
        name: "Emma Wilson",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
      },
      user2: {
        id: 4,
        name: "David Kim",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
      },
      location: {
        city: "Vancouver",
        province: "British Columbia",
        country: "Canada",
        venue: "Local Coffee Shop",
      },
      sharedInterests: ["cycling", "music", "cooking"],
      matchMonth: "January 2024",
      status: "completed",
      createdAt: "2024-01-10T09:15:00Z",
      lastInteraction: "2024-01-18T16:45:00Z",
      interactionCount: 12,
    },
    {
      id: 3,
      user1: {
        id: 5,
        name: "Lisa Thompson",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop&crop=face",
      },
      user2: {
        id: 6,
        name: "Alex Johnson",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      },
      location: {
        city: "Toronto",
        province: "Ontario",
        country: "Canada",
        venue: "Community Center",
      },
      sharedInterests: ["yoga", "art", "photography"],
      matchMonth: "January 2024",
      status: "completed",
      createdAt: "2024-01-10T14:00:00Z",
      lastInteraction: "2024-01-15T11:30:00Z",
      interactionCount: 5,
    },
    {
      id: 4,
      user1: {
        id: 7,
        name: "Maria Garcia",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
      },
      user2: {
        id: 8,
        name: "James Wilson",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
      },
      location: {
        city: "Calgary",
        province: "Alberta",
        country: "Canada",
      },
      sharedInterests: ["skiing", "coding", "gaming"],
      matchMonth: "January 2024",
      status: "pending",
      createdAt: "2024-01-15T12:00:00Z",
      lastInteraction: "2024-01-15T12:00:00Z",
      interactionCount: 1,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<
    "all" | "pending" | "completed"
  >("all");
  const [filterMonth, setFilterMonth] = useState<string>("all");
  const [filterLocation, setFilterLocation] = useState<string>("all");

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getMatchMonthBadge = (month: string) => {
    return <span className="connections__month">📅 {month}</span>;
  };

  const getInterestDisplay = (interestKey: string) => {
    const allActivities = [
      // Physical activities
      { key: "basketball", name: "Basketball", icon: "🏀" },
      { key: "climbing", name: "Climbing", icon: "🧗‍♂️" },
      { key: "cycling", name: "Cycling", icon: "🚴‍♂️" },
      { key: "gym", name: "Gym / Weight Training", icon: "🏋️‍♂️" },
      { key: "hiking", name: "Hiking", icon: "🥾" },
      { key: "martialArts", name: "Martial Arts", icon: "🥋" },
      { key: "meditation", name: "Meditation", icon: "🧘‍♂️" },
      { key: "pickleball", name: "Pickleball", icon: "🏓" },
      { key: "running", name: "Running", icon: "🏃‍♂️" },
      { key: "skiing", name: "Skiing", icon: "⛷️" },
      { key: "snowboarding", name: "Snowboarding", icon: "🏂" },
      { key: "soccer", name: "Soccer", icon: "⚽" },
      { key: "swimming", name: "Swimming", icon: "🏊‍♂️" },
      { key: "tennis", name: "Tennis", icon: "🎾" },
      { key: "yoga", name: "Yoga", icon: "🧘‍♀️" },
      { key: "dance", name: "Dance", icon: "💃" },
      // Mental activities
      { key: "reading", name: "Reading", icon: "📚" },
      { key: "writing", name: "Writing", icon: "✍️" },
      { key: "coding", name: "Coding/Programming", icon: "💻" },
      { key: "gaming", name: "Gaming", icon: "🎮" },
      { key: "chess", name: "Chess", icon: "♟️" },
      { key: "puzzles", name: "Puzzles", icon: "🧩" },
      { key: "art", name: "Art", icon: "🎨" },
      { key: "music", name: "Music", icon: "🎵" },
      { key: "cooking", name: "Cooking", icon: "👨‍🍳" },
      { key: "photography", name: "Photography", icon: "📸" },
      { key: "languages", name: "Languages", icon: "🗣️" },
      { key: "theatre", name: "Improv / Theatre Games", icon: "🎭" },
    ];

    const activity = allActivities.find((a) => a.key === interestKey);
    return activity
      ? { name: activity.name, icon: activity.icon }
      : { name: interestKey, icon: "🎯" };
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <span className="connections__status connections__status--pending">
            ⏳ Pending
          </span>
        );
      case "completed":
        return (
          <span className="connections__status connections__status--completed">
            ✅ Completed
          </span>
        );
      default:
        return null;
    }
  };

  const filteredConnections = connections.filter((connection) => {
    const matchesSearch =
      connection.user1.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      connection.user2.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      connection.location.city
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      connection.location.province
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      connection.location.country
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      (connection.location.venue &&
        connection.location.venue
          .toLowerCase()
          .includes(searchTerm.toLowerCase()));
    const matchesStatus =
      filterStatus === "all" || connection.status === filterStatus;
    const matchesMonth =
      filterMonth === "all" || connection.matchMonth === filterMonth;
    const matchesLocation =
      filterLocation === "all" ||
      connection.location.country === filterLocation;

    return matchesSearch && matchesStatus && matchesMonth && matchesLocation;
  });

  const uniqueCountries = Array.from(
    new Set(connections.map((conn) => conn.location.country))
  ).sort();

  const totalConnections = connections.length;
  const completedConnections = connections.filter(
    (c) => c.status === "completed"
  ).length;
  const pendingConnections = connections.filter(
    (c) => c.status === "pending"
  ).length;

  return (
    <div className="connections">
      <div className="connections__header">
        <h2 className="connections__title">Monthly Match Analytics</h2>
        <p className="connections__subtitle">
          Track algorithmic matches and monitor user engagement
        </p>
      </div>

      <div className="connections__stats">
        <div className="connections__stat-card">
          <span className="connections__stat-number">{totalConnections}</span>
          <span className="connections__stat-label">Total Connections</span>
        </div>

        <div className="connections__stat-card">
          <span className="connections__stat-number">
            {completedConnections}
          </span>
          <span className="connections__stat-label">Completed Matches</span>
        </div>
        <div className="connections__stat-card">
          <span className="connections__stat-number">{pendingConnections}</span>
          <span className="connections__stat-label">Pending Matches</span>
        </div>
      </div>

      <div className="connections__filters">
        <div className="connections__search">
          <input
            type="text"
            placeholder="Search by user names, city, province, country, or venue..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="connections__search-input"
          />
        </div>

        <div className="connections__filter-group">
          <div className="connections__filter">
            <label className="connections__filter-label">Status:</label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as any)}
              className="connections__filter-select"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div className="connections__filter">
            <label className="connections__filter-label">Month:</label>
            <select
              value={filterMonth}
              onChange={(e) => setFilterMonth(e.target.value)}
              className="connections__filter-select"
            >
              <option value="all">All Months</option>
              <option value="January 2024">January 2024</option>
              <option value="December 2023">December 2023</option>
              <option value="November 2023">November 2023</option>
            </select>
          </div>

          <div className="connections__filter">
            <label className="connections__filter-label">Country:</label>
            <select
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
              className="connections__filter-select"
            >
              <option value="all">All Countries</option>
              {uniqueCountries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="connections__list">
        {filteredConnections.length === 0 ? (
          <div className="connections__empty">
            <span className="connections__empty-icon">🤝</span>
            <p className="connections__empty-text">No connections found</p>
          </div>
        ) : (
          filteredConnections.map((connection) => (
            <div key={connection.id} className="connections__item">
              <div className="connections__item-header">
                <div className="connections__users">
                  <div className="connections__user">
                    <img
                      src={connection.user1.avatar}
                      alt={connection.user1.name}
                      className="connections__user-avatar"
                    />
                    <span className="connections__user-name">
                      {connection.user1.name}
                    </span>
                  </div>
                  <div className="connections__connector">🤝</div>
                  <div className="connections__user">
                    <img
                      src={connection.user2.avatar}
                      alt={connection.user2.name}
                      className="connections__user-avatar"
                    />
                    <span className="connections__user-name">
                      {connection.user2.name}
                    </span>
                  </div>
                </div>
                <div className="connections__badges">
                  {getMatchMonthBadge(connection.matchMonth)}
                  {getStatusBadge(connection.status)}
                </div>
              </div>

              <div className="connections__item-content">
                <div className="connections__shared-interests">
                  <span className="connections__shared-interests-text">
                    {connection.location.city} - 🎯:{" "}
                    {connection.sharedInterests.map((interest, index) => {
                      const display = getInterestDisplay(interest);
                      return (
                        <span key={interest} className="connections__interest">
                          {display.name}
                          {index < connection.sharedInterests.length - 1
                            ? ", "
                            : ""}
                        </span>
                      );
                    })}
                  </span>
                </div>

                <div className="connections__match-month">
                  <span className="connections__match-month-icon">📅</span>
                  <span className="connections__match-month-text">
                    Matched in {connection.matchMonth}
                  </span>
                </div>

                <div className="connections__details">
                  <div className="connections__detail-item">
                    <span className="connections__detail-label">Created:</span>
                    <span className="connections__detail-value">
                      {formatDate(connection.createdAt)}
                    </span>
                  </div>
                  <div className="connections__detail-item">
                    <span className="connections__detail-label">
                      Last Interaction:
                    </span>
                    <span className="connections__detail-value">
                      {formatDate(connection.lastInteraction)}
                    </span>
                  </div>
                  <div className="connections__detail-item">
                    <span className="connections__detail-label">
                      Interactions:
                    </span>
                    <span className="connections__detail-value">
                      {connection.interactionCount}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Connections;
