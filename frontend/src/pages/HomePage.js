import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">NavX</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/carpool" className="text-gray-800 hover:text-blue-500">Car Pool</Link></li>
              <li><Link to="/bikepool" className="text-gray-800 hover:text-blue-500">Bike Pool</Link></li>
              <li><Link to="/about" className="text-gray-800 hover:text-blue-500">About</Link></li>
              <li><Link to="/contact" className="text-gray-800 hover:text-blue-500">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto py-8">
        <section className="hero text-center">
          <h2 className="text-3xl font-bold mb-4">Share Rides, Save Money, Reduce Traffic</h2>
          <p className="text-gray-700 mb-4">NavX connects you with people traveling in the same direction, helping you save on transportation costs and reduce your carbon footprint.</p>
          <Link to="/signup" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded inline-block">Sign Up</Link>
        </section>
        <section className="how-it-works my-8">
          <h2 className="text-2xl font-bold mb-4 text-center">How It Works</h2>
          <div className="flex justify-around">
            <div className="max-w-xs">
              <div className="bg-white shadow-md rounded-lg p-6 mb-4">
                <div className="text-4xl font-bold text-blue-500 mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">Find a Ride</h3>
                <p>Enter your destination and view available rides going your way.</p>
              </div>
            </div>
            <div className="max-w-xs">
              <div className="bg-white shadow-md rounded-lg p-6 mb-4">
                <div className="text-4xl font-bold text-blue-500 mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">Join or Offer a Ride</h3>
                <p>Join an existing ride or offer a seat in your vehicle to others.</p>
              </div>
            </div>
            <div className="max-w-xs">
              <div className="bg-white shadow-md rounded-lg p-6 mb-4">
                <div className="text-4xl font-bold text-blue-500 mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">Enjoy the Ride</h3>
                <p>Share the journey with others and contribute to a greener environment.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 NavX. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
