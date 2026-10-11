interface BadgeProps {
  children: string;
  tone?: "accent" | "muted" | "success" | "warning";
}

export function Badge({ children, tone = "accent" }: BadgeProps) {
  const tones = {
    accent:
      "bg-[color-mix(in_srgb,var(--primary)_10%,transparent)] text-[var(--primary)] border-[color-mix(in_srgb,var(--primary)_20%,transparent)]",
    muted: "glass text-[var(--text-secondary)] border-[var(--border-color)]",
    success: "bg-emerald-500/10 text-emerald-600 border-emerald-500/25",
    warning: "bg-amber-500/10 text-amber-600 border-amber-500/25",
  };

  return (
    <span className={`inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
}
