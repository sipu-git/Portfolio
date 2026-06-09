"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonials } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAuto, setIsAuto] = useState(true);

  useEffect(() => {
    if (!isAuto) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAuto]);

  const go = (dir: number) => {
    setIsAuto(false);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-slate-900/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto">
        <SectionHeader
          badge="Testimonials"
          title="Client"
          highlight="Feedback"
          subtitle="What people say about working with me"
        />

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-2xl p-8 sm:p-10 border border-white/10"
            >
              <Quote size={40} className="text-blue-500/30 mb-4" />
              <p className="text-slate-300 text-lg leading-relaxed mb-8 italic">
                "{testimonials[current].text}"
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-xl shadow-lg">
                    {testimonials[current].name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonials[current].name}</div>
                    <div className="text-blue-400 text-sm">{testimonials[current].designation}</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => go(-1)}
              className="w-10 h-10 glass border border-white/10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setIsAuto(false); setCurrent(i); }}
                  className={`transition-all rounded-full ${
                    current === i ? "w-6 h-2 bg-blue-500" : "w-2 h-2 bg-slate-600 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              className="w-10 h-10 glass border border-white/10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
