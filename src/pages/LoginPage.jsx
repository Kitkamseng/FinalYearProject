import React from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

  let navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  }
  const handleLoginClick = () => {
    navigate('/homepage');
  }

  return (
    <div className='main-container'>
       <h1>Log In</h1>
       <form method='post'>
        <div class='txt_field'>
          <input type='text' required />
          <span></span>
          <label>Username</label>
        </div>
        <div class='txt_field'>
          <input type='text' required />
          <span></span>
          <label>Password</label>
        </div>

        <div class='pass'>Forgot Password?</div>

        <input 
          type='submit' 
          value="Login" 
          onClick={handleLoginClick}  
        />

        <div class='signup_link'>
          Not a member? <a href='#' onClick={handleSignUpClick}>Sign Up</a>
        </div>
       </form>
    </div>
  );
} 

export default LoginPage;