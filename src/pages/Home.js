import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useState } from "react";
import {
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const logo = require('./assets/logo.png');

// Add this above the Navbar component
const navItems = [
  { id: 1, title: "Home", link: "/"},
  { id: 2, title: "Features", link: "/benefits" },
  { id: 3, title: "About Us", link: "/classes" },
  { id: 4, title: "Contact Us", link: "/contact" },
];

export default function Home(){
    return(
      <>
        <Navbar/>
      </>
    )
}

// Modify the Navbar component
function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <header className="header h-screen w-full font-Poppins">
        <div className="app">
          <nav>
            <div className="max-w-7xl mx-auto">
              <div className="flex mx-auto justify-between w-5/6 ">
                {/* Primary menu and logo */}
                <div className="flex items-center gap-16 my-12">
                  {/* logo */}
                  <div>
                    <Link to="/" className="flex gap-1 font-bold text-gray-800 items-center  ">
                      <img className="w-9 h-9 drop-shadow-lg" src={logo} alt="logo"></img>
                      <span>Erexa</span>
                    </Link>
                  </div>
                  {/* primary */}
                  <div className="hidden lg:flex gap-8 ">
                    {navItems.map((item) => (
                      <Link
                        key={item.id}
                        to={item.link}
                        className="hover:border-b-2 border-gray-800"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
                {/* secondary */}
                <div className="flex gap-6">
                  <div className="hidden xs:flex items-center gap-10">
                    <div className="hidden lg:flex items-center gap-2">
                      <MoonIcon className="h-6 w-6" />
                      <SunIcon className="h-6 w-6" />
                    </div>
                  </div>
                  {/* Mobile navigation toggle */}
                  <div className="lg:hidden flex items-center">
                    <button onClick={() => setToggleMenu(!toggleMenu)}>
                    <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="Menu / Menu_Alt_05">
                        <path id="Vector" d="M5 17H13M5 12H19M11 7H19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                    </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* mobile navigation */}
            <div
              className={`fixed z-40 w-full bg-opacity-90 backdrop-filter backdrop-blur-md px-3  overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
                !toggleMenu ? "h-0" : "h-full"
              }`}
            >
              <div className="px-8">
                <div className="flex flex-col gap-8  tracking-wider">
                  {navItems.map((item) => (
                    <Link
                      key={item.id}
                      to={item.link}
                      className="text-gray-800  hover:border-b-2 border-gray-800"
                      onClick={() => setToggleMenu(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="m-2 p-3 w-auto ">
          <h1 className=" text-center text-gray-800 drop-shadow-lg font-black text-2xl lg:text-4xl">"Welcome to the future of technology"</h1>
          <br></br>
          <h4 className="text-center text-gray-800 font-bold text-1xl lg:text-2xl "> – the next Era awaits!</h4>
        </div>
        <div className="m-3 p-5 w-auto ">
          <p className="  text-center text-gray-800 text-xs font-thin lg:text-sm text-light">"Unleashing the Power of <span title="Artificial Inteligence">AI</span>  for a Limitless Future</p>
        </div>
        <div className="grid m-3 gap-1 sm:grid-cols-1  lg:grid-cols-3">
          <div className=" bg-opacity-90 backdrop-filter backdrop-blur-md p-5 rounded-xl shadow-sm hover:bg-gradient-to-r from-blue-200 to-purple-200">
            <h1 className="font-bold sm: text-xs md: text-sm">Discover Our Vision</h1>
            <p className="font-thin sm: text-xs md: text-sm">Explore how AI is revolutionizing industries and transforming lives.</p>
          </div>
          <div className=" bg-opacity-90 backdrop-filter backdrop-blur-md p-5 rounded-xl shadow-sm hover:bg-gradient-to-r from-blue-200 to-purple-200">
          <h1 className="font-bold sm: text-xs md: text-sm ">Empowering the Future</h1>
            <p className="font-thin sm: text-xs md: text-sm">Witness the magic of our software as it empowers and inspires the leaders of tomorrow.</p>
          </div>
          <div className=" bg-opacity-90 backdrop-filter backdrop-blur-md p-5 rounded-xl shadow-sm hover:bg-gradient-to-r from-blue-200 to-purple-200">
          <h1 className="font-bold sm: text-xs md: text-sm">Be Part of the Change</h1>
            <p className="font-thin sm: text-xs md: text-sm">Join our community of innovators and dreamers who are building a brighter future together.</p>
          </div>
        </div>
        <div className="m-2 p-3 w-auto text-center hidden lg:block">
          <p className="m-1 text-sm">Unveil the limitless potential of AI. Embrace the future at <span>Erexa</span></p>
          <Link target="_blanck" to='/Know-more'><button class="px-3 py-2 m-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 bg-opacity-90 backdrop-filter backdrop-blur-md shadow-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all">Know more</button></Link>
          
        </div>
      </header>
    </>
  );
}
