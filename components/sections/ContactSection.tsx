"use client";

import { type ChangeEvent, useEffect, useState } from "react";
import { AlertCircle, BriefcaseBusiness, CheckCircle, GitBranch, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { personalInfo } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

interface FormData extends Record<string, string> {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const AUTOREPLY_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    if (PUBLIC_KEY) emailjs.init(PUBLIC_KEY);
  }, [PUBLIC_KEY]);

  const validate = () => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Invalid email address";
    if (!form.subject.trim()) next.subject = "Subject is required";
    if (!form.message.trim()) next.message = "Message is required";
    else if (form.message.length < 10) next.message = "Message must be at least 10 characters";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      setErrorMessage("Email service is not configured. Please email me directly.");
      return;
    }
    if (!validate()) return;
    setStatus("loading");
    setErrorMessage("");
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      if (AUTOREPLY_TEMPLATE_ID) {
        try {
          await emailjs.send(SERVICE_ID, AUTOREPLY_TEMPLATE_ID, form, PUBLIC_KEY);
        } catch {
          /* auto-reply is optional */
        }
      }
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Contact"
          title="Get In"
          highlight="Touch"
          subtitle="Have a project in mind? Send a note and I will reply as soon as I can."
        />
        <div className="grid lg:grid-cols-5 gap-10">
          <Reveal className="lg:col-span-2 space-y-6">
            <div className="glass rounded-2xl p-8 border border-[var(--border-color)]">
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">Contact information</h3>
              <ul className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                  { icon: MapPin, label: "Location", value: personalInfo.location, href: undefined },
                ].map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[color-mix(in_srgb,var(--primary)_12%,transparent)] flex items-center justify-center text-[var(--primary)]">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--text-tertiary)]">{label}</p>
                      {href ? (
                        <a href={href} className="text-[var(--text-secondary)] font-medium hover:text-[var(--text-primary)]">
                          {value}
                        </a>
                      ) : (
                        <p className="text-[var(--text-secondary)] font-medium">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-[var(--border-color)]">
                <p className="text-sm text-[var(--text-tertiary)] mb-4">Follow me on</p>
                <div className="flex gap-3">
                  <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-10 h-10 glass rounded-xl flex items-center justify-center text-[var(--text-secondary)]"
                  >
                    <GitBranch size={17} />
                  </a>
                  <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 glass rounded-xl flex items-center justify-center text-[var(--text-secondary)]"
                  >
                    <BriefcaseBusiness size={17} />
                  </a>
                </div>
              </div>
            </div>
            <div className="glass rounded-2xl p-6 border border-[color-mix(in_srgb,var(--primary)_25%,transparent)]">
              <p className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-emerald-500 text-sm font-medium">Available for work</span>
              </p>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                Open to freelance work, full-time roles, and short consultations.
              </p>
            </div>
          </Reveal>

          <Reveal delay={90} className="lg:col-span-3">
            <div className="glass rounded-2xl p-8 border border-[var(--border-color)]">
              {status === "success" ? (
                <div className="text-center py-12">
                  <CheckCircle size={56} className="text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Message sent</h3>
                  <p className="text-[var(--text-secondary)] mb-6">Thanks for reaching out. I will get back to you soon.</p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2.5 glass rounded-xl text-[var(--text-primary)]"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {status === "error" && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start gap-3" role="alert">
                      <AlertCircle size={18} className="text-red-400 mt-0.5" />
                      <p className="text-[var(--danger)] text-sm">{errorMessage}</p>
                    </div>
                  )}
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { id: "name", label: "Full name", placeholder: "Jane Doe", type: "text" },
                      { id: "email", label: "Email address", placeholder: "jane@example.com", type: "email" },
                    ].map(({ id, label, placeholder, type }) => (
                      <div key={id}>
                        <label htmlFor={id} className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                          {label}
                        </label>
                        <input
                          id={id}
                          type={type}
                          name={id}
                          value={form[id as keyof FormData]}
                          onChange={handleChange}
                          placeholder={placeholder}
                          autoComplete={id === "email" ? "email" : "name"}
                          className={`w-full px-4 py-3 rounded-xl bg-[var(--bg-tertiary)] border ${
                            errors[id as keyof FormErrors] ? "border-red-500/50" : "border-[var(--border-color)]"
                          } text-[var(--text-primary)] text-sm`}
                        />
                        {errors[id as keyof FormErrors] && (
                          <p className="text-red-400 text-xs mt-1">{errors[id as keyof FormErrors]}</p>
                        )}
                      </div>
                    ))}
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project collaboration, role, or question"
                      className={`w-full px-4 py-3 rounded-xl bg-[var(--bg-tertiary)] border ${
                        errors.subject ? "border-red-500/50" : "border-[var(--border-color)]"
                      } text-[var(--text-primary)] text-sm`}
                    />
                    {errors.subject && <p className="text-[var(--danger)] text-xs mt-1">{errors.subject}</p>}
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about the project or opportunity..."
                      className={`w-full px-4 py-3 rounded-xl bg-[var(--bg-tertiary)] border ${
                        errors.message ? "border-red-500/50" : "border-[var(--border-color)]"
                      } text-[var(--text-primary)] text-sm resize-none`}
                    />
                    {errors.message && <p className="text-[var(--danger)] text-xs mt-1">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-white rounded-xl font-semibold bg-[linear-gradient(135deg,var(--primary),var(--accent))] disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
