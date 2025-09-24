import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";


function RecipeDetailPage({recipes}){
    const {id} = useParams();
    const recipe = recipes.find(recipe => recipe.id == parseInt(id))

    return (
        <div className="detail-page-container">
          <div className="detail-header-container">
            <h1>{recipe.title}</h1>
            <img src={recipe.image} alt={recipe.title} />
            <p>{recipe.time} min</p>
          </div>
            
          <div className="detail-body-container">
            <div className="detail-main-content">
              <div className="detail-ing-container">
                <div>
                  <label>Ingredients</label>
                  <p>{recipe.ingredients}</p>
                </div>
                <div>
                  <label>Instructions</label>
                  <p>{recipe.instructions}</p>
                </div>
              </div>
            </div>
            
            <div className="detail-sidebar">
              <div className="detail-nutrition-container">
                <label>Nutrition</label>
                <p>Calories {recipe.calories}</p>
                <p>Protein {recipe.protein}g</p>
                <p>Carbs {recipe.carbs}g</p>
                <p>Fats {recipe.fats}g</p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default RecipeDetailPage;