import React from "react";
import "./terms.scss";

const Terms: React.FC = () => {
  return (
    <div className="terms">
      <div className="terms__container">
        <div className="terms__header">
          <h1 className="terms__title">Terms of Service</h1>
          <p className="terms__last-updated">Last updated: December 2024</p>
        </div>

        <div className="terms__content">
          <section className="terms__section">
            <h2 className="terms__section-title">1. Acceptance of Terms</h2>
            <p className="terms__text">
              By accessing and using OffCache ("the Service"), you accept and
              agree to be bound by the terms and provision of this agreement. If
              you do not agree to abide by the above, please do not use this
              service.
            </p>
          </section>

          <section className="terms__section">
            <h2 className="terms__section-title">2. Description of Service</h2>
            <p className="terms__text">
              OffCache is a networking platform that connects tech professionals
              through events, messaging, and community features. Our service
              includes:
            </p>
            <ul className="terms__list">
              <li>User profile creation and management</li>
              <li>Event discovery and participation</li>
              <li>Messaging and communication tools</li>
              <li>Community features and networking opportunities</li>
              <li>Verification and safety features</li>
            </ul>
          </section>

          <section className="terms__section">
            <h2 className="terms__section-title">3. User Accounts</h2>

            <h3 className="terms__subsection-title">3.1 Account Creation</h3>
            <p className="terms__text">
              To use our Service, you must create an account. You agree to
              provide accurate, current, and complete information during
              registration and to update such information to keep it accurate,
              current, and complete.
            </p>

            <h3 className="terms__subsection-title">3.2 Account Security</h3>
            <p className="terms__text">
              You are responsible for safeguarding your account credentials and
              for all activities that occur under your account. You agree to
              notify us immediately of any unauthorized use of your account.
            </p>

            <h3 className="terms__subsection-title">3.3 Age Requirement</h3>
            <p className="terms__text">
              You must be at least 18 years old to use our Service. By using our
              Service, you represent and warrant that you are at least 18 years
              of age.
            </p>
          </section>

          <section className="terms__section">
            <h2 className="terms__section-title">4. User Conduct</h2>
            <p className="terms__text">You agree not to:</p>
            <ul className="terms__list">
              <li>
                Use the Service for any unlawful purpose or in violation of
                these Terms
              </li>
              <li>Harass, abuse, or harm other users</li>
              <li>Post false, misleading, or inappropriate content</li>
              <li>Impersonate another person or entity</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use automated systems to access the Service</li>
              <li>Interfere with or disrupt the Service</li>
              <li>
                Collect or store personal data of other users without consent
              </li>
              <li>
                Use the Service for commercial purposes without authorization
              </li>
            </ul>
          </section>

          <section className="terms__section">
            <h2 className="terms__section-title">
              5. Content and Intellectual Property
            </h2>

            <h3 className="terms__subsection-title">5.1 User Content</h3>
            <p className="terms__text">
              You retain ownership of content you submit to our Service. By
              submitting content, you grant us a worldwide, non-exclusive,
              royalty-free license to use, reproduce, and distribute your
              content in connection with the Service.
            </p>

            <h3 className="terms__subsection-title">
              5.2 Our Intellectual Property
            </h3>
            <p className="terms__text">
              The Service and its original content, features, and functionality
              are owned by OffCache and are protected by international
              copyright, trademark, patent, trade secret, and other intellectual
              property laws.
            </p>
          </section>

          <section className="terms__section">
            <h2 className="terms__section-title">
              6. Privacy and Data Protection
            </h2>
            <p className="terms__text">
              Your privacy is important to us. Please review our Privacy Policy,
              which also governs your use of the Service, to understand our
              practices regarding the collection and use of your information.
            </p>
          </section>

          <section className="terms__section">
            <h2 className="terms__section-title">7. Payment Terms</h2>

            <h3 className="terms__subsection-title">7.1 Subscription Fees</h3>
            <p className="terms__text">
              Some features of our Service require a paid subscription.
              Subscription fees are billed in advance and are non-refundable
              except as required by law.
            </p>

            <h3 className="terms__subsection-title">7.2 Payment Processing</h3>
            <p className="terms__text">
              Payments are processed through third-party payment processors. By
              making a payment, you agree to the terms and conditions of the
              payment processor.
            </p>

            <h3 className="terms__subsection-title">7.3 Cancellation</h3>
            <p className="terms__text">
              You may cancel your subscription at any time. Cancellation will
              take effect at the end of your current billing period.
            </p>
          </section>

          <section className="terms__section">
            <h2 className="terms__section-title">8. Safety and Verification</h2>

            <h3 className="terms__subsection-title">
              8.1 Verification Process
            </h3>
            <p className="terms__text">
              We may require identity verification to ensure the safety and
              integrity of our community. You agree to provide accurate
              verification information when requested.
            </p>

            <h3 className="terms__subsection-title">8.2 Safety Guidelines</h3>
            <p className="terms__text">
              While we implement safety measures, you are responsible for your
              own safety when meeting other users. We recommend meeting in
              public places and following general safety practices.
            </p>
          </section>

          <section className="terms__section">
            <h2 className="terms__section-title">
              9. Disclaimers and Limitations
            </h2>

            <h3 className="terms__subsection-title">
              9.1 Service Availability
            </h3>
            <p className="terms__text">
              We strive to provide a reliable service but cannot guarantee
              uninterrupted access. The Service is provided "as is" without
              warranties of any kind.
            </p>

            <h3 className="terms__subsection-title">
              9.2 Limitation of Liability
            </h3>
            <p className="terms__text">
              To the maximum extent permitted by law, OffCache shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising from your use of the Service.
            </p>
          </section>

          <section className="terms__section">
            <h2 className="terms__section-title">10. Termination</h2>

            <h3 className="terms__subsection-title">10.1 Termination by You</h3>
            <p className="terms__text">
              You may terminate your account at any time by contacting us or
              using the account deletion feature in your settings.
            </p>

            <h3 className="terms__subsection-title">10.2 Termination by Us</h3>
            <p className="terms__text">
              We may terminate or suspend your account immediately, without
              prior notice, for conduct that we believe violates these Terms or
              is harmful to other users or the Service.
            </p>

            <h3 className="terms__subsection-title">
              10.3 Effect of Termination
            </h3>
            <p className="terms__text">
              Upon termination, your right to use the Service will cease
              immediately. We may delete your account and data in accordance
              with our Privacy Policy.
            </p>
          </section>

          <section className="terms__section">
            <h2 className="terms__section-title">11. Governing Law</h2>
            <p className="terms__text">
              These Terms shall be governed by and construed in accordance with
              the laws of Alberta, Canada, without regard to its conflict of law
              provisions.
            </p>
          </section>

          <section className="terms__section">
            <h2 className="terms__section-title">12. Dispute Resolution</h2>
            <p className="terms__text">
              Any disputes arising from these Terms or your use of the Service
              shall be resolved through binding arbitration in accordance with
              the laws of Alberta, Canada.
            </p>
          </section>

          <section className="terms__section">
            <h2 className="terms__section-title">13. Changes to Terms</h2>
            <p className="terms__text">
              We reserve the right to modify these Terms at any time. We will
              notify users of any material changes by posting the new Terms on
              this page. Your continued use of the Service after such changes
              constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="terms__section">
            <h2 className="terms__section-title">14. Contact Information</h2>
            <p className="terms__text">
              If you have any questions about these Terms of Service, please
              contact us:
            </p>
            <div className="terms__contact-info">
              <p>
                <strong>Email:</strong> legal@offcache.com
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

export default Terms;
