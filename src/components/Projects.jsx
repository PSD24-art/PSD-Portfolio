import { motion } from "framer-motion";
import { CardsArr } from "../store/CardsArr";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 md:px-16 lg:px-24 py-20"
    >
      {/* ===== Section Header ===== */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-12"
      >
        <span className="text-fuchsia-400">My </span>Projects
      </motion.h2>

      {/* ===== Scrollable Container ===== */}
      <div className="relative ">
        {/* Fade Shadow (left) */}
        <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-black via-black/70 to-transparent pointer-events-none z-10" />
        {/* Fade Shadow (right) */}
        <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-black via-black/70 to-transparent pointer-events-none z-10" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="scrollbar-hide flex gap-8 overflow-x-auto scrollbar-thin scrollbar-thumb-fuchsia-500 scrollbar-track-gray-800 pb-4 px-2 snap-x snap-mandatory scroll-smooth"
        >
          {CardsArr.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="min-w-[320px] max-w-[340px] bg-gray-900/60 border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(236,72,153,0.4)] transition-all duration-500 snap-center flex-shrink-0 group"
            >
              {/* ===== Project Image ===== */}
              <div className="relative overflow-hidden">
                <img
                  src={card.imgUrl}
                  alt={card.projectTitle}
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* ===== Overlay Buttons (Desktop Hover Only) ===== */}
                <div className="hidden md:flex absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 items-center justify-center gap-4 transition-opacity duration-500">
                  <a
                    href={card.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-fuchsia-500 hover:bg-fuchsia-600 rounded-lg text-white font-semibold text-sm transition"
                  >
                    Live
                  </a>
                  <a
                    href={card.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-black rounded-lg font-semibold text-sm transition"
                  >
                    Code
                  </a>
                </div>
              </div>

              {/* ===== Project Info ===== */}
              <div className="p-5 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-fuchsia-400 mb-2">
                    {card.projectTitle}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {card.projectDescription}
                  </p>

                  {/* ===== Modules ===== */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {card.pModules.map((module, i) => (
                      <span
                        key={i}
                        className="text-xs bg-fuchsia-700/20 border border-fuchsia-500/40 px-3 py-1 rounded-full text-fuchsia-300"
                      >
                        {module}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ===== Always Visible Buttons (Mobile) ===== */}
                <div className="flex justify-evenly mt-3 md:hidden">
                  <a
                    href={card.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-25 text-center mx-1 px-4 py-2 bg-fuchsia-500 hover:bg-fuchsia-600 rounded-lg text-white font-semibold text-sm transition "
                  >
                    Live
                  </a>
                  <a
                    href={card.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-25 text-center mx-1 px-4 py-2 border border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-black rounded-lg font-semibold text-sm transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
