import { motion } from "framer-motion";
import Profile from "../assets/Profile.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-24 gap-12 pt-24"
    >
      {/* ===== Left Image ===== */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center"
      >
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-fuchsia-500 shadow-[0_0_25px_rgba(236,72,153,0.6)] hover:scale-105 transition-transform duration-500">
          <img
            src={Profile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
      {/* ===== Right Content ===== */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Hi, I’m{" "}
          <span className="text-fuchsia-400">Prathamesh Sanjay Dahake</span>
        </h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light mb-6"
        >
          <span className="text-yellow-300">Full Stack Developer</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-gray-400 max-w-xl leading-relaxed mb-8"
        >
          I build scalable, intelligent web apps that empower businesses. I’m
          passionate about creating digital products that deliver results — from
          idea to deployment.
        </motion.p>

        {/* ===== Buttons ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex justify-center md:justify-start gap-4"
        >
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-fuchsia-500 hover:bg-fuchsia-700 text-amber-100 font-semibold transition"
          >
            Hire Me
          </a>
          <a
            href="/Resume_Prathamesh.pdf"
            download
            className="px-6 py-3 rounded-lg border border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-black font-semibold transition"
          >
            Download CV
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
