import React from 'react';
import  'react-router-dom';

const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: 'AI Smart Assistant',
      description: 'A voice-activated smart assistant that can answer questions and control smart devices. 1',
      image: 'https://img.freepik.com/free-photo/robot-handshake-human-background-futuristic-digital-age_53876-129770.jpg?w=996&t=st=1690898958~exp=1690899558~hmac=b14dcc1df1092a235a9d4010709cabced80ae54c70dd3c5f859120796a308d0a', // Replace with actual image URL
    },
    {
      id: 2,
      name: 'AI Chatbot',
      description: ' A virtual assistant that provides instant support and answers customer queries 24/7.',
      image: 'https://img.freepik.com/free-photo/man-using-digital-tablet-psd-mockup-smart-technology_53876-110815.jpg?w=996&t=st=1690899097~exp=1690899697~hmac=629eb807bcba9d6c209258d67f379098ba83d3f1ccae3515b76993c4f8e7fd75', // Replace with actual image URL
    },
    {
      id: 3,
      name: 'AI Image Recognition',
      description: ' Image recognition API that identifies objects, scenes, and faces in images.',
      image: 'https://img.freepik.com/free-photo/facial-recognition-collage-concept_23-2150038885.jpg?w=740&t=st=1690899308~exp=1690899908~hmac=9a50ff114e310aa1a60206927c121b120e302c197e956bdcb9bbf2500f2a4c7b', // Replace with actual image URL
    },
    {
        id: 4,
        name: 'AI Medical Diagnosis',
        description: ' AI system to support healthcare professionals in disease detection and treatment.',
        image: 'https://img.freepik.com/free-photo/medical-banner-with-doctor-holding-tablet_23-2149611236.jpg?w=996&t=st=1690899655~exp=1690900255~hmac=e774e23a7da1e32e4f12ab9302cd87e4aa7b0c9daa6a01eec0a71e38ee53ee71', // Replace with actual image URL
      },
      {
        id: 5,
        name: 'AI Personalized Recommendations',
        description: 'AI-powered engine delivering tailored content and product recommendations.',
        image: 'https://img.freepik.com/free-photo/teenager-dressed-white-t-shirt-using-virtual-reality-glasses-with-graph-charts-numbers-lines-technology-concept_613910-5097.jpg?w=996&t=st=1690899797~exp=1690900397~hmac=24e04a93fcafa0fa542f816e4c832831ac04586350d8994089622aa5e4047b90', // Replace with actual image URL
      },
      {
        id: 6,
        name: 'AI Language Translation',
        description: ' Fast and accurate language translation service for businesses.',
        image: 'https://img.freepik.com/free-photo/girl-coding-interactive-screen_53876-97188.jpg?w=996&t=st=1690899877~exp=1690900477~hmac=4c7b9468cc7b627a710668be610578200f4acf1c6afb248be48604a438388d71', // Replace with actual image URL
      },
      {
        id: 7,
        name: 'AI Virtual Reality Experience',
        description: ' Immersive virtual reality with AI-driven realism and interactivity.',
        image: 'https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?size=626&ext=jpg', // Replace with actual image URL
      },
      {
        id: 8,
        name: 'AI Sales Forecasting',
        description: '  AI-based sales prediction for data-driven decision-making.',
        image: 'https://img.freepik.com/free-photo/man-shaking-hand-with-robotic-arm_23-2149311904.jpg?w=996&t=st=1690899930~exp=1690900530~hmac=560081bfaba3f33e2435597987b88f1eae7ab8186ada934cda77f1ab1fd11571', // Replace with actual image URL
      },
      {
        id: 9,
        name: 'AI Financial Advisor',
        description: ' Personalized financial planning and investment advice with AI insights.',
        image: 'https://img.freepik.com/free-photo/close-up-hand-holding-smartphone_23-2149151172.jpg?w=996&t=st=1690899960~exp=1690900560~hmac=d81d471bd1a92f1e238113bbf1db8348cffaa381dcf2c12612d87f9fdc0380fd', // Replace with actual image URL
      },
      {
        id: 10,
        name: 'AI Language Tutor',
        description: '  Interactive language learning with real-time AI feedback.',
        image: 'https://img.freepik.com/free-photo/meeting-developers_1098-19850.jpg?w=996&t=st=1690899995~exp=1690900595~hmac=8b769a0b533e2930885b3649c1d3465b6824c4c22046e52ec93c06be28ea5dd6', // Replace with actual image URL
      },
    // Add more products here...
  ];

  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-100 bg-opacity-90 backdrop-filter backdrop-blur-md min-h-screen font-Poppins">
      <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold drop-shadow-md">Erexa</h1>
        </div>
      </header>

      <section className="py-8 font-Poppins">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl text-gray-800 font-bold mb-4 drop-shadow-md">Our AI Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div key={product.id} className="bg-transparent rounded-lg shadow-md p-6 ">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h3>
                <p className=" mb-4 text-gray-800">{product.description}</p>
                <a href='/Nothing'><button className="px-3 py-2 m-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 bg-opacity-90 backdrop-filter backdrop-blur-md shadow-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all">Learn More</button></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-md text-white py-4 mt-auto">
        <div className="container mx-auto px-4">
          <p className="text-center drop-shadow-md">&copy; {new Date().getFullYear()} Erexa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductPage;
