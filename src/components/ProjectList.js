
import React from 'react';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProjectList = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Project List
      </Typography>
      {/* Display a list of projects */}
      <Button variant="contained" color="primary" component={Link} to="/projects/1">
        View Project Details
      </Button>
    </div>
  );
};

export default ProjectList;
