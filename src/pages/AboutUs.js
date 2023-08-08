import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500">
      <div className="container mx-auto p-4">
        <div className="relative rounded-xl bg-opacity-70 backdrop-blur-md bg-white  shadow-lg p-6 md:p-10 max-w-3xl transform scale-100 hover:scale-105 transition-transform duration-300">
          <h1 className="text-3xl md:text-4xl drop-shadow-md font-semibold mb-6 text-center text-white">
            About Us
          </h1>
          <p className="text-gray-800 mb-8 text-center">
            We are an AI-based company dedicated to creating innovative
            solutions for various industries. Our mission is to make AI
            technology accessible and beneficial to all.
          </p>
          <p className="text-gray-800 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            fringilla, quam in malesuada tincidunt, erat quam vestibulum
            est, eget sollicitudin turpis justo eu nisl. Nullam non velit nec
            odio fermentum scelerisque. Integer sed leo vel turpis congue
            auctor vitae non libero.
          </p>
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Erexa. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
