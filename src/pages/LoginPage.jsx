import React from 'react';
import './LoginPage.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';


function LoginPage() {

  let navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSignUpClick = () => {
    navigate('/signup');
  }
  const handleLoginClick = () => {
    navigate('/');
  }

  return (
    <div className='login-container'>
       <h1>Log In</h1>
       <form method='post'>
        <div class='txt_field'>
          <input type='text' required />
          <span></span>
          <label>Username</label>
        </div>
        
        <div class='txt_field'>
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