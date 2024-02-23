import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import CarPoolPage from './pages/CarPoolPage';
import BikePoolPage from './pages/BikePoolPage';
import ContactUsPage from './pages/ContactUsPage';
import AboutUsPage from './pages/AboutUsPage';
import ForgetPwdPage from './pages/ForgetPwdPage';
import UserDashBoardPage from './pages/UserDashBoardPage';
import MatchUsersPage from './pages/MatchUsersPage';

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
        <Route  path="/about-us" element={<AboutUsPage />} />
        <Route  path="/forget-pwd" element={<ForgetPwdPage />} />
        <Route  path="/matchusers" element={<MatchUsersPage />} />
        <Route  path="/user-dashboard" element={<UserDashBoardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
