import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route  path="/sign-in" element={<SignInPage />} />
        <Route  path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
