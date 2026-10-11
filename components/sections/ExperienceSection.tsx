"use client";

import { useState } from "react";
import { Building2, Calendar, ChevronDown, MapPin } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function ExperienceSection() {
  const [expanded, setExpanded] = useState<number | null>(experiences[0]?.id ?? null);

  return (
    <section
      id="experience"
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          badge="Experience"
          title="Work"
          highlight="History"
          subtitle="Roles where I shipped APIs, dashboards, and deployment pipelines."
        />

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-[linear-gradient(180deg,var(--primary),var(--accent),transparent)] hidden sm:block" />
          <ol className="space-y-6">
            {experiences.map((exp, index) => {
              const open = expanded === exp.id;
              return (
                <Reveal key={exp.id} as="li" delay={index * 80} className="relative sm:pl-24">
                  <div className="absolute left-4 top-6 w-8 h-8 rounded-full bg-[linear-gradient(135deg,var(--primary),var(--accent))] hidden sm:flex items-center justify-center text-white text-xs font-bold z-10">
                    {index + 1}
                  </div>
                  <article className="glass rounded-2xl border border-[var(--border-color)] overflow-hidden">
                    <h3 className="sr-only">
                      {exp.position} at {exp.company}
                    </h3>
                    <button
                      type="button"
                      className="w-full p-6 text-left"
                      aria-expanded={open}
                      onClick={() => setExpanded(open ? null : exp.id)}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <Building2 size={16} className="text-[var(--primary)]" />
                            <span className="text-[var(--primary)] font-semibold">{exp.company}</span>
                            <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                              {exp.type}
                            </span>
                          </div>
                          <p className="text-lg font-bold text-[var(--text-primary)] mb-2">{exp.position}</p>
                          <p className="flex flex-wrap gap-4 text-sm text-[var(--text-tertiary)]">
                            <span className="flex items-center gap-1">
                              <Calendar size={13} /> {exp.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin size={13} /> {exp.location}
                            </span>
                          </p>
                        </div>
                        <ChevronDown
                          size={18}
                          className={`text-[var(--text-tertiary)] transition-transform ${open ? "rotate-180" : ""}`}
                        />
                      </div>
                    </button>
                    {open && (
                      <div className="px-6 pb-6 border-t border-[var(--border-color)]">
                        <p className="text-[var(--text-secondary)] mt-4 mb-4 leading-relaxed">{exp.description}</p>
                        <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3">Key responsibilities</h4>
                        <ul className="space-y-2 mb-4">
                          {exp.responsibilities.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                              <span className="text-[var(--primary)] mt-1">▹</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs px-3 py-1 rounded-full glass border border-[var(--border-color)] text-[var(--text-secondary)]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </article>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
