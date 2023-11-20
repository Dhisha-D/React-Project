// Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Home Renovation Platform
        </Typography>
        <Typography variant="h6" component={Link} to="/projects" style={{ marginLeft: '20px', textDecoration: 'none', color: 'inherit' }}>
          Projects
        </Typography>
        <Typography variant="h6" component={Link} to="/design" style={{ marginLeft: '20px', textDecoration: 'none', color: 'inherit' }}>
          Design
        </Typography>
        <Button variant="contained" color="secondary" component={Link} to="/login" style={{ marginLeft: 'auto', textDecoration: 'none', color: 'inherit' }}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
