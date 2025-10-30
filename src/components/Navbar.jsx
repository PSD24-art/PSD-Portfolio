// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-screen z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gray-900/70 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#hero"
          className="text-2xl font-semibold text-white"
          whileHover={{ scale: 1.1 }}
        >
          PSD<span className="blinking_cursor">_</span>
        </motion.a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {navItems.map((item, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.1, color: "#60a5fa" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href={item.href}
                className="text-gray-200 hover:text-blue-400 transition"
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden text-gray-100 text-2xl cursor-pointer">
          {menuOpen ? (
            <FaTimes onClick={() => setMenuOpen(false)} />
          ) : (
            <FaBars onClick={() => setMenuOpen(true)} />
          )}
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="absolute top-0 right-0 w-2/3 h-screen bg-gray-900/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 text-xl md:hidden"
          >
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-200 hover:text-blue-400 transition"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
