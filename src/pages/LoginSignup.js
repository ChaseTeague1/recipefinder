import React from "react";
import { BiColor } from "react-icons/bi";


function LoginSignup(){
    return (
        <div className="post-recipe-container">
            <h1>Login</h1>
            <div>
                <input placeholder="Username"/>
                <input placeholder="Email"/>
                <p>dont have an account? <a>Sign up!</a></p>
            </div>
            <button>Login</button>
        </div>
    )
}

export default LoginSignup;