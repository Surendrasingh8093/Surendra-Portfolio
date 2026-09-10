import { useState } from "react";
import { Link } from "react-router-dom";



function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <b>SS</b>
        </Link>

        {/* Hamburger */}
        <button
          type="button"
          className={`mobile-menu-btn ${menuOpen ? "menu-active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation */}
        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>

          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/skills" onClick={closeMenu}>Skills</Link>
          <Link to="/projects" onClick={closeMenu}>Projects</Link>
          <Link to="/resume" onClick={closeMenu}>Resume</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
          <Link to="/profile" onClick={closeMenu}>Profile</Link>
          <Link to="/documents" onClick={closeMenu}>Documents</Link>
          <Link to="/upload-document" onClick={closeMenu}>Upload PDF</Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;