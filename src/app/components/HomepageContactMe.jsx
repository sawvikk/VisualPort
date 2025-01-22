import React from "react";
import { SiGithub, SiLinkedin, SiFacebook } from "react-icons/si";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const HomepageContactMe = () => {
  return (
    <div>
      <div id="Projects" className="flex justify-center items-center mt-10 mb-5 text-5xl font-montseratt font-bold ">
        Let&apos;s Connect!
      </div>
      <div className="flex justify-center">
        <div className="flex self-center flex-col md:flex-row shadow-lg rounded-2xl p-6 w-4/5 bg-gradient-to-r from-blue-800 via-blue-900 to-gray-700 text-white m-2">
          {/* Profile Image Section */}
          <div className="md:w-1/3 flex justify-center items-center">
            <img
              src="/images/Sawvik_simple.jpg"
              alt="Profile"
              className="w-48 h-48 object-cover rounded-full bg-neutral-100 shadow-lg"
            />
          </div>
          {/* Contact Form and Social Links */}
          <div className="md:w-2/3 mt-4 md:mt-0 md:ml-6 flex flex-col justify-center">
              {/* <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 font-bold mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div> */}
              
              
            
            {/* Contact Information */}
            <div className="flex flex-col space-y-4 text-gray-300">
              {/* Phone */}
              <div className="flex items-center">
                <FaPhoneAlt className="mr-3 text-blue-400" />
                <span>+880 1707-584605</span> {/* Replace with your phone number */}
              </div>
              {/* Address */}
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-3 text-blue-400" />
                  <span>Barhatta, Netrokona, Bangladesh</span> {/* Replace with your address */}
              </div>
              {/* Social Links */}
              <div className="flex space-x-6 mt-4">
                <a href="https://www.linkedin.com/in/sawvik-kar-dipto-43321a2ba/" target="_blank" rel="noopener noreferrer">
                  <SiLinkedin className="text-3xl hover:text-blue-500 transition duration-300 ease-in-out" />
                </a>
                <a href="https://github.com/sawvikk" target="_blank" rel="noopener noreferrer">
                  <SiGithub className="text-3xl hover:text-gray-400 transition duration-300 ease-in-out" />
                </a>
                <a href="https://www.facebook.com/sawvik.kar.5/" target="_blank" rel="noopener noreferrer">
                  <SiFacebook className="text-3xl hover:text-blue-500 transition duration-300 ease-in-out" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageContactMe;
