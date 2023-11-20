
import React from 'react';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProjectDetails = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Project Details
      </Typography>
      {/* Display detailed information about the selected project */}
      <Button variant="contained" color="primary" component={Link} to="/design">
        Start Designing
      </Button>
    </div>
  );
};

export default ProjectDetails;
