import { useState } from "react";
import "./verification.scss";

interface VerificationRequest {
  id: number;
  userId: number;
  userName: string;
  userAvatar: string;
  userEmail: string;
  status: "pending" | "approved" | "rejected";
  submittedAt: string;
  documentType: "driver_license" | "passport";
  documentImage: string;
  selfieImage: string;
  notes?: string;
}

const Verification = () => {
  const [verifications, setVerifications] = useState<VerificationRequest[]>([
    {
      id: 1,
      userId: 101,
      userName: "Sarah Chen",
      userAvatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
      userEmail: "sarah.chen@email.com",
      status: "pending",
      submittedAt: "2024-01-15T10:30:00Z",
      documentType: "driver_license",
      documentImage:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      selfieImage:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      userId: 102,
      userName: "Mike Rodriguez",
      userAvatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      userEmail: "mike.rodriguez@email.com",
      status: "approved",
      submittedAt: "2024-01-14T14:20:00Z",
      documentType: "passport",
      documentImage:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      selfieImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      notes: "Documents verified successfully",
    },
    {
      id: 3,
      userId: 103,
      userName: "Emma Wilson",
      userAvatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
      userEmail: "emma.wilson@email.com",
      status: "rejected",
      submittedAt: "2024-01-13T09:15:00Z",
      documentType: "driver_license",
      documentImage:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      selfieImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop",
      notes: "Document image unclear, please resubmit",
    },
  ]);

  const [selectedVerification, setSelectedVerification] =
    useState<VerificationRequest | null>(null);
  const [filterStatus, setFilterStatus] = useState<
    "all" | "pending" | "approved" | "rejected"
  >("pending");

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <span className="verification__status verification__status--pending">
            ⏳ Pending
          </span>
        );
      case "approved":
        return (
          <span className="verification__status verification__status--approved">
            ✅ Approved
          </span>
        );
      case "rejected":
        return (
          <span className="verification__status verification__status--rejected">
            ❌ Rejected
          </span>
        );
      default:
        return null;
    }
  };

  const handleStatusUpdate = (
    verificationId: number,
    newStatus: "approved" | "rejected",
    notes?: string
  ) => {
    setVerifications((prev) =>
      prev.map((v) =>
        v.id === verificationId ? { ...v, status: newStatus, notes } : v
      )
    );
    setSelectedVerification(null);
  };

  const filteredVerifications = verifications.filter((v) =>
    filterStatus === "all" ? true : v.status === filterStatus
  );

  return (
    <div className="verification">
      <div className="verification__header">
        <h2 className="verification__title">Verification Requests</h2>
        <p className="verification__subtitle">
          Review and manage user verification submissions
        </p>
      </div>

      <div className="verification__filters">
        <div className="verification__filter-group">
          <label className="verification__filter-label">
            Filter by status:
          </label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value as any)}
            className="verification__filter-select"
          >
            <option value="all">All Requests</option>
            <option value="pending">Pending</option>
            <option value="rejected">Rejected</option>
            <option value="approved">Approved</option>
          </select>
        </div>
        <div className="verification__stats">
          <span className="verification__stat">
            Total: {verifications.length}
          </span>
          <span className="verification__stat">
            Pending:{" "}
            {verifications.filter((v) => v.status === "pending").length}
          </span>
        </div>
      </div>

      <div className="verification__list">
        {filteredVerifications.length === 0 ? (
          <div className="verification__empty">
            <span className="verification__empty-icon">📋</span>
            <p className="verification__empty-text">
              No verification requests found
            </p>
          </div>
        ) : (
          filteredVerifications.map((verification) => (
            <div key={verification.id} className="verification__item">
              <div className="verification__item-header">
                <div className="verification__user-info">
                  <img
                    src={verification.userAvatar}
                    alt={verification.userName}
                    className="verification__user-avatar"
                  />
                  <div className="verification__user-details">
                    <h3 className="verification__user-name">
                      {verification.userName}
                    </h3>
                    <p className="verification__user-email">
                      {verification.userEmail}
                    </p>
                    <p className="verification__submission-date">
                      Submitted: {formatDate(verification.submittedAt)}
                    </p>
                  </div>
                </div>
                <div className="verification__item-actions">
                  {getStatusBadge(verification.status)}
                  <button
                    className="verification__view-button"
                    onClick={() => setSelectedVerification(verification)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {selectedVerification && (
        <div className="verification__modal">
          <div
            className="verification__modal-overlay"
            onClick={() => setSelectedVerification(null)}
          />
          <div className="verification__modal-content">
            <div className="verification__modal-header">
              <h3 className="verification__modal-title">
                Verification Details - {selectedVerification.userName}
              </h3>
              <button
                className="verification__modal-close"
                onClick={() => setSelectedVerification(null)}
              >
                ×
              </button>
            </div>

            <div className="verification__modal-body">
              <div className="verification__modal-section">
                <h4>User Information</h4>
                <div className="verification__modal-user">
                  <img
                    src={selectedVerification.userAvatar}
                    alt={selectedVerification.userName}
                    className="verification__modal-avatar"
                  />
                  <div>
                    <p>
                      <strong>Name:</strong> {selectedVerification.userName}
                    </p>
                    <p>
                      <strong>Email:</strong> {selectedVerification.userEmail}
                    </p>
                    <p>
                      <strong>Document Type:</strong>{" "}
                      {selectedVerification.documentType.replace("_", " ")}
                    </p>
                    <p>
                      <strong>Status:</strong>{" "}
                      {getStatusBadge(selectedVerification.status)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="verification__modal-section">
                <h4>Documents</h4>
                <div className="verification__modal-images">
                  <div className="verification__modal-image">
                    <h5>Document</h5>
                    <img
                      src={selectedVerification.documentImage}
                      alt="Document"
                      className="verification__modal-img"
                    />
                  </div>
                  <div className="verification__modal-image">
                    <h5>Selfie</h5>
                    <img
                      src={selectedVerification.selfieImage}
                      alt="Selfie"
                      className="verification__modal-img"
                    />
                  </div>
                </div>
              </div>

              {selectedVerification.notes && (
                <div className="verification__modal-section">
                  <h4>Notes</h4>
                  <p className="verification__modal-notes">
                    {selectedVerification.notes}
                  </p>
                </div>
              )}

              {selectedVerification.status === "pending" && (
                <div className="verification__modal-actions">
                  <button
                    className="verification__action verification__action--approve"
                    onClick={() =>
                      handleStatusUpdate(selectedVerification.id, "approved")
                    }
                  >
                    ✅ Approve
                  </button>
                  <button
                    className="verification__action verification__action--reject"
                    onClick={() =>
                      handleStatusUpdate(selectedVerification.id, "rejected")
                    }
                  >
                    ❌ Reject
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Verification;
