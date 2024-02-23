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
      animation.destroy();
    };
  }, []);

  return <div ref={containerRef} />;
}


function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Handle sign in logic here
    console.log('Signing in with:', username, password);
  };

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <LottieAnimation />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Phone Number" />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1 appearance-none border border-solid border-gray-300 rounded-sm w-5 h-5 checked:bg-amber-500 checked:border-transparent" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <Link className="text-amber-500 hover:text-amber-600 hover:underline hover:underline-offset-4" to="/forget-pwd">Forgot Password?</Link>
        </div>
        <div className="text-center md:text-left">
          <button className="mt-4 bg-amber-500 hover:bg-amber-600 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Login</button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don't have an account? <Link className="text-amber-500 hover:underline hover:underline-offset-4" to="/sign-up">Register</Link>
        </div>
      </div>
    </section>
  );
}

export default SignIn;