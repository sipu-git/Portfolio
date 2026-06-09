"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ExperienceSection() {
  const [expanded, setExpanded] = useState<number | null>(1);

  return (
    <section id="experience" className="section-padding bg-slate-900/50 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto">
        <SectionHeader
          badge="Experience"
          title="Work"
          highlight="History"
          subtitle="My professional journey and the impact I've made along the way"
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-indigo-500 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative sm:pl-24"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-blue-500/25 hidden sm:flex z-10">
                  {i + 1}
                </div>

                <div className="glass rounded-2xl border border-white/10 overflow-hidden hover:border-blue-500/20 transition-all">
                  {/* Header */}
                  <button
                    className="w-full p-6 text-left"
                    onClick={() => setExpanded(expanded === exp.id ? null : exp.id)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Building2 size={16} className="text-blue-400 flex-shrink-0" />
                          <span className="text-blue-400 font-semibold">{exp.company}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            exp.type === "full-time"
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                              : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                          }`}>
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{exp.position}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                          <span className="flex items-center gap-1">
                            <Calendar size={13} /> {exp.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={13} /> {exp.location}
                          </span>
                        </div>
                      </div>
                      <div className="text-slate-500 mt-1">
                        {expanded === exp.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </div>
                    </div>
                  </button>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {expanded === exp.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-white/5">
                          <p className="text-slate-400 mt-4 mb-4">{exp.description}</p>
                          <h4 className="text-sm font-semibold text-slate-300 mb-3">Key Responsibilities:</h4>
                          <ul className="space-y-2 mb-4">
                            {exp.responsibilities.map((r, ri) => (
                              <motion.li
                                key={ri}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: ri * 0.05 }}
                                className="flex items-start gap-2 text-sm text-slate-400"
                              >
                                <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                                {r}
                              </motion.li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs px-3 py-1 rounded-full glass border border-white/10 text-slate-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
