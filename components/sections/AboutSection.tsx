import { BookOpen, Briefcase, User } from "lucide-react";
import { personalInfo, education, aboutStats } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="About Me"
          title="Who I"
          highlight="Am"
          subtitle="Building product-grade web apps with typed APIs, relational data, and careful UX."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <TiltCard className="glass rounded-2xl p-8 border border-[var(--border-color)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[color-mix(in_srgb,var(--primary)_18%,transparent)] flex items-center justify-center text-[var(--primary)]">
                  <User size={20} />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">Professional Summary</h3>
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">{personalInfo.summary}</p>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                I care about readable code, honest product claims, and interfaces that stay usable on a phone as well as a
                desktop. When I am not shipping features, I am usually tightening queries, caching, or accessibility.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {aboutStats.map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl glass border border-[var(--border-color)]">
                    <div className="text-lg font-bold gradient-text">{stat.value}</div>
                    <div className="text-sm text-[var(--text-tertiary)] mt-1 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </TiltCard>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={80}>
              <div className="glass rounded-2xl p-8 border border-[var(--border-color)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[color-mix(in_srgb,var(--secondary)_18%,transparent)] flex items-center justify-center text-[var(--secondary)]">
                    <BookOpen size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">Education</h3>
                </div>
                <div className="space-y-4">
                  {education.map((edu) => (
                    <article key={edu.degree} className="p-4 rounded-xl glass border border-[var(--border-color)]">
                      <h4 className="font-semibold text-[var(--text-primary)]">{edu.degree}</h4>
                      <p className="text-[var(--primary)] text-sm font-medium">{edu.school}</p>
                      <div className="flex items-center justify-between mt-2 text-xs text-[var(--text-tertiary)]">
                        <span>{edu.year}</span>
                        <span className="text-emerald-500 font-semibold">{edu.grade}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="glass rounded-2xl p-8 border border-[var(--border-color)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[color-mix(in_srgb,var(--accent)_18%,transparent)] flex items-center justify-center text-[var(--accent)]">
                    <Briefcase size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">Details</h3>
                </div>
                <dl className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    { label: "Name", value: personalInfo.name },
                    { label: "Email", value: personalInfo.email },
                    { label: "Location", value: personalInfo.location },
                    { label: "Phone", value: personalInfo.phone },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <dt className="text-[var(--text-tertiary)] mb-0.5 text-xs font-medium">{label}</dt>
                      <dd className="text-[var(--text-primary)] font-medium truncate">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
