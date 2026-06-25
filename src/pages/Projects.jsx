import React, { useState } from 'react';
import { Github, ExternalLink, Radio, Kanban, Building2, Terminal, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [activeDetailTab, setActiveDetailTab] = useState('challenge');

  const projects = [
    {
      name: "PG Management System - MERN Stack Application",
      category: "Property Tech",
      description: "A full-stack paying guest management system designed to streamline bed allocations, room logs, tenant records, and administrator operations.",
      icon: <Building2 className="text-cyan-500" size={24} />,
      link: "#",
      live: "#",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
      features: [
        "Secure authentication and role-based authorization system for Admin and Tenants using JWT.",
        "Comprehensive Admin Dashboard to manage rooms, beds, and tenant check-in records.",
        "Dynamic CRUD operations for room configurations and real-time bed allocation status."
      ],
      challenge: "Designing a relational-like schema in MongoDB to handle dynamic bed-to-room allocations, avoiding nested document limits and race conditions during concurrent bookings.",
      solution: "Modeled separate Room, Tenant, and Allocation schemas. Linked them using Mongoose ObjectId references and implemented atomic updates inside database operations to verify room availability before modifying bookings."
    },
    {
      name: "Spotify Web Application Clone",
      category: "Audio Streaming",
      description: "A high-fidelity audio streaming client featuring reactive music player states, playlist customization, and audio frequency visualization.",
      icon: <Radio className="text-emerald-500" size={24} />,
      link: "https://github.com/Rajan1129/SpotifyClone",
      live: "https://portfolio-website-c1fa.vercel.app", // This is the live portfolio link which serves as the live host example!
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Web Audio API"],
      features: [
        "Continuous music playbacks during client routing navigation.",
        "Interactive canvas frequency visualizer linked to audio source nodes.",
        "Custom playlist creations and JWT authentication flow."
      ],
      challenge: "Synchronizing continuous audio playback state across client-side router navigation without rendering interruptions or reloading elements.",
      solution: "Designed a global state context wrapper utilizing React Context to decouple the HTMLAudioElement from the main page components. Tracked audio streams globally, allowing continuous listening."
    },
    {
      name: "CollabGrid - Real-time Board Workspace",
      category: "Productivity",
      description: "A collaborative Kanban workspace facilitating real-time board updates, card drag-and-drop actions, and team permissions.",
      icon: <Kanban className="text-indigo-500" size={24} />,
      link: "#",
      live: "#",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "dnd-kit"],
      features: [
        "Real-time synchronized board updates using WebSockets.",
        "Smooth drag-and-drop card coordinates tracking.",
        "Team invitations system with varying access privileges."
      ],
      challenge: "Preventing race conditions and layout state desync when multiple team members drag and re-order the same task card concurrently.",
      solution: "Built a coordinate locking mechanism inside Socket.io routes. Broadcasted 'dragging' locks to teammates immediately when a card is selected, momentarily disabling moves for others until dropped."
    }
  ];

  const handleToggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
      setActiveDetailTab('challenge');
    }
  };

  const fader = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-slate-900 dark:text-white mb-4">
            Selected Work
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-light max-w-md mx-auto">
            A curated list of full-stack projects showcasing custom engineering solutions and design logic.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fader}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="glass-panel border border-slate-200/50 dark:border-slate-800/30 rounded-3xl p-6 hover-glow flex flex-col justify-between"
            >
              <div>
                {/* Project Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white dark:bg-darkCard rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                    {project.icon}
                  </div>
                  <span className="text-[10px] font-semibold text-primary px-2.5 py-1 rounded-full bg-primary/10 tracking-wider uppercase">
                    {project.category}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-2">
                  {project.name}
                </h2>
                
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light mb-6">
                  {project.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-[10px] font-medium text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-darkCard border border-slate-200/20 dark:border-slate-700/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action and Detail buttons */}
              <div className="space-y-4 pt-4 border-t border-slate-200/30 dark:border-slate-800/10">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <div className="flex gap-4">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
                    >
                      <Github size={14} />
                      Code
                    </a>
                    {project.live !== "#" && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-accent transition-colors"
                      >
                        <ExternalLink size={14} />
                        Demo
                      </a>
                    )}
                  </div>

                  <button 
                    onClick={() => handleToggleExpand(index)}
                    className="text-primary hover:text-primary-600 flex items-center gap-1 transition"
                  >
                    <span>{expandedIndex === index ? "Hide Details" : "Show Blueprint"}</span>
                    <Sparkles size={12} className="animate-pulse" />
                  </button>
                </div>

                {/* Interactive Blueprint Drawer */}
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden bg-slate-50 dark:bg-darkCard/40 rounded-2xl border border-slate-100 dark:border-slate-800/50 mt-2"
                    >
                      {/* Tabs */}
                      <div className="flex border-b border-slate-200/50 dark:border-slate-800/50 text-[10px] font-bold">
                        <button 
                          onClick={() => setActiveDetailTab('features')}
                          className={`flex-1 py-2 text-center transition ${
                            activeDetailTab === 'features' ? 'text-primary border-b border-primary bg-primary/5' : 'text-slate-400'
                          }`}
                        >
                          Features
                        </button>
                        <button 
                          onClick={() => setActiveDetailTab('challenge')}
                          className={`flex-1 py-2 text-center transition ${
                            activeDetailTab === 'challenge' ? 'text-primary border-b border-primary bg-primary/5' : 'text-slate-400'
                          }`}
                        >
                          Challenge
                        </button>
                        <button 
                          onClick={() => setActiveDetailTab('solution')}
                          className={`flex-1 py-2 text-center transition ${
                            activeDetailTab === 'solution' ? 'text-primary border-b border-primary bg-primary/5' : 'text-slate-400'
                          }`}
                        >
                          Solution
                        </button>
                      </div>

                      {/* Content panel */}
                      <div className="p-4 text-[11px] text-slate-600 dark:text-slate-350 leading-relaxed font-light">
                        {activeDetailTab === 'features' && (
                          <ul className="list-disc pl-4 space-y-1">
                            {project.features.map((feat, fIdx) => (
                              <li key={fIdx}>{feat}</li>
                            ))}
                          </ul>
                        )}
                        {activeDetailTab === 'challenge' && (
                          <div className="flex gap-2">
                            <Terminal size={14} className="text-red-400 flex-shrink-0 mt-0.5" />
                            <p>{project.challenge}</p>
                          </div>
                        )}
                        {activeDetailTab === 'solution' && (
                          <div className="flex gap-2">
                            <Terminal size={14} className="text-secondary flex-shrink-0 mt-0.5" />
                            <p>{project.solution}</p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;