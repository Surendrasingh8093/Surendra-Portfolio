import { useState } from "react";
import { Link } from "react-router-dom";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        <h2>Surendra Singh</h2>
      </div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <div className={menuOpen ? "nav-links active" : "nav-links"}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
         Home</Link>

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
         Profile</Link>

        <Link to="/documents" onClick={() => setMenuOpen(false)}>
          Documents
        </Link>

        <Link to="/upload-document" onClick={() => setMenuOpen(false)}>
         Upload PDF
        </Link>
        
      </div>

    </nav>
  );
}

export default Navbar;