import React, { useState } from "react";
import "./helpCenter.scss";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

interface HelpCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const HelpCenter: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories: HelpCategory[] = [
    {
      id: "getting-started",
      title: "Getting Started",
      description: "Learn how to create your account and get started",
      icon: "🚀",
      color: "#d4a574",
    },
    {
      id: "events",
      title: "Events",
      description: "Find and join events in your area",
      icon: "📅",
      color: "#b8860b",
    },
    {
      id: "messaging",
      title: "Messaging",
      description: "Connect with other members through messaging",
      icon: "💬",
      color: "#8b4513",
    },
    {
      id: "verification",
      title: "Verification",
      description: "Complete your profile verification process",
      icon: "✅",
      color: "#228b22",
    },
    {
      id: "payments",
      title: "Payments",
      description: "Manage your subscription and billing",
      icon: "💳",
      color: "#4169e1",
    },
    {
      id: "safety",
      title: "Safety & Privacy",
      description: "Learn about our safety measures and privacy",
      icon: "🔒",
      color: "#dc143c",
    },
  ];

  const faqs: FAQItem[] = [
    // Getting Started
    {
      id: 1,
      question: "How do I create an account?",
      answer:
        "Click the 'Sign Up' button on our homepage. You'll need to provide your email, create a password, and complete your profile information including your interests and location.",
      category: "getting-started",
    },
    {
      id: 2,
      question: "What information do I need to provide?",
      answer:
        "We require your email, password, name, location, and interests. You can also add photos and additional details to make your profile more complete.",
      category: "getting-started",
    },
    {
      id: 3,
      question: "How do I complete my profile?",
      answer:
        "Go to your Dashboard and click on 'Profile'. You can add photos, update your bio, interests, and other details. A complete profile helps you connect better with others.",
      category: "getting-started",
    },
    // Events
    {
      id: 4,
      question: "How do I find events near me?",
      answer:
        "Go to the 'Events' section in your Dashboard. You can browse events by category, location, or date. Events are automatically filtered based on your location and interests.",
      category: "events",
    },
    {
      id: 5,
      question: "How do I join an event?",
      answer:
        "Click on any event to view details. If you're interested, click 'Join Event'. You'll receive confirmation and can message other attendees before the event.",
      category: "events",
    },
    {
      id: 6,
      question: "Can I create my own events?",
      answer:
        "Currently, events are created by our team and verified hosts. If you're interested in hosting events, please apply through our Career page.",
      category: "events",
    },
    // Messaging
    {
      id: 7,
      question: "How do I message someone?",
      answer:
        "Go to the 'Messages' section in your Dashboard. You can start conversations with people you've met at events or who share similar interests.",
      category: "messaging",
    },
    {
      id: 8,
      question: "Who can I message?",
      answer:
        "You can message people you've met at events, or those who have similar interests and are open to new connections. We encourage respectful communication.",
      category: "messaging",
    },
    // Verification
    {
      id: 9,
      question: "Why do I need to verify my profile?",
      answer:
        "Verification helps ensure everyone on our platform is real and creates a safer environment. It's a quick process that helps build trust in our community.",
      category: "verification",
    },
    {
      id: 10,
      question: "How do I verify my profile?",
      answer:
        "Go to your Dashboard and click on 'Verification'. You'll need to take a selfie and provide a government-issued ID. This process is secure and private.",
      category: "verification",
    },
    // Payments
    {
      id: 11,
      question: "How much does membership cost?",
      answer:
        "We offer different subscription tiers. Check our Pricing page for current rates. You can upgrade or downgrade your plan at any time.",
      category: "payments",
    },
    {
      id: 12,
      question: "How do I update my payment method?",
      answer:
        "Go to your Dashboard and click on 'Payments'. You can update your payment method, view billing history, and manage your subscription.",
      category: "payments",
    },
    // Safety
    {
      id: 13,
      question: "How do you keep me safe?",
      answer:
        "We verify all members, have community guidelines, and provide reporting tools. We also have safety tips and encourage meeting in public places.",
      category: "safety",
    },
    {
      id: 14,
      question: "What should I do if I have a safety concern?",
      answer:
        "If you have any safety concerns, please report them immediately through our reporting system. We take all reports seriously and will investigate promptly.",
      category: "safety",
    },
  ];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      !selectedCategory || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="help-center">
      <div className="help-center__container">
        <div className="help-center__header">
          <h1 className="help-center__title">Help Center</h1>
          <p className="help-center__subtitle">
            Find answers to your questions and get the most out of OffCache
          </p>
        </div>

        <div className="help-center__search">
          <div className="help-center__search-container">
            <span className="help-center__search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search for help articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="help-center__search-input"
            />
          </div>
        </div>

        <div className="help-center__categories">
          <h2 className="help-center__section-title">Browse by Category</h2>
          <div className="help-center__category-grid">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`help-center__category-card ${
                  selectedCategory === category.id
                    ? "help-center__category-card--active"
                    : ""
                }`}
                onClick={() => handleCategoryClick(category.id)}
                style={
                  { "--category-color": category.color } as React.CSSProperties
                }
              >
                <span className="help-center__category-icon">
                  {category.icon}
                </span>
                <h3 className="help-center__category-title">
                  {category.title}
                </h3>
                <p className="help-center__category-description">
                  {category.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="help-center__faq">
          <h2 className="help-center__section-title">
            {selectedCategory
              ? `${
                  categories.find((c) => c.id === selectedCategory)?.title
                } FAQ`
              : "Frequently Asked Questions"}
          </h2>

          {filteredFAQs.length === 0 ? (
            <div className="help-center__empty">
              <span className="help-center__empty-icon">🤔</span>
              <p className="help-center__empty-text">
                No questions found. Try adjusting your search or category
                filter.
              </p>
            </div>
          ) : (
            <div className="help-center__faq-list">
              {filteredFAQs.map((faq) => (
                <details key={faq.id} className="help-center__faq-item">
                  <summary className="help-center__faq-question">
                    {faq.question}
                  </summary>
                  <div className="help-center__faq-answer">{faq.answer}</div>
                </details>
              ))}
            </div>
          )}
        </div>

        <div className="help-center__contact">
          <h2 className="help-center__section-title">Still Need Help?</h2>
          <p className="help-center__contact-text">
            Can't find what you're looking for? Our support team is here to
            help.
          </p>
          <div className="help-center__contact-options">
            <a href="/contact" className="help-center__contact-button">
              <span className="help-center__contact-icon">📧</span>
              Contact Support
            </a>
            <a href="/career" className="help-center__contact-button">
              <span className="help-center__contact-icon">💼</span>
              Join Our Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
