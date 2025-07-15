import React, { useEffect } from 'react';

const skills = [
  { name: 'HTML5', percent: 90, icon: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
  { name: 'CSS3', percent: 85, icon: 'https://cdn-icons-png.flaticon.com/512/732/732190.png' },
  { name: 'Tailwind CSS', percent: 80, icon: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg' },
  { name: 'JavaScript', percent: 75, icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
  { name: 'React JS', percent: 70, icon: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png' },
  { name: 'Figma', percent: 90, icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png' },
  { name: 'Java (Core)', percent: 60, icon: 'https://cdn-icons-png.flaticon.com/512/226/226777.png' },
  { name: 'MySQL', percent: 65, icon: 'https://cdn-icons-png.flaticon.com/512/528/528260.png' },
  { name: 'Git & GitHub', percent: 70, icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111288.png' },
  { name: 'Prompt Engineering', percent: 80, icon: 'https://cdn-icons-png.flaticon.com/512/6335/6335736.png' },
];

const Skills = () => {
  return (
    <section id="skills" className="relative min-h-screen overflow-hidden text-white py-16 px-4 sm:px-8">
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to right, #0a1124 0%, #81c3e2 100%)',
          boxShadow: 'inset 0 0 300px rgba(0, 0, 0, 0.5)'
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          My <span className="text-cyan-400">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg shadow hover:scale-105 hover:shadow-cyan-400 transition duration-300"
            >
              <img src={skill.icon} alt={skill.name} className="w-12 h-12 rounded-full bg-white p-1" />
              <div className="w-full">
                <div className="flex justify-between text-sm font-medium">
                  <span>{skill.name}</span>
                  <span>{skill.percent}%</span>
                </div>
                <div className="w-full h-3 bg-gray-700 rounded-full mt-1">
                  <div
                    className="h-full bg-cyan-400 rounded-full transition-all duration-700"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
