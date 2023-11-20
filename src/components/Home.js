
import React from 'react';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Welcome to our Home Renovation Platform
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/projects">
        View Projects
      </Button>
    </div>
  );
};

export default Home;
