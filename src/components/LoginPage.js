import React, { useState } from 'react';
import { TextField , Button , Container } from '@mui/material';
import {Link} from "react-router-dom";
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
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

      </form>
    </Container>
      </div>
  );
};

export default Loginpage;