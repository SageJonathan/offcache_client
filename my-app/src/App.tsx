import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Community from "./pages/Community";
import Pricing from "./pages/Pricing";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Survey from "./pages/Survey";
import UserAnalytics from "./pages/UserAnalytics";
import VisitProfile from "./pages/VisitProfile";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Blog from "./pages/Blog";
import Events from "./pages/Events";
import HelpCenter from "./components/HelpCenter/HelpCenter";
import Privacy from "./components/Policies/Privacy";
import Terms from "./components/Policies/Terms";
import Cookies from "./components/Policies/Cookies";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/user-analytics" element={<UserAnalytics />} />
        <Route path="/profile/:userId" element={<VisitProfile />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
