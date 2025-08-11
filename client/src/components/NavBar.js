import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Recipe Finder</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/browse">Browse Recipes</Link></li>
        <li><Link to="/post">Post a Recipe</Link></li>
        <li><Link to="/login">Login / Signup</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;