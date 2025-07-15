import React, { useRef } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-between relative text-white">
      {/* 🔵 Updated Static Gradient Background (No Animation) */}
      <div
        id="contact-bg"
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to right, #0a1124 0%, #81c3e2ff 100%)',
          boxShadow: 'inset 0 0 300px rgba(0, 0, 0, 0.5)',
        }}
      ></div>

      <div className="relative z-10 flex-grow flex items-center justify-center px-4 sm:px-8 py-16">
        <div className="max-w-6xl w-full flex flex-col lg:flex-row justify-between items-start gap-10">
          {/* Left Info */}
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Contact <span className="text-cyan-400">Me</span>
            </h2>
            <p className="text-gray-300 mb-4">
              I am a professional Web Designer. I have designed more than 50 templates.
              Contact me for any queries or collaboration!
            </p>
            <p><strong>Email:</strong> omkarc96k@gmail.com</p>
            <p><strong>Phone:</strong> +91 85912 58069</p>
          </div>

          {/* Web3Forms Contact Form */}
          <form
            ref={form}
            action="https://api.web3forms.com/submit"
            method="POST"
            className="flex-1 space-y-4 w-full max-w-xl"
          >
            {/* Replace with your actual access_key */}
            <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORM_KEY} />


            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="bg-gray-800 text-white p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="bg-gray-800 text-white p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="bg-gray-800 text-white p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="bg-gray-800 text-white p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
            ></textarea>
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded text-white font-semibold transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 w-full py-6 border-t border-gray-700 bg-[#111827]/80">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 text-center sm:text-left mb-2 sm:mb-0">
            © 2025 All Rights Reserved by Omkar Chavan.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-transparent border border-cyan-400 text-white rounded p-2 hover:bg-cyan-500 transition"
            title="Back to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
