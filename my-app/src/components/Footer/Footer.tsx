// import Email from "../assets/icons/email.png";
// import Facebook from "../assets/icons/facebook.png";
// import Instagram from "../assets/icons/instagram.png";
// import Tiktok from "../assets/icons/tiktok.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__text">
          Made with ❤️ to help real connections grow.
        </p>
        <p className="footer__text">
          &copy; {new Date().getFullYear()} Git Together. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
