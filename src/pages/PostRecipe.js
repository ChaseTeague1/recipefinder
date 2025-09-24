import React from "react";
import { useFormik } from "formik";


function PostRecipe({onRecipeSubmit}){

    const formik = useFormik({
        initialValues:{
            title: '',
            description: '',
            time: '',
            image: '',
            ingredients: '',
            instructions: '',
            calories: '',
            protein: '',
            fats: '',
            carbs: ''
        },
        onSubmit : (values, {setSubmitting, resetForm}) => {
            fetch('/recipes', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(values),
            })
            .then(res => res.json())
            .then(data => {
                onRecipeSubmit(data)
                resetForm();
            })
            .finally(() => setSubmitting(false))
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} className="post-recipe-container">
            <h1>Add your own recipe!</h1>
            <h2>Recipe Info</h2>
            <label>Title</label>
            <input 
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
            />
            <label>Description</label>
            <textarea 
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
            />
            <label>Time (in min)</label>
            <input 
                name="time"
                value={formik.values.time}
                onChange={formik.handleChange}
            />
            <label>Image link</label>
            <input 
                name="image"
                value={formik.values.image}
                onChange={formik.handleChange}
            />

            <h2>Ingredients</h2>
            <textarea 
                name="ingredients"
                value={formik.values.ingredients}
                onChange={formik.handleChange}
            />
            <h2>Instructions</h2>
            <textarea 
                name="instructions"
                value={formik.values.instructions}
                onChange={formik.handleChange}
            />

            <h2>Nutrition</h2>
            <input name="calories" value={formik.values.calories} onChange={formik.handleChange} placeholder="calories"/>
            <input name="protein" value={formik.values.protein} onChange={formik.handleChange} placeholder="protein"/>
            <input name="fats" value={formik.values.fats} onChange={formik.handleChange} placeholder="fats"/>
            <input name="carbs" value={formik.values.carbs} onChange={formik.handleChange} placeholder="carbs"/>

            <button type="submit" disabled={formik.isSubmitting}>Add Recipe</button>
        </form>
    )
}

export default PostRecipe;