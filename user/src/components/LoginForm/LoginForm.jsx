import React from "react";
import {useState } from "react";
import {useNavigate} from "react-router-dom";
import './LoginForm.css';
import { FaUser,FaLock } from "react-icons/fa";
const URL ="http://localhost:5000/api/auth/login";

const LoginForm = () => {
    const [user,setUser]=useState({
        email :"",
        password:"",
      });
    const navigate = useNavigate();
    
      const handleInput = (e) =>{
        let name =e.target.name;
        let value = e.target.value;
    
        setUser({
          ...user,
          [name]:value,
        });
      };
      const handleSubmit =  async (e) =>{
        e.preventDefault();
        //console.log(user);
        try {
            const response = await fetch(URL,{method:"POST",headers:{'Content-Type':"application/json",},
          body:JSON.stringify(user)});
          console.log("login form",response);
          if(response.ok){
            alert('Login successful');
            setUser({email:"",password:""});
            navigate("/Home");
          }
            else{
              alert('Invalid Credential');
              console.log("Invalid Credential");
            }
          } catch (error) {
            console.log(error);
            
          }
      };
    return(
        <div className='wrapper'>
             <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input-box">
            <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                <FaUser className="icon" />
            </div>
                <div className="input-box">
                <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                    <FaLock className="icon" />
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="/">Forgot password?</a>
                </div>
                <button type="submit">Login</button>
                <div className="register-link">
                    <p>Don't have an account?<a href="/signup">Register</a></p>
                </div>
           </form>
            </div>
    );
};

export default LoginForm;