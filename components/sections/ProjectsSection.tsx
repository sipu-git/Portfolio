"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Clock, ExternalLink, GitBranch, X } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectShowcase } from "@/components/ui/ProjectShowcase";
import { Badge } from "@/components/ui/Badge";
import { ScrollScene } from "@/components/ui/ScrollScene";
import { useLenis } from "@/components/SmoothScroller";
import type { Project } from "@/types";

const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];

export function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lenis = useLenis();
  const filtered = filter === "All" ? projects : projects.filter((project) => project.category === filter);
  const featured = filtered.filter((project) => project.featured);
  const rest = filtered.filter((project) => !project.featured);

  useEffect(() => {
    if (!selected) return;
    const previous = document.activeElement as HTMLElement | null;
    const root = dialogRef.current;
    const focusables = () =>
      root
        ? Array.from(
            root.querySelectorAll<HTMLElement>("a,button,[href],textarea,input,select,[tabindex]:not([tabindex='-1'])"),
          )
        : [];
    closeRef.current?.focus();
    lenis?.stop();
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key !== "Tab" || !root) return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = originalOverflow;
      lenis?.start();
      previous?.focus();
    };
  }, [selected, lenis]);

  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Projects"
          title="Featured"
          highlight="Work"
          subtitle="Clearview CRM and ExpenseWallet first, with live demos and source when they are public."
        />

        <div className="flex flex-wrap gap-3 justify-center mb-12" role="group" aria-label="Project categories">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
              className={`px-5 py-2.5 rounded-full text-sm font-medium border ${
                filter === category
                  ? "text-white border-transparent bg-[linear-gradient(135deg,var(--primary),var(--accent))]"
                  : "glass border-[var(--border-color)] text-[var(--text-secondary)]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {featured.length > 0 && (
          <div className="grid gap-8 mb-8">
            {featured.map((project, index) => (
              <Reveal key={project.id} delay={index * 80}>
                <ScrollScene>
                  <div className="scroll-layer">
                    <ProjectShowcase project={project} featured onOpen={setSelected} />
                  </div>
                </ScrollScene>
              </Reveal>
            ))}
          </div>
        )}

        {rest.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-6">
            {rest.map((project, index) => (
              <Reveal key={project.id} delay={index * 80}>
                <ProjectShowcase project={project} onOpen={setSelected} />
              </Reveal>
            ))}
          </div>
        )}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
          onClick={() => setSelected(null)}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            className="glass border border-[var(--border-color)] rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
            style={{ backgroundColor: "var(--bg-secondary)" }}
            onClick={(event) => event.stopPropagation()}
            data-lenis-prevent
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div>
                  <h2 id="project-dialog-title" className="text-2xl font-bold text-[var(--text-primary)]">
                    {selected.title}
                  </h2>
                  <p className="text-[var(--primary)] text-sm font-medium">{selected.category}</p>
                </div>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={() => setSelected(null)}
                  className="w-8 h-8 rounded-lg glass flex items-center justify-center"
                  aria-label="Close project details"
                >
                  <X size={16} />
                </button>
              </div>

              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">{selected.longDescription}</p>

              <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-3">Implemented</h3>
              <ul className="space-y-2 mb-6">
                {selected.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <Check size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {selected.implementedAi && selected.implementedAi.length > 0 && (
                <>
                  <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-3">Implemented AI</h3>
                  <ul className="space-y-2 mb-6">
                    {selected.implementedAi.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <Check size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {selected.plannedAi && selected.plannedAi.length > 0 && (
                <>
                  <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-3">Planned AI</h3>
                  <ul className="space-y-2 mb-6">
                    {selected.plannedAi.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <Clock size={14} className="text-amber-500 mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {selected.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {selected.github && (
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 glass rounded-xl text-sm font-medium"
                  >
                    <GitBranch size={16} /> View code
                  </a>
                )}
                {selected.demo && (
                  <a
                    href={selected.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-[linear-gradient(135deg,var(--primary),var(--accent))]"
                  >
                    <ExternalLink size={16} /> Live demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
