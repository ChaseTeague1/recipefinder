import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import BrowseRecipe from "./pages/BrowseRecipe";
import PostRecipe from "./pages/PostRecipe";
import LoginSignup from "./pages/LoginSignup";


console.log("React version:", React.version);
function App() {
    const [recipes, setRecipes] = useState([])
      
    useEffect(() => {
        fetch('/recipes')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])


    function onRecipeSubmit(newRecipe){
      setRecipes([...recipes, newRecipe])
    }

    function deleteRecipe(id){
      fetch(`/recipes/${id}`, {
        method: 'DELETE',
      })
      .then(res => {
        if (res.ok){
          setRecipes((recipes) => recipes.filter(recipe => recipe.id !== id))
        }
      })

    }

  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home recipes={recipes}/>} />
        <Route path="/browse" element={<BrowseRecipe handleDelete={deleteRecipe} recipes={recipes}/>} />
        <Route path="/post" element={<PostRecipe onRecipeSubmit={onRecipeSubmit}/>} />
        <Route path="/login" element={<LoginSignup />} />
        {/* Optional 404 page */}
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;