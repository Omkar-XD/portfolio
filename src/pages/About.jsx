import React, { useState } from 'react';
import userImg from '../assets/user.png'; // Make sure the image exists in this path

const About = () => {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden text-white py-16 px-4 sm:px-8"
    >
      <div
        id="about-bg"
        className="absolute inset-0 z-0"
        style={{
         background: 'linear-gradient(to right, #0a1124 0%, #81c3e2ff 100%)',
        boxShadow: 'inset 0 0 300px rgba(0, 0, 0, 0.5)'
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
          About <span className="text-cyan-400">Me</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Profile Card */}
          <div className="bg-cyan-400 text-center rounded-lg p-6 w-full max-w-xs shadow-lg">
            <div className="w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white">
              <img src={userImg} alt="Omkar Chavan" className="w-full h-full object-cover object-top" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Omkar Chavan</h3>
            <p className="text-white">Frontend Developer</p>
            <p className="text-white">AI/ML Enthusiast</p>
            <p className="text-white">Backend Learner</p>
          </div>

          {/* Tabbed Info */}
          <div className="flex-1">
            <div className="flex flex-wrap gap-6 mb-6 text-sm sm:text-base font-semibold border-b border-gray-700 pb-2">
              {['education', 'course', 'experience', 'details'].map(tab => (
                <button
                  key={tab}
                  className={`pb-1 hover:text-cyan-300 transition duration-300 ${
                    activeTab === tab ? 'text-cyan-400 border-b-2 border-cyan-400' : ''
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === 'education' && 'Education'}
                  {tab === 'course' && 'Certifications'}
                  {tab === 'experience' && 'Experience'}
                  {tab === 'details' && 'Details'}
                </button>
              ))}
            </div>

            <div className="transition-all duration-500 ease-in-out text-gray-300 space-y-4">
              {activeTab === 'education' && (
                <>
                  <div>
                    <h4 className="text-cyan-400 font-semibold">B.E. in AI & ML</h4>
                    <p>Zeal College of Engineering & Research, Pune</p>
                    <p>CGPA: 8.64 | Aug 2024 – Present</p>
                  </div>
                  <div>
                    <h4 className="text-cyan-400 font-semibold">Diploma in Computer Technology</h4>
                    <p>Bharati Vidyapeeth Institute of Technology, Navi Mumbai</p>
                    <p>Percentage: 86.59% | Aug 2021 – Aug 2024</p>
                  </div>
                  <div>
                    <h4 className="text-cyan-400 font-semibold">SSC (10th)</h4>
                    <p>St. Mary’s Multipurpose High School, Vashi</p>
                    <p>Percentage: 68.49% | 2021</p>
                  </div>
                </>
              )}

              {activeTab === 'course' && (
                <>
                  <div>
                    <h4 className="text-cyan-400 font-semibold">Java Full Stack Development</h4>
                    <p>Kiran Academy – Internship</p>
                  </div>
                  <div>
                    <h4 className="text-cyan-400 font-semibold">Machine Learning – Infosys Springboard</h4>
                  </div>
                  <div>
                    <h4 className="text-cyan-400 font-semibold">Prompt Engineering in AI – IBM SkillsBuild</h4>
                  </div>
                  <div>
                    <h4 className="text-cyan-400 font-semibold">Deep Learning Prerequisites (NumPy) – DeepLearning.AI</h4>
                  </div>
                </>
              )}

              {activeTab === 'experience' && (
                <>
                  <div>
                    <h4 className="text-cyan-400 font-semibold">Java Full Stack Developer Intern</h4>
                    <p>Kiran Academy, Pune</p>
                    <p>Feb 2025 – Jun 2025</p>
                  </div>
                  <div>
                    <h4 className="text-cyan-400 font-semibold">Web Development Intern</h4>
                    <p>Lotus Educational Institute, Navi Mumbai</p>
                    <p>Jun 2023 – Jul 2023</p>
                  </div>
                </>
              )}

              {activeTab === 'details' && (
                <>
                  <p><span className="text-cyan-400 font-semibold">Name:</span> Omkar Chavan</p>
                  <p><span className="text-cyan-400 font-semibold">Email:</span> omkarchavan21k@gmail.com</p>
                  <p><span className="text-cyan-400 font-semibold">Phone:</span> +91 85912 58069</p>
                  <p><span className="text-cyan-400 font-semibold">Location:</span> Pune, Maharashtra</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
