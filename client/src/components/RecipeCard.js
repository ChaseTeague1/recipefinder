import React from "react";


function RecipeCard({recipe}){
    
    return (
        <div className="recipe-card">
            <img className="image-div" src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700,636" alt="Image"/>
            <h1>Chicken and rice</h1>
            <p>Description i am a description of a recipe above me</p>
        </div>
    )
}


export default RecipeCard