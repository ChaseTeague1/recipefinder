import React from "react";
import { Link } from "react-router-dom";
import defaultImage from '../image_default.png'


function RecipeCard({recipe}){
    
    return (
        <Link to={`/recipes/${recipe.id}`}>
        <div className="recipe-card">
            <img 
            className="image-div" 
            src={recipe.image || defaultImage} 
            alt="Image"
            onError = {(e) => {
                e.target.onerror = null;
                e.target.src = defaultImage;
            }}
            />
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
        </div>
        </Link>
    )
}


export default RecipeCard;