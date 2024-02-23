import React from "react";
import backgroundvideo from "../../assets/Background.mp4";
import bikelogo from "../../assets/bike-logo.png";
import carlogo from "../../assets/car-logo-vector.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClickBike = () => {
    navigate("/bikepool");
  };

  const handleClickCar = () => {
    navigate("/carpool");
  };

  return (
    <div className="relative flex flex-col justify-center items-center h-screen">
      <video
        className="object-cover w-full h-full absolute inset-0"
        src={backgroundvideo}
        autoPlay
        loop
        muted
      />

      <h1 className="text-white text-6xl font-bold absolute top-12 text-center text-amber-600">
        Form Your Pool Now
      </h1>

      <div className="absolute w-full h-full flex justify-between z-10">
        <div className="p-20 top-45">
          <button
            onClick={handleClickBike}
            class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
          >
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Pool A Bike
            </span>
          </button>
          <h3 className="text-amber-600">
            Order a Bike Pool <br /> for 2 People Max
          </h3>
        </div>

        <div className="p-20 top-45">
          <button
            onClick={handleClickCar}
            class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
          >
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Pool A Car
            </span>
          </button>
          <h3 className="text-amber-600">
            Order a Car Pool <br /> for 5 People Max
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
