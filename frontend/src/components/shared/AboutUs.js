import React from 'react';
import vitap from '../../assets/vitap.jpeg';

const AboutUs = () => {
  return (
    <div class="relative flex items-top justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
  <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
    <div class="mt-8 overflow-hidden">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Grid */}
        <div class="p-6 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
          <p class="text-white">
          At VIT Amaravati, transportation and vehicle pooling initiatives prioritize safety, affordability, connectivity, and sustainability. These programs aim to reduce costs for students and faculty while enhancing safety, especially for women. By promoting inter-campus travel and connecting with local transit networks, we foster stronger community ties. Our efforts contribute to a reduction in pollution and traffic congestion, promoting a cleaner and healthier environment. Embracing carpooling, bicycle sharing, and public transit options, we encourage eco-friendly commuting practices. Overall, these initiatives embody our commitment to creating an inclusive, connected, and sustainable campus environment at VIT Amaravati.
          </p>
        </div>
        {/* Right Grid */}
        <div class="flex justify-center items-center">
          <img src={vitap} alt='vitap' class="object-fill h-60 w-100" />
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default AboutUs;
