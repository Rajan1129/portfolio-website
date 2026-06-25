import React from 'react';
import { Briefcase, GraduationCap, Compass, BookOpen, Coffee, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
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
        staggerChildren: 0.15
      }
    }
  };

  const timelineItems = [
    {
      type: "work",
      title: "MERN Stack Developer Intern",
      organization: "WhiteHat Coders - Mohali, Punjab",
      period: "June 2026 - Present",
      description: "Developing full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Translating operational requirements into scalable code architectures.",
      icon: <Briefcase size={18} />
    },
    {
      type: "work",
      title: "Frontend Developer",
      organization: "Click Design Solution - Zirakpur, Punjab",
      period: "May 2026",
      description: "Developed reusable React UI components and optimized frontend rendering cycles. Leveraged Git/GitHub for version control and cross-functional team collaboration.",
      icon: <Compass size={18} />
    },
    {
      type: "work",
      title: "MERN Stack Developer Intern",
      organization: "Excellence Technology",
      period: "August 2025 - March 2026",
      description: "Created RESTful APIs for user authentication, CRUD actions, and backend services. Designed MongoDB schemas using Mongoose and built clean interfaces using Tailwind CSS and Bootstrap.",
      icon: <Briefcase size={18} />
    },
    {
      type: "education",
      title: "Bachelor of Computer Applications (BCA)",
      organization: "HPU College Amb - Una, Himachal Pradesh (7.1 CGPA)",
      period: "2022 - 2025",
      description: "Studied core software topics including computer systems, databases, web technologies, and software engineering methodologies.",
      icon: <GraduationCap size={18} />
    },
    {
      type: "education",
      title: "Diploma in Computerized Accounting",
      organization: "Navyug Information Technology Amb (76% score)",
      period: "Completed 2022",
      description: "Acquired credentials in computerized accounting packages, ledgers maintenance, and spreadsheet business modeling.",
      icon: <GraduationCap size={18} />
    }
  ];

  const philosophyItems = [
    {
      title: "Continuous Learning",
      description: "Technology moves fast. I spend time daily learning new techniques, architecture patterns, and reading documentation to keep my skills sharp.",
      icon: <BookOpen className="text-primary" size={20} />
    },
    {
      title: "Craftsmanship & Code Quality",
      description: "I believe code is read far more often than it is written. Writing readable, structured, and performant code is always my top priority.",
      icon: <Coffee className="text-accent" size={20} />
    },
    {
      title: "User-Centered Perspective",
      description: "A great backend is nothing without a seamless frontend. I build web apps focusing heavily on accessibility, speed, and clean typography.",
      icon: <Heart className="text-red-500" size={20} />
    }
  ];

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Page Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-slate-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-light max-w-md mx-auto">
            The journey, philosophy, and professional background of a full-stack developer.
          </p>
        </motion.div>

        {/* Narrative introduction */}
        <motion.section 
          className="mb-20 glass-panel border border-slate-200/50 dark:border-slate-800/30 p-8 sm:p-10 rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-6">
            The Story So Far
          </h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed font-light">
            <p>
              Hello! My name is <span className="font-semibold text-slate-800 dark:text-white">Rajan Nautiyal</span>. 
              My journey into software development began with a strong curiosity about how large web platforms handle data, routing, and user interactions. 
              This curiosity quickly developed into a serious pursuit of mastering modern web application architectures.
            </p>
            <p>
              I chose the MERN stack (MongoDB, Express, React, Node.js) because it provides a unified, efficient system 
              for constructing unified applications. Over the past year, I have built several projects, focusing on building 
              solid state flows on the frontend and secure REST controllers on the backend.
            </p>
            <p>
              When I'm not writing code, I'm usually analyzing UI designs, exploring community code repositories, or reading 
              articles on database performance. I am excited to transition into a professional developer role where I can contribute 
              to shipping high-impact products.
            </p>
          </div>
        </motion.section>

        {/* Timeline Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-10 text-center">
            My Timeline
          </h2>
          
          <motion.div 
            className="relative border-l border-slate-200 dark:border-slate-800/80 ml-4 md:ml-6 space-y-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {timelineItems.map((item, index) => (
              <motion.div 
                key={index}
                variants={fader}
                className="relative pl-8 md:pl-10 group"
              >
                {/* Timeline node icon */}
                <div className="absolute -left-[18px] top-1.5 w-9 h-9 rounded-xl bg-white dark:bg-darkCard border border-slate-200 dark:border-slate-800 flex items-center justify-center text-primary shadow-sm group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300">
                  {item.icon}
                </div>
                
                {/* Timeline content card */}
                <div className="p-6 glass-panel border border-slate-200/50 dark:border-slate-800/30 rounded-2xl hover-glow">
                  <span className="text-xs font-semibold text-primary/80 uppercase tracking-wider">{item.period}</span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">{item.title}</h3>
                  <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">{item.organization}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-450 leading-relaxed font-light">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* "Behind the Code" Philosophy Grid */}
        <section>
          <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-10 text-center">
            Creative Philosophy
          </h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {philosophyItems.map((item, index) => (
              <motion.div 
                key={index}
                variants={fader}
                className="p-6 glass-panel border border-slate-200/50 dark:border-slate-800/30 rounded-2xl flex flex-col items-start gap-4 hover-glow"
              >
                <div className="p-3 bg-slate-100 dark:bg-darkCard/50 border border-slate-200/30 dark:border-slate-700/20 rounded-xl">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

      </div>
    </div>
  );
};

export default About;