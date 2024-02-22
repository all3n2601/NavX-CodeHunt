import React from 'react';
import vitap from '../../assets/vitap.jpeg';

const AboutUs = () => {
  return (
    <div class="relative flex items-top justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
      <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div class="mt-8 overflow-hidden">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
              <p class="text-white">
              Transportation and mobility at VIT Amaravati are essential components of campus life, ensuring convenient movement for students, faculty, and staff. The campus operates a well-organized transportation system comprising shuttles, inter-campus connections, and access to public transit. Additionally, initiatives such as bicycle sharing and carpooling promote sustainability and reduce environmental impact. Overall, these efforts contribute to a vibrant and inclusive campus environment, fostering connectivity, accessibility, and a culture of innovation and environmental stewardship.
              </p>
            </div>

            <img
            src={vitap}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
