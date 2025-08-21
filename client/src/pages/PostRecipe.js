import React from "react";


function PostRecipe(){
    return (
        <div className="post-recipe-container">
            <h1>Add your own recipe!</h1>
            <label>Title</label>
            <input />
            <label>Time</label>
            <input />
            <label>Description</label>
            <textarea />
            <label>Ingredients</label>
            <textarea />
            <label>Instructions</label>
            <textarea />
            <label>Image</label>
            <input />
            <button>Add Recipe!</button>
        </div>
    )
}

export default PostRecipe;