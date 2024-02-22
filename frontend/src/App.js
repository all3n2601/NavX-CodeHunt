import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route  path="/auth" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
