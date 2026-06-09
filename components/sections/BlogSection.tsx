// "use client";
// import { motion } from "framer-motion";
// import { Clock, Calendar, ArrowRight, Tag } from "lucide-react";
// import { blogPosts } from "@/data/portfolio";
// import { SectionHeader } from "@/components/ui/SectionHeader";

// const categoryColors: Record<string, string> = {
//   Frontend: "bg-blue-500/10 text-blue-400 border-blue-500/20",
//   Database: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
//   DevOps: "bg-orange-500/10 text-orange-400 border-orange-500/20",
//   Backend: "bg-purple-500/10 text-purple-400 border-purple-500/20",
// };

// const blogEmojis = ["⚛️", "🗄️", "🐳"];

// export function BlogSection() {
//   return (
//     <section id="blog" className="section-padding bg-slate-950 relative overflow-hidden">
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />

//       <div className="max-w-7xl mx-auto">
//         <SectionHeader
//           badge="Blog"
//           title="Latest"
//           highlight="Articles"
//           subtitle="Sharing knowledge and insights from my development experience"
//         />

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {blogPosts.map((post, i) => (
//             <motion.a
//               key={post.id}
//               href={post.link}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//               whileHover={{ y: -8 }}
//               className="glass rounded-2xl border border-white/10 overflow-hidden group hover:border-blue-500/20 transition-all block"
//             >
//               {/* Thumbnail */}
//               <div className="h-44 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
//                 <div className="text-5xl">{blogEmojis[i % blogEmojis.length]}</div>
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
//                 <div className="absolute top-4 left-4">
//                   <span className={`text-xs px-2.5 py-1 rounded-full border ${categoryColors[post.category] || "bg-slate-700 text-slate-300 border-slate-600"}`}>
//                     {post.category}
//                   </span>
//                 </div>
//               </div>

//               <div className="p-6">
//                 <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
//                   <span className="flex items-center gap-1">
//                     <Calendar size={12} /> {post.date}
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <Clock size={12} /> {post.readTime}
//                   </span>
//                 </div>

//                 <h3 className="font-bold text-white mb-2 leading-snug group-hover:text-blue-400 transition-colors line-clamp-2">
//                   {post.title}
//                 </h3>
//                 <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>

//                 <div className="flex items-center gap-1 text-blue-400 text-sm font-medium group-hover:gap-2 transition-all">
//                   Read More <ArrowRight size={14} />
//                 </div>
//               </div>
//             </motion.a>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           className="text-center mt-10"
//         >
//           <a
//             href="#"
//             className="inline-flex items-center gap-2 px-6 py-3 glass border border-white/10 rounded-xl text-slate-300 hover:text-white hover:border-white/20 transition-all"
//           >
//             View All Articles <ArrowRight size={16} />
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
