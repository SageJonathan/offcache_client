import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// Styles imported globally in layout.tsx

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Dev logic: mimic logged in state when on dashboard or events routes
  const isLoggedIn = pathname === "/dashboard" || pathname === "/events";

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
          <Link href="/" className="header__brand" onClick={closeMenu}>
            OffCache
          </Link>
        </div>

        <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
          <ul className="header__nav-list">
            {!isLoggedIn ? (
              // Public navigation
              <>
                <li className="header__nav-item">
                  <Link
                    href="/"
                    className="header__nav-link"
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link
                    href="/community"
                    className="header__nav-link"
                    onClick={closeMenu}
                  >
                    Community
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link
                    href="/pricing"
                    className="header__nav-link"
                    onClick={closeMenu}
                  >
                    Pricing
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link
                    href="/about"
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
                    href="/dashboard"
                    className="header__nav-link"
                    onClick={closeMenu}
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link
                    href="/events"
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
                href="/signin"
                className="header__btn header__btn--secondary"
                onClick={closeMenu}
              >
                Sign In
              </Link>
              <Link
                href="/signup"
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
