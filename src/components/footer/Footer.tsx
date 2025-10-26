import { useState } from "react";
import "./Footer.css";
import { Impressum } from "../impressum/Impressum";

export const Footer = () => {
  const [isImpressumOpen, setIsImpressumOpen] = useState(true);

  return (
    <footer className="footer">
      <Impressum
        isOpen={isImpressumOpen}
        onClose={() => {
          setIsImpressumOpen(false);
        }}
      />
      <a onClick={() => setIsImpressumOpen(true)}>Impressum</a>
    </footer>
  );
};
