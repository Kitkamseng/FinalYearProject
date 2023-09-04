import React from 'react';
import axios from "axios";
import './LoginPage.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginPage() {

  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUpClick = () => {
    navigate('/signup');
  }
  const handleLoginClick = () => {
    navigate('/');
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/login", {
        username: username,
        password: password,
      });

      console.log(response.data);

      const token = response.data.token;
      const userId = response.data.userId;

      
      localStorage.setItem("authToken", token);
      localStorage.setItem("userId", userId);


      navigate('/homepage');
    } catch (error) {
      console.error("Login failed here.", error);
      toast.error("Invalid Credentials. Please check again");
    }
  };
  
  return (
    <>
    <div className='login-container'>
       <h1>Log In</h1>
       <form onSubmit={handleLogin}>
        <div class='txt_field'>
          <input 
            type='text'  
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <span></span>
          <label>Username</label>
        </div>


        <div class='txt_field'>
          <input 
            type='password'  
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span></span>
          <label>Password</label>
        </div>

        <div className='pass'>Forgot Password?</div>

        <button type="submit">Login</button>

        <div className='signup_link'>
          Not a member? <a href='#' onClick={handleSignUpClick}>Sign Up</a>
        </div>
       </form>
    </div>
    <ToastContainer position='bottom-right' />
    </>
  );
} 

export default LoginPage;