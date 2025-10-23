import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import defaultImage from '../image_default.png'


function RecipeDetailPage({recipes}){
    const {id} = useParams();
    const recipe = recipes.find(recipe => recipe.id == parseInt(id))

    if(!recipe) return <div>Loading...</div>

    return (
        <div className="detail-page-container">
          <div className="detail-header-container">
            <h1>{recipe.title}</h1>
            <img 
            src={recipe.image || defaultImage} 
            alt={recipe.title} 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = defaultImage;
            }}
            />
            <p>{recipe.time} min</p>
          </div>
            
          <div className="detail-body-container">
            <div className="detail-main-content">
              <div className="detail-ing-container">
                <div>
                  <label>Ingredients</label>
                  <ul>{recipe.ingredients.map((ing, i)=> (
                      <li key={i}>{ing}</li>
                  ))}</ul>
                </div>
                <div>
                  <label>Instructions</label>
                  <ol>{recipe.instructions.map((step, i) => (
                      <li key={i}>{step}</li>
                  ))}
                  </ol>
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