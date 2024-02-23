import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import user from '../../assets/user.png';

function UserDashboard() {
  // Sample user data
  const [userData, setUserData] = useState({
    name: 'John Doe',
    phoneNo: '1234567890',
    gender: 'Male',
  });

  useEffect(() => {
    // You can fetch user data from an API or perform any async operation here
    // For demonstration, let's assume we're fetching user data
    // In a real application, you would replace this with your actual API call
    // Simulating a delay with setTimeout
    setTimeout(() => {
      // Fetch user data and update state
      // For now, let's just set some sample data
      setUserData({
        name: 'John Doe',
        phoneNo: '1234567890',
        gender: 'Male',
      });
    }, 1000); // 1 second delay
  }, []);

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img src={user} alt='profile' />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <h2 className="text-4xl font-semibold mb-4">User Dashboard</h2>
        <div className="mb-2">
          <p className="font-semibold text-lg">Name:</p>
          <p className="text-lg">{userData.name}</p>
        </div>
        <div className="mb-2">
          <p className="font-semibold text-lg">Phone Number:</p>
          <p className="text-lg">{userData.phoneNo}</p>
        </div>
        <div>
          <p className="font-semibold text-lg">Gender:</p>
          <p className="text-lg">{userData.gender}</p>
        </div>
        <div className="mt-4">
          <Link to="/edit-profile" className="text-amber-500 hover:underline text-lg">Edit Profile</Link>
        </div>
      </div>
    </section>
  );
}

export default UserDashboard;
