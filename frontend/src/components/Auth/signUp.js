import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../../assets/Animation - 1708634042750.json';

function LottieAnimation() {
  const containerRef = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      animationData: animationData,
      renderer: 'svg',
      loop: true,
      autoplay: true,
    });
  
    return () => {
      animation.destroy(); // Cleanup function to unload the animation
    };
  }, []);
  

  return <div ref={containerRef} />;
}

function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');

  const handleSignUp = () => {
    console.log('Signing up with:', fullName, email, phoneNumber, password, confirmPassword, gender);
  };

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <LottieAnimation />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="number"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {/* Gender Selection */}
        <select
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-amber-500 hover:bg-amber-600 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Already have an account? <Link className="text-amber-500 hover:underline hover:underline-offset-4" to="/sign-in">Sign In</Link>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
