import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Database, Server, ArrowRight, Download, Terminal, Cpu, Sparkles, Layout, GitCommit, ArrowUpRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import profile from "../assets/images/profile.jpeg";

const Home = () => {
  // Fade-in animations
  const fader = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  // Mock GitHub calendar data - 12 weeks of activity
  const gitActivity = Array.from({ length: 84 }, () => Math.floor(Math.random() * 4));

  const workflowSteps = [
    { num: "01", title: "DB Architecture", desc: "Modeling schemas, version controls, and query locks in MongoDB/Mongoose." },
    { num: "02", title: "API Construction", desc: "Constructing modular Express routers, authentication guards, and middleware controllers." },
    { num: "03", title: "UI Integration", desc: "Designing responsive layouts, global state hooks, and transition triggers in React." },
    { num: "04", title: "Verification", desc: "Executing routing tests, postman payloads check, and media formatting validations." }
  ];

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-6">
        
        {/* HERO SECTION */}
        <section className="min-h-[80vh] flex flex-col-reverse lg:flex-row items-center justify-between gap-12 mb-24">
          
          {/* Left Text Column */}
          <motion.div 
            className="w-full lg:w-3/5 space-y-6 text-center lg:text-left"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              variants={fader} 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase"
            >
              <Sparkles size={12} className="animate-pulse" />
              <span>Available for Freelance & Internships</span>
            </motion.div>

            <motion.h1 
              variants={fader}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight font-display"
            >
              Building Full-Stack <br />
              <span className="text-gradient">Digital Products</span> With <br />
              Creative Precision
            </motion.h1>

            <motion.p 
              variants={fader}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Hi, I'm <span className="font-semibold text-slate-800 dark:text-white">Rajan </span>. 
              I develop full-stack applications with the MERN stack. I focus on writing clean, modular code, 
              designing smooth user experiences, and constructing reliable backend APIs.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              variants={fader}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <Link 
                to="/projects" 
                className="group px-6 py-3 rounded-xl bg-primary text-white font-medium shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25 hover:bg-primary-600 transition-all duration-300 flex items-center gap-2"
              >
                <span>View My Work</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/contact" 
                className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-darkCard font-medium transition-all duration-300"
              >
                Let's Talk
              </Link>

              <a 
                href="/RajanCV..pdf" 
                download="Rajan_CV.pdf"
                className="group px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-darkCard font-medium transition-all duration-300 flex items-center gap-2"
              >
                <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
                <span>Resume</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Custom Layered Profile Frame */}
          <motion.div 
            className="w-full lg:w-2/5 flex flex-col items-center justify-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Background radial highlight */}
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none transform scale-75"></div>
            
            {/* Custom Interactive Profile Frame */}
            <motion.div 
              className="relative p-3.5 glass-panel border border-slate-200/50 dark:border-slate-800/30 rounded-[2.5rem] shadow-glass bg-white/20 dark:bg-darkCard/20 hover:border-primary/45 dark:hover:border-primary/45 transition-all duration-500 max-w-[340px] w-full"
              whileHover={{ y: -8, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Corner tech decals */}
              <div className="absolute top-6 right-6 w-2.5 h-2.5 border-r-2 border-t-2 border-primary/45 rounded-tr"></div>
              <div className="absolute bottom-6 left-6 w-2.5 h-2.5 border-l-2 border-b-2 border-accent/45 rounded-bl"></div>

              {/* Main Image Wrapper */}
              <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-slate-250/20 dark:border-slate-700/10 shadow-inner group">
                <img 
                  src={profile} 
                  alt="Rajan Nautiyal" 
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Iridescent hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>

              {/* Floating Developer Tag */}
              <div className="absolute -bottom-3 right-6 z-25 bg-gradient-to-r from-primary to-accent text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg shadow-primary/20 pointer-events-none">
                [ CODE & CRAFT ]
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* CORE SPECIALTIES SECTION */}
        <section className="mb-28">
          <motion.div 
            className="text-center max-w-xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold font-display text-slate-900 dark:text-white mb-4">Core Specialties</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-light">
              Designing and building clean, scalable components across the entire development stack.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Card 1 */}
            <motion.div 
              variants={fader}
              className="p-8 glass-panel border border-slate-200/50 dark:border-slate-800/30 rounded-3xl hover-glow flex flex-col items-start gap-4"
            >
              <div className="p-3 bg-primary/10 text-primary rounded-2xl">
                <Layout size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Frontend Architecture</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                Crafting clean, responsive user interfaces in React. Utilizing Tailwind CSS for custom styling, 
                and Framer Motion for smooth micro-animations.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              variants={fader}
              className="p-8 glass-panel border border-slate-200/50 dark:border-slate-800/30 rounded-3xl hover-glow flex flex-col items-start gap-4"
            >
              <div className="p-3 bg-accent/10 text-accent rounded-2xl">
                <Server size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Backend Engineering</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                Developing RESTful APIs using Node.js and Express. Designing secure user authentication models 
                and optimized request controllers.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              variants={fader}
              className="p-8 glass-panel border border-slate-200/50 dark:border-slate-800/30 rounded-3xl hover-glow flex flex-col items-start gap-4"
            >
              <div className="p-3 bg-secondary/10 text-secondary rounded-2xl">
                <Database size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Database Design</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                Modeling scalable document storage schemas using MongoDB and Mongoose. Ensuring structural integrity, 
                data validation, and query performance.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* PROJECT SPOTLIGHT PREVIEW */}
        <section className="mb-28">
          <motion.div 
            className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="text-3xl font-bold font-display text-slate-900 dark:text-white mb-3">Project Spotlight</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-light">A quick glimpse of recent applications engineered from scratch.</p>
            </div>
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-600 transition-colors border-b border-primary/20 pb-1"
            >
              <span>Explore full catalog</span>
              <ArrowUpRight size={14} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Spot 1 */}
            <motion.div 
              className="p-6 glass-panel border border-slate-200/50 dark:border-slate-800/30 rounded-3xl hover-glow flex flex-col justify-between"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <span className="text-[9px] font-semibold text-primary px-2.5 py-1 rounded-full bg-primary/10 tracking-widest uppercase mb-4 inline-block">MERN STACK</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-2">PG Management System</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-6">
                  A Paying Guest allocation and records manager utilizing atomic concurrency updates for bed-space checks and JWT roles controls.
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                {["React.js", "Node.js", "Express.js", "MongoDB"].map(t => (
                  <span key={t} className="text-[10px] text-slate-400 bg-slate-100 dark:bg-darkCard px-2 py-0.5 rounded border border-slate-200/10">{t}</span>
                ))}
              </div>
            </motion.div>

            {/* Spot 2 */}
            <motion.div 
              className="p-6 glass-panel border border-slate-200/50 dark:border-slate-800/30 rounded-3xl hover-glow flex flex-col justify-between"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <span className="text-[9px] font-semibold text-accent px-2.5 py-1 rounded-full bg-accent/10 tracking-widest uppercase mb-4 inline-block">AUDIO API</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-2">Spotify Clone</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-6">
                  Music streaming interface rendering dynamic audio canvas frequency waves, utilizing React Context player states to prevent song stops.
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                {["React.js", "Web Audio API", "Express.js", "Mongoose"].map(t => (
                  <span key={t} className="text-[10px] text-slate-400 bg-slate-100 dark:bg-darkCard px-2 py-0.5 rounded border border-slate-200/10">{t}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* WORKFLOW ROADMAP */}
        <section className="mb-28">
          <motion.div 
            className="text-center max-w-xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold font-display text-slate-900 dark:text-white mb-4">The Creative Process</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-light">How I architect custom digital solutions, from blank database schema to live server hosting.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                className="p-6 glass-panel border border-slate-200/50 dark:border-slate-800/30 rounded-2xl flex flex-col justify-between hover-glow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div>
                  <span className="text-3xl font-black font-display bg-gradient-to-br from-primary/30 to-accent/30 bg-clip-text text-transparent mb-4 inline-block">{step.num}</span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* GITHUB COMMIT CALENDAR GRAPHIC */}
        <section className="mb-28">
          <motion.div 
            className="p-6 sm:p-8 glass-panel border border-slate-200/50 dark:border-slate-800/30 rounded-3xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-xl text-primary border border-primary/15">
                  <GitCommit size={18} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">Development Activity</h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-light">Open source commits and repository contributions activity logging.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <Calendar size={14} />
                <span>350+ Commits This Year</span>
              </div>
            </div>

            {/* Commit Grid Grid */}
            <div className="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-250 dark:scrollbar-thumb-slate-800 scrollbar-track-transparent">
              <div className="grid grid-flow-col grid-rows-7 gap-1.5 min-w-[700px] py-1">
                {gitActivity.map((activity, idx) => {
                  const colors = [
                    "bg-slate-100 dark:bg-darkCard hover:scale-125 border border-slate-200/10",
                    "bg-emerald-500/20 hover:scale-125 border border-emerald-500/10",
                    "bg-emerald-500/40 hover:scale-125 border border-emerald-500/10",
                    "bg-emerald-500/80 hover:scale-125 border border-emerald-500/10"
                  ];
                  return (
                    <motion.div 
                      key={idx}
                      className={`w-3.5 h-3.5 rounded-sm transition-all duration-300 cursor-pointer ${colors[activity]}`}
                      whileHover={{ scale: 1.25, zIndex: 10 }}
                    />
                  );
                })}
              </div>
            </div>

            <div className="flex justify-end gap-1.5 items-center mt-4 text-[10px] text-slate-400 font-light">
              <span>Less</span>
              <div className="w-2.5 h-2.5 rounded-sm bg-slate-100 dark:bg-darkCard"></div>
              <div className="w-2.5 h-2.5 rounded-sm bg-emerald-500/20"></div>
              <div className="w-2.5 h-2.5 rounded-sm bg-emerald-500/40"></div>
              <div className="w-2.5 h-2.5 rounded-sm bg-emerald-500/80"></div>
              <span>More</span>
            </div>
          </motion.div>
        </section>

        {/* STATS BENTO SECTION */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="p-8 glass-panel border border-slate-200/50 dark:border-slate-800/30 rounded-3xl flex flex-col items-center justify-center text-center hover-glow"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Terminal size={32} className="text-primary mb-3" />
              <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white font-display mb-1">5+</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-light">Projects Completed</p>
            </motion.div>

            <motion.div 
              className="p-8 glass-panel border border-slate-200/50 dark:border-slate-800/30 rounded-3xl flex flex-col items-center justify-center text-center hover-glow"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Cpu size={32} className="text-accent mb-3" />
              <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white font-display mb-1">1+</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-light">Years Experience</p>
            </motion.div>

            <motion.div 
              className="p-8 glass-panel border border-slate-200/50 dark:border-slate-800/30 rounded-3xl flex flex-col items-center justify-center text-center hover-glow"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Code size={32} className="text-secondary mb-3" />
              <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white font-display mb-1">15+</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-light">Skills Mastered</p>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;