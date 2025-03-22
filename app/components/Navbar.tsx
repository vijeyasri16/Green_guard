import React, { useState } from "react";
import "@/app/styles/styles.css";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-container">
      {/* Hamburger Icon (Only Visible on Mobile) */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰ {/* Unicode for Hamburger Icon */}
      </button>

      {/* Navigation Links (Visible Only in Mobile View) */}
      <div className={`navbarr ${menuOpen ? "active" : ""}`}>
        <ul>
          {["Home", "Issues", "Issues Escalated", "Submit a Report"].map(
            (item) => (
              <li key={item}>{item}</li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
