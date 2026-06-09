"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch, Star, GitFork, X, Check } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Project } from "@/types";
import Link from "next/link";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const projectColors = [
  "from-blue-600/20 to-indigo-600/20",
  "from-indigo-600/20 to-purple-600/20",
  "from-cyan-600/20 to-blue-600/20",
  "from-purple-600/20 to-pink-600/20",
];

export function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Projects"
          title="Featured"
          highlight="Work"
          subtitle="A collection of projects that showcase my technical skills and problem-solving ability"
        />

        {/* Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                filter === cat
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/25"
                  : "glass border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Project cards */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass rounded-2xl border border-white/10 overflow-hidden group hover:border-blue-500/30 transition-all cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project image placeholder */}
                <div className={`h-48 bg-gradient-to-br ${projectColors[i % projectColors.length]} flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-6xl select-none">
                    {["🏢", "🌿", "🛒", "📜"][i % 4]}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-black/30 text-slate-300 backdrop-blur-sm border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Star size={12} className="text-amber-400" /> {project.stats.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={12} /> {project.stats.forks}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        <GitBranch size={18} />
                      </Link>
                      {/* <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-slate-400 hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a> */}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900 border border-white/10 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                    <span className="text-blue-400 text-sm">{selectedProject.category}</span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-8 h-8 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white"
                  >
                    <X size={16} />
                  </button>
                </div>

                <p className="text-slate-400 mb-6 leading-relaxed">{selectedProject.longDescription}</p>

                <h3 className="text-sm font-semibold text-slate-300 mb-3">Key Features</h3>
                <ul className="space-y-2 mb-6">
                  {selectedProject.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                      <Check size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 glass border border-white/10 rounded-xl text-sm text-slate-300 hover:text-white hover:border-white/20 transition-all"
                  >
                    <GitBranch size={16} /> View Code
                  </a>
                  {/* <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a> */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
