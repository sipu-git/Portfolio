"use client";

import { Cloud, Code2, Database, Layers, Monitor, Server } from "lucide-react";
import { services } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";

const iconMap = { Layers, Monitor, Server, Code2, Database, Cloud };

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Services"
          title="What I"
          highlight="Offer"
          subtitle="Product work across the stack: UI, APIs, data, and deployment."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Layers;
            return (
              <Reveal key={service.title} delay={index * 70}>
                <TiltCard className="glass rounded-2xl p-6 border border-[var(--border-color)] h-full">
                  <div className="w-12 h-12 rounded-xl bg-[linear-gradient(135deg,var(--primary),var(--accent))] flex items-center justify-center mb-5">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">{service.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-[var(--text-tertiary)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
