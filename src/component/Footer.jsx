import React from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="relative bg-[#050c0f] text-gray-400 pt-16 sm:pt-20 pb-10 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-cyan-500/10 blur-[120px] sm:blur-[150px] rounded-full top-[-200px] left-1/2 -translate-x-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center sm:text-left">

        {/* Brand Section */}
        <div className="px-3 flex flex-col items-center sm:items-start">
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            RISHABH DIXIT
          </h2>

          <p className="mt-4 text-gray-500 leading-relaxed max-w-sm">
            Crafting high-impact visual stories with cinematic transitions,
            professional color grading, and motion magic.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 justify-center sm:justify-start flex-wrap">
            <a href="mailto:rishabhdixiit1@gmail.com" className="footer-icon text-red-500">
              <SiGmail />
            </a>

            <a href="https://www.instagram.com/rishabhdixitt" target="_blank" rel="noreferrer" className="footer-icon text-pink-500">
              <FaInstagram />
            </a>

            <a href="https://www.linkedin.com/in/rishabh-dixit-9328712b7" target="_blank" rel="noreferrer" className="footer-icon text-blue-500">
              <FaLinkedin />
            </a>

            <a href="https://wa.me/8689050229" target="_blank" rel="noreferrer" className="footer-icon text-green-500">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-white font-semibold mb-6 tracking-wider">
            QUICK LINKS
          </h3>

          <ul className="space-y-3">
            {["About", "Experience", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-cyan-400 transition duration-300 relative group"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-white font-semibold mb-6 tracking-wider">
            LET’S WORK TOGETHER
          </h3>

          <p className="text-gray-500 mb-6 max-w-sm">
            Available for freelance projects and collaborations.
          </p>

          <button className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:scale-105 transition duration-300 shadow-[0_0_20px_rgba(0,255,200,0.4)]">
            Hire Me
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-cyan-500/10 mt-12 sm:mt-16 pt-6 text-center text-sm text-gray-600 px-4">
        © {new Date().getFullYear()} Rishabh Dixit. All Rights Reserved.
      </div>

      {/* Custom Styles */}
      <style>
        {`
          .footer-icon {
            width: 42px;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            background: rgba(255,255,255,0.05);
            transition: all 0.3s ease;
          }
          .footer-icon:hover {
            transform: translateY(-5px);
            box-shadow: 0 0 20px rgba(0,255,200,0.4);
          }
        `}
      </style>

    </footer>
  );
}