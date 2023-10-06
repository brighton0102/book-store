import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <h1>Bookstore CMS</h1>
      <Link to="/">Books</Link>
      <Link to="/categories">Categories</Link>
    </nav>
  );
}

export default Navigation;
