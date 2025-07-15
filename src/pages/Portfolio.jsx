import React, { useEffect } from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Web Design',
      img: 'https://images.unsplash.com/photo-1581093588401-b4a2b93e79c7',
    },
    {
      title: 'App UI',
      img: 'https://images.unsplash.com/photo-1580894894513-1a1be1fa9a24',
    },
    {
      title: 'Dashboard',
      img: 'https://images.unsplash.com/photo-1551033406-611cf9a28f58',
    },
    {
      title: 'Workstation',
      img: 'https://images.unsplash.com/photo-1556135069-ff1d281d3c1e',
    },
    {
      title: 'Keyboard Setup',
      img: 'https://images.unsplash.com/photo-1587202372775-dc04121d43e2',
    },
    {
      title: 'Photography Setup',
      img: 'https://images.unsplash.com/photo-1581262339213-13e85c6b89bd',
    },
  ];

  return (
    <section
      id="portfolio"
      className="min-h-screen relative text-white py-16 px-4 sm:px-8 overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to right, #0a1124 0%, #81c3e2ff 100%)',
          boxShadow: 'inset 0 0 300px rgba(0, 0, 0, 0.5)'
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
          My <span className="text-cyan-400">Portfolio</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-60 object-cover transition duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-cyan-500/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-white text-lg font-semibold">{project.title}</h3>
                <span className="text-white text-2xl mt-2">🔗</span>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Note */}
        <p className="text-center text-cyan-300 text-2xl mt-16 animate-pulse">
          🚀 Something Big is Coming Your Way...
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
