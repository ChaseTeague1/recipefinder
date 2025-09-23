import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import BrowseRecipe from "./pages/BrowseRecipe";
import PostRecipe from "./pages/PostRecipe";
import LoginSignup from "./pages/LoginSignup";


console.log("React version:", React.version);
function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<BrowseRecipe />} />
        <Route path="/post" element={<PostRecipe />} />
        <Route path="/login" element={<LoginSignup />} />
        {/* Optional 404 page */}
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;