import { useFormik } from "formik";
import React, {useState} from "react";
import { BiColor } from "react-icons/bi";
import { useSearchParams } from "react-router-dom";


function LoginSignup({onUserSubmit}){
    const [alert, setAlert] = useState(null)

    const formik = useFormik({
        initialValues : {
            username: '',
            email: ''
        },
        onSubmit : (values, {setSubmitting, resetForm}) => {
            fetch('/users', {
                method: "POST",
                headers:{
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(values)
            })
            .then(res => {
                if(!res.ok) throw new Error("Failed to add user")
                return res.json()
            })
            .then(data => {
                onUserSubmit(data)
                resetForm();
                setAlert('User successfully added!')
                setTimeout(() => setAlert(null), 3000)
            })
            .catch(err => {
                console.log(err)
                setAlert('Failed to add user')
                setTimeout(() => setAlert(null), 3000)
            })
            .finally(() => setSubmitting(false))
        }
    })

    return (
        <div className="post-recipe-container">
            <form onSubmit={formik.handleSubmit}>
                {alert && <div className="success-alert">{alert}</div>}
            <h1>Sign up</h1>
            <div>
                <input 
                placeholder="Username"
                value={formik.values.username}
                onChange={formik.handleChange}
                name="username"
                />
                <input 
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                name="email"
                />
                <p>already have an account? <a>Login!</a></p>
            </div>
            <button type="submit" disabled={formik.isSubmitting}>Sign up</button>
            </form>
        </div>
    )
}

export default LoginSignup;