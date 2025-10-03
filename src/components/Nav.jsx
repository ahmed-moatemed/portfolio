import React from 'react';
import { Link } from "react-router";
import '../style/Nav.css';

export default function Nav() {

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw'}}>
    <div className="nav">
      <div>
        <Link to="/">
          <h2>Mo3temed</h2>
        </Link>
      </div>
      <div className="links">
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