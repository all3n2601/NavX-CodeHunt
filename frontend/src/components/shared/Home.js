import React from "react";
import backgroundvideo from "../../assets/Background.mp4";

function HomePage() {
  return (
    <div>
      <video className="videoTag" autoPlay loop muted>
        <source src={backgroundvideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default HomePage;
