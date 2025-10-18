import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>McLookup</h1>
      </div>

      <ul className="navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#Search">Search</a>
        </li>
        <li>
          <a href="#Capes">Capes</a>
        </li>
        <li>
          <a href="#FAQ">FAQ</a>
        </li>
      </ul>
    </nav>
  );
};
