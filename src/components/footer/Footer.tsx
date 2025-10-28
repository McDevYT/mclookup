import { useState } from "react";
import "./Footer.css";
import { Impressum } from "../impressum/Impressum";
import { Link } from "react-router-dom";

export const Footer = () => {
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-links">
        <Link className="footer-a" to="/">
          Home
        </Link>
        <Link className="footer-a" to="/search">
          Search
        </Link>
        <Link className="footer-a" to="/capes">
          Capes
        </Link>
        <Link className="footer-a" to="/faq">
          FAQ
        </Link>
        <Link className="footer-a" to="/contact">
          Contact
        </Link>
        <Impressum
          isOpen={isImpressumOpen}
          onClose={() => {
            setIsImpressumOpen(false);
          }}
        />
        <a className="footer-a" onClick={() => setIsImpressumOpen(true)}>
          Impressum
        </a>
      </div>
      <p className="footer-copyright-text">
        &#169; {new Date().getFullYear()} McLoopup; All rights reserved
      </p>
    </footer>
  );
};
