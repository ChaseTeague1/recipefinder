import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav-bar-container">
      <h2 id="recipe-finder">Recipe Finder</h2>

      <div className="nav-right">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/browse">Browse Recipes</Link></li>
          <li><Link to="/post">Post a Recipe</Link></li>
        </ul>
        <Link to="/login" className="login-signup-btn">Login / Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;