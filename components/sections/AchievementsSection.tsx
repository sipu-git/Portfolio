// "use client";
// import { motion } from "framer-motion";
// import { achievements } from "@/data/portfolio";
// import { SectionHeader } from "@/components/ui/SectionHeader";
// import { useCountUp } from "@/hooks/useCountUp";

// function Counter({ value, suffix }: { value: number; suffix: string }) {
//   const { count, ref } = useCountUp(value);
//   return (
//     <div ref={ref} className="text-4xl sm:text-5xl font-extrabold gradient-text">
//       {count}{suffix}
//     </div>
//   );
// }

// const icons = ["🏆", "💼", "😊", "🎓", "⚡"];

// export function AchievementsSection() {
//   return (
//     <section id="achievements" className="section-padding bg-slate-950 relative overflow-hidden">
//       <div className="absolute inset-0">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />
//       </div>

//       <div className="max-w-7xl mx-auto">
//         <SectionHeader
//           badge="Achievements"
//           title="Numbers That"
//           highlight="Speak"
//           subtitle="Key milestones and accomplishments in my development journey"
//         />

//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
//           {achievements.map((item, i) => (
//             <motion.div
//               key={item.label}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//               whileHover={{ y: -8, scale: 1.02 }}
//               className="glass rounded-2xl p-6 border border-white/10 hover:border-blue-500/20 text-center group transition-all"
//             >
//               <div className="text-3xl mb-3">{icons[i]}</div>
//               <Counter value={item.value} suffix={item.suffix} />
//               <p className="text-slate-400 text-sm mt-2 leading-tight">{item.label}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Certifications list */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//           className="mt-16 glass rounded-2xl p-8 border border-white/10"
//         >
//           <h3 className="text-xl font-bold text-white mb-6 text-center">Certifications & Awards</h3>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {[
//               { name: "AWS Solutions Architect", issuer: "Amazon Web Services", year: "2023", color: "text-orange-400" },
//               { name: "MongoDB Developer", issuer: "MongoDB University", year: "2023", color: "text-emerald-400" },
//               { name: "React Advanced", issuer: "Meta", year: "2022", color: "text-blue-400" },
//               { name: "Docker Certified", issuer: "Docker Inc.", year: "2022", color: "text-cyan-400" },
//             ].map((cert) => (
//               <div key={cert.name} className="p-4 rounded-xl bg-slate-800/50 border border-white/5 hover:border-white/10 transition-all">
//                 <div className={`text-sm font-semibold ${cert.color} mb-1`}>{cert.name}</div>
//                 <div className="text-xs text-slate-500">{cert.issuer} · {cert.year}</div>
//               </div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
