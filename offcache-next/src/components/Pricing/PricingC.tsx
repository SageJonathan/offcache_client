"use client";
import { useState } from "react";
// Styles imported globally in _app.tsx

const PricingC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Early Access",
      price: { monthly: 0, annual: 0 },
      description: "Limited time - first 3 months free",
      features: [
        "Free for first 3 months after launch",
        "Then only $10/month",
        "Monthly 1-on-1 matches",
        "Access to community events",
        "Standard matching algorithm",
        "Founding member status",
        "Early access to new features",
      ],
      popular: false,
      comingSoon: false,
      special: "Limited Time",
    },
    {
      name: "Member",
      price: { monthly: 12, annual: 120 },
      description: "Standard access for everyone",
      features: [
        "Monthly 1-on-1 matches",
        "Access to all community events",
        "Standard matching algorithm",
        "Member benefits",
        "Community participation",
        "Standard support",
      ],
      popular: false,
      comingSoon: false,
    },
    {
      name: "Premium",
      price: { monthly: 25, annual: 250 },
      description: "For investors, founders & entrepreneurs",
      features: [
        "Everything in Member plan",
        "Advanced matching algorithm",
        "Exclusive premium events",
        "Yearly founder's international getaway",
        "Priority support",
        "Early feature access",
      ],
      popular: true,
      comingSoon: false,
    },
  ];

  const faqs = [
    {
      question: "How does the matching work?",
      answer:
        "We use a combination of your interests, values, and preferences to match you with like-minded individuals who share your curiosity for movement, mindfulness, and growth. Premium members can also specify job titles and experience levels they want to connect with.",
    },
    {
      question: "What if I don't connect with my match?",
      answer:
        "We understand that not every connection will be perfect. You can request a new match, and we'll work to find someone better suited to your interests and personality.",
    },
    {
      question: "Are the events included in my membership?",
      answer:
        "All members get access to community events anywhere in the world. We keep events affordable while ensuring quality experiences.",
    },
    {
      question: "What's the difference between Member and Premium?",
      answer:
        "Member gives you standard access to monthly matches and community events. Premium adds advanced matching with job title parameters, exclusive premium events, and access to the yearly founder's international getaway.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Absolutely. You can cancel your membership at any time with no questions asked. We believe in building trust through transparency.",
    },
  ];

  return (
    <div className="pricing">
      <div className="pricing__hero">
        <div className="pricing__hero-content">
          <h1 className="pricing__hero-title">Simple, Transparent Pricing</h1>
          <p className="pricing__hero-subtitle">
            Choose the plan that works for you. No hidden fees, no surprises.
          </p>
        </div>
      </div>

      <div className="pricing__container">
        <div className="pricing__toggle">
          <span
            className={`pricing__toggle-label ${
              !isAnnual ? "pricing__toggle-label--active" : ""
            }`}
          >
            Monthly
          </span>
          <button
            className={`pricing__toggle-button ${
              isAnnual ? "pricing__toggle-button--active" : ""
            }`}
            onClick={() => setIsAnnual(!isAnnual)}
          >
            <span className="pricing__toggle-slider"></span>
          </button>
          <span
            className={`pricing__toggle-label ${
              isAnnual ? "pricing__toggle-label--active" : ""
            }`}
          >
            Annual
            <span className="pricing__toggle-savings">Save 20%</span>
          </span>
        </div>

        <div className="pricing__plans">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing__plan ${
                plan.popular ? "pricing__plan--popular" : ""
              }`}
            >
              {plan.popular && (
                <div className="pricing__plan-badge">Most Popular</div>
              )}
              {plan.special && (
                <div className="pricing__plan-badge pricing__plan-badge--special">
                  {plan.special}
                </div>
              )}
              {plan.comingSoon && (
                <div className="pricing__plan-badge pricing__plan-badge--coming-soon">
                  Coming Soon
                </div>
              )}

              <div className="pricing__plan-header">
                <h3 className="pricing__plan-name">{plan.name}</h3>
                <p className="pricing__plan-description">{plan.description}</p>
                <div className="pricing__plan-price">
                  {plan.price.monthly === 0 ? (
                    <div className="pricing__plan-free">
                      <span className="pricing__plan-free-text">Free</span>
                      <span className="pricing__plan-free-subtext">
                        First 3 months
                      </span>
                    </div>
                  ) : (
                    <>
                      <span className="pricing__plan-currency">$</span>
                      <span className="pricing__plan-amount">
                        {isAnnual ? plan.price.annual : plan.price.monthly}
                      </span>
                      <span className="pricing__plan-period">
                        {isAnnual ? "/year" : "/month"}
                      </span>
                    </>
                  )}
                </div>
              </div>

              <ul className="pricing__plan-features">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="pricing__plan-feature">
                    <svg
                      className="pricing__plan-check"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <polyline points="20,6 9,17 4,12"></polyline>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`pricing__plan-button ${
                  plan.comingSoon ? "pricing__plan-button--disabled" : ""
                }`}
                disabled={plan.comingSoon}
              >
                {plan.comingSoon
                  ? "Coming Soon"
                  : plan.price.monthly === 0
                  ? "Get Early Access"
                  : "Get Started"}
              </button>
            </div>
          ))}
        </div>

        <section className="pricing__faq">
          <div className="pricing__section-header">
            <h2 className="pricing__section-title">
              Frequently Asked Questions
            </h2>
            <p className="pricing__section-subtitle">
              Everything you need to know about our pricing and membership
            </p>
          </div>

          <div className="pricing__faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="pricing__faq-item">
                <h3 className="pricing__faq-question">{faq.question}</h3>
                <p className="pricing__faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pricing__cta">
          <div className="pricing__cta-content">
            <h2 className="pricing__cta-title">Ready to Start Connecting?</h2>
            <p className="pricing__cta-subtitle">
              Join the waitlist and be among the first to experience meaningful
              connections through shared experiences.
            </p>
            <button className="pricing__cta-button">Join Waitlist</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PricingC;
