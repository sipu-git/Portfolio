"use client";

import { memo } from "react";
import { Clock, ExternalLink, GitBranch } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ProjectPreview } from "@/components/ui/ProjectPreview";
import type { Project } from "@/types";

interface ProjectShowcaseProps {
  project: Project;
  onOpen: (project: Project) => void;
}

function ProjectShowcaseCard({ project, onOpen }: ProjectShowcaseProps) {
  return (
    <article className="project-card rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] overflow-hidden h-full transition-colors duration-150 hover:border-[var(--primary)]">
      <div>
        <ProjectPreview kind={project.preview} title={project.title} />
        <div className="flex flex-col p-4 sm:p-5 lg:p-6">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <h3 className="text-lg font-bold text-[var(--text-primary)] sm:text-xl">
              <button type="button" className="text-left" onClick={() => onOpen(project)}>
                {project.title}
              </button>
            </h3>
            {project.featured && <Badge>Featured</Badge>}
          </div>
          <p className="line-clamp-3 text-[var(--text-secondary)] text-sm mb-4 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 4).map((tag) => (
              <Badge key={tag} tone="accent">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 4 && (
              <span className="self-center text-xs text-[var(--text-tertiary)]">+{project.tags.length - 4} more</span>
            )}
          </div>
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
      </div>
    </article>
  );
}

export const ProjectShowcase = memo(ProjectShowcaseCard);
