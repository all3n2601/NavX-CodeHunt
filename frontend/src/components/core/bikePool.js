import React from "react";

import { useRef, useEffect, useState } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./map.css";

const BikePool = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const vitap = { lng: 80.49844, lat: 16.49371 };
  const [zoom] = useState(14);
  maptilersdk.config.apiKey = "CDT7KjhLjQLtEP22nUvh";

  useEffect(() => {
    if (map.current) return;

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [vitap.lng, vitap.lat],
      zoom: zoom,
    });

    new maptilersdk.Marker({color: "#FF0000"})
      .setLngLat([80.49,16.49731])
      .addTo(map.current);
  }, [vitap.lng, vitap.lat, zoom]);


  return (
    <div className="flex h-screen border-2">
      <div className="flex w-[30%] h-full flex-col items-center justify-center">
        <div className="h-1/2 flex flex-col justify-center items-center">
          <div className="flex flex-col items-center mb-8">
            <label htmlFor="startDestination" className="sr-only">
              Start Destination
            </label>
            <input
              type="text"
              id="startDestination"
              className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Start Destination"
            />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="endDestination" className="sr-only">
              End Destination
            </label>
            <input
              type="text"
              id="endDestination"
              className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="End Destination"
            />
          </div>

          <button
          onClick={null}
            type="button"
            class="text-white m-5 bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
          >
            Book Now!
          </button>

        </div>
        <div className="h-1/2">
          <p className="text-amber-500 text-7xl">
            Choose
            <br /> Your Start and End Destination
          </p>
        </div>
      </div>

      <div className="w-2/3 h-full border-2 overflow-hidden">
        {/* <iframe className="w-full h-full" src="https://api.maptiler.com/maps/bright-v2/?key=CDT7KjhLjQLtEP22nUvh#-0.2/0.00000/92.66183"></iframe>
         */}

        <div className="col">
          <div ref={mapContainer} className="map" />
        </div>
      </div>
    </div>
  );
};

export default BikePool;
