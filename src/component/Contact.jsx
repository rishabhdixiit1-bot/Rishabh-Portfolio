import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const contactLinks = [
    {
      icon: <FaEnvelope />,
      label: "EMAIL",
      value: "rishabhdixiit1@gmail.com",
      href: "mailto:rishabhdixiit1@gmail.com",
    },
    {
      icon: <FaPhoneAlt />,
      label: "PHONE",
      value: "+91 9350445979",
      href: "tel:+919350445979",
    },
    {
      icon: <FaWhatsapp />,
      label: "WHATSAPP",
      value: "+91 8689050229",
      href: "https://wa.me/918689050229",
    },
    {
      icon: <FaLinkedin />,
      label: "LINKEDIN",
      value: "Rishabh Dixit",
      href: "https://www.linkedin.com/in/rishabh-dixit-9328712b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-36 bg-[#050c0f] text-white overflow-hidden px-6"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h3 className="text-5xl md:text-6xl font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h3>
          <div className="w-24 h-[3px] mx-auto mt-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-[0_0_20px_rgba(0,255,200,0.6)]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT: Contact Info */}
          <div className="space-y-6">
            {contactLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-center gap-6 p-6 bg-white/5 border border-cyan-500/10 hover:border-cyan-400/40 hover:bg-cyan-500/5 transition-all duration-300 rounded-xl"
              >
                <div className="text-2xl text-cyan-400 group-hover:scale-110 transition-transform">
                  {link.icon}
                </div>

                <div>
                  <p className="text-xs tracking-widest text-gray-500">
                    {link.label}
                  </p>
                  <p className="text-sm md:text-base font-semibold group-hover:text-white transition-colors">
                    {link.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* RIGHT: Location + Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#0b1418] border border-cyan-500/10 rounded-xl p-8 shadow-[0_0_40px_rgba(0,255,200,0.05)]"
          >
            <div className="flex items-start gap-4 mb-8">
              <FaMapMarkerAlt className="text-cyan-400 text-2xl mt-1" />
              <div>
                <p className="text-2xl font-bold uppercase tracking-wide">
                  Chandigarh
                </p>
                <p className="text-gray-400 text-sm">
                  Punjab / Haryana Capital, India
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-cyan-500/20">
              <iframe
                title="Chandigarh Map"
                src="https://www.google.com/maps?q=Chandigarh,India&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            <button className="mt-8 w-full py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:scale-105 transition duration-300 shadow-[0_0_20px_rgba(0,255,200,0.4)]">
              Let’s Work Together
            </button>
          </motion.div>
        </div>

        {/* Glowing Separator After Map */}
        <div className="w-full h-[2px] bg-gradient-to-r from-cyan-400/50 via-blue-500/60 to-cyan-400/50 rounded-full mt-16 mb-8 shadow-[0_0_20px_rgba(0,210,255,0.3)]" />
      </div>

      {/* Footer Note */}
      <div className="mt-12 text-center border-t border-cyan-500/10 pt-8">
        <p className="text-gray-600 text-xs tracking-[0.4em] uppercase">
          Rishabh Dixit © 2026
        </p>
      </div>
    </section>
  );
}