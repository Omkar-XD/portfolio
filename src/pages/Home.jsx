import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaDownload, FaGithub } from 'react-icons/fa';
import profileImg from '../assets/Profile.jpg';
import resumePDF from '../assets/Omkar_Resume.pdf';

const Home = () => {
  return (
    <div

      className="relative min-h-screen overflow-hidden text-white flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{
       background: 'linear-gradient(to right, #0a1124 0%, #81c3e2ff 100%)',
        boxShadow: 'inset 0 0 300px rgba(0, 0, 0, 0.5)'
      }}
    >
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            OMKAR CHAVAN
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-yellow-300">
            And I'm a <span className="text-cyan-400">Full-Stack Developer</span>
          </h2>
          <p className="text-sm sm:text-base text-white-200 mb-6">
            I'm a professional web developer with strong skills in HTML, CSS, JavaScript, Tailwind, JQuery etc.
            I've been working in this field for almost 3 years and all projects are completed successfully with 100% client satisfaction.
          </p>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-4 mb-6">
            <a href="https://www.facebook.com/profile.php?id=61576272995543" target="_blank" rel="noopener noreferrer"
              className="bg-cyan-500 hover:bg-cyan-600 p-3 rounded-full shadow hover:shadow-cyan-400 transition duration-300"
              title="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/in/omkar-chavan-8b59a8334/" target="_blank" rel="noopener noreferrer"
              className="bg-cyan-500 hover:bg-cyan-600 p-3 rounded-full shadow hover:shadow-cyan-400 transition duration-300"
              title="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/its.omkarr_/" target="_blank" rel="noopener noreferrer"
              className="bg-cyan-500 hover:bg-cyan-600 p-3 rounded-full shadow hover:shadow-cyan-400 transition duration-300"
              title="Instagram">
              <FaInstagram />
            </a>
            <a href="https://github.com/Omkar-XD" target="_blank" rel="noopener noreferrer"
              className="bg-cyan-500 hover:bg-cyan-600 p-3 rounded-full shadow hover:shadow-cyan-400 transition duration-300"
              title="GitHub">
              <FaGithub />
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center lg:justify-start gap-4">
            <a
              href={resumePDF}
              download="Omkar_Resume.pdf"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full flex items-center gap-2 shadow hover:shadow-cyan-400 transition duration-300"
              title="Download Resume"
            >
              <FaDownload /> Download CV
            </a>
            <a
              href="#portfolio"
              className="bg-white text-cyan-600 hover:bg-gray-200 px-6 py-2 rounded-full font-semibold shadow hover:shadow-cyan-400 transition duration-300"
              title="View Portfolio"
            >
              Portfolio
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative bg-sky-500 p-2 rounded-full shadow-lg hover:shadow-cyan-400 transition duration-300">
          <img
            src={profileImg}
            alt="Omkar Chavan"
            className="rounded-full w-96 h-[500px] object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
