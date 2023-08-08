import React from "react";
import './style.css';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Contact(){
    return(
        <Form/>
    )
}

function Form(){
    return(
      <div className="min-h-screen font-Poppins flex items-center justify-center bg-gradient-to-r from-blue-900 to-purple-900 bg-opacity-50 backdrop-filter backdrop-blur-md">
      <div className="glassmorphism-container">
        <h2 className="text-4xl font-bold text-white mb-8">Contact Us</h2>
        <div className="glassmorphism-form">
          <input
            type="text"
            placeholder="Name"
            className="input"
          />
          <input
            type="email"
            placeholder="Email"
            className="input"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="input"
          ></textarea>
          <button className="px-6 py-3 m-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-500 bg-opacity-90 backdrop-filter backdrop-blur-md shadow-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all">Send</button>
        </div>
        <div className="glassmorphism-social mt-8">
          <div className="flex flex-row justify-center space-x-4 m-3   ">
            <a href="/Nothing" className="social-link">
            <FaTwitter />
            </a>
            <a href="/Nothing" className="social-link">
            <FaFacebook />
            </a>
            <a href="/Nothing" className="social-link">
            <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>

    )
}
