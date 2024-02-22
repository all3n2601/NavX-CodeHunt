import React from 'react';
import Header from '../components/shared/header';
import Home from '../components/shared/home';
import Footer from '../components/shared/footer';

function Homepage() {
  return (
    <div className="amber-500 min-h-screen">
      
      <Header />
      <Home/>
      <Footer />
    </div>
  );
}

export default Homepage;
