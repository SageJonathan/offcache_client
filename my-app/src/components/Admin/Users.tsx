import React, { useState } from "react";
import "./users.scss";

interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  status: "active" | "inactive" | "suspended";
  verificationStatus: "verified" | "pending" | "not_verified";
  joinDate: string;
  lastActive: string;
  city: string;
  province: string;
  country: string;
  plan: "free" | "premium" | "founder";
  eventsAttended: number;
  matchesCompleted: number;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "Sarah Chen",
      email: "sarah.chen@email.com",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
      status: "active",
      verificationStatus: "verified",
      joinDate: "2023-06-15",
      lastActive: "2024-01-15T10:30:00Z",
      city: "Vancouver",
      province: "British Columbia",
      country: "Canada",
      plan: "premium",
      eventsAttended: 12,
      matchesCompleted: 8,
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      email: "mike.rodriguez@email.com",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      status: "active",
      verificationStatus: "verified",
      joinDate: "2023-08-22",
      lastActive: "2024-01-14T14:20:00Z",
      city: "Toronto",
      province: "Ontario",
      country: "Canada",
      plan: "founder",
      eventsAttended: 8,
      matchesCompleted: 6,
    },
    {
      id: 3,
      name: "Emma Wilson",
      email: "emma.wilson@email.com",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
      status: "active",
      verificationStatus: "pending",
      joinDate: "2023-09-10",
      lastActive: "2024-01-13T09:15:00Z",
      city: "Calgary",
      province: "Alberta",
      country: "Canada",
      plan: "free",
      eventsAttended: 3,
      matchesCompleted: 2,
    },
    {
      id: 4,
      name: "David Kim",
      email: "david.kim@email.com",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
      status: "inactive",
      verificationStatus: "not_verified",
      joinDate: "2023-07-05",
      lastActive: "2023-12-20T16:45:00Z",
      city: "Montreal",
      province: "Quebec",
      country: "Canada",
      plan: "free",
      eventsAttended: 1,
      matchesCompleted: 0,
    },
    {
      id: 5,
      name: "Lisa Thompson",
      email: "lisa.thompson@email.com",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop&crop=face",
      status: "suspended",
      verificationStatus: "verified",
      joinDate: "2023-05-12",
      lastActive: "2024-01-10T11:20:00Z",
      city: "Seattle",
      province: "Washington",
      country: "United States",
      plan: "premium",
      eventsAttended: 15,
      matchesCompleted: 10,
    },
  ]);

  const [filterStatus, setFilterStatus] = useState<
    "all" | "active" | "inactive" | "suspended"
  >("all");
  const [filterVerification, setFilterVerification] = useState<
    "all" | "verified" | "pending" | "not_verified"
  >("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatLastActive = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`;
    return formatDate(dateString);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <span className="users__status users__status--active">🟢 Active</span>
        );
      case "inactive":
        return (
          <span className="users__status users__status--inactive">
            ⚪ Inactive
          </span>
        );
      case "suspended":
        return (
          <span className="users__status users__status--suspended">
            🔴 Suspended
          </span>
        );
      default:
        return null;
    }
  };

  const getVerificationBadge = (status: string) => {
    switch (status) {
      case "verified":
        return (
          <span className="users__verification users__verification--verified">
            ✅ Verified
          </span>
        );
      case "pending":
        return (
          <span className="users__verification users__verification--pending">
            ⏳ Pending
          </span>
        );
      case "not_verified":
        return (
          <span className="users__verification users__verification--not-verified">
            ❌ Not Verified
          </span>
        );
      default:
        return null;
    }
  };

  const getPlanBadge = (plan: string) => {
    switch (plan) {
      case "founder":
        return (
          <span className="users__plan users__plan--founder">👑 Founder</span>
        );
      case "premium":
        return (
          <span className="users__plan users__plan--premium">⭐ Premium</span>
        );
      case "free":
        return <span className="users__plan users__plan--free">🆓 Free</span>;
      default:
        return null;
    }
  };

  const handleStatusUpdate = (
    userId: number,
    newStatus: "active" | "inactive" | "suspended"
  ) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === userId ? { ...user, status: newStatus } : user
      )
    );
  };

  const filteredUsers = users.filter((user) => {
    const matchesStatus =
      filterStatus === "all" || user.status === filterStatus;
    const matchesVerification =
      filterVerification === "all" ||
      user.verificationStatus === filterVerification;
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.province.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.country.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesStatus && matchesVerification && matchesSearch;
  });

  return (
    <div className="users">
      <div className="users__header">
        <h2 className="users__title">User Management</h2>
        <p className="users__subtitle">
          Manage user accounts, status, and verification
        </p>
      </div>

      <div className="users__filters">
        <div className="users__search">
          <input
            type="text"
            placeholder="Search users by name, email, city, province, or country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="users__search-input"
          />
        </div>

        <div className="users__filter-group">
          <div className="users__filter">
            <label className="users__filter-label">Status:</label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as any)}
              className="users__filter-select"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="suspended">Suspended</option>
            </select>
          </div>

          <div className="users__filter">
            <label className="users__filter-label">Verification:</label>
            <select
              value={filterVerification}
              onChange={(e) => setFilterVerification(e.target.value as any)}
              className="users__filter-select"
            >
              <option value="all">All Verification</option>
              <option value="verified">Verified</option>
              <option value="pending">Pending</option>
              <option value="not_verified">Not Verified</option>
            </select>
          </div>
        </div>

        <div className="users__stats">
          <span className="users__stat">Total: {users.length}</span>
          <span className="users__stat">
            Active: {users.filter((u) => u.status === "active").length}
          </span>
          <span className="users__stat">
            Verified:{" "}
            {users.filter((u) => u.verificationStatus === "verified").length}
          </span>
        </div>
      </div>

      <div className="users__list">
        {filteredUsers.length === 0 ? (
          <div className="users__empty">
            <span className="users__empty-icon">👥</span>
            <p className="users__empty-text">No users found</p>
          </div>
        ) : (
          filteredUsers.map((user) => (
            <div key={user.id} className="users__item">
              <div className="users__item-header">
                <div className="users__user-info">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="users__user-avatar"
                  />
                  <div className="users__user-details">
                    <h3 className="users__user-name">{user.name}</h3>
                    <p className="users__user-email">{user.email}</p>
                    <p className="users__user-location">
                      {user.city}, {user.province}, {user.country}
                    </p>
                  </div>
                </div>

                <div className="users__user-badges">
                  {getStatusBadge(user.status)}
                  {getVerificationBadge(user.verificationStatus)}
                  {getPlanBadge(user.plan)}
                </div>

                <div className="users__user-stats">
                  <div className="users__stat-item">
                    <span className="users__stat-label">Events</span>
                    <span className="users__stat-value">
                      {user.eventsAttended}
                    </span>
                  </div>
                  <div className="users__stat-item">
                    <span className="users__stat-label">Matches</span>
                    <span className="users__stat-value">
                      {user.matchesCompleted}
                    </span>
                  </div>
                </div>

                <div className="users__item-actions">
                  <button
                    className="users__view-button"
                    onClick={() => setSelectedUser(user)}
                  >
                    View Details
                  </button>
                  {user.status === "active" && (
                    <button
                      className="users__suspend-button"
                      onClick={() => handleStatusUpdate(user.id, "suspended")}
                    >
                      Suspend
                    </button>
                  )}
                  {user.status === "suspended" && (
                    <button
                      className="users__activate-button"
                      onClick={() => handleStatusUpdate(user.id, "active")}
                    >
                      Activate
                    </button>
                  )}
                </div>
              </div>

              <div className="users__item-footer">
                <span className="users__join-date">
                  Joined: {formatDate(user.joinDate)}
                </span>
                <span className="users__last-active">
                  Last active: {formatLastActive(user.lastActive)}
                </span>
              </div>
            </div>
          ))
        )}
      </div>

      {selectedUser && (
        <div className="users__modal">
          <div
            className="users__modal-overlay"
            onClick={() => setSelectedUser(null)}
          />
          <div className="users__modal-content">
            <div className="users__modal-header">
              <h3 className="users__modal-title">
                User Details - {selectedUser.name}
              </h3>
              <button
                className="users__modal-close"
                onClick={() => setSelectedUser(null)}
              >
                ×
              </button>
            </div>

            <div className="users__modal-body">
              <div className="users__modal-section">
                <h4>Basic Information</h4>
                <div className="users__modal-user">
                  <img
                    src={selectedUser.avatar}
                    alt={selectedUser.name}
                    className="users__modal-avatar"
                  />
                  <div>
                    <p>
                      <strong>Name:</strong> {selectedUser.name}
                    </p>
                    <p>
                      <strong>Email:</strong> {selectedUser.email}
                    </p>
                    <p>
                      <strong>Location:</strong> {selectedUser.city},{" "}
                      {selectedUser.province}, {selectedUser.country}
                    </p>
                    <p>
                      <strong>Status:</strong>{" "}
                      {getStatusBadge(selectedUser.status)}
                    </p>
                    <p>
                      <strong>Verification:</strong>{" "}
                      {getVerificationBadge(selectedUser.verificationStatus)}
                    </p>
                    <p>
                      <strong>Plan:</strong> {getPlanBadge(selectedUser.plan)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="users__modal-section">
                <h4>Activity</h4>
                <div className="users__modal-activity">
                  <div className="users__modal-activity-item">
                    <span className="users__modal-activity-label">
                      Events Attended:
                    </span>
                    <span className="users__modal-activity-value">
                      {selectedUser.eventsAttended}
                    </span>
                  </div>
                  <div className="users__modal-activity-item">
                    <span className="users__modal-activity-label">
                      Matches Completed:
                    </span>
                    <span className="users__modal-activity-value">
                      {selectedUser.matchesCompleted}
                    </span>
                  </div>
                  <div className="users__modal-activity-item">
                    <span className="users__modal-activity-label">
                      Join Date:
                    </span>
                    <span className="users__modal-activity-value">
                      {formatDate(selectedUser.joinDate)}
                    </span>
                  </div>
                  <div className="users__modal-activity-item">
                    <span className="users__modal-activity-label">
                      Last Active:
                    </span>
                    <span className="users__modal-activity-value">
                      {formatLastActive(selectedUser.lastActive)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="users__modal-actions">
                {selectedUser.status === "active" && (
                  <button
                    className="users__modal-action users__modal-action--suspend"
                    onClick={() => {
                      handleStatusUpdate(selectedUser.id, "suspended");
                      setSelectedUser(null);
                    }}
                  >
                    🔴 Suspend User
                  </button>
                )}
                {selectedUser.status === "suspended" && (
                  <button
                    className="users__modal-action users__modal-action--activate"
                    onClick={() => {
                      handleStatusUpdate(selectedUser.id, "active");
                      setSelectedUser(null);
                    }}
                  >
                    🟢 Activate User
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
