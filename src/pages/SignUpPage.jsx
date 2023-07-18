import './SignUpPage.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';


function LoginPage() {

  let navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleLogInClick = () => {
    navigate('/login');
  }

  return (
    <div className='main-container'>
       <h1>Sign Up</h1>
       <form method='post'>
       <div class='txt_field'>
          <input type='text' required />
          <span></span>
          <label>Email</label>
        </div>
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
        
        <input type='submit' value="Register" />

        <div class='login_link'>
          Already a member? <a href='#' onClick={handleLogInClick}>Log In</a>
        </div>
       </form>
    </div>
  );
} 

export default LoginPage;