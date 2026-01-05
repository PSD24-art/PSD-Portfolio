// src/components/About.jsx
import { motion } from "framer-motion";
import { FaServer, FaDatabase, FaLock, FaTools } from "react-icons/fa";

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
  };

  const cards = [
    {
      icon: <FaServer className="text-3xl text-blue-400" />,
      title: "Full-Stack Web Development",
      desc: "Build complete web applications using the MERN stack with clear separation of frontend, backend, and API layers.",
    },
    {
      icon: <FaDatabase className="text-3xl text-emerald-400" />,
      title: "Backend & Database Design",
      desc: "Design REST APIs, manage MongoDB schemas, and handle real-world data flows like users, orders, and transactions.",
    },
    {
      icon: <FaLock className="text-3xl text-purple-400" />,
      title: "Authentication & Security",
      desc: "Implement secure authentication systems using JWT, OTP-based login, role-based access, and protected routes.",
    },
    {
      icon: <FaTools className="text-3xl text-pink-400" />,
      title: "Client-Focused Systems",
      desc: "Develop practical features such as dashboards, admin controls, payment integrations, and operational tools for businesses.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-gray-950 to-gray-900 px-6"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl font-bold text-white">
          About <span className="text-blue-400">Me</span>
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-400 text-sm leading-relaxed">
          I focus on building practical, production-ready web systems for real
          use cases. My work emphasizes clean architecture, secure backend
          logic, and features that support actual business workflows.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-gray-800/40 border border-gray-700 rounded-2xl p-7 
                       shadow-md hover:shadow-blue-500/20 
                       hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex justify-center mb-4">{card.icon}</div>
            <h3 className="text-lg font-semibold text-white mb-2 text-center">
              {card.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed text-center">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
