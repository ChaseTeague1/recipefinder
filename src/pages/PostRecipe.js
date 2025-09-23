import React, { useEffect } from "react";


function PostRecipe(){



    return (
        <form className="post-recipe-container">
            <h1>Add your own recipe!</h1>
            <h2>Recipe Info</h2>
            <label>Title</label>
            <input />
            <label>Description</label>
            <textarea />
            <label>Time (in min)</label>
            <input />
            <label>Image link</label>
            <input />

            <h2>Ingredients</h2>
            <textarea />
            <h2>Instructions</h2>
            <textarea />

            <h2>Nutrition</h2>
            <input placeholder="calories"/>
            <input placeholder="protein"/>
            <input placeholder="fats"/>
            <input placeholder="carbs"/>

            <button>Add Recipe</button>
        </form>
    )
}

export default PostRecipe;