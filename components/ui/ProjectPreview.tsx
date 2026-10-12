"use client";

import { useState } from "react";

type ProjectPreviewKind = "crm" | "expense";

interface ProjectPreviewProps {
  kind: ProjectPreviewKind;
  title: string;
}

const miniCard = "rounded-md border border-white/10 bg-white/[0.04] p-2 sm:p-3";
const label = "text-[8px] font-medium uppercase tracking-[0.12em] text-slate-400 sm:text-[10px]";
const expenseBarHeights = [28, 42, 35, 64, 46, 82, 58, 71, 40, 92, 57, 76];

function PreviewTab({ active, children, onClick }: { active: boolean; children: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded px-2 py-1 text-[9px] transition-colors sm:text-[11px] ${
        active ? "bg-indigo-500/20 text-indigo-200" : "text-slate-400 hover:bg-white/5 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}

function CrmPreview({ title }: { title: string }) {
  const [view, setView] = useState<"overview" | "assistant">("overview");

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0b1220] text-white">
      <div className="flex h-8 items-center justify-between border-b border-white/10 px-3 sm:h-10 sm:px-4">
        <div className="flex min-w-0 items-center gap-2">
          <span className="grid h-4 w-4 shrink-0 place-items-center rounded bg-indigo-500 text-[8px] font-bold">C</span>
          <span className="truncate text-[9px] font-semibold sm:text-xs">{title}</span>
        </div>
        <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[8px] text-emerald-300">Workspace live</span>
      </div>
      <div className="flex items-center justify-between gap-2 border-b border-white/10 px-2 py-1.5 sm:px-4 sm:py-2">
        <div className="flex items-center gap-1">
          <PreviewTab active={view === "overview"} onClick={() => setView("overview")}>Pipeline</PreviewTab>
          <PreviewTab active={view === "assistant"} onClick={() => setView("assistant")}>Synora AI</PreviewTab>
        </div>
        <span className="hidden text-[9px] text-slate-500 sm:inline">CRM workspace</span>
      </div>

      {view === "overview" ? (
        <div className="space-y-2 p-2 sm:space-y-3 sm:p-4">
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
            {[["Open leads", "248", "+12.8%"], ["Active deals", "36", "+4.2%"], ["Revenue", "$84.2k", "+18.6%"]].map(([name, value, change]) => (
              <div className={miniCard} key={name}>
                <p className={label}>{name}</p>
                <div className="mt-1 flex flex-wrap items-baseline gap-x-1 sm:mt-2">
                  <strong className="text-xs sm:text-base">{value}</strong>
                  <span className="text-[7px] text-emerald-300 sm:text-[9px]">{change}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-[1.5fr_1fr] gap-1.5 sm:gap-2">
            <div className={miniCard}>
              <p className="text-[9px] font-semibold sm:text-xs">Pipeline activity</p>
              <svg viewBox="0 0 240 74" className="mt-2 h-12 w-full sm:h-16" role="img" aria-label="Rising sales pipeline chart">
                <path d="M4 62H236M4 40H236M4 18H236" stroke="rgba(148,163,184,.15)" strokeDasharray="3 4" />
                <path d="M4 58 C28 52 32 57 52 43 S82 49 101 33 S128 40 148 26 S178 36 195 18 S219 23 236 8" fill="none" stroke="#818cf8" strokeWidth="3" strokeLinecap="round" />
                <path d="M4 58 C28 52 32 57 52 43 S82 49 101 33 S128 40 148 26 S178 36 195 18 S219 23 236 8V74H4Z" fill="url(#crm-fill)" opacity=".2" />
                <defs><linearGradient id="crm-fill" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#818cf8" /><stop offset="1" stopColor="#818cf8" stopOpacity="0" /></linearGradient></defs>
              </svg>
            </div>
            <div className={miniCard}>
              <p className="text-[9px] font-semibold sm:text-xs">Deal stages</p>
              <div className="mt-2 space-y-2">
                {[["Discovery", "w-4/5", "bg-indigo-400"], ["Proposal", "w-3/5", "bg-violet-400"], ["Won", "w-2/5", "bg-emerald-400"]].map(([name, width, color]) => (
                  <div key={name}>
                    <div className="mb-1 flex justify-between text-[8px] text-slate-400"><span>{name}</span><span>12</span></div>
                    <div className="h-1 rounded bg-white/10"><div className={`h-full rounded ${width} ${color}`} /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex min-h-[158px] flex-col gap-2 p-3 sm:min-h-[190px] sm:p-5">
          <p className="text-[9px] font-semibold text-indigo-200 sm:text-xs">Synora AI <span className="font-normal text-slate-500">· CRM assistant</span></p>
          <div className="max-w-[88%] rounded-lg rounded-tl-sm border border-white/10 bg-white/[0.04] p-2 text-[9px] leading-relaxed text-slate-300 sm:text-[11px]">
            Which deals need follow-up this week?
          </div>
          <div className="ml-auto max-w-[90%] rounded-lg rounded-tr-sm bg-indigo-500/20 p-2 text-[9px] leading-relaxed text-indigo-100 sm:text-[11px]">
            4 deals are ready for follow-up. I found 2 overdue tasks and drafted next steps for each owner.
          </div>
          <div className="mt-auto flex items-center gap-2 rounded-md border border-white/10 bg-black/20 px-2 py-1.5 text-[8px] text-slate-500 sm:text-[10px]">
            <span className="flex-1">Ask about leads, deals, or tasks…</span><span className="rounded bg-indigo-500 px-1.5 py-1 text-white">↗</span>
          </div>
        </div>
      )}
    </div>
  );
}

function ExpensePreview({ title }: { title: string }) {
  const [view, setView] = useState<"dashboard" | "analytics">("dashboard");

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111a2b] text-white">
      <div className="flex h-8 items-center justify-between border-b border-white/10 px-3 sm:h-10 sm:px-4">
        <div className="flex min-w-0 items-center gap-2">
          <span className="grid h-4 w-4 shrink-0 place-items-center rounded bg-violet-500 text-[9px]">↗</span>
          <span className="truncate text-[9px] font-semibold sm:text-xs">{title}</span>
        </div>
        <span className="text-[8px] text-slate-400">October · 2026</span>
      </div>
      <div className="flex items-center justify-between gap-2 border-b border-white/10 px-2 py-1.5 sm:px-4 sm:py-2">
        <div className="flex items-center gap-1">
          <PreviewTab active={view === "dashboard"} onClick={() => setView("dashboard")}>Dashboard</PreviewTab>
          <PreviewTab active={view === "analytics"} onClick={() => setView("analytics")}>Analytics</PreviewTab>
        </div>
        <span className="hidden rounded bg-violet-500/15 px-2 py-1 text-[8px] text-violet-200 sm:inline">Personal</span>
      </div>
      <div className="space-y-2 p-2 sm:space-y-3 sm:p-4">
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
          {(view === "dashboard"
            ? [["Today", "$128.40"], ["This month", "$1,896"], ["Avg / day", "$63.20"]]
            : [["Transactions", "24"], ["Avg. spend", "$79.00"], ["Active days", "18"]]
          ).map(([name, value]) => (
            <div className={miniCard} key={name}><p className={label}>{name}</p><strong className="mt-1 block text-xs sm:mt-2 sm:text-base">{value}</strong></div>
          ))}
        </div>
        <div className="grid grid-cols-[1.5fr_1fr] gap-1.5 sm:gap-2">
          <div className={miniCard}>
            <div className="flex items-center justify-between"><p className="text-[9px] font-semibold sm:text-xs">{view === "dashboard" ? "Spending trend" : "Monthly overview"}</p><span className="text-[8px] text-slate-500">Last 30 days</span></div>
            <div className="mt-2 flex h-12 items-end gap-1 sm:h-16 sm:gap-1.5">
              {expenseBarHeights.map((height, index) => (
                <div key={index} className="flex-1 rounded-t-sm bg-violet-400/80" style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>
          <div className={miniCard}>
            <p className="text-[9px] font-semibold sm:text-xs">{view === "dashboard" ? "Top category" : "Categories"}</p>
            <div className="mt-2 space-y-2">
              {[["Food", "w-4/5", "bg-violet-400"], ["Travel", "w-3/5", "bg-cyan-400"], ["Bills", "w-2/5", "bg-amber-400"]].map(([name, width, color]) => (
                <div key={name}><div className="mb-1 flex justify-between text-[8px] text-slate-400"><span>{name}</span><span>$</span></div><div className="h-1 rounded bg-white/10"><div className={`h-full rounded ${width} ${color}`} /></div></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectPreview({ kind, title }: ProjectPreviewProps) {
  return (
    <div className="p-3 sm:p-4">
      <div className="aspect-[16/9]">
        {kind === "crm" ? <CrmPreview title={title} /> : <ExpensePreview title={title} />}
      </div>
    </div>
  );
}
