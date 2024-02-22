import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">NavX</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/carpool" className="text-gray-800 hover:text-blue-500">Car Pool</Link></li>
              <li><Link to="/bikepool" className="text-gray-800 hover:text-blue-500">Bike Pool</Link></li>
              <li><Link to="/sign-in" className="text-gray-800 hover:text-blue-500">SignIn</Link></li>
              <li><Link to="/sign-up" className="text-gray-800 hover:text-blue-500">SignUp</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    );
};

export default Header;