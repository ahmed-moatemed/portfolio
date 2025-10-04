import React, { useState } from 'react';
import { Link } from "react-router";
import '../style/Nav.css';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw'}}>
    <div className="nav">
      <div>
        <Link to="/">
          <h2>Mo3temed</h2>
        </Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
      <div className={`links ${isOpen ? 'open' : ''}`}>
        <Link to="/">
          <button>
            Home
          </button>
        </Link>
        <Link to="/about">
          <button>
            About
          </button>
        </Link>
        <Link to="/projects">
          <button>
            Projects
          </button>
        </Link>
        <Link to="/contact">
          <button>
            Contact
          </button>
        </Link>
      </div>
    </div>
    </div>
  );
}