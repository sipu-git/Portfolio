"use client";

import Image from "next/image";
import { ArrowDown, BriefcaseBusiness, Download, GitBranch, Mail } from "lucide-react";
import { personalInfo, typingRoles } from "@/data/portfolio";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { HeroBackdrop } from "@/components/HeroBackdrop";
import { Reveal } from "@/components/ui/Reveal";

export function HeroSection() {
  const typedText = useTypingEffect(typingRoles);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <HeroBackdrop />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <Reveal className="flex-1 text-center lg:text-left">
            <p className="text-xl text-[var(--text-tertiary)] mb-2 font-medium">Hello, I&apos;m</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--text-primary)] mb-4 tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="sr-only">{personalInfo.role}</p>
            <p className="text-2xl sm:text-3xl font-semibold mb-6 min-h-10" aria-hidden="true">
              <span className="gradient-text">{typedText}</span>
              <span className="text-[var(--accent)] ml-0.5">|</span>
            </p>
            <p className="text-[var(--text-secondary)] text-lg max-w-xl mb-8 leading-relaxed">{personalInfo.bio}</p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 text-white rounded-xl font-semibold shadow-lg bg-[linear-gradient(135deg,var(--primary),var(--accent))]"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 glass text-[var(--text-primary)] rounded-xl font-semibold"
              >
                <Mail size={18} />
                Contact Me
              </a>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 glass rounded-xl flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)]"
              >
                <GitBranch size={18} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 glass rounded-xl flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)]"
              >
                <BriefcaseBusiness size={18} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative shrink-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-full border border-dashed border-[color-mix(in_srgb,var(--primary)_40%,transparent)]" />
              <div className="absolute inset-4 rounded-full border border-dashed border-[color-mix(in_srgb,var(--accent)_30%,transparent)]" />
              <div className="absolute inset-8 rounded-full bg-[linear-gradient(135deg,var(--primary),var(--accent))] p-1 overflow-hidden">
                <Image
                  src={personalInfo.avatar}
                  alt={`${personalInfo.name} portrait`}
                  width={320}
                  height={320}
                  preload
                  sizes="(max-width: 640px) 256px, 320px"
                  quality={80}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 text-xs font-semibold text-[var(--primary)]">
                1 Year Exp
              </div>
              <div className="absolute -bottom-4 -left-4 glass rounded-xl px-3 py-2 text-xs font-semibold text-[var(--accent)]">
                CRM · Expenses
              </div>
            </div>
          </Reveal>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-tertiary)]"
        >
          <span className="text-xs uppercase tracking-widest font-medium">Scroll Down</span>
          <ArrowDown size={18} />
        </a>
      </div>
    </section>
  );
}
