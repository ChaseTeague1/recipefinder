import React from "react";
import RecipeCard from "../components/RecipeCard";
import {FaTrash} from 'react-icons/fa'


function BrowseRecipe({recipes, handleDelete}){
    return (
        <div className="browse-recipe-div">
            {
                recipes.map(recipe => (
                    <div className="card-containers" key={recipe.id}>
                        <RecipeCard recipe={recipe}/>
                        <button className="delete-btn" onClick={() => handleDelete(recipe.id)}>
                            <FaTrash />
                            <span className="tooltip">Delete</span>
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default BrowseRecipe; 