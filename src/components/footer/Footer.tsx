import { useState } from "react";
import "./Footer.css";
import { Imprint } from "../imprint/imprint";
import { Link } from "react-router-dom";

export const Footer = () => {
  const [isImprintOpen, setIsImprintOpen] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-links">
        <Link className="footer-a" to="/">
          Home
        </Link>
        <p>•</p>
        <Link className="footer-a" to="/search">
          Search
        </Link>
        <p>•</p>
        <Link className="footer-a" to="/capes">
          Capes
        </Link>
        <p>•</p>
        <Link className="footer-a" to="/faq">
          FAQ
        </Link>
        <p>•</p>
        <Link className="footer-a" to="/contact">
          Contact
        </Link>
        <p>•</p>
        <Imprint
          isOpen={isImprintOpen}
          onClose={() => {
            setIsImprintOpen(false);
          }}
        />
        <a className="footer-a" onClick={() => setIsImprintOpen(true)}>
          Imprint
        </a>
      </div>
      <p className="footer-copyright-text">
        &#169; {new Date().getFullYear()} McLoopup; All rights reserved
      </p>
    </footer>
  );
};
