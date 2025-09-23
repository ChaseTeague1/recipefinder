import React, { useEffect } from "react";


function PostRecipe(){



    return (
        <form className="post-recipe-container">
            <h1>Add your own recipe!</h1>
            <label>Title</label>
            <input />
            <label>Time (in min)</label>
            <input />
            <label>Description</label>
            <textarea />
            <label>Ingredients</label>
            <textarea />
            <label>Instructions</label>
            <textarea />
            <label>Image link</label>
            <input />
            <button>Add Recipe</button>
        </form>
    )
}

export default PostRecipe;