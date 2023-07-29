import React from 'react';
import axios from "axios";
import './LoginPage.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';


function LoginPage() {

  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const [password, setPassword] = useState("");
  // const [visible, setVisible] = useState(false);

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
      // Assuming the backend returns a token upon successful login
      const token = response.data.token;
      // Store the token in local storage or a session cookie
      localStorage.setItem("authToken", token);
      // Redirect the user to a dashboard or home page
      navigate('/');
      console.log("e");
    } catch (error) {
      console.error("Login failed here.", error);
      // Handle login failure, e.g., show an error message to the user
    }
  };
  return (
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

        
        {/* <div class='txt_field'>
          <input 
            value={password}
            type={visible ? "text" : "password"}
            id="password"
            onChange={e => setPassword(e.target.value)}
          />
          <label>Password</label>
          <div className='eye-toggle' onClick={() => setVisible(!visible)}>
            {
              visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
            }
          </div>
        </div> */}

        <div className='pass'>Forgot Password?</div>

        <button type="submit">Login</button>

        <div className='signup_link'>
          Not a member? <a href='#' onClick={handleSignUpClick}>Sign Up</a>
        </div>
       </form>
    </div>
  );
} 

export default LoginPage;