import React, {useState, useEffect} from "react";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";

function Home({recipes}){
    const featuredRecipes = recipes.slice(0, 5);

    return (
        <div className="home-container">
            <div className="header">
                <h1>Find the best recipes from users</h1>
                <p>Discover and share your favorite recipes with our community.</p>
                <SearchBar />
            </div>
            <div className="home-body">
                <h1>Featured recipes</h1>
                <div className="featured-recipes">
                {
                    featuredRecipes.map(recipe => (
                        <RecipeCard recipe={recipe}/>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default Home