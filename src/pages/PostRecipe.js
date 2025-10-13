import React, {useState} from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';


function PostRecipe({onRecipeSubmit}){
    const [alert, setAlert] = useState(null)

    const validationSchema = Yup.object({
        title: Yup.string()
            .required('* Required')
            .min(1, 'Title must be atleast 1 character long'),
        description: Yup.string()
            .required('* Required')
            .max(255, 'Description must be less than 255 characters')
            .min(10, 'Description must be atleast 10 characters long'),
        calories: Yup.number('must be a number')
            .required('* Required'),
        protein: Yup.number()
            .required('* Required'),
        fats: Yup.number()
            .required('* Required'),
        carbs: Yup.number()
            .required('* Required'),
        
    })

    const formik = useFormik({
        initialValues:{
            title: '',
            description: '',
            time: '',
            image: '',
            ingredients: [],
            instructions: [],
            calories: '',
            protein: '',
            fats: '',
            carbs: ''
        },
        validationSchema,
        onSubmit : (values, {setSubmitting, resetForm}) => {
            fetch('/recipes', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(values),
            })
            .then(res => {
                if(!res.ok) throw new Error("Failed to add recipe")
                return res.json()
            })
            .then(data => {
                onRecipeSubmit(data)
                resetForm();
                setAlert("Recipe successfully added!")
                setTimeout(() => setAlert(null), 3000)
            })
            .catch(err => {
                console.log(err)
                setAlert('Failed to add recipe')
                setTimeout(() => setAlert(null), 3000)
            })
            .finally(() => setSubmitting(false))
        }
    })

    return (
        <div className="post-recipe-wrapper" style={{position: "relative"}}>
        <form onSubmit={formik.handleSubmit} className="post-recipe-container">
            {alert && <div className="success-alert">{alert}</div>}
            <h1>Add your own recipe!</h1>
            <h2>Recipe Info</h2>
            <label>Title</label>
            {formik.errors.title && <div className="required">{formik.errors.title}</div>}
            <input 
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
            />
            <label>Description</label>
            {formik.errors.description && <div className="required">{formik.errors.description}</div>}
            <textarea 
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
            />
            <div className="time-image-container">
                <div className="field-group">
                    <label>Time (in min)</label>
                    <input 
                        className="inline-input"
                        name="time"
                        value={formik.values.time}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="field-group">
                    <label>Image link</label>
                    <input 
                        className="inline-input"
                        name="image"
                        value={formik.values.image}
                        onChange={formik.handleChange}
                    />
                </div>
            </div>

            <h2>Ingredients</h2>
            {
                formik.values.ingredients.map((ing, i) => (
                    <input 
                        key={i}
                        name={`ingredients[${i}]`}
                        value={ing}
                        onChange={formik.handleChange}
                    />
                ))
            }
            <button type="button" onClick={() => formik.setFieldValue('ingredients', [...formik.values.ingredients, ''])}>+ Add Ingredient</button>
            <h2>Instructions</h2>
            {
                formik.values.instructions.map((instr, i) => (
                    <input 
                        key={i}
                        name={`instructions[${i}]`}
                        value={instr}
                        onChange={formik.handleChange}
                    />
                ))
            }
             <button type="button" onClick={() => formik.setFieldValue('instructions', [...formik.values.instructions, ''])}>+ Add Step</button>

            <h2>Nutrition</h2>
            {formik.errors.carbs && <div className="required">{formik.errors.carbs}</div>}
            <div className="nutrition-container">
                <input name="calories" value={formik.values.calories} onChange={formik.handleChange} placeholder="calories"/>
                <input name="protein" value={formik.values.protein} onChange={formik.handleChange} placeholder="protein"/>
                <input name="fats" value={formik.values.fats} onChange={formik.handleChange} placeholder="fats"/>
                <input name="carbs" value={formik.values.carbs} onChange={formik.handleChange} placeholder="carbs"/>
            </div>
            <button className="add-button" type="submit" disabled={formik.isSubmitting}>Add Recipe</button>
        </form>
        </div>
    )
}

export default PostRecipe;