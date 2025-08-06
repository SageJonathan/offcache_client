import Link from "next/link";
import Email from "../../assets/icons/email.png";
import Facebook from "../../assets/icons/facebook.png";
import Instagram from "../../assets/icons/instagram.png";
import Tiktok from "../../assets/icons/tiktok.png";
// Styles imported globally in _app.tsx

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Main footer content */}
        <div className="footer__main">
          <div className="footer__brand">
            <h3 className="footer__logo">OffCache</h3>
            <p className="footer__description">
              Connecting tech professionals through meaningful, interest-based
              relationships. Beyond networking—building genuine connections.
            </p>
            <div className="footer__contact">
              <a href="mailto:support@offcache.com" className="footer__email">
                <img src={Email} alt="Email" className="footer__email-icon" />
                <span>support@offcache.com</span>
              </a>
            </div>
          </div>

          <div className="footer__links">
            <div className="footer__link-group">
              <h4 className="footer__link-title">Product</h4>
              <ul className="footer__link-list">
                <li>
                  <a href="#how-it-works">How it Works</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#events">Events</a>
                </li>
                <li>
                  <a href="#success-stories">Success Stories</a>
                </li>
              </ul>
            </div>

            <div className="footer__link-group">
              <h4 className="footer__link-title">Company</h4>
              <ul className="footer__link-list">
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/career">Careers</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="footer__link-group">
              <h4 className="footer__link-title">Support</h4>
              <ul className="footer__link-list">
                <li>
                  <Link href="/help">Help Center</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/cookies">Cookie Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="footer__bottom">
          <div className="footer__social">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              <img
                src={Instagram}
                alt="Instagram"
                className="footer__social-icon"
              />
            </a>
            <a
              href="https://tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              <img src={Tiktok} alt="TikTok" className="footer__social-icon" />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              <img
                src={Facebook}
                alt="Facebook"
                className="footer__social-icon"
              />
            </a>
          </div>

          <div className="footer__copyright">
            <p className="footer__tagline">
              Made with ❤️ to help real connections grow
            </p>
            <p className="footer__copyright-text">
              &copy; {new Date().getFullYear()} OffCache. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
