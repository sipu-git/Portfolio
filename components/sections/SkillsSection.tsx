"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";

const colorMap: Record<string, string> = {
  blue: "from-blue-600 to-blue-400",
  indigo: "from-indigo-600 to-indigo-400",
  cyan: "from-cyan-600 to-cyan-400",
  purple: "from-purple-600 to-purple-400",
  pink: "from-pink-600 to-pink-400",
};

const bgMap: Record<string, string> = {
  blue: "bg-blue-500/10 border-blue-500/20 text-blue-400",
  indigo: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
  cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
  purple: "bg-purple-500/10 border-purple-500/20 text-purple-400",
  pink: "bg-pink-500/10 border-pink-500/20 text-pink-400",
};

export function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", ...skillCategories.map((s) => s.category)];

  const filtered =
    activeFilter === "All"
      ? skillCategories
      : skillCategories.filter((s) => s.category === activeFilter);

  return (
    <section id="skills" className="section-padding bg-slate-950 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Technical Skills"
          title="My Tech"
          highlight="Stacks"
          subtitle="Technologies I work with to build powerful, scalable applications"
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {filters.map((f) => (
            <motion.button
              key={f}
              onClick={() => setActiveFilter(f)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                activeFilter === f
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/25"
                  : "glass border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              {f}
            </motion.button>
          ))}
        </div>

        {/* Skill cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((category, ci) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: ci * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-white">{category.category}</h3>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full border ${bgMap[category.color]}`}
                  >
                    {category.skills.length} skills
                  </span>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, si) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: ci * 0.1 + si * 0.05 }}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                        <span className="text-xs font-semibold text-slate-500">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + si * 0.05, ease: "easeOut" }}
                          className={`h-full rounded-full bg-gradient-to-r ${colorMap[category.color]}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
