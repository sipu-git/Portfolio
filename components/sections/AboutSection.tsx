"use client";
import { motion } from "framer-motion";
import { User, BookOpen, Award, Briefcase } from "lucide-react";
import { personalInfo, education, aboutStats } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-slate-900/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="About Me"
          title="Who I"
          highlight="Am"
          subtitle="Passionate developer crafting digital experiences with modern technologies"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <User size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">Professional Summary</h3>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">{personalInfo.summary}</p>
              <p className="text-slate-400 leading-relaxed">
                I'm passionate about writing clean, efficient code and building products that make a real
                difference. When I'm not coding, you'll find me exploring new technologies, contributing to
                open source, or writing technical articles.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {aboutStats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center p-4 rounded-xl bg-slate-800/50 border border-white/5"
                  >
                    <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Education & info */}
          <div className="space-y-6">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="glass rounded-2xl p-8 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <BookOpen size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="p-4 rounded-xl bg-slate-800/50 border border-white/5 hover:border-blue-500/20 transition-all"
                  >
                    <div className="font-semibold text-white">{edu.degree}</div>
                    <div className="text-blue-400 text-sm">{edu.school}</div>
                    <div className="flex items-center justify-between mt-2 text-xs text-slate-500">
                      <span>{edu.year}</span>
                      <span className="text-emerald-400">{edu.grade}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Personal details */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="glass rounded-2xl p-8 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Briefcase size={20} />
                </div>
                <h3 className="text-xl font-semibold text-white">Details</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  { label: "Name", value: personalInfo.name },
                  { label: "Email", value: personalInfo.email },
                  { label: "Location", value: personalInfo.location },
                  { label: "Availability", value: "Open to work" },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div className="text-slate-500 mb-0.5">{label}</div>
                    <div className="text-slate-200 font-medium truncate">{value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
