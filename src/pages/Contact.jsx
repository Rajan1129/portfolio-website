import React, { useRef, useState } from "react";
import { Mail, Phone, Linkedin, Github, Instagram, Facebook, Youtube, Send, CheckCircle2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs.sendForm(
      "service_jo8ka0w",
      "template_xen2yco",
      form.current,
      "0MaFcFBmOhwJo8vfK"
    )
    .then(
      () => {
        setLoading(false);
        setStatus("Your message has been delivered. Talk to you soon!");
        setError(false);
        e.target.reset();
      },
      (err) => {
        setLoading(false);
        console.error(err);
        setStatus("Something went wrong. Please try again or email directly.");
        setError(true);
      }
    );
  };

  const contactMethods = [
    { icon: <Mail className="text-primary" size={20} />, label: "Email Me", value: "shrmarajn70@gmail.com", href: "mailto:shrmarajn70@gmail.com" },
    { icon: <Phone className="text-accent" size={20} />, label: "Call Me", value: "+91 9805720962", href: "tel:+919805720962" }
  ];

  const socialGrids = [
    { icon: <Linkedin size={18} />, label: "LinkedIn", url: "https://www.linkedin.com/in/rajan-nautiyal-142397357", color: "text-blue-500 hover:bg-blue-500/10" },
    { icon: <Github size={18} />, label: "GitHub", url: "https://github.com/Rajan1129", color: "text-violet-500 hover:bg-violet-500/10" },
    { icon: <Instagram size={18} />, label: "Instagram", url: "https://www.instagram.com/rajannautiyal1/", color: "text-pink-500 hover:bg-pink-500/10" },
    { icon: <Facebook size={18} />, label: "Facebook", url: "https://www.facebook.com/share/17tzzbXWGr/?mibextid=wwXIfr", color: "text-blue-600 hover:bg-blue-600/10" },
    { icon: <Youtube size={18} />, label: "YouTube", url: "https://youtube.com/@rajannautiyal11", color: "text-red-500 hover:bg-red-500/10" }
  ];

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-slate-900 dark:text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-light max-w-md mx-auto">
            Have a project in mind, an internship opening, or just want to connect? Drop a line.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Contact details & socials */}
          <motion.div 
            className="md:col-span-5 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Quick Cards */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a 
                  key={index}
                  href={method.href}
                  className="block p-5 glass-panel border border-slate-200/50 dark:border-slate-800/30 rounded-2xl hover-glow group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white dark:bg-darkCard rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm group-hover:scale-105 transition-transform">
                      {method.icon}
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-light uppercase tracking-wider">{method.label}</p>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">{method.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Grid block */}
            <div className="p-6 glass-panel border border-slate-200/50 dark:border-slate-800/30 rounded-3xl">
              <h3 className="text-sm font-bold font-display text-slate-900 dark:text-white mb-4">Connect Elsewhere</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialGrids.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 p-2.5 rounded-xl border border-slate-200/20 dark:border-slate-800/20 text-xs text-slate-600 dark:text-slate-350 transition-all duration-300 font-light hover:-translate-y-0.5 ${social.color}`}
                  >
                    <span className="flex-shrink-0">{social.icon}</span>
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Contact form panel */}
          <motion.div 
            className="md:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-6 sm:p-8 glass-panel border border-slate-200/50 dark:border-slate-800/30 rounded-3xl relative">
              <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white mb-6">Send A Message</h3>
              
              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                
                {/* Name */}
                <div className="space-y-1">
                  <label htmlFor="name" className="text-[11px] font-semibold text-slate-450 dark:text-slate-400 uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter name"
                    className="w-full px-4 py-3 bg-white/50 dark:bg-darkCard/40 border border-slate-250 dark:border-slate-800/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm transition-all text-slate-900 dark:text-slate-100 placeholder-slate-400"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label htmlFor="email" className="text-[11px] font-semibold text-slate-450 dark:text-slate-400 uppercase tracking-wider">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 bg-white/50 dark:bg-darkCard/40 border border-slate-250 dark:border-slate-800/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm transition-all text-slate-900 dark:text-slate-100 placeholder-slate-400"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label htmlFor="message" className="text-[11px] font-semibold text-slate-450 dark:text-slate-400 uppercase tracking-wider">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-white/50 dark:bg-darkCard/40 border border-slate-250 dark:border-slate-800/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm transition-all text-slate-900 dark:text-slate-100 placeholder-slate-400"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-primary hover:bg-primary-600 text-white font-medium shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                  {loading ? (
                    <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>

              {/* Status Alert Dialog */}
              <AnimatePresence>
                {status && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={`mt-6 p-4 rounded-xl flex items-center gap-3 border ${
                      error 
                        ? "bg-red-50/50 border-red-200/50 text-red-700 dark:bg-red-950/20 dark:border-red-900/30 dark:text-red-400" 
                        : "bg-emerald-50/50 border-emerald-250/50 text-emerald-700 dark:bg-emerald-950/20 dark:border-emerald-900/30 dark:text-emerald-450"
                    }`}
                  >
                    {error ? <AlertCircle size={18} /> : <CheckCircle2 size={18} />}
                    <p className="text-xs font-medium">{status}</p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;