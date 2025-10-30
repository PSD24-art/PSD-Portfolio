// src/components/Footer.jsx
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center space-y-4"
      >
        {/* --- Social Links --- */}
        <div className="flex space-x-6">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/PSD24-art"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub size={26} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/in/prathamesh-dahake/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <FaLinkedin size={26} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            href="mailto:prathameshdahake24@gmail.com"
            className="text-gray-400 hover:text-pink-400 transition-colors"
          >
            <FaEnvelope size={26} />
          </motion.a>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-500 text-sm"
        >
          © {new Date().getFullYear()}{" "}
          <span className="text-fuchsia-400 font-semibold">
            Prathamesh Sanjay Dahake
          </span>{" "}
          — All rights reserved.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "60%" }}
          transition={{ duration: 1 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent mt-2"
        ></motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
