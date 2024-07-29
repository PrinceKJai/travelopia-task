import  { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Container, Typography, Paper } from '@mui/material';
import { formatDateAndTime } from '../utils/formatDate';

const BookingConfirmation: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { flightNumber, airline, origin, destination, departureTime } = location.state || {};

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '2rem', marginTop: '2rem' }}>
        <Typography variant="h4" gutterBottom>
          Booking Confirmation
        </Typography>
        <Typography variant="body1" gutterBottom>
          Thank you for booking with us. Here are your booking details:
        </Typography>
        <Typography variant="body1"><strong>Flight Number:</strong> {flightNumber}</Typography>
        <Typography variant="body1"><strong>Airline:</strong> {airline}</Typography>
        <Typography variant="body1"><strong>Origin:</strong> {origin}</Typography>
        <Typography variant="body1"><strong>Destination:</strong> {destination}</Typography>
        <Typography variant="body1"><strong>Departure Time:</strong> {formatDateAndTime(departureTime)}</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleBackToHome}
          style={{ marginTop: '1rem' }}
        >
          Back to Home
        </Button>
      </Paper>
    </Container>
  );
};

export default BookingConfirmation;
