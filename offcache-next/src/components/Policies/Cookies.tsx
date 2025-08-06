import React from "react";
// Styles imported globally in _app.tsx

const Cookies: React.FC = () => {
  return (
    <div className="cookies">
      <div className="cookies__container">
        <div className="cookies__header">
          <h1 className="cookies__title">Cookie Policy</h1>
          <p className="cookies__last-updated">Last updated: December 2024</p>
        </div>

        <div className="cookies__content">
          <section className="cookies__section">
            <h2 className="cookies__section-title">1. What Are Cookies?</h2>
            <p className="cookies__text">
              Cookies are small text files that are stored on your device
              (computer, tablet, or mobile) when you visit our website. They
              help us provide you with a better experience by remembering your
              preferences and analyzing how you use our site.
            </p>
          </section>

          <section className="cookies__section">
            <h2 className="cookies__section-title">2. How We Use Cookies</h2>
            <p className="cookies__text">
              We use cookies for several purposes to enhance your experience on
              OffCache:
            </p>
            <ul className="cookies__list">
              <li>
                <strong>Essential Cookies:</strong> Required for the website to
                function properly
              </li>
              <li>
                <strong>Performance Cookies:</strong> Help us understand how
                visitors interact with our site
              </li>
              <li>
                <strong>Functional Cookies:</strong> Remember your preferences
                and settings
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Provide insights into
                website usage and performance
              </li>
              <li>
                <strong>Marketing Cookies:</strong> Help us deliver relevant
                content and advertisements
              </li>
            </ul>
          </section>

          <section className="cookies__section">
            <h2 className="cookies__section-title">
              3. Types of Cookies We Use
            </h2>

            <h3 className="cookies__subsection-title">3.1 Essential Cookies</h3>
            <p className="cookies__text">
              These cookies are necessary for the website to function and cannot
              be disabled. They include:
            </p>
            <ul className="cookies__list">
              <li>Authentication cookies to keep you logged in</li>
              <li>Security cookies to protect against fraud</li>
              <li>Session cookies to maintain your current session</li>
              <li>Load balancing cookies for website performance</li>
            </ul>

            <h3 className="cookies__subsection-title">
              3.2 Performance and Analytics Cookies
            </h3>
            <p className="cookies__text">
              These cookies help us understand how visitors use our website and
              improve our services:
            </p>
            <ul className="cookies__list">
              <li>Google Analytics cookies to track website usage</li>
              <li>Heat mapping cookies to understand user behavior</li>
              <li>Error tracking cookies to identify and fix issues</li>
              <li>Performance monitoring cookies</li>
            </ul>

            <h3 className="cookies__subsection-title">
              3.3 Functional Cookies
            </h3>
            <p className="cookies__text">
              These cookies remember your preferences and settings to provide a
              personalized experience:
            </p>
            <ul className="cookies__list">
              <li>Language and region preferences</li>
              <li>Theme and display settings</li>
              <li>Notification preferences</li>
              <li>Search history and filters</li>
            </ul>

            <h3 className="cookies__subsection-title">
              3.4 Marketing and Advertising Cookies
            </h3>
            <p className="cookies__text">
              These cookies help us deliver relevant content and advertisements:
            </p>
            <ul className="cookies__list">
              <li>Social media integration cookies</li>
              <li>Retargeting cookies for relevant ads</li>
              <li>Affiliate tracking cookies</li>
              <li>Email marketing tracking cookies</li>
            </ul>
          </section>

          <section className="cookies__section">
            <h2 className="cookies__section-title">4. Third-Party Cookies</h2>
            <p className="cookies__text">
              We may use third-party services that also place cookies on your
              device. These services include:
            </p>
            <ul className="cookies__list">
              <li>
                <strong>Google Analytics:</strong> Website analytics and
                performance tracking
              </li>
              <li>
                <strong>Stripe:</strong> Payment processing and security
              </li>
              <li>
                <strong>Social Media Platforms:</strong> Integration with social
                media features
              </li>
              <li>
                <strong>Customer Support Tools:</strong> Help desk and support
                services
              </li>
            </ul>
            <p className="cookies__text">
              These third-party services have their own privacy policies and
              cookie practices. We recommend reviewing their policies for more
              information.
            </p>
          </section>

          <section className="cookies__section">
            <h2 className="cookies__section-title">5. Cookie Duration</h2>

            <h3 className="cookies__subsection-title">5.1 Session Cookies</h3>
            <p className="cookies__text">
              These cookies are temporary and are deleted when you close your
              browser. They are used to maintain your session and preferences
              during your visit.
            </p>

            <h3 className="cookies__subsection-title">
              5.2 Persistent Cookies
            </h3>
            <p className="cookies__text">
              These cookies remain on your device for a set period (usually 30
              days to 2 years) and are used to remember your preferences and
              settings across visits.
            </p>
          </section>

          <section className="cookies__section">
            <h2 className="cookies__section-title">
              6. Managing Your Cookie Preferences
            </h2>

            <h3 className="cookies__subsection-title">6.1 Browser Settings</h3>
            <p className="cookies__text">
              You can control cookies through your browser settings. Most
              browsers allow you to:
            </p>
            <ul className="cookies__list">
              <li>Block all cookies</li>
              <li>Block third-party cookies</li>
              <li>Delete existing cookies</li>
              <li>Set preferences for specific websites</li>
            </ul>

            <h3 className="cookies__subsection-title">
              6.2 Our Cookie Consent
            </h3>
            <p className="cookies__text">
              When you first visit our website, you'll see a cookie consent
              banner. You can:
            </p>
            <ul className="cookies__list">
              <li>Accept all cookies</li>
              <li>Customize your preferences</li>
              <li>Reject non-essential cookies</li>
              <li>Change your preferences later through our settings</li>
            </ul>

            <h3 className="cookies__subsection-title">6.3 Opt-Out Options</h3>
            <p className="cookies__text">
              You can opt out of certain types of cookies:
            </p>
            <ul className="cookies__list">
              <li>Analytics cookies through Google Analytics opt-out</li>
              <li>
                Advertising cookies through the Digital Advertising Alliance
              </li>
              <li>Social media cookies through platform settings</li>
            </ul>
          </section>

          <section className="cookies__section">
            <h2 className="cookies__section-title">
              7. Impact of Disabling Cookies
            </h2>
            <p className="cookies__text">
              If you choose to disable cookies, some features of our website may
              not function properly:
            </p>
            <ul className="cookies__list">
              <li>You may need to log in repeatedly</li>
              <li>Some personalized features may not work</li>
              <li>Website performance may be affected</li>
              <li>Some third-party integrations may not function</li>
            </ul>
          </section>

          <section className="cookies__section">
            <h2 className="cookies__section-title">
              8. Updates to This Policy
            </h2>
            <p className="cookies__text">
              We may update this Cookie Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. We will notify you of any material changes by
              posting the updated policy on our website.
            </p>
          </section>

          <section className="cookies__section">
            <h2 className="cookies__section-title">9. Contact Us</h2>
            <p className="cookies__text">
              If you have any questions about our use of cookies or this Cookie
              Policy, please contact us:
            </p>
            <div className="cookies__contact-info">
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

export default Cookies;
