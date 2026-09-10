import { useState } from "react";
import { Link } from "react-router-dom";



function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="navbar-container">

        {/* Logo */}
        <Link
          to="/"
          className="navbar-logo"
          onClick={() => setMenuOpen(false)}
        >
          SS
        </Link>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>

          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <Link to="/skills" onClick={() => setMenuOpen(false)}>
            Skills
          </Link>

          <Link to="/projects" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>

          <Link to="/resume" onClick={() => setMenuOpen(false)}>
            Resume
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

          <Link to="/profile" onClick={() => setMenuOpen(false)}>
            Profile
          </Link>

          <Link to="/documents" onClick={() => setMenuOpen(false)}>
            Documents
          </Link>

          <Link to="/upload-document" onClick={() => setMenuOpen(false)}>
            Upload PDF
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;