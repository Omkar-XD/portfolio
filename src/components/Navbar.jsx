import React from 'react';

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <span className="text-cyan-400">OMKAR</span>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#home" className="hover:text-cyan-400">Home</a>
        <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#skills" className="hover:text-cyan-400">Skills</a>
          <a href="#services" className="hover:text-cyan-400">Services</a>
          <a href="#portfolio" className="hover:text-cyan-400">Portfolio</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
