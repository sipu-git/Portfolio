"use client";
import { motion } from "framer-motion";
import { Layers, Monitor, Server, Code2, Database, Cloud } from "lucide-react";
import { services } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";

const iconMap: Record<string, React.ElementType> = {
  Layers, Monitor, Server, Code2, Database, Cloud,
};

const gradients = [
  "from-blue-600 to-indigo-600",
  "from-indigo-600 to-purple-600",
  "from-cyan-600 to-blue-600",
  "from-purple-600 to-pink-600",
  "from-emerald-600 to-cyan-600",
  "from-orange-600 to-red-600",
];

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-slate-900/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Services"
          title="What I"
          highlight="Offer"
          subtitle="Comprehensive development services to bring your vision to life"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Layers;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-6 border border-white/10 hover:border-blue-500/20 group transition-all relative overflow-hidden"
              >
                {/* Hover glow */}
                {/* <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${gradients[i]} opacity-5 rounded-2xl`} /> */}

                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center mb-5 shadow-lg`}>
                  <Icon size={22} className="text-white" />
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
