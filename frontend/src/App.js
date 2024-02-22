import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import CarPoolPage from './pages/CarPoolPage';
import BikePoolPage from './pages/BikePoolPage';
import ContactUsPage from './pages/ContactUsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route  path="/sign-in" element={<SignInPage />} />
        <Route  path="/sign-up" element={<SignUpPage />} />
        <Route  path="/carpool" element={<CarPoolPage />} />
        <Route  path="/bikepool" element={<BikePoolPage />} />
        <Route  path="/contact-us" element={<ContactUsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
