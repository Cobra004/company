import React from "react";

export default function Contact(){
    return(
        <Form/>
    )
}

function Form(){
    return(
        <section id='Contact' className=" font-Poppins bg-gradient-to-r from-blue-100  to-purple-100  py-10">
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