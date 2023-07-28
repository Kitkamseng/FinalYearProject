import './SignUpPage.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { async } from 'q';
import axios from 'axios';


function SignUpPage() {

  let navigate = useNavigate();

  const [user, setUser] = useState({
    email:"",
    username:"",
    password:""
  })

  const{email, username, password} = user

  const onInputChange =(e) =>{
    setUser({...user, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
    console.log(e);
  }

  // const [password, setPassword] = useState("");
  // const [visible, setVisible] = useState(false);

  const handleLogInClick = () => {
    navigate('/login');
  }

  return (
    <div className='signup-container'>
       <h1>Sign Up</h1>
       <form 
        onSubmit={(e) => onSubmit(e)}
       >
       <div class='txt_field'>
          <input 
            type={"text"}
            className='form-control'
            placeholder='Enter Your Email'
            name='email'
            value={email}
            onChange={(e)=>onInputChange(e)}
          />
          <span></span>
          <label>Email</label>
        </div>
        <div class='txt_field'>
          <input 
            type={"text"}
            className='form-control'
            placeholder='Enter Your UserName'
            name='username'
            value={username}
            onChange={(e)=>onInputChange(e)}
          />
          <span></span>
          <label>Username</label>
        </div>

        <div class='txt_field'>
          <input 
            type={"text"}
            className='form-control'
            placeholder='Enter Your Password'
            name='password'
            value={password}
            onChange={(e)=>onInputChange(e)}
          />
          <span></span>
          <label>Password</label>
        </div>

        {/* <div class='txt_field'>
          <input 
            value={newPassword}
            onChange={(e) => onInputChange(e)}
            type={visible ? "text" : "newPassword"}
            id="password"
            // onChange={e => setPassword(e.target.value)}
          />
          <label>Password</label>
          <div className='eye-toggle' onClick={() => setVisible(!visible)}>
            {
              visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
            }
          </div>
        </div> */}
        
        <input type='submit' value="Register" />

        <div class='login_link'>
          Already a member? <a href='#' onClick={handleLogInClick}>Log In</a>
        </div>
       </form>
    </div>
  );
} 

export default SignUpPage;