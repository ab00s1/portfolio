import React from "react";
import { Link } from "react-router-dom";

function Experience() {
  const frontendSkills = [
    { name: "HTML", level: "Experienced", src: "/portfolio/assets/html5-brands-solid.svg" },
    { name: "CSS", level: "Experienced", src: "/portfolio/assets/css3-brands-solid.svg" },
    { name: "TailwindCSS", level: "Experienced", src: "/portfolio/assets/tailwind-css.svg" },
    { name: "JavaScript", level: "Experienced", src: "/portfolio/assets/js-brands-solid.svg" },
    { name: "React", level: "Intermediate", src: "/portfolio/assets/react-brands-solid.svg" },
    { name: "Angular", level: "Basic", src: "/portfolio/assets/angular-brands-solid.svg" },
  ];

  const backendSkills = [
    { name: "MySQL", level: "Intermediate", src: "/portfolio/assets/mySQL.jpg" },
    { name: "Node JS", level: "Intermediate", src: "/portfolio/assets/node-brands-solid.svg" },
    { name: "Git", level: "Intermediate", src: "/portfolio/assets/git-alt-brands-solid.svg"},
  ];

  return (
    <section id="experience" className="relative h-auto px-6 py-12 md:py-16 lg:py-20">
      <p className="text-center text-lg md:text-xl">Explore My</p>
      <h1 className="text-4xl md:text-5xl text-center font-bold mb-8">
        Experience
      </h1>

      {/* Experience Container */}
      <div className="flex flex-col md:flex-row items-center md:justify-center gap-10 md:gap-16">
        {/* Frontend Development */}
        <div className="p-6 bg-white rounded-4xl border border-gray-400 shadow-md text-center w-full max-w-lg">
          <h2 className="text-xl font-semibold mb-4">Frontend Development</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {frontendSkills.map((skill, index) => (
              <div key={index} className="flex flex-wrap justify-center items-center gap-2">
                <img
                  src={skill.src}
                  alt="Checkmark"
                  className="h-6 w-6"
                />
                <div>
                  <h3 className="text-lg font-medium">{skill.name}</h3>
                  <p className="text-gray-600 text-sm">{skill.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Development */}
        <div className="p-6 bg-white rounded-4xl border border-gray-400 shadow-md text-center w-full max-w-lg">
          <h2 className="text-xl font-semibold mb-4">Backend Development</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {backendSkills.map((skill, index) => (
              <div key={index} className="flex flex-wrap justify-center items-center gap-2">
                <img
                  src={skill.src}
                  alt="Checkmark"
                  className="h-6 w-6"
                />
                <div>
                  <h3 className="text-lg font-medium">{skill.name}</h3>
                  <p className="text-gray-600 text-sm">{skill.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Arrow Navigation to Projects Section */}
      <Link to="/portfolio/projects">
        <img
          src="/portfolio/assets/right.svg"
          alt="Arrow icon"
          className="cursor-pointer h-8 absolute right-5 bottom-5 md:right-10 md:bottom-10"
        />
      </Link>
    </section>
  );
}

export default Experience;
