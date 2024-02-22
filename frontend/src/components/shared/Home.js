import React from "react";
import backgroundvideo from "../../assets/Background.mp4";
import bikelogo from "../../assets/bike-logo.png";
import carlogo from "../../assets/car-logo-vector.png";

function HomePage() {
  return (
    <div class="bg-video bg-cover bg-center">
      <h1 className="text-3xl font-bold mb-6 text-center text-amber-500">
        Form your Pool now
      </h1>
      {/* <video className="videoTag" autoPlay loop muted>
        <source src={backgroundvideo} type="video/mp4" />
      </video> */}
      <div className="inline-flex flex w-screen space-x-20 items-center justify-center">
        <button
          type="button"
          className="rounded border border-amber-600 py-1 px-2 h-20 w-20"
        >
          <img src={bikelogo} alt="bike-pool" onClick={null} />
        </button>

        <button
          type="button"
          className="rounded border border-amber-600 py-1 px-2 h-20 w-20"
        >
          <img src={carlogo} alt="car-pool" onClick={null} />
        </button>
      </div>
    </div>
  );
}

export default HomePage;
