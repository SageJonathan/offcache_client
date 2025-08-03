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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
