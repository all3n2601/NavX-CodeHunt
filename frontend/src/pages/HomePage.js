import React from 'react';
import Header from '../components/shared/Header';
import Home from '../components/shared/Home';
import Footer from '../components/shared/Footer';

function Homepage() {
  return (
    <>
      <div className="h-screen flex flex-col">
      <div className="h-10">
        <Header />
      </div>
      <div className="h-80">
        <Home/>
      </div>
      <div className="h-10">
        <Footer />
      </div>
    </div>
    </>
  );
}

export default Homepage;
