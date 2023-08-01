import React from 'react';
import "./style.css"
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
const logo = require('./assets/logo.png')


const Section1 = () =>{
    return(
        <section className='section1 shadow-sm flex items-center justify-center h-24 md:h-40 lg:h-52 xl:h-56 w-full'>
            <div className=''>
                <h1 className=' font-Poppins text-center text-gray-200 drop-shadow-2xl m-2 text-xs  md:text-base  lg:text-xl'>Discover the magic of AI - Your journey to tomorrow starts here.</h1>
            </div>
        </section>
    )
}
const ContentSection = () => {
  return (
    <section className="font-Poppins bg-gradient-to-r from-blue-100 to-purple-100 bg-opacity-90 backdrop-filter backdrop-blur-md  py-10">
      <div className="container  mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 drop-shadow-lg mb-6">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Service Card 1 */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-500  p-6 rounded-md shadow-lg">
            <h3 className="text-xl drop-shadow-md text-gray-800 font-bold mb-2">AI Research</h3>
            <p className="text-white">
              We conduct cutting-edge AI research to stay at the forefront of technology and provide innovative solutions to our clients.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-500  p-6 rounded-md shadow-lg">
            <h3 className="text-xl drop-shadow-md text-gray-800 font-bold mb-2">Machine Learning</h3>
            <p className="text-white">
              Our team of experts excels in developing and deploying machine learning models for various industries and use cases.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-500  p-6 rounded-md shadow-lg">
            <h3 className="text-xl font-bold drop-shadow-md text-gray-800 mb-2">Natural Language Processing</h3>
            <p className="text-white">
              We leverage NLP techniques to build intelligent systems that understand and interact with human language effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};









const Projects = () => {
  // Sample project data (you can replace this with your actual project data)
  const projects = [
    {
      id: 1,
      title: 'Autonomous Driving System',
      description: 'Developed a state-of-the-art autonomous driving system using advanced computer vision and machine learning techniques.',
      imageUrl: 'https://img.freepik.com/free-photo/smart-car-navigation-screen-with-speedometer_53876-102042.jpg?w=996&t=st=1690617505~exp=1690618105~hmac=e27a605cd9f2849c99c1570202ff2065b85d8da4c10cc4c3451a26e151000f08',
    },
    {
      id: 2,
      title: 'AI-Powered Customer Support',
      description: 'Implemented an AI-powered customer support chatbot to handle customer queries and improve response time.',
      imageUrl: 'https://img.freepik.com/free-photo/portrait-woman-customer-service-worker_144627-37948.jpg?w=996&t=st=1690617556~exp=1690618156~hmac=bb5a414d5f4b4fd26191cfb7dd69246364e7590b3c60f44ca156020821503287',
    },
    {
      id: 3,
      title: 'Healthcare Diagnostics',
      description: 'Created an AI-based diagnostics platform for detecting diseases and providing personalized treatment recommendations.',
      imageUrl: 'https://img.freepik.com/free-photo/healthy-eating-food-lifestyle-organic-wellness-graphic_53876-121392.jpg?w=996&t=st=1690617686~exp=1690618286~hmac=3788b998215bfdf3708983f4e681002e481e8940b76afc60e7ae7fcdc155ad0e',
    },
  ];

  return (
    <section className="font-Poppins bg-gradient-to-r from-blue-100 to-purple-100 bg-opacity-50 backdrop-filter backdrop-blur-md py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 drop-shadow-lg mb-6">Our Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card */}
          {projects.map((project) => (
            <div key={project.id} className="bg-opacity-90 backdrop-filter backdrop-blur-md p-6 rounded-md shadow-md">
              <img src={project.imageUrl} alt={project.title} className="mb-4 rounded-md" />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a href="/Nothing" className="text-blue-500 hover:underline">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function Whychoose(){
    return(
        <section className="font-Poppins bg-gradient-to-r from-blue-100 to-purple-100 bg-opacity-50 backdrop-filter backdrop-blur-md  py-10">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold drop-shadow-lg text-gray-800 mb-6">Why Choose Us?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Benefit Card 1 */}
      <div className=" p-6 rounded-md shadow-md bg-gradient-to-r from-blue-500 to-purple-500">
        <h3 className="text-xl font-bold mb-2">Expertise in AI Solutions</h3>
        <p className="text-white">
          With years of experience, we specialize in delivering cutting-edge AI solutions tailored to your specific needs.
        </p>
      </div>

      {/* Benefit Card 2 */}
      <div className="bg-white p-6 rounded-md shadow-md bg-gradient-to-l from-blue-500 to-purple-500">
        <h3 className="text-xl font-bold mb-2">Client-Centric Approach</h3>
        <p className="text-white">
          We prioritize our clients and work closely with them to ensure the success of each project, providing top-notch support throughout the journey.
        </p>
      </div>

      {/* Benefit Card 3 */}
      <div className="bg-white p-6 rounded-md shadow-md bg-gradient-to-r from-blue-500 to-purple-500">
        <h3 className="text-xl font-bold mb-2">Innovative Solutions</h3>
        <p className="text-white">
          Our talented team of AI experts thrives on innovation, pushing the boundaries of AI to deliver revolutionary solutions for your business.
        </p>
      </div>

      {/* Benefit Card 4 */}
      <div className="bg-white p-6 rounded-md shadow-md bg-gradient-to-l from-blue-500 to-purple-500">
        <h3 className="text-xl font-bold mb-2">Proven Track Record</h3>
        <p className="text-white">
          We have a solid track record of successful AI implementations across diverse industries, earning the trust of numerous satisfied clients.
        </p>
      </div>
    </div>
  </div>
</section>

    )
}

function Contact(){
    return(
        <section id='Contact' className=" font-Poppins bg-gradient-to-r from-blue-100 to-purple-100  py-10">
  <div className="container mx-auto rounded-md px-4">
    <h2 className="text-3xl font-bold drop-shadow-md text-gray-800 mb-6">Contact Us</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Contact Information */}
      <div className="bg-transparent bg-opacity-90 backdrop-filter backdrop-blur-md p-6 rounded-md shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Get in Touch</h3>
        <p className="text-gray-800 mb-2">
          Address: 123 AI Street, City, Country
        </p>
        <p className="text-gray-800 mb-2">
          Email: info@yourcompany.com
        </p>
        <p className="text-gray-800">
          Phone: +1 (555) 123-4567
        </p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2407.8117690572926!2d78.77762072338534!3d10.994568443609428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baafa4d711a4f27%3A0xd98b2745d789433c!2sM.A.M.%20College%20of%20Engineering%20and%20Technology!5e1!3m2!1sen!2sin!4v1690637393705!5m2!1sen!2sin" className='w-auto h-auto my-3 rounded-md shadow-md'></iframe>
      </div>

      {/* Contact Form */}
      <div className="bg-transparent bg-opacity-90 backdrop-filter backdrop-blur-md p-6 rounded-md shadow-lg">
        <h3 className="text-xl font-bold mb-4">Send us a Message</h3>
        <form>
          <div className="mb-4">
            <input
              type="text"
              className="w-full p-3 border shadow outline-none rounded-md bg-transparent"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="w-full p-3 border shadow rounded-md outline-none bg-transparent"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <textarea
              className="w-full p-3 border shadow rounded-md outline-none resize-none bg-transparent"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-3 py-3 m-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 bg-opacity-90 backdrop-filter backdrop-blur-md shadow-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-al"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

    )
}






const Footer = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      // Add animation class here (e.g., fadeInUp, slideInLeft, etc.)
    }
  }, [inView]);

  return (
    <footer ref={ref} className="font-Poppins bg-opacity-80 backdrop-filter backdrop-blur-lg bg-gradient-to-r from-blue-100 to-purple-100  py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Footer Logo */}
          <div className="flex items-center justify-center sm:justify-start">
            <img 
              src={logo}
              alt="Logo"
              className="w-24 h-24 object-contain drop-shadow-lg"
            />
          </div>

          {/* Contact Information */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold mb-2">Contact Us</h4>
            <p className="text-gray-400 mb-2">
              <i className="fas fa-map-marker-alt mr-2"></i>
              Address: 123 AI Street, City, Country
            </p>
            <p className="text-gray-400 mb-2">
              <i className="fas fa-envelope mr-2"></i>
              Email: info@yourcompany.com
            </p>
            <p className="text-gray-400">
              <i className="fas fa-phone-alt mr-2"></i>
              Phone: +1 (555) 123-4567
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  <i className="fas fa-home mr-2"></i>
                  Home
                </a>
              </li>
              <li>
                <a href="#Contact" className="text-gray-400 hover:text-white">
                  <i className="fas fa-info-circle mr-2"></i>
                  About Us
                </a>
              </li>
              {/* Add more quick links as needed */}
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="text-center sm:text-right">
            <h4 className="text-lg text-center font-bold mb-2">Follow Us</h4>
            <div className="flex justify-center sm:justify-end space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"><svg class="h-10 w-10 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"><svg class="h-10 w-10 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"><svg class="h-10 w-10 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"><svg class="h-10 w-10 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></i>
              </a>
              {/* Add more social media links as needed */}
            </div>
          </div>
        </div>
        <hr className="border-gray-600 my-6" />
        <p className="text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Erexa. All rights reserved.
        </p>
      </div>
    </footer>
  );
};






export default function Knowmore(){
    return(
        <>
        <Section1/>
        <ContentSection/>
        <Projects/>
        <Whychoose/>
        <Contact/>
        <Footer/>
        </>
    )
}