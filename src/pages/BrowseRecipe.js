import React from "react";
import RecipeCard from "../components/RecipeCard";


function BrowseRecipe({recipes}){
    return (
        <div className="browse-recipe-div">
            {
                recipes.map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe}/>
                ))
            }
        </div>
    )
}

export default BrowseRecipe;