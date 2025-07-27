import React, { useState } from "react";
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
          <h1 className="header__brand">Git Together</h1>
        </div>

        <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#how-it-works" className="header__nav-link">
                How it Works
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#testimonials" className="header__nav-link">
                Community
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#pricing" className="header__nav-link">
                Pricing
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#about" className="header__nav-link">
                About
              </a>
            </li>
          </ul>
        </nav>

        <div className="header__actions">
          <button className="header__btn header__btn--secondary">
            Sign In
          </button>
          <button className="header__btn header__btn--primary">Join Now</button>
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
