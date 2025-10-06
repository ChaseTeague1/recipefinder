import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import BrowseRecipe from "./pages/BrowseRecipe";
import PostRecipe from "./pages/PostRecipe";
import LoginSignup from "./pages/LoginSignup";
import RecipeDetailPage from "./pages/RecipeDetailPage";


function App() {
    const [currentUser, setCurrentUser] = useState(null)
    const [recipes, setRecipes] = useState([])
    const [users, setUsers] = useState([])
      
    /*User related section */
    useEffect(() => {
      fetch('/check_session')
      .then(res => res.json())
      .then(data => setCurrentUser(data))
    }, [])

    useEffect(() => {
      fetch('/users')
      .then(res => res.json())
      .then(data => setUsers(data))
    }, [])

    function onUserSubmit(newUser){
      setUsers([...users, newUser])
    }

    function handleLogin(user){
      setCurrentUser(user)
    }

    function handleLogout(){
      setCurrentUser(null)
    }


    /*Recipe related section*/
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
        <Route path="/login" element={<LoginSignup onUserSubmit={onUserSubmit}/>} />
        {/* Optional 404 page */}
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
        <Route path="/recipes/:id" element= {<RecipeDetailPage recipes={recipes}/>} />
      </Routes>
    </div>
  );
}

export default App;