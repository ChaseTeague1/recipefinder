import React from "react";


function RecipeCard({recipe}){
    
    return (
        <div className="recipe-card">
            <img src={recipe.image}/>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
        </div>
    )
}


export default RecipeCard