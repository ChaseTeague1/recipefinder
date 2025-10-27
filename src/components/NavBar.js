import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginSignup from "../pages/LoginSignup";

function Navbar({ currentUser, setCurrentUser }) {
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" })
      .then(r => { if (r.ok) setCurrentUser(null); })
      .catch(console.error);
  };

  return (
    <>
      <nav className="nav-bar-container">
        <h2 id="recipe-finder">Recipe Finder</h2>
        <div className="nav-right">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/browse">Browse Recipes</Link></li>
            <li><Link to="/post">Post a Recipe</Link></li>
          </ul>

          {currentUser ? (
            <button className="login-signup-btn" style={{ all: "unset", cursor: "pointer" }} onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <span className="login-signup-btn" style={{ cursor: "pointer" }} onClick={() => setShowModal(true)}>
              Login / Signup
            </span>
          )}
        </div>
      </nav>

      {showModal && (
        <LoginSignup
          onUserSubmit={(user) => { setCurrentUser(user); setShowModal(false); }}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default Navbar;
