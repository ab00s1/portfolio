import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <section
      id="about"
      className="relative h-auto px-6 py-12 md:py-16 lg:py-20"
    >
      <p className="text-center text-lg md:text-xl">Get To Know More</p>
      <h1 className="text-4xl md:text-5xl text-center font-bold mb-8">
        About Me
      </h1>

      <div className="flex flex-col md:flex-row items-center md:justify-center gap-10 md:gap-16">
        <div className="flex justify-center">
          <img
            src="/assets/about_p.jpg"
            alt="Profile picture"
            className="rounded-4xl w-[250px] md:w-[350px] lg:w-[400px] mx-auto md:mx-0"
          />
        </div>

        <div className="flex flex-col items-center text-center md:text-left">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <div className="p-6 bg-white rounded-4xl border border-gray-400 shadow-md text-center w-[220px]">
              <img
                src="/assets/experience.png"
                alt="Experience icon"
                className="h-10 mx-auto mb-2"
              />
              <h3 className="text-xl font-semibold">Experience</h3>
              <p className="text-gray-700">
                1 years <br /> Frontend Development
              </p>
            </div>
            <div className="p-6 bg-white rounded-4xl border border-gray-400 shadow-md text-center w-[40%]">
              <img
                src="/assets/education.png"
                alt="Education icon"
                className="h-10 mx-auto mb-2"
              />
              <h3 className="text-xl font-semibold">Education</h3>
              <p className="text-gray-700">
                currently pursuing B.C.A, Bachelor's Degree
              </p>
            </div>
          </div>

          <p className="text-justify sm:text-left text-gray-800 leading-relaxed max-w-2xl">
            I am Abhinav Singh, a passionate Full Stack Web Developer and a BCA
            student at Lovely Professional University. Currently in my second
            year, I have a strong enthusiasm for coding, problem-solving, and
            building user-friendly web applications. With expertise in HTML,
            CSS, JavaScript, ReactJS, Angular, and DSA, I have successfully
            worked on multiple projects and completed an internship in Website
            Design and Development. I enjoy tackling complex problems,
            optimizing solutions, and continuously learning new technologies.
          </p>
        </div>
      </div>

      <Link to="/experience">
        <img
          src="/assets/right.svg"
          alt="Arrow icon"
          className="cursor-pointer h-8 absolute right-5 bottom-5 md:right-10 md:bottom-10"
        />
      </Link>
    </section>
  );
}

export default About;
