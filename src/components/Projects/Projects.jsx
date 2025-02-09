import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  const projects = [
    {
      title: "E-Commerce demo site",
      image: "/assets/eCommerce.jpg",
      github: "https://github.com/ab00s1/E-Commerce-Website-Design",
      liveDemo: "https://shopping-e-commerce-demo.netlify.app/",
    },
    {
      title: "World Map Countries",
      image: "/assets/countries.jpg",
      github: "https://github.com/ab00s1/where-in-the-world_ReactJS_",
      liveDemo: "https://countries-of-planet.netlify.app/",
    },
    {
      title: "Health Web App",
      image: "/assets/health.jpg",
      github: "https://github.com/ab00s1/Health-Challenge-Tracker",
      liveDemo: "https://health-challenger.netlify.app/",
    },
    {
      title: "Online Quiz game",
      image: "/assets/kbc.jpg",
      github: "https://github.com/ab00s1/play-KBC",
      liveDemo: "https://kyun-banega-crorepati.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="relative h-auto px-6 py-12 md:py-16 lg:py-20">
      <p className="text-center text-lg md:text-xl">Browse My Recent</p>
      <h1 className="text-4xl md:text-5xl text-center font-bold mb-8">Projects</h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-4xl border border-gray-400 shadow-md text-center w-full max-w-md transition-transform hover:scale-105"
          >
            {/* Project Image */}
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-[50%] mx-auto object-cover rounded-lg transition-transform duration-300 hover:scale-110"
              />
            </div>

            {/* Project Title */}
            <h2 className="text-xl font-semibold mb-4">{project.title}</h2>

            {/* Buttons for GitHub & Live Demo */}
            <div className="flex justify-center gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
              >
                GitHub
              </a>
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Arrow Navigation to Contact Section */}
      <Link to="/contact">
        <img
          src="/assets/right.svg"
          alt="Arrow icon"
          className="cursor-pointer h-8 absolute right-5 bottom-5 md:right-10 md:bottom-10"
        />
      </Link>
    </section>
  );
}

export default Projects;
