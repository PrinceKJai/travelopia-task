import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FlightBoard from './pages/Flight';
import FlightDetailPage from './pages/FlightDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import BookingConfirmation from './components/BookingConfirmation';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';

const App: React.FC = () => {
  return (
    <Router>
       <Header />
      <Routes>
        <Route path="/" element={<FlightBoard />} />
        <Route path="/flights/:id" element={<FlightDetailPage />} />
        <Route path="/book/:id" element={<BookingConfirmation />} />
        <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
