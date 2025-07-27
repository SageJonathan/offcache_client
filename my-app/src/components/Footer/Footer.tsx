import Email from "../../assets/icons/email.png";
import Facebook from "../../assets/icons/facebook.png";
import Instagram from "../../assets/icons/instagram.png";
import Tiktok from "../../assets/icons/tiktok.png";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Left side */}
      <div className="footer__left-side">
        <a className="footer__icon" href="mailto:support@gittogether.com">
          <img src={Email} alt="email" />
          <p className="footer__text">Contact us</p>
        </a>
      </div>

      {/* Middle */}
      <div className="footer__middle">
        <p className="footer__text">
          Made with ❤️ to help real connections grow.
        </p>
        <p className="footer__text">
          &copy; {new Date().getFullYear()} Git Together. All rights reserved.
        </p>
      </div>

      {/* Right side */}
      <div className="footer__right-side">
        <a
          className="footer__icon"
          href="https://www.instagram.com/gittogether"
          target="_blank"
        >
          <img src={Instagram} alt="instagram" />
        </a>
        <a
          className="footer__icon"
          href="https://www.tiktok.com/@gittogether"
          target="_blank"
        >
          <img src={Tiktok} alt="tiktok" />
        </a>
        <a
          className="footer__icon"
          href="https://www.facebook.com/gittogether"
          target="_blank"
        >
          <img src={Facebook} alt="facebook" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
