import React, { FC } from 'react';
import { Container, Typography, Paper } from '@mui/material';

const AboutUs: FC = () => {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '2rem', marginTop: '2rem' }}>
        <Typography variant="h4" gutterBottom>About Us</Typography>
        <Typography variant="body1" paragraph>
          Welcome to our airline booking application. Our mission is to provide the best flight booking experience with a focus on customer satisfaction, reliability, and innovation. 
        </Typography>
        <Typography variant="body1" paragraph>
          Our team is dedicated to making your travel plans as smooth and convenient as possible. Thank you for choosing us for your travel needs!
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutUs;
