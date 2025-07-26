// import Email from "../assets/icons/email.png";
// import Facebook from "../assets/icons/facebook.png";
// import Instagram from "../assets/icons/instagram.png";
// import Tiktok from "../assets/icons/tiktok.png";

const Footer = () => {
  return (
    <footer className="w-full bg-red-500 py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-red-500 mb-2">
          Made with ❤️ to help real connections grow.
        </p>
        <p className="text-white">
          &copy; {new Date().getFullYear()} Git Together. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
