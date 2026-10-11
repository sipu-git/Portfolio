"use client";

import { Check, Clock, ExternalLink, GitBranch } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ProjectPreview } from "@/components/ui/ProjectPreview";
import { TiltCard } from "@/components/ui/TiltCard";
import type { Project } from "@/types";

interface ProjectShowcaseProps {
  project: Project;
  featured?: boolean;
  onOpen: (project: Project) => void;
}

export function ProjectShowcase({ project, featured = false, onOpen }: ProjectShowcaseProps) {
  return (
    <TiltCard className="glass rounded-2xl border border-[var(--border-color)] overflow-hidden h-full">
      <article className={featured ? "lg:grid lg:grid-cols-2" : ""}>
        <button
          type="button"
          className="w-full text-left"
          onClick={() => onOpen(project)}
          data-cursor="hover"
        >
          <ProjectPreview kind={project.preview} title={project.title} featured={featured} />
        </button>
        <div className="p-6 flex flex-col">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <h3 className="text-xl font-bold text-[var(--text-primary)]">
              <button type="button" className="text-left" onClick={() => onOpen(project)}>
                {project.title}
              </button>
            </h3>
            {project.featured && <Badge>Featured</Badge>}
          </div>
          <p className="text-[var(--text-secondary)] text-sm mb-4 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} tone="accent">
                {tag}
              </Badge>
            ))}
          </div>
          {featured && (
            <ul className="space-y-2 mb-4">
              {project.features.slice(0, 4).map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <Check size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          )}
          {project.implementedAi && project.implementedAi.length > 0 && (
            <div className="mb-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600 mb-2">Implemented AI</p>
              <div className="flex flex-wrap gap-2">
                {project.implementedAi.map((item) => (
                  <Badge key={item} tone="success">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          {project.plannedAi && project.plannedAi.length > 0 && (
            <div className="mb-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-600 mb-2">Planned AI</p>
              <div className="flex flex-wrap gap-2">
                {project.plannedAi.map((item) => (
                  <span key={item} className="inline-flex items-center gap-1">
                    <Clock size={12} className="text-amber-500" />
                    <Badge tone="warning">{item}</Badge>
                  </span>
                ))}
              </div>
            </div>
          )}
          <div className="mt-auto flex flex-wrap gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--primary)]"
              >
                <ExternalLink size={15} /> Live demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-secondary)]"
              >
                <GitBranch size={15} /> Source
              </a>
            )}
            <button
              type="button"
              onClick={() => onOpen(project)}
              className="inline-flex items-center text-sm font-medium text-[var(--text-tertiary)]"
            >
              Details
            </button>
          </div>
        </div>
      </article>
    </TiltCard>
  );
}
