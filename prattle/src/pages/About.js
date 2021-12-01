import React from 'react';
import Typography from '@mui/material/Typography';
import Navbar from '../components/Navbar';

function About() {
  return (
    <div>
      <Navbar />
      <Typography variant='h3' color='primary'>
        The about page
      </Typography>
    </div>
  );
}

export default About;
