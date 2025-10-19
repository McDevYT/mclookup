import { Link, useLocation } from "react-router-dom";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const location = useLocation();
  const underlineRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const [isSlideoutOpen, setIsSlideoutOpen] = useState(false);
  const slideoutRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  const updateUnderline = () => {
    const current = linkRefs.current[location.pathname];
    const underline = underlineRef.current;
    if (current && underline) {
      const rect = current.getBoundingClientRect();
      const navbarRect = current
        .closest(".navbar-links")!
        .getBoundingClientRect();
      underline.style.width = `${rect.width}px`;
      underline.style.transform = `translateX(${
        rect.left - navbarRect.left
      }px)`;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isSlideoutOpen &&
        slideoutRef.current &&
        !slideoutRef.current.contains(event.target as Node) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target as Node)
      ) {
        setIsSlideoutOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSlideoutOpen]);

  useLayoutEffect(() => {
    updateUnderline();
  }, []);

  useEffect(() => {
    setIsSlideoutOpen(false);
    updateUnderline();
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>McLookup</h1>
      </div>

      <ul className="navbar-links">
        <li>
          <Link
            className="navbar-a"
            to="/"
            ref={(el) => {
              linkRefs.current["/"] = el;
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="navbar-a"
            to="/search"
            ref={(el) => {
              linkRefs.current["/search"] = el;
            }}
          >
            Search
          </Link>
        </li>
        <li>
          <Link
            className="navbar-a"
            to="/capes"
            ref={(el) => {
              linkRefs.current["/capes"] = el;
            }}
          >
            Capes
          </Link>
        </li>
        <li>
          <Link
            className="navbar-a"
            to="/faq"
            ref={(el) => {
              linkRefs.current["/faq"] = el;
            }}
          >
            FAQ
          </Link>
        </li>
        <div className="navbar-underline" ref={underlineRef} />
      </ul>

      <div className="navbar-burger-holder">
        <button
          onClick={() => {
            setIsSlideoutOpen(!isSlideoutOpen);
          }}
          ref={burgerRef}
          className={`navbar-burger ${isSlideoutOpen ? "open" : ""}`}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`navbar-slideout ${isSlideoutOpen ? "open" : ""}`}
          ref={slideoutRef}
        >
          <Link className="navbar-a" to="/">
            Home
          </Link>
          <Link className="navbar-a" to="/search">
            Search
          </Link>
          <Link className="navbar-a" to="/capes">
            Capes
          </Link>
          <Link className="navbar-a" to="/faq">
            FAQ
          </Link>
        </div>
      </div>
    </nav>
  );
};
