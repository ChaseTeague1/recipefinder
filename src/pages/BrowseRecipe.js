import React from "react";
import RecipeCard from "../components/RecipeCard";


function BrowseRecipe({recipes, handleDelete}){
    return (
        <div className="browse-recipe-div">
            {
                recipes.map(recipe => (
                    <div key={recipe.id}>
                        <RecipeCard recipe={recipe}/>
                        <button onClick={() => handleDelete(recipe.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default BrowseRecipe;