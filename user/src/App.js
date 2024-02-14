import React from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import LoginForm from './components/LoginForm/LoginForm'
import SignUpForm from './components/SignUpForm/SignUpForm';
import { Route,Routes } from 'react-router-dom';
import HomeCards from './components/HomeCards/HomeCards';
import About from './components/About/About';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Home" element={<HomeCards/>} />
        <Route path='/login' element={<LoginForm/>} />
        <Route path="/signup" element={<SignUpForm/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
