import React from "react";
import "./verificationStatus.scss";

interface VerificationStatusProps {
  status: "pending" | "approved" | "rejected" | "not_verified";
  onVerify: () => void;
}

const VerificationStatus: React.FC<VerificationStatusProps> = ({
  status,
  onVerify,
}) => {
  const getStatusConfig = () => {
    switch (status) {
      case "approved":
        return {
          icon: "✅",
          text: "Verified",
          color: "success",
          description: "Your identity has been verified",
        };
      case "pending":
        return {
          icon: "⏳",
          text: "Under Review",
          color: "warning",
          description: "We're reviewing your verification",
        };
      case "rejected":
        return {
          icon: "❌",
          text: "Rejected",
          color: "error",
          description: "Please try verification again",
        };
      default:
        return {
          icon: "🔒",
          text: "Not Verified",
          color: "default",
          description: "Verify your identity to unlock features",
        };
    }
  };

  const config = getStatusConfig();

  return (
    <div className={`verification-status verification-status--${config.color}`}>
      <div className="verification-status__content">
        <div className="verification-status__icon">{config.icon}</div>
        <div className="verification-status__info">
          <h3 className="verification-status__title">{config.text}</h3>
          <p className="verification-status__description">
            {config.description}
          </p>
        </div>
      </div>

      {status === "not_verified" && (
        <button className="verification-status__btn" onClick={onVerify}>
          Verify Now
        </button>
      )}

      {status === "rejected" && (
        <button className="verification-status__btn" onClick={onVerify}>
          Try Again
        </button>
      )}
    </div>
  );
};

export default VerificationStatus;
