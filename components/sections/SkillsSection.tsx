"use client";

import { useState, type CSSProperties } from "react";
import { skillCategories } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";

const colorMap: Record<string, string> = {
  blue: "from-[var(--primary)] to-[var(--accent)]",
  indigo: "from-[var(--secondary)] to-[var(--primary)]",
  cyan: "from-[var(--accent)] to-[var(--primary)]",
  purple: "from-[var(--primary)] to-[var(--secondary)]",
  pink: "from-[var(--primary)] to-[var(--accent)]",
};

export function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", ...skillCategories.map((skill) => skill.category)];
  const filtered =
    activeFilter === "All" ? skillCategories : skillCategories.filter((skill) => skill.category === activeFilter);

  return (
    <section
      id="skills"
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Technical Skills"
          title="My Tech"
          highlight="Stacks"
          subtitle="Tools I use to ship APIs, dashboards, and production-ready frontends."
        />

        <div className="flex flex-wrap gap-3 justify-center mb-12" role="tablist" aria-label="Skill categories">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium border ${
                activeFilter === filter
                  ? "text-white border-transparent bg-[linear-gradient(135deg,var(--primary),var(--accent))]"
                  : "glass border-[var(--border-color)] text-[var(--text-secondary)]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((category, index) => (
            <Reveal key={category.category} delay={index * 70}>
              <TiltCard className="glass rounded-2xl p-6 border border-[var(--border-color)] h-full">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">{category.category}</h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full border border-[var(--border-color)] text-[var(--primary)]">
                    {category.skills.length} skills
                  </span>
                </div>
                <ul className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skill.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-medium text-[var(--text-primary)]">{skill.name}</span>
                        <span className="text-xs font-semibold text-[var(--text-tertiary)]">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
                        <div
                          className={`skill-bar h-full rounded-full bg-gradient-to-r ${colorMap[category.color]}`}
                          style={{
                            width: `${skill.level}%`,
                            "--bar-delay": `${skillIndex * 60}ms`,
                          } as CSSProperties}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
