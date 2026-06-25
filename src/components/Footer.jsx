import React from 'react';
import { Github, Linkedin, Instagram, Facebook, Youtube, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/rajan-nautiyal-142397357", color: "hover:text-blue-500" },
    { icon: <Github size={20} />, url: "https://github.com/Rajan1129", color: "hover:text-violet-500" },
    { icon: <Instagram size={20} />, url: "https://www.instagram.com/rajannautiyal1/", color: "hover:text-pink-500" },
    { icon: <Facebook size={20} />, url: "https://www.facebook.com/share/17tzzbXWGr/?mibextid=wwXIfr", color: "hover:text-blue-600" },
    { icon: <Youtube size={20} />, url: "https://youtube.com/@rajannautiyal11", color: "hover:text-red-500" },
  ];

  return (
    <footer className="w-full border-t border-slate-200/50 dark:border-slate-800/30 bg-white/50 dark:bg-darkBg/50 backdrop-blur-sm py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
          {/* Logo / Branding */}
          <div className="text-center md:text-left">
            <Link to="/" className="text-2xl font-bold font-display text-slate-900 dark:text-white">
              Rajan<span className="text-primary">.dev</span>
            </Link>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-light">
              Crafting premium full-stack digital solutions.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social, idx) => (
              <a 
                key={idx}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`p-2.5 rounded-full bg-slate-100 dark:bg-darkCard/50 text-slate-600 dark:text-slate-300 border border-slate-200/30 dark:border-slate-700/20 shadow-sm transition-all duration-300 transform hover:-translate-y-1 ${social.color}`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Footer Quick Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
            <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
            <Link to="/skills" className="hover:text-primary transition-colors">Skills</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>

        <div className="border-t border-slate-200/30 dark:border-slate-800/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 dark:text-slate-500">
          <p>© {currentYear} Rajan Nautiyal. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-2 md:mt-0">
            Designed & Developed with <Heart size={12} className="text-red-500 fill-red-500 animate-pulse" /> by Rajan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;