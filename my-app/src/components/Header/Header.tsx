import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/" className="header__brand">
            OffCache
          </Link>
        </div>

        <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link to="/" className="header__nav-link">
                Home
              </Link>
            </li>
            <li className="header__nav-item">
              <Link to="/community" className="header__nav-link">
                Community
              </Link>
            </li>
            <li className="header__nav-item">
              <Link to="/pricing" className="header__nav-link">
                Pricing
              </Link>
            </li>
            <li className="header__nav-item">
              <Link to="/about" className="header__nav-link">
                About
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header__actions">
          <Link to="/signin" className="header__btn header__btn--secondary">
            Sign In
          </Link>
          <Link to="/signup" className="header__btn header__btn--primary">
            Join Now
          </Link>
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
