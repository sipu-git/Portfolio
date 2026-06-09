"use client";
import { motion } from "framer-motion";
import { ArrowUp, GitBranch, Globe, MessageCircle, Code2, Heart } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-slate-950 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-bold text-lg gradient-text">{personalInfo.name}</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Building digital experiences with passion and precision. Open to exciting opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-slate-500 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-widest">Connect</h3>
            <div className="flex gap-3 mb-4">
              {[
                { icon: GitBranch, href: personalInfo.social.github, label: "GitHub" },
                { icon: Globe, href: personalInfo.social.linkedin, label: "LinkedIn" },
                // { icon: MessageCircle, href: personalInfo.social.twitter, label: "Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-10 h-10 glass border border-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/20 transition-all"
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>
            <a href={`mailto:${personalInfo.email}`} className="text-slate-500 hover:text-blue-400 text-sm transition-colors">
              {personalInfo.email}
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} {personalInfo.name}. Built with{" "}
            <Heart size={12} className="text-red-400 inline" /> & Next.js
          </p>
          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-400 transition-colors"
          >
            Back to top <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
