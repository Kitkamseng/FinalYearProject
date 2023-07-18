import React from 'react';
import './LoginPage.css';

function LoginPage() {
  return (
    <div className='main-container'>
       <h1>Sign Up</h1>
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
        <input type='submit' value="Login" />
        <div class='signup_link'>
          Not a member? <a href='#'>Sign Up</a>
        </div>
       </form>
    </div>
  );
} 

export default LoginPage;