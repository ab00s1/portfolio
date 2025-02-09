import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      id="profile"
      className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 px-6 md:px-12 py-10"
    >
      {/* Profile Image */}
      <div className="flex justify-center">
        <img
          src="/portfolio/assets/pp.jpg"
          alt="profile"
          className="w-64 h-64 md:w-96 md:h-96 rounded-full md:rounded-4xl object-cover shadow-lg"
        />
      </div>

      {/* Text & Buttons */}
      <div className="text-center md:text-left">
        <p className="text-lg md:text-xl text-gray-600">Hello, I'm</p>
        <h1 className="text-3xl md:text-5xl font-bold">Abhinav Singh</h1>
        <p className="text-xl md:text-2xl mb-4 text-gray-700">Frontend Developer</p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
          <a href="/portfolio/assets/thisResume.pdf" download="abhinavs_Resume.pdf">
            <button className="px-6 py-3 text-lg font-semibold cursor-pointer border-2 border-gray-700 rounded-lg bg-transparent hover:bg-gray-800 hover:text-white transition-all duration-300">
              Download CV
            </button>
          </a>
          <Link to="/portfolio/contact">
            <button className="px-6 py-3 text-lg font-semibold cursor-pointer text-white bg-gray-800 rounded-lg hover:bg-black transition-all duration-300">
              Contact Info
            </button>
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start mt-6 gap-4">
          <img
            src="/portfolio/assets/linkedin-brands-solid.svg"
            alt="LinkedIn"
            className="cursor-pointer w-8 h-8 transition-transform duration-300 hover:scale-110"
            onClick={() =>
              window.open("https://www.linkedin.com/in/abhinav-singh-961aa720a/", "_blank")
            }
          />
          <img
            src="/portfolio/assets/github-brands-solid.svg"
            alt="GitHub"
            className="cursor-pointer w-8 h-8 transition-transform duration-300 hover:scale-110"
            onClick={() => window.open("https://github.com/ab00s1/", "_blank")}
          />
          <img
            src="/portfolio/assets/instagram-brands-solid.svg"
            alt="Instagram"
            className="cursor-pointer w-8 h-8 transition-transform duration-300 hover:scale-110"
            onClick={() => window.open("https://www.instagram.com/_myself_abhinav/", "_blank")}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
