import './../pages/SignUpPage.css';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { async } from 'q';
import axios from 'axios';


function EditUser() {

  let navigate = useNavigate();

  const {id} = useParams();

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
    await axios.put(`http://localhost:8080/user/${id}`, user);
    navigate("/");
    console.log(e);
  }

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`)
    setUser(result.data);
  }

  // const [password, setPassword] = useState("");
  // const [visible, setVisible] = useState(false);

  const handleLogInClick = () => {
    navigate('/login');
  }
  const handleAdminPage = () => {
    navigate('/adminpage');
  }


  useEffect(() => {
    loadUser()
  }, []);

  return (
    <div className='signup-container'>
       <h1>Edit User</h1>
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

        
        <input type='submit' value="Edit" />
        <input 
            type='submit' 
            value="Cancel" 
            onClick={handleAdminPage}
        />

        <div class='login_link'>
          Already a member? <a href='#' onClick={handleLogInClick}>Log In</a>
        </div>
       </form>
    </div>
  );
} 

export default EditUser;