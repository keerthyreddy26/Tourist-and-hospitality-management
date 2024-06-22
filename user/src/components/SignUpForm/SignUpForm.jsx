import React from "react";
import { useState } from "react";
import './SignUpForm.css';
import {FaUser,FaLock}  from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const SignUpForm = () =>{
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
      });
    
      const handleInput = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;
    
        setUser({
          ...user,
          [name]: value,
        });
      };
    
      // handle form on submit
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        try {
          const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(user),
          });
        console.log(response.status, response.statusText);
        if(response.ok){
          setUser({username: "", email: "",phone: "",password: ""});
        }
        console.log(response);
        } catch (error) {
          console.error("register", error);
        }
        
      };
    return(
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Registration</h1>
              <div className="input-box">
                <FaUser className="icon" />
                <input
                      type="text"
                      name="name"
                      value={user.name}
                      onChange={handleInput}
                      placeholder="Username"
                    />
            </div>
            <div className="input-box">
                <MdEmail className="icon" />
                <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="Email"
                    />
            </div>
            <div className="input-box">
                <FaPhoneAlt className="icon" />
                <input
                      type="text"
                      name="phone"
                      value={user.phone}
                      onChange={handleInput}
                      placeholder="Phone"
                    />
            </div>
                <div className="input-box">
                    <FaLock className="icon" />
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="Password"
                    />
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