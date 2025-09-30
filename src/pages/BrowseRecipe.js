import React from "react";
import RecipeCard from "../components/RecipeCard";
import {FaTrash} from 'react-icons/fa'


function BrowseRecipe({recipes, handleDelete}){

    const confirmDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this recipe?')){
            handleDelete(id)
        }
    }

    return (
        <div className="browse-recipe-div">
            {
                recipes.map(recipe => (
                    <div className="card-containers" key={recipe.id}>
                        <RecipeCard recipe={recipe}/>
                        <button className="delete-btn" onClick={() => confirmDelete(recipe.id)}>
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