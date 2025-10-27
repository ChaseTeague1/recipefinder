import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

function LoginSignup({ onUserSubmit, onClose, setShowModal }) {
  const [alert, setAlert] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  const validationSchema = Yup.object({
    username: Yup.string()
                .required('* Required')
                .min(1, 'Username must be atleast 1 character long'),
    email: Yup.string()
            .email('Invalid email format')
            .required('* Required')
  })

  const formik = useFormik({
    initialValues: { 
        username: '', 
        email: '' 
    },
    validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      const url = isLogin ? "/login" : "/users";
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      })
        .then(r => { if (!r.ok) throw new Error("Request failed"); return r.json(); })
        .then(data => {
          onUserSubmit(data);
          resetForm();
          setAlert(isLogin ? "Logged in!" : "Signed up!");
          setTimeout(() => setAlert(null), 3000);
          if (onClose) onClose();
        })
        .catch(() => {
          setAlert(isLogin ? "Login failed" : "Signup failed");
          setTimeout(() => setAlert(null), 3000);
        })
        .finally(() => setSubmitting(false));
    }
  });

  return (
    <div className="modal-overlay">
      <div className="modal-content" role="dialog" aria-modal="true">
        <button
          type="button"
          className="close-modal-btn"
          onClick={() => { console.log("close clicked"); if (onClose) onClose(); }}
          aria-label="Close"
        >
          ✕
        </button>

        <form onSubmit={formik.handleSubmit} className="post-recipe-container">
          {alert && <div className="success-alert">{alert}</div>}
          <h1>{isLogin ? "Login" : "Sign up"}</h1>
            {formik.errors.username && <div>{formik.errors.username}</div>}
          <input
            placeholder="Username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          {formik.errors.email && <div>{formik.errors.email}</div>}
          <input
            placeholder="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />

          {isLogin ? (
            <p>
              Don’t have an account?{" "}
              <span onClick={() => setIsLogin(false)} style={{ cursor: "pointer", color: "blue" }}>
                Sign up!
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setIsLogin(true)} style={{ cursor: "pointer", color: "blue" }}>
                Login!
              </span>
            </p>
          )}

          <button type="submit" disabled={formik.isSubmitting}>
            {isLogin ? "Login" : "Sign up"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginSignup;

