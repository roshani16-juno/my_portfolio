import React from 'react'
import HeroImage from '../assets/hero-image.png'
import './Hero.css';
import ExampleDoc from '../assets/resume.pdf';

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
       <img 
      src={HeroImage} 
      alt="" 
      className='mx-auto mb-8 w-88 h-80 rounded-full object-cover transform 
      transition-transform duration-300 hover:scale-105 animate-fade-in-up' 
    />

        <h1 className='text-4xl font-bold  transform 
      transition-transform duration-300 hover:scale-105 animate-fade-in-up' >
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-500 transform 
      transition-transform duration-300 hover:scale-105 animate-fade-in-up'>Roshani Pandey</span>
            , Software Developer 
        </h1>
        <p className='mt-4 text-lg text-gray-300 transform 
      transition-transform duration-300 hover:scale-105 animate-fade-in-up'>
            I specialize in building modern and responsive web applications.
        </p>
        
        <div className='mt-8 space-x-4'>
        <a href="#contact"><button
            className='bg-gradient-to-r from-red-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</button></a>
          <a href={ExampleDoc} download="MyPortfolioDoc" target='_blank'>
          <button className='bg-gradient-to-r from-pink-500 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full' >
            Resume
          </button> </a>
        </div>

    </div>
  )
}

export default Hero