import React, { useState } from "react";
// Styles imported globally in _app.tsx

const PaymentsSection = () => {
  const [payments] = useState([
    {
      id: 1,
      date: "2024-01-15",
      amount: 25,
      description: "Founder Plan - Monthly",
      status: "completed",
    },
    {
      id: 2,
      date: "2023-12-15",
      amount: 25,
      description: "Founder Plan - Monthly",
      status: "completed",
    },
    {
      id: 3,
      date: "2023-11-15",
      amount: 25,
      description: "Founder Plan - Monthly",
      status: "completed",
    },
  ]);

  return (
    <div className="dashboard__section">
      <div className="dashboard__section-header">
        <h1 className="dashboard__section-title">Payments</h1>
        <p className="dashboard__section-subtitle">
          Manage your billing and payment history
        </p>
      </div>

      <div className="dashboard__section-content">
        <div className="payments__current-plan">
          <h3 className="payments__plan-title">Current Plan</h3>
          <div className="payments__plan-card">
            <div className="payments__plan-info">
              <h4 className="payments__plan-name">Founder Plan</h4>
              <p className="payments__plan-price">$25/month</p>
              <p className="payments__plan-description">
                Unlimited matches, priority access, premium events
              </p>
            </div>
            <button className="payments__change-plan-button">
              Change Plan
            </button>
          </div>
        </div>

        <div className="payments__history">
          <h3 className="payments__history-title">Payment History</h3>
          <div className="payments__history-list">
            {payments.map((payment) => (
              <div key={payment.id} className="payments__history-item">
                <div className="payments__history-info">
                  <p className="payments__history-description">
                    {payment.description}
                  </p>
                  <p className="payments__history-date">{payment.date}</p>
                </div>
                <div className="payments__history-amount">
                  <span className="payments__amount">${payment.amount}</span>
                  <span
                    className={`payments__status payments__status--${payment.status}`}
                  >
                    {payment.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsSection;
