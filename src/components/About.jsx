// src/components/About.jsx
import { motion } from "framer-motion";
import { FaBrain, FaCode, FaRocket } from "react-icons/fa";

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const cards = [
    {
      icon: <FaCode className="text-3xl text-blue-400" />,
      title: "Full Stack Developer",
      desc: "Experienced in MERN stack with strong fundamentals in JavaScript and backend systems.",
    },
    {
      icon: <FaBrain className="text-3xl text-purple-400" />,
      title: "AI Integrator",
      desc: "Integrating AI-driven logic in real-world web apps to make them intelligent and adaptive.",
    },
    {
      icon: <FaRocket className="text-3xl text-pink-400" />,
      title: "Growth Mindset",
      desc: "I believe in smart work, consistency, and continuous improvement to build impactful solutions.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-gray-950 to-gray-900 text-center px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-12 text-white"
      >
        About <span className="text-blue-400">Me</span>
      </motion.h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-gray-800/40 border border-gray-700 rounded-2xl p-8 shadow-md hover:shadow-blue-500/20 transition-all duration-300"
          >
            <div className="flex justify-center mb-4">{card.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {card.title}
            </h3>
            <p className="text-gray-400 text-sm">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
