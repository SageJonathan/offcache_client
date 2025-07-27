import React, { useState } from "react";
import "./pricing.scss";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Early Access",
      description:
        "Perfect for founding members who want to shape the future of authentic connections.",
      price: isAnnual ? 99 : 12,
      period: isAnnual ? "year" : "month",
      originalPrice: isAnnual ? 144 : 15,
      features: [
        "Monthly 1-on-1 matches",
        "Access to community events",
        "Priority support",
        "Early feature access",
        "Founding member badge",
        "Lifetime 20% discount",
      ],
      popular: false,
      comingSoon: false,
    },
    {
      name: "Founder",
      description:
        "For those who believe in the power of authentic human connections.",
      price: isAnnual ? 149 : 19,
      period: isAnnual ? "year" : "month",
      originalPrice: isAnnual ? 228 : 24,
      features: [
        "Everything in Early Access",
        "Unlimited monthly matches",
        "Exclusive founder events",
        "Direct founder access",
        "Custom matching preferences",
        "Lifetime 30% discount",
      ],
      popular: true,
      comingSoon: false,
    },
    {
      name: "Community",
      description:
        "Join our waitlist and be notified when we launch in your city.",
      price: 0,
      period: "free",
      originalPrice: null,
      features: [
        "Join the waitlist",
        "Early notification",
        "Community updates",
        "Beta tester opportunity",
        "Founding member pricing",
        "Exclusive launch access",
      ],
      popular: false,
      comingSoon: true,
    },
  ];

  return (
    <div className="pricing">
      <div className="pricing__hero">
        <div className="pricing__hero-content">
          <h1 className="pricing__hero-title">Simple, Transparent Pricing</h1>
          <p className="pricing__hero-subtitle">
            Choose the plan that fits your journey toward meaningful
            connections.
          </p>
        </div>
      </div>

      <div className="pricing__container">
        <div className="pricing__toggle">
          <span
            className={`pricing__toggle-option ${!isAnnual ? "active" : ""}`}
          >
            Monthly
          </span>
          <button
            className="pricing__toggle-button"
            onClick={() => setIsAnnual(!isAnnual)}
          >
            <div
              className={`pricing__toggle-slider ${isAnnual ? "active" : ""}`}
            ></div>
          </button>
          <span
            className={`pricing__toggle-option ${isAnnual ? "active" : ""}`}
          >
            Annual
            <span className="pricing__toggle-save">Save 20%</span>
          </span>
        </div>

        <div className="pricing__plans">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing__plan ${
                plan.popular ? "pricing__plan--popular" : ""
              } ${plan.comingSoon ? "pricing__plan--coming-soon" : ""}`}
            >
              {plan.popular && (
                <div className="pricing__plan-badge">Most Popular</div>
              )}
              {plan.comingSoon && (
                <div className="pricing__plan-badge pricing__plan-badge--coming-soon">
                  Coming Soon
                </div>
              )}

              <div className="pricing__plan-header">
                <h3 className="pricing__plan-name">{plan.name}</h3>
                <p className="pricing__plan-description">{plan.description}</p>
              </div>

              <div className="pricing__plan-price">
                {plan.price === 0 ? (
                  <div className="pricing__plan-price-free">Free</div>
                ) : (
                  <>
                    <div className="pricing__plan-amount">
                      <span className="pricing__plan-currency">$</span>
                      {plan.price}
                    </div>
                    <div className="pricing__plan-period">/{plan.period}</div>
                    {plan.originalPrice && (
                      <div className="pricing__plan-original">
                        ${plan.originalPrice}/{plan.period}
                      </div>
                    )}
                  </>
                )}
              </div>

              <ul className="pricing__plan-features">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="pricing__plan-feature">
                    <svg
                      className="pricing__plan-check"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`pricing__plan-button ${
                  plan.comingSoon ? "pricing__plan-button--coming-soon" : ""
                }`}
              >
                {plan.comingSoon ? "Join Waitlist" : "Get Started"}
              </button>
            </div>
          ))}
        </div>

        <div className="pricing__faq">
          <h2 className="pricing__faq-title">Frequently Asked Questions</h2>
          <div className="pricing__faq-grid">
            <div className="pricing__faq-item">
              <h3 className="pricing__faq-question">Can I cancel anytime?</h3>
              <p className="pricing__faq-answer">
                Yes, you can cancel your subscription at any time. No questions
                asked.
              </p>
            </div>
            <div className="pricing__faq-item">
              <h3 className="pricing__faq-question">
                What if I'm not satisfied?
              </h3>
              <p className="pricing__faq-answer">
                We offer a 30-day money-back guarantee. If you're not happy,
                we'll refund your payment.
              </p>
            </div>
            <div className="pricing__faq-item">
              <h3 className="pricing__faq-question">
                When will you launch in my city?
              </h3>
              <p className="pricing__faq-answer">
                We're launching in Q3 2025. Join our waitlist to be notified
                when we arrive in your area.
              </p>
            </div>
            <div className="pricing__faq-item">
              <h3 className="pricing__faq-question">
                How do the matches work?
              </h3>
              <p className="pricing__faq-answer">
                We use a thoughtful matching algorithm based on your interests,
                values, and preferences to connect you with like-minded people.
              </p>
            </div>
          </div>
        </div>

        <div className="pricing__cta">
          <div className="pricing__cta-content">
            <h2 className="pricing__cta-title">Ready to Start Your Journey?</h2>
            <p className="pricing__cta-subtitle">
              Join thousands of people building meaningful connections through
              shared experiences.
            </p>
            <button className="pricing__cta-button">Join Waitlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
