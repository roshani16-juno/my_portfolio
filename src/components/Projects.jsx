import React from "react";
import employeeMSImage from "../assets/expence-tracker.png";
import bookMSImage from "../assets/Object-DetectionAI.png";
import Portfolioimg from "../assets/portfolio.png";

const projects = [
  {
    id: 1,
    name: "EXPENCE TRACKER",
    technologies: "PHP & MYSQL, Daily Expense Tracker using PHP and MySQL is web based application. This application used to manage daily expenses of a user.",

    image: employeeMSImage,
    github: "https://github.com/snehal395u/expense-tracker-php-mysql",
  },
  {
    id: 2,
    name: "AI Object Detector",
    technologies: "Python,OpenCV & AI, Object detection is a key field in artificial intelligence, allowing computer systems to “see” their environments by detecting objects in visual images or videos.",
    image: bookMSImage,
    github: "https://github.com/snehal395u/ObjectDetectionUsing-Opencv-Python",
  },
  {
    id: 3,
    name: "My Portflio ",
    technologies: "ReactJs,ViteJs & TailwindCss,multiple function-based components like Contact, Hero, Navbar, About, Footer, Project, Skills, etc., and at the end, integrat all files into App. js. Styling and design are implemented through TailWind CSS. ",
    image: Portfolioimg,
    github: "https://github.com/snehal395u/snehalportfolio-reactjs",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-red-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
