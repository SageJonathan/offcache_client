import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Dev logic: mimic logged in state when on dashboard or events routes
  const isLoggedIn =
    location.pathname === "/dashboard" || location.pathname === "/events";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/" className="header__brand" onClick={closeMenu}>
            OffCache
          </Link>
        </div>

        <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
          <ul className="header__nav-list">
            {!isLoggedIn ? (
              // Public navigation
              <>
                <li className="header__nav-item">
                  <Link to="/" className="header__nav-link" onClick={closeMenu}>
                    Home
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link
                    to="/community"
                    className="header__nav-link"
                    onClick={closeMenu}
                  >
                    Community
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link
                    to="/pricing"
                    className="header__nav-link"
                    onClick={closeMenu}
                  >
                    Pricing
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link
                    to="/about"
                    className="header__nav-link"
                    onClick={closeMenu}
                  >
                    About
                  </Link>
                </li>
              </>
            ) : (
              // Logged in navigation
              <>
                <li className="header__nav-item">
                  <Link
                    to="/dashboard"
                    className="header__nav-link"
                    onClick={closeMenu}
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link
                    to="/events"
                    className="header__nav-link"
                    onClick={closeMenu}
                  >
                    Events
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>

        <div className="header__actions">
          {!isLoggedIn ? (
            // Public actions
            <>
              <Link
                to="/signin"
                className="header__btn header__btn--secondary"
                onClick={closeMenu}
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="header__btn header__btn--primary"
                onClick={closeMenu}
              >
                Join Now
              </Link>
            </>
          ) : (
            // Logged in actions
            <button
              className="header__btn header__btn--secondary"
              onClick={() => {
                // TODO: Implement sign out logic
                console.log("Sign out clicked");
                closeMenu();
              }}
            >
              Sign Out
            </button>
          )}
        </div>

        <button
          className={`header__mobile-toggle ${
            isMenuOpen ? "header__mobile-toggle--open" : ""
          }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
