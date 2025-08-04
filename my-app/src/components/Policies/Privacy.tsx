import React from "react";
import "./privacy.scss";

const Privacy: React.FC = () => {
  return (
    <div className="privacy">
      <div className="privacy__container">
        <div className="privacy__header">
          <h1 className="privacy__title">Privacy Policy</h1>
          <p className="privacy__last-updated">Last updated: December 2024</p>
        </div>

        <div className="privacy__content">
          <section className="privacy__section">
            <h2 className="privacy__section-title">1. Introduction</h2>
            <p className="privacy__text">
              At OffCache ("we," "our," or "us"), we are committed to protecting
              your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our
              networking platform and services.
            </p>
            <p className="privacy__text">
              By using our services, you agree to the collection and use of
              information in accordance with this policy. If you do not agree
              with our policies and practices, please do not use our services.
            </p>
          </section>

          <section className="privacy__section">
            <h2 className="privacy__section-title">
              2. Information We Collect
            </h2>

            <h3 className="privacy__subsection-title">
              2.1 Personal Information
            </h3>
            <p className="privacy__text">
              We may collect the following personal information:
            </p>
            <ul className="privacy__list">
              <li>Name, email address, and phone number</li>
              <li>Profile information including photos, bio, and interests</li>
              <li>Location information (city, province, country)</li>
              <li>Verification documents (government-issued ID)</li>
              <li>Payment and billing information</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="privacy__subsection-title">2.2 Usage Information</h3>
            <p className="privacy__text">
              We automatically collect certain information when you use our
              services:
            </p>
            <ul className="privacy__list">
              <li>
                Device information (IP address, browser type, operating system)
              </li>
              <li>Usage data (pages visited, features used, time spent)</li>
              <li>Event attendance and participation</li>
              <li>Messaging activity and connections made</li>
              <li>Search queries and preferences</li>
            </ul>

            <h3 className="privacy__subsection-title">
              2.3 Third-Party Information
            </h3>
            <p className="privacy__text">
              We may receive information from third parties, such as social
              media platforms (if you choose to connect your account) or event
              organizers.
            </p>
          </section>

          <section className="privacy__section">
            <h2 className="privacy__section-title">
              3. How We Use Your Information
            </h2>
            <p className="privacy__text">
              We use the collected information for the following purposes:
            </p>
            <ul className="privacy__list">
              <li>Provide, maintain, and improve our services</li>
              <li>Create and manage your account and profile</li>
              <li>Verify your identity and ensure platform safety</li>
              <li>Match you with compatible users and events</li>
              <li>Process payments and manage subscriptions</li>
              <li>Send you notifications and updates</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Analyze usage patterns to improve our platform</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="privacy__section">
            <h2 className="privacy__section-title">
              4. Information Sharing and Disclosure
            </h2>

            <h3 className="privacy__subsection-title">4.1 With Other Users</h3>
            <p className="privacy__text">
              Your profile information (name, photos, bio, interests) is visible
              to other users on our platform. You can control what information
              is shared through your privacy settings.
            </p>

            <h3 className="privacy__subsection-title">
              4.2 With Service Providers
            </h3>
            <p className="privacy__text">
              We may share your information with trusted third-party service
              providers who assist us in operating our platform, such as payment
              processors, hosting providers, and analytics services.
            </p>

            <h3 className="privacy__subsection-title">
              4.3 Legal Requirements
            </h3>
            <p className="privacy__text">
              We may disclose your information if required by law, court order,
              or government request, or to protect our rights, property, or
              safety, or that of our users or the public.
            </p>

            <h3 className="privacy__subsection-title">
              4.4 Business Transfers
            </h3>
            <p className="privacy__text">
              In the event of a merger, acquisition, or sale of assets, your
              information may be transferred as part of the transaction.
            </p>
          </section>

          <section className="privacy__section">
            <h2 className="privacy__section-title">5. Data Security</h2>
            <p className="privacy__text">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the internet or electronic storage is 100%
              secure.
            </p>
          </section>

          <section className="privacy__section">
            <h2 className="privacy__section-title">6. Data Retention</h2>
            <p className="privacy__text">
              We retain your personal information for as long as necessary to
              provide our services and fulfill the purposes outlined in this
              policy. When you delete your account, we will delete or anonymize
              your personal information, except where retention is required by
              law.
            </p>
          </section>

          <section className="privacy__section">
            <h2 className="privacy__section-title">
              7. Your Rights and Choices
            </h2>
            <p className="privacy__text">
              You have the following rights regarding your personal information:
            </p>
            <ul className="privacy__list">
              <li>
                <strong>Access:</strong> Request a copy of your personal
                information
              </li>
              <li>
                <strong>Correction:</strong> Update or correct inaccurate
                information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal
                information
              </li>
              <li>
                <strong>Portability:</strong> Request a copy of your data in a
                portable format
              </li>
              <li>
                <strong>Objection:</strong> Object to certain processing of your
                information
              </li>
              <li>
                <strong>Withdrawal:</strong> Withdraw consent for processing
                based on consent
              </li>
            </ul>
            <p className="privacy__text">
              To exercise these rights, please contact us at
              privacy@offcache.com.
            </p>
          </section>

          <section className="privacy__section">
            <h2 className="privacy__section-title">
              8. Cookies and Tracking Technologies
            </h2>
            <p className="privacy__text">
              We use cookies and similar tracking technologies to enhance your
              experience, analyze usage patterns, and provide personalized
              content. You can control cookie settings through your browser
              preferences.
            </p>
          </section>

          <section className="privacy__section">
            <h2 className="privacy__section-title">
              9. International Data Transfers
            </h2>
            <p className="privacy__text">
              Your information may be transferred to and processed in countries
              other than your own. We ensure appropriate safeguards are in place
              to protect your information in accordance with applicable data
              protection laws.
            </p>
          </section>

          <section className="privacy__section">
            <h2 className="privacy__section-title">10. Children's Privacy</h2>
            <p className="privacy__text">
              Our services are not intended for individuals under the age of 18.
              We do not knowingly collect personal information from children
              under 18. If you believe we have collected information from a
              child under 18, please contact us immediately.
            </p>
          </section>

          <section className="privacy__section">
            <h2 className="privacy__section-title">
              11. Changes to This Policy
            </h2>
            <p className="privacy__text">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on this page
              and updating the "Last updated" date. Your continued use of our
              services after any changes constitutes acceptance of the updated
              policy.
            </p>
          </section>

          <section className="privacy__section">
            <h2 className="privacy__section-title">12. Contact Us</h2>
            <p className="privacy__text">
              If you have any questions about this Privacy Policy or our data
              practices, please contact us:
            </p>
            <div className="privacy__contact-info">
              <p>
                <strong>Email:</strong> privacy@offcache.com
              </p>
              <p>
                <strong>Address:</strong> Calgary, Alberta, Canada
              </p>
              <p>
                <strong>Phone:</strong> +1 (403) XXX-XXXX
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
