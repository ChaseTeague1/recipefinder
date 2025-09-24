import React from "react";
import { Link } from "react-router-dom";


function RecipeCard({recipe}){
    
    return (
        <Link to={`/recipes/${recipe.id}`}>
        <div className="recipe-card">
            <img className="image-div" src={recipe.image} alt="Image"/>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
        </div>
        </Link>
    )
}


export default RecipeCard;