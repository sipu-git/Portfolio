"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, GitBranch, Globe, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import emailjs from "@emailjs/browser";

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

interface ContactInfo {
  icon: React.ComponentType<{ size: number }>;
  label: string;
  value: string;
  href: string;
}

interface Social {
  icon: React.ComponentType<{ size: number }>;
  href: string;
  label: string;
}

export function ContactSection() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // EmailJS Configuration
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const AUTOREPLY_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  // Initialize EmailJS
  useEffect(() => {
    if (PUBLIC_KEY) {
      emailjs.init(PUBLIC_KEY);
    }
  }, [PUBLIC_KEY]);

  // Validate form
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    // Validate environment variables
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      setErrorMessage(
        "Email service is not properly configured. Please contact the site administrator."
      );
      return;
    }

    // Validate form
    if (!validate()) {
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      // Send main email to owner
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);

      // Send auto-reply email to user if AUTOREPLY_TEMPLATE_ID exists
      if (AUTOREPLY_TEMPLATE_ID) {
        try {
          await emailjs.send(
            SERVICE_ID,
            AUTOREPLY_TEMPLATE_ID,
            form,
            PUBLIC_KEY
          );
        } catch (autoReplyError) {
          console.warn("Auto-reply email failed:", autoReplyError);
          // Don't set status to error for auto-reply failure
        }
      }

      // Success state
      setStatus("success");
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again later."
      );
    }
  };

  // Reset form after success
  const resetForm = (): void => {
    setStatus("idle");
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setErrors({});
    setErrorMessage("");
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: "#",
    },
  ];

  const socials: Social[] = [
    {
      icon: GitBranch,
      href: personalInfo.social.github,
      label: "GitHub",
    },
    {
      icon: Globe,
      href: personalInfo.social.linkedin,
      label: "LinkedIn",
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-slate-900/50 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Contact"
          title="Get In"
          highlight="Touch"
          subtitle="Have a project in mind? Let's discuss how I can help you bring it to life."
        />

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">
                        {label}
                      </div>
                      <div className="text-slate-300 group-hover:text-white transition-colors">
                        {value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <div className="text-sm text-slate-500 mb-4">Follow me on</div>
                <div className="flex gap-3">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      whileHover={{ scale: 1.15, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 glass border border-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-all"
                    >
                      <Icon size={17} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 border border-blue-500/20 bg-blue-500/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-sm font-medium">
                  Available for work
                </span>
              </div>
              <p className="text-slate-400 text-sm">
                I'm currently open to new opportunities. Whether it's a freelance
                project, full-time role, or a quick consultation — feel free to
                reach out!
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-8 border border-white/10">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle size={56} className="text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-400 mb-6">
                    Thank you for reaching out. I'll get back to you within 24
                    hours.
                  </p>
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 glass border border-white/10 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Error Alert */}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start gap-3"
                    >
                      <AlertCircle
                        size={18}
                        className="text-red-400 flex-shrink-0 mt-0.5"
                      />
                      <p className="text-red-300 text-sm">{errorMessage}</p>
                    </motion.div>
                  )}

                  {/* Name and Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      {
                        id: "name",
                        label: "Full Name",
                        placeholder: "John Doe",
                        type: "text",
                      },
                      {
                        id: "email",
                        label: "Email Address",
                        placeholder: "john@example.com",
                        type: "email",
                      },
                    ].map(({ id, label, placeholder, type }) => (
                      <div key={id}>
                        <label className="block text-sm font-medium text-slate-300 mb-1.5">
                          {label}
                        </label>
                        <input
                          type={type}
                          name={id}
                          value={form[id as keyof FormData]}
                          onChange={handleChange}
                          placeholder={placeholder}
                          className={`w-full px-4 py-3 rounded-xl bg-slate-800/50 border ${
                            errors[id as keyof FormErrors]
                              ? "border-red-500/50 focus:border-red-500/70"
                              : "border-white/10 focus:border-blue-500/50"
                          } text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500/20 transition-all text-sm`}
                        />
                        {errors[id as keyof FormErrors] && (
                          <p className="text-red-400 text-xs mt-1">
                            {errors[id as keyof FormErrors]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project collaboration / Job opportunity / Question"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-800/50 border ${
                        errors.subject
                          ? "border-red-500/50 focus:border-red-500/70"
                          : "border-white/10 focus:border-blue-500/50"
                      } text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500/20 transition-all text-sm`}
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-800/50 border ${
                        errors.message
                          ? "border-red-500/50 focus:border-red-500/70"
                          : "border-white/10 focus:border-blue-500/50"
                      } text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500/20 transition-all text-sm resize-none`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}