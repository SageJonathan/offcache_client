import React from "react";
import Email from "../../assets/icons/email.png";
import Facebook from "../../assets/icons/facebook.png";
import Instagram from "../../assets/icons/instagram.png";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__header">
          <h1 className="contact__title">Get in Touch</h1>
          <p className="contact__subtitle">
            Have questions about meaningful connections? We'd love to hear from
            you.
          </p>
        </div>

        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__section">
              <h2 className="contact__section-title">Contact Information</h2>
              <div className="contact__info-item">
                <span className="contact__info-icon">📧</span>
                <div className="contact__info-content">
                  <h3 className="contact__info-label">Email</h3>
                  <p className="contact__info-value">hello@offcache.com</p>
                </div>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-icon">📍</span>
                <div className="contact__info-content">
                  <h3 className="contact__info-label">Location</h3>
                  <p className="contact__info-value">Calgary, AB, Canada</p>
                </div>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-icon">⏰</span>
                <div className="contact__info-content">
                  <h3 className="contact__info-label">Response Time</h3>
                  <p className="contact__info-value">Within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="contact__section">
              <h2 className="contact__section-title">Connect With Us</h2>
              <div className="contact__social">
                <a href="#" className="contact__social-link">
                  <img
                    src={Instagram}
                    alt="Instagram"
                    className="contact__social-icon"
                  />
                  <span className="contact__social-text">Instagram</span>
                </a>
                <a href="#" className="contact__social-link">
                  <img
                    src={Facebook}
                    alt="Facebook"
                    className="contact__social-icon"
                  />
                  <span className="contact__social-text">Facebook</span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact__form-section">
            <h2 className="contact__section-title">Send us a Message</h2>
            <form className="contact__form">
              <div className="contact__form-group">
                <label htmlFor="name" className="contact__form-label">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="contact__form-input"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="email" className="contact__form-label">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="contact__form-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="subject" className="contact__form-label">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="contact__form-select"
                  required
                >
                  <option value="">Select a topic</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="contact__form-group">
                <label htmlFor="message" className="contact__form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="contact__form-textarea"
                  placeholder="Tell us how we can help..."
                  rows={6}
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact__form-button">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="contact__faq">
          <h2 className="contact__section-title">Frequently Asked Questions</h2>
          <div className="contact__faq-list">
            <div className="contact__faq-item">
              <h3 className="contact__faq-question">
                How does the matching algorithm work?
              </h3>
              <p className="contact__faq-answer">
                Our algorithm considers shared interests, location, and
                availability to create meaningful connections. We focus on
                quality over quantity, ensuring each match has genuine potential
                for real conversation.
              </p>
            </div>
            <div className="contact__faq-item">
              <h3 className="contact__faq-question">
                What if I don't connect with my match?
              </h3>
              <p className="contact__faq-answer">
                We understand that not every connection will be perfect. You can
                always reach out to us for support, and we'll help you find
                better matches in future months.
              </p>
            </div>
            <div className="contact__faq-item">
              <h3 className="contact__faq-question">
                Can I cancel my subscription anytime?
              </h3>
              <p className="contact__faq-answer">
                Yes, you can cancel your subscription at any time. We believe in
                no-pressure relationships, and that includes our relationship
                with you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
