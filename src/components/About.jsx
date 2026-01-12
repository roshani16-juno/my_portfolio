import React from "react";
import AboutImage from "../assets/aboutme-image.png";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 transform 
      transition-transform duration-300 hover:scale-105 animate-fade-in-up">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt=""
            className="w-70 h-80 rounded object-cover mb-8 md:mb-0 transform 
      transition-transform duration-300 hover:scale-105 animate-fade-in-up"
          />
          <div className="flex-1">
            <p className="text-lg mb-8 transform 
      transition-transform duration-300 hover:scale-105 animate-fade-in-up">
              I am a passionate Software developer with a focus on building
              modern and responsive Software applications. With a strong foundation
              in both software also hardware and frontend and backend technologies, I strive to create
              seamless and efficient user experiences.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Html & Css
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-red-400 to-blue-500 h-2.5 rounded-full 
                    transform 
      transition-transform duration-300 hover:scale-105 animate-fade-in-up w-12/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Javascript
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-red-400 to-blue-500 h-2.5 rounded-full 
                    transform 
      transition-transform duration-300 hover:scale-105 animate-fade-in-up w-10/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Flutter
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-red-400 to-blue-500 h-2.5 rounded-full 
                    transform 
      transition-transform duration-300 hover:scale-105 animate-fade-in-up w-12/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Firebase
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-red-400 to-blue-500 h-2.5 rounded-full 
                    transform 
      transition-transform duration-300 hover:scale-105 animate-fade-in-up w-8/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  MySQL
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-red-400 to-blue-500 h-2.5 rounded-full 
                    transform 
      transition-transform duration-300 hover:scale-105 animate-fade-in-up w-12/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Python
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-red-400 to-blue-500 h-2.5 rounded-full 
                    transform 
      transition-transform duration-300 hover:scale-105 animate-fade-in-up w-9/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  AI/ML
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-red-400 to-blue-500 h-2.5 rounded-full 
                    transform 
      transition-transform duration-300 hover:scale-105 animate-fade-in-up w-8/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  React JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-red-400 to-blue-500 h-2.5 rounded-full 
                    transform 
      transition-transform duration-300 hover:scale-105 animate-fade-in-up w-11/12"
                  ></div>
                </div>
              </div>

              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Shopify
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-red-400 to-blue-500 h-2.5 rounded-full 
                    transform 
      transition-transform duration-300 hover:scale-105 animate-fade-in-up w-11/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Node JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-red-400 to-blue-500 h-2.5 rounded-full 
                    transform 
      transition-transform duration-300 hover:scale-105 animate-fade-in-up w-10/12"
                  ></div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-between text-center">
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-red-400 to-blue-500 transform 
      transition-transform duration-300 hover:scale-105 animate-fade-in-up">
                        2+
                    </h3>
                    <p>Years Experience</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-red-400 to-blue-500 transform 
      transition-transform duration-300 hover:scale-105 animate-fade-in-up">
                        5+
                    </h3>
                    <p>Projects Completed</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-red-400 to-blue-500 transform 
      transition-transform duration-300 hover:scale-105 animate-fade-in-up">
                        5+
                    </h3>
                    <p>Certified</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
