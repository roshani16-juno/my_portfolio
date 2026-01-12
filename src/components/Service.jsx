import React from "react";

const services = [
{
    id: 1,
    title: "Mobile App Development",
    description:
      "Creating cross-platform mobile applications using Flutter, Java and React Native with clean UI/UX.",
  },
 {
    id: 2,
    title: "AI & Python Development",
    description:
      "Building AI-based projects using Python, OpenCV and basic Machine Learning concepts.",
  },
  {
    id: 3,
    title: "Frontend Web Development",
    description:
      "Building responsive and modern websites using HTML, CSS, JavaScript, React JS and Tailwind CSS.",
  },
  {
    id: 4,
    title: "Backend Development",
    description:
      "Developing secure and scalable backend systems using Node.js, MySQL, Firebase and REST APIs.",
  },
  {
    id: 5,
    title: "Full Stack Development",
    description:
      "Complete web application development including frontend, backend, database and deployment.",
  },
  {
    id: 6,
    title: "IoT & Software Projects",
    description:
      "Developing IoT-based projects combining software and hardware for real-world applications.",
  },
];

const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 transform transition-transform duration-300 hover:scale-105">
          My Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-xl transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-red-600 to-blue-400">
                0{service.id}
              </div>

              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-red-400 to-blue-500">
                {service.title}
              </h3>

              <p className="mt-3 text-gray-300 leading-relaxed">
                {service.description}
              </p>

              <span className="mt-4 inline-block text-red-400 hover:text-blue-500 cursor-pointer">
                Read More →
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
