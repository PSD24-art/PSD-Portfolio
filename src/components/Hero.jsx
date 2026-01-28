// src/components/Hero.jsx
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import Profile from "../assets/Profile.png";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black
                 flex flex-col md:flex-row items-center justify-center
                 px-6 md:px-16 lg:px-24 gap-12 pt-24"
    >
      <LazyMotion features={domAnimation}>
        {/* ===== Left Image ===== */}
        <m.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1 flex justify-center"
        >
          <div
            className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80
                       rounded-full overflow-hidden
                       border-4 border-fuchsia-500
                       shadow-[0_0_25px_rgba(236,72,153,0.6)]
                       hover:scale-105 transition-transform duration-500"
          >
            <img
              src={Profile}
              alt="Prathamesh Sanjay Dahake"
              width="320"
              height="320"
              decoding="async"
              loading="eager"
              fetchPriority="high"
              className="w-full h-full object-cover"
            />
          </div>
        </m.div>

        {/* ===== Right Content ===== */}
        <m.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Hi, I’m{" "}
            <span className="text-fuchsia-400">Prathamesh Sanjay Dahake</span>
          </h1>

          <m.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl
                       text-gray-300 font-light mb-6"
          >
            <span className="text-yellow-300">
              Full-Stack Web Developer (MERN)
            </span>
          </m.h2>

          <m.p
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="text-gray-400 max-w-xl leading-relaxed mb-8"
          >
            I build production-ready web applications focused on real business
            workflows, including backend systems, secure authentication,
            dashboards, payment integrations, and scalable APIs.
          </m.p>

          {/* ===== Buttons ===== */}
          <m.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.4 }}
            className="flex justify-center md:justify-start gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg
                         bg-fuchsia-500 hover:bg-fuchsia-700
                         font-semibold transition text-white"
            >
              View Projects
            </a>

            <a
              href="/Resume-Prathamesh.pdf"
              download
              className="px-6 py-3 rounded-lg
                         border border-yellow-400 text-yellow-300
                         hover:bg-yellow-400 hover:text-black
                         font-semibold transition"
            >
              Download Resume
            </a>
          </m.div>
        </m.div>
      </LazyMotion>
    </section>
  );
}
