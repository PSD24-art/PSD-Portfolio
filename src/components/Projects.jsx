import { useState } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { CardsArr } from "../store/CardsArr";

export default function Projects() {
  const reduceMotion = useReducedMotion();
  const [activeProject, setActiveProject] = useState(null);

  const details = activeProject?.projectDetails;

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black
                 text-white px-6 md:px-16 lg:px-24 py-20"
    >
      <LazyMotion features={domAnimation}>
        {/* ===== Section Header ===== */}
        <m.h2
          initial={reduceMotion ? false : { opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-12"
        >
          <span className="text-fuchsia-400">My </span>Projects
        </m.h2>

        <div className="flex gap-6">
          {/* ================= LEFT : PROJECT CARDS ================= */}
          <m.div
            animate={{ width: activeProject ? "25%" : "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`flex gap-8 overflow-x-auto pb-4 px-2
                        snap-x snap-mandatory scroll-smooth
                        ${activeProject ? "hidden lg:flex" : "flex"}`}
          >
            {CardsArr.map((card, index) => (
              <m.div
                key={card.id}
                initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="min-w-[320px] max-w-[340px]
                           bg-gray-900/60 border border-gray-800
                           rounded-2xl overflow-hidden
                           shadow-lg hover:shadow-[0_0_25px_rgba(236,72,153,0.4)]
                           transition-transform duration-500
                           snap-center flex-shrink-0 group"
              >
                {/* Image */}
                <div className="flex gap-4 flex-col justify-between h-full">
                  <div className="relative overflow-hidden">
                    <img
                      loading="lazy"
                      src={card.imgUrl}
                      alt={card.projectTitle}
                      className="w-full h-52 object-cover
                               group-hover:scale-110 transition-transform duration-700"
                    />

                    {card.inPrduction && (
                      <span
                        className="absolute top-3 right-3
                                 bg-pink-500/80 text-black
                                 text-xs font-bold px-3 py-1 rounded-full"
                      >
                        In Production soon
                      </span>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-fuchsia-400 mb-2">
                      {card.projectTitle}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {card.projectDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {card.pModules.map((m) => (
                        <span
                          key={m}
                          className="text-xs bg-fuchsia-700/20
                                   border border-fuchsia-500/40
                                   px-3 py-1 rounded-full text-fuchsia-300"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => setActiveProject(card)}
                      className="w-full text-sm font-semibold
                               bg-gradient-to-r from-fuchsia-500 to-pink-500
                               hover:opacity-90 transition
                               text-white py-2 rounded-lg"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </m.div>
            ))}
          </m.div>

          {/* ================= RIGHT : DETAILS PANEL ================= */}
          {activeProject && (
            <m.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-3/4 bg-gray-900/60
                         border border-gray-800
                         rounded-2xl p-6
                         overflow-y-auto max-h-[80vh]"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-fuchsia-400">
                    {activeProject.projectTitle}
                  </h3>
                  <p className="text-gray-400 mt-2">{details?.hero?.tagline}</p>
                </div>

                <button
                  onClick={() => setActiveProject(null)}
                  className="text-sm px-4 py-2 border border-gray-600
                             rounded-lg hover:bg-gray-800"
                >
                  Close
                </button>
              </div>

              <img
                src={activeProject.imgUrl}
                alt={activeProject.projectTitle}
                className="w-full rounded-xl mb-8"
              />

              {/* Tech Stack */}
              {details?.hero?.techStack?.length > 0 && (
                <section className="mb-8">
                  <h4 className="text-xl font-semibold text-pink-400 mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {details.hero.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-fuchsia-700/20
                                   border border-fuchsia-500/40
                                   px-3 py-1 rounded-full text-fuchsia-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {/* Problem Statement */}
              {details?.problemStatement && (
                <section className="mb-8">
                  <h4 className="text-xl font-semibold text-pink-400 mb-2">
                    Problem Statement
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {details.problemStatement}
                  </p>
                </section>
              )}

              {/* Solution Overview */}
              {details?.solutionOverview && (
                <section className="mb-8">
                  <h4 className="text-xl font-semibold text-pink-400 mb-2">
                    Solution Overview
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {details.solutionOverview}
                  </p>
                </section>
              )}

              {/* Key Features */}
              {details?.keyFeatures?.length > 0 && (
                <section className="mb-8">
                  <h4 className="text-xl font-semibold text-pink-400 mb-2">
                    Key Features
                  </h4>
                  <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
                    {details.keyFeatures.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Database Design */}
              {details?.databaseDesign?.length > 0 && (
                <section className="mb-8">
                  <h4 className="text-xl font-semibold text-pink-400 mb-2">
                    Database Design
                  </h4>
                  <ul className="list-disc pl-5 text-gray-300 text-sm space-y-1">
                    {details.databaseDesign.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Challenges */}
              {details?.challenges && (
                <section className="mb-8">
                  <h4 className="text-xl font-semibold text-pink-400 mb-2">
                    Challenges & Solutions
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {details.challenges}
                  </p>
                </section>
              )}

              {/* Performance & Security */}
              {details?.performanceSecurity && (
                <section className="mb-8">
                  <h4 className="text-xl font-semibold text-pink-400 mb-2">
                    Performance & Security
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {details.performanceSecurity}
                  </p>
                </section>
              )}

              {/* Results */}
              {details?.resultsImpact && (
                <section>
                  <h4 className="text-xl font-semibold text-pink-400 mb-2">
                    Results & Impact
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {details.resultsImpact}
                  </p>
                </section>
              )}
            </m.div>
          )}
        </div>
      </LazyMotion>
    </section>
  );
}
