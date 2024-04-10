import React from "react";
import './CSS/Auth.css';
const Auth = () =>{

    return (
        <div className="auth">
            <div className="auth-container">
                <h1>Sign Up</h1>
                <div className="auth-fields">
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Email Adress" />
                    <input type="password" placeholder="Password" />       
                </div>
                <button>Continue</button>
                <p className="auth-login">Already have an account ? <span>Login here</span></p>
                <div className="auth-agree">
                    <input type="checkbox" name='' id='' />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        </div>   )
}

export default Auth

