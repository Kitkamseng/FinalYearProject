import './SignUpPage.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


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


  //Once user has keyed in all the information needed
  //data is being send into backend using axios
  const onSubmit = async (e) => {
    e.preventDefault();
    try{
      await axios.post("http://localhost:8080/user", user);
      navigate("/");
      console.log(e);
    } catch (error) {
      
      console.error("Signup failed: ", error);

      if(error.response && error.response.status === 409){
        toast.error("This username already exists. Please choose a different one");
      } else {
        toast.error("An error occurred while signing up")
      }
    }
  };

  const handleLogInClick = () => {
    navigate('/');
  }

  return (
    <>
    <div className='signup-container'>
       <h1>Sign Up</h1>
       <form 
        onSubmit={(e) => onSubmit(e)}
       >
       <div class='txt_field'>
          <input 
            type={"text"}
            className='form-control'
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
            name='username'
            value={username}
            onChange={(e)=>onInputChange(e)}
          />
          <span></span>
          <label>Username</label>
        </div>

        <div class='txt_field'>
          <input 
            type={"password"}
            className='form-control'
            name='password'
            value={password}
            onChange={(e)=>onInputChange(e)}
          />
          <span></span>
          <label>Password</label>
        </div>
        
        <input type='submit' value="Register" />

        <div class='login_link'>
          Already a member? <a href='#' onClick={handleLogInClick}>Log In</a>
        </div>
       </form>
    </div>
    <ToastContainer position='bottom-right'/>
    </>
  );
} 

export default SignUpPage;