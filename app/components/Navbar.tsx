import React from 'react';
import '@/app/styles/styles.css';


const Navbar: React.FC = () => {
  return (
    <nav className="navbarr">
      <ul>
        {['Home', 'Issues', 'Issues Escalated', 'Submit a Report'].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
