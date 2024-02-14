import React from "react";
import './SignUpForm.css';
import {FaUser,FaLock}  from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const SignUpForm = () =>{
    return(
        <div className="wrapper">
            <form action="">
                <h1>Registration</h1>
            <div className="input-box">
                <input type="text" placeholder="Name" required />
                <FaUser className="icon" />
            </div>
            <div className="input-box">
                <input type="text" placeholder="Gmail" required />
                <MdEmail className="icon" />
            </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <FaLock className="icon" />
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />I agree to the terms & conditions</label>
                </div>
                <button type="submit">Register</button>
                <div className="register-link">
                    <p>Already have an account?<a href="/login">Login</a></p>
                </div>
            </form>

        </div>
    );
};

export default SignUpForm;