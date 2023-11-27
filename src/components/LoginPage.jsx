import React, { useState } from 'react';
import { TextField , Button , Container } from '@mui/material';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Loginpage= () => {

  const [username, setUsername] = useState('');
  const handleUsername = (event) => { 
      setUsername(event.target.value) 
  }

  const [password, setPassword] = useState('');
  const handlePassword = (event) => { 
      setPassword(event.target.value) 
  }
  let navigate=useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get('http://localhost:3000/login? username=${email}&password=${password}')
    .then((res)=>{
      if(res.data.length>0){
      navigate("/");
    }
    else{
      alert("User account doesn't exist");
    }
  });
  };

  return (
      <div className='area'>
      <Container maxWidth="xs" className='big'>
      <form onSubmit={handleSubmit}>
      <h1>Login Page</h1>

        <TextField variant="outlined" margin="normal" required fullWidth label="Username" onChange={handleUsername}>
            {username}
        </TextField>

        <TextField variant="outlined" margin="normal" required fullWidth label="Password" type="password" onChange={handlePassword}>
            {password}
        </TextField>

        <Link to='/'><Button type="submit"  fullWidth variant="contained" color="primary">
              Log In
            </Button>
            </Link>
       Don't have an account?<Link to='/signup'><span>Sign Up here</span></Link>
      </form>
    </Container>
      </div>
  );
};

export default Loginpage;