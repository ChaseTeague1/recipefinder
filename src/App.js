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
    const [showLoginModal, setShowLoginModal] = useState(false)
      
    /*User related section */
    useEffect(() => {
      fetch('/check_session')
      .then((r) => {
        if(r.ok){
          r.json().then(user => setCurrentUser(user))
        } else {
          setCurrentUser(null)
        }
      })
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
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} showModal={showLoginModal} setShowModal={setShowLoginModal}/>
      {
          showLoginModal && (
            <LoginSignup 
             onUserSubmit={(user) => {
              setCurrentUser(user)
              setShowLoginModal(false)
             }}
             onClose={() => setShowLoginModal(false)}
            />
          )
        }
      <Routes>
        <Route path="/" element={<Home recipes={recipes}/>} />
        <Route path="/browse" element={<BrowseRecipe handleDelete={deleteRecipe} recipes={recipes}/>} />
        <Route path="/post" element={<PostRecipe onRecipeSubmit={onRecipeSubmit} currentUser={currentUser} showModal={showLoginModal} setShowModal={setShowLoginModal}/>} />
        {/* Optional 404 page */}
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
        <Route path="/recipes/:id" element= {<RecipeDetailPage recipes={recipes}/>} />
      </Routes>
    </div>
  );
}

export default App;

