import { Reveal } from "@/components/ui/Reveal";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}

export function SectionHeader({ badge, title, highlight, subtitle }: SectionHeaderProps) {
  return (
    <Reveal className="text-center mb-14">
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-[color-mix(in_srgb,var(--primary)_14%,transparent)] text-[var(--primary)] border border-[color-mix(in_srgb,var(--primary)_25%,transparent)] mb-4 tracking-widest uppercase">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] mb-4 tracking-tight">
        {title} {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
      <div className="mt-4 flex items-center justify-center gap-2" aria-hidden="true">
        <div className="h-1 w-12 rounded-full bg-[linear-gradient(90deg,var(--primary),var(--accent))]" />
        <div className="h-1 w-4 rounded-full bg-[var(--accent)]" />
      </div>
    </Reveal>
  );
}
