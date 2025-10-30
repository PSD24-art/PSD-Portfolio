import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJava, FaGitAlt, FaDocker } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiRedux,
  SiKubernetes,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact className="text-sky-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-500" /> },
  { name: "SQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-600" /> },
  { name: "Kubernetes", icon: <SiKubernetes className="text-sky-600" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          ⚙️ Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-[#111] hover:bg-[#1a1a1a] p-5 rounded-xl flex flex-col items-center gap-3 shadow-md hover:shadow-lg transition-all"
            >
              <div className="text-4xl">{skill.icon}</div>
              <p className="text-sm font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
