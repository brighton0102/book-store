import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import { CgProfile } from 'react-icons/cg';

function Navigation() {
  return (
    <nav>
      <h1>Bookstore CMS</h1>
      <ul className="nav-links">
        <li><Link to="/">BOOKS</Link></li>
        <li><Link to="/categories">CATEGORIES</Link></li>
      </ul>
      <div className="profile">
        <CgProfile className="icon" />
      </div>
    </nav>
  );
}

export default Navigation;
