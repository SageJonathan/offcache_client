import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import "../styles/globals.scss";

// Import all component styles globally
import "../components/About/aboutC.scss";
import "../components/Admin/addEvent.scss";
import "../components/Admin/admin.scss";
import "../components/Admin/connections.scss";
import "../components/Admin/eventMedia.scss";
import "../components/Admin/users.scss";
import "../components/Admin/verification.scss";
import "../components/Blog/blog.scss";
import "../components/Career/applicationForm.scss";
import "../components/Career/career.scss";
import "../components/Community/communityC.scss";
import "../components/Contact/contact.scss";
import "../components/CTA/cta.scss";
import "../components/Dashboard/dashboard.scss";
import "../components/Dashboard/eventsSection.scss";
import "../components/Dashboard/messagesSection.scss";
import "../components/Dashboard/paymentsSection.scss";
import "../components/Dashboard/profileSection.scss";
import "../components/Dashboard/settingsSection.scss";
import "../components/Dashboard/visitProfile.scss";
import "../components/Events/events.scss";
import "../components/Footer/footer.scss";
import "../components/Header/header.scss";
import "../components/HelpCenter/helpCenter.scss";
import "../components/Hero/hero.scss";
import "../components/HowItWorks/howItWorks.scss";
import "../components/Policies/cookies.scss";
import "../components/Policies/privacy.scss";
import "../components/Policies/terms.scss";
import "../components/Pricing/pricingC.scss";
import "../components/SignIn/signInC.scss";
import "../components/Signup/signupC.scss";
import "../components/Survey/survey.scss";
import "../components/Testimonials/testimonials.scss";
import "../components/UserAnalytics/userAnalytics.scss";
import "../components/Verification/selfieVerification.scss";
import "../components/Verification/verificationStatus.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
