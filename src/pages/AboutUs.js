import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen font-Poppins flex items-center justify-center bg-gradient-to-r bg-opacity-90 backdrop-filter backdrop-blur-md p-6 from-blue-100 to-purple-100">
      <div className="glassmorphism-container shadow-md bg-transparent">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 drop-shadow-md">About Us</h1>
        <p className="text-gray-800 mb-4">
          At <span className="text-purple-800">Erexa</span>, we are passionate about harnessing the power of Artificial Intelligence to transform industries and drive innovation. Our journey began with a vision to create intelligent solutions that empower businesses and individuals alike.
        </p>
        <p className="text-gray-800 mb-4">
          With a team of dedicated AI experts, data scientists, and engineers, we are committed to pushing the boundaries of what AI can achieve. We believe that AI has the potential to revolutionize the way we work, communicate, and solve complex challenges.
        </p>
        <p className="text-gray-800 mb-4">
          Our mission is to deliver cutting-edge AI solutions that streamline processes, enhance decision-making, and provide valuable insights. We specialize in [specific AI domains, e.g., Natural Language Processing, Computer Vision, etc.] and have a proven track record of delivering impactful solutions to our clients.
        </p>
        <p className="text-gray-800 mb-4">
          Beyond technology, our core values center around ethics, transparency, and collaboration. We approach every project with a deep understanding of the responsibility that comes with AI development and deployment.
        </p>
        <p className="text-gray-800">
          Thank you for considering <span className="text-purple-800">Erexa</span> as your AI partner. We are excited about the future and look forward to driving positive change through AI innovation.
        </p>
        <p className="mt-8 text-gray-400 text-sm text-center">
          &copy; {new Date().getFullYear()} <span className="text-purple-800">Erexa</span>. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
