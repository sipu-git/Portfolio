"use client";

import { ArrowUp, BriefcaseBusiness, Code2, GitBranch, Heart } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { useLenis } from "@/components/SmoothScroller";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const lenis = useLenis();

  return (
    <footer className="border-t border-[var(--border-color)]" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[linear-gradient(135deg,var(--primary),var(--accent))] rounded-lg flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-bold text-lg gradient-text">{personalInfo.name}</span>
            </div>
            <p className="text-[var(--text-tertiary)] text-sm leading-relaxed">
              Building digital products with typed APIs, careful UX, and production performance.
            </p>
          </div>
          <nav aria-label="Footer">
            <h2 className="font-semibold text-[var(--text-primary)] mb-4 text-sm uppercase tracking-widest">Quick links</h2>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[var(--text-tertiary)] hover:text-[var(--primary)] text-sm font-medium">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="font-semibold text-[var(--text-primary)] mb-4 text-sm uppercase tracking-widest">Connect</h2>
            <div className="flex gap-3 mb-4">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-[var(--text-secondary)]"
              >
                <GitBranch size={17} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-[var(--text-secondary)]"
              >
                <BriefcaseBusiness size={17} />
              </a>
            </div>
            <a href={`mailto:${personalInfo.email}`} className="text-[var(--text-tertiary)] hover:text-[var(--primary)] text-sm">
              {personalInfo.email}
            </a>
          </div>
        </div>
        <div className="border-t border-[var(--border-color)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-tertiary)] text-sm flex items-center gap-1">
            © {new Date().getFullYear()} {personalInfo.name}. Built with
            <Heart size={12} className="text-red-400 fill-red-400" /> Next.js
          </p>
          <button
            type="button"
            onClick={() => {
              if (lenis) lenis.scrollTo(0, { duration: 1 });
              else window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 text-sm text-[var(--text-tertiary)] hover:text-[var(--primary)]"
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
