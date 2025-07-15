import React, { useEffect } from 'react';
import { FaGlobe, FaCode, FaPaintRoller, FaDatabase, FaChartLine, FaLaptopCode } from 'react-icons/fa';

const services = [
  {
    title: 'Web Development',
    icon: <FaCode size={40} />, 
    description:
      'I am a passionate web developer with experience building dynamic and responsive web applications using React, JavaScript, HTML, CSS, and Tailwind. I focus on creating clean, user-friendly interfaces.',
  },
  {
    title: 'Data Analysis',
    icon: <FaChartLine size={40} />, 
    description:
      'I have hands-on experience with data analysis using Python, Pandas, and Excel. I can clean, analyze, and visualize large datasets to extract actionable insights for business decisions.',
  },
  {
    title: 'Machine Learning',
    icon: <FaLaptopCode size={40} />, 
    description:
      'Currently learning supervised and unsupervised learning techniques. I enjoy solving problems using models like regression, classification, and clustering with libraries like scikit-learn.',
  },
  {
    title: 'SQL & Databases',
    icon: <FaDatabase size={40} />, 
    description:
      'Skilled in writing SQL queries and working with databases like MySQL. Able to manage data effectively and support data-driven applications.',
  },
  {
    title: 'Data Visualization',
    icon: <FaGlobe size={40} />, 
    description:
      'Able to create clear and insightful dashboards and visualizations using tools like Matplotlib, Seaborn, and Excel. Communicating data findings visually is my strength.',
  },
  {
    title: 'Excel Automation',
    icon: <FaPaintRoller size={40} />, 
    description:
      'Proficient in Excel for advanced data manipulation, charting, and automation using formulas and VBA scripts.',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative min-h-screen overflow-hidden text-white py-16 px-4 sm:px-8">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to right, #0a1124 0%, #81c3e2 100%)',
          boxShadow: 'inset 0 0 300px rgba(0, 0, 0, 0.5)'
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          My <span className="text-cyan-400">Services</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 flex flex-col items-center justify-between hover:shadow-lg hover:scale-105 transition duration-300 border border-transparent hover:border-cyan-400"
            >
              <div className="text-cyan-400 mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-4 text-cyan-400">{service.title}</h3>
              <p className="text-sm text-gray-300 mb-6 text-center">{service.description}</p>
              <a href="#contact">
                <button className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300">
                  Hire Me
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
