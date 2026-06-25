import React, { useState } from "react";
import { Code2, Server, Database, Settings, CheckCircle2, ChevronRight, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("express");

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="text-violet-500" size={22} />,
      skills: [
        { name: "React.js", level: "90%" },
        { name: "JavaScript (ES6+)", level: "85%" },
        { name: "Tailwind CSS", level: "95%" },
        { name: "Bootstrap", level: "88%" },
        { name: "HTML5 / CSS3", level: "92%" },
        { name: "Redux Toolkit", level: "80%" }
      ],
      color: "from-violet-500/10 to-indigo-500/10 border-violet-500/20"
    },
    {
      title: "Backend Engineering",
      icon: <Server className="text-cyan-500" size={22} />,
      skills: [
        { name: "Node.js", level: "85%" },
        { name: "Express.js", level: "88%" },
        { name: "RESTful APIs", level: "90%" },
        { name: "JWT Auth & bcrypt", level: "85%" },
        { name: "Middlewares", level: "82%" }
      ],
      color: "from-cyan-500/10 to-blue-500/10 border-cyan-500/20"
    },
    {
      title: "Databases & Platforms",
      icon: <Database className="text-emerald-500" size={22} />,
      skills: [
        { name: "MongoDB", level: "85%" },
        { name: "Mongoose ODM", level: "88%" },
        { name: "MySQL Database", level: "75%" },
        { name: "Vercel / Render / Netlify", level: "85%" }
      ],
      color: "from-emerald-500/10 to-teal-500/10 border-emerald-500/20"
    },
    {
      title: "Tools & Other Skills",
      icon: <Settings className="text-amber-500" size={22} />,
      skills: [
        { name: "Git & GitHub", level: "90%" },
        { name: "Figma & Canva", level: "82%" },
        { name: "VS Code Editor", level: "95%" },
        { name: "Video Editing", level: "78%" },
        { name: "Diploma in Accounts", level: "80%" },
        { name: "MS Office", level: "85%" }
      ],
      color: "from-amber-500/10 to-orange-500/10 border-amber-500/20"
    }
  ];

  const codeSnippets = {
    express: `// server/routes/project.js
import express from 'express';
import { Project } from '../models/Project.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// GET all projects with caching
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find()
      .sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`,
    react: `// client/src/hooks/useFetch.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading };
};`,
    mongoose: `// server/models/Project.js
import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  tech: [{ type: String }],
  github: { type: String, required: true },
  live: { type: String }
}, { timestamps: true });

export const Project = mongoose.model('Project', projectSchema);`
  };

  const fader = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-slate-900 dark:text-white mb-4">
            Technical Stack
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-light max-w-md mx-auto">
            A comprehensive bento representation of my full-stack programming capabilities and tools.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Left Column: Frontend & Backend Cards (Stacked) */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                variants={fader}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className={`p-6 rounded-3xl glass-panel border border-slate-200/50 dark:border-slate-800/30 flex flex-col justify-between hover-glow bg-gradient-to-br ${category.color}`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 bg-white dark:bg-darkCard rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                      {category.icon}
                    </div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white font-display">
                      {category.title}
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {category.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="space-y-1">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-medium text-slate-700 dark:text-slate-350">{skill.name}</span>
                          <span className="text-slate-400 font-light">{skill.level}</span>
                        </div>
                        {/* Progress Bar */}
                        <div className="w-full h-1 bg-slate-200/50 dark:bg-slate-800/50 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: skill.level }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Code Terminal Sandbox Card (Spans vertical) */}
          <motion.div
            variants={fader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-6 rounded-3xl glass-panel border border-slate-200/50 dark:border-slate-800/30 flex flex-col justify-between hover-glow lg:h-full bg-slate-950 dark:bg-slate-950 text-slate-300 font-mono shadow-xl relative overflow-hidden"
          >
            {/* Terminal Top bar */}
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span className="text-[10px] text-slate-500 font-mono ml-2">sandbox-compiler.sh</span>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setActiveTab("express")}
                    className={`px-2 py-1 rounded text-[10px] font-semibold border transition ${
                      activeTab === "express" ? "bg-primary/20 border-primary text-primary" : "border-slate-800 text-slate-500"
                    }`}
                  >
                    server.js
                  </button>
                  <button 
                    onClick={() => setActiveTab("mongoose")}
                    className={`px-2 py-1 rounded text-[10px] font-semibold border transition ${
                      activeTab === "mongoose" ? "bg-primary/20 border-primary text-primary" : "border-slate-800 text-slate-500"
                    }`}
                  >
                    schema.js
                  </button>
                  <button 
                    onClick={() => setActiveTab("react")}
                    className={`px-2 py-1 rounded text-[10px] font-semibold border transition ${
                      activeTab === "react" ? "bg-primary/20 border-primary text-primary" : "border-slate-800 text-slate-500"
                    }`}
                  >
                    hook.js
                  </button>
                </div>
              </div>

              {/* Code Snippet Container */}
              <div className="text-[11px] leading-relaxed overflow-x-auto h-[280px] select-all custom-scrollbar whitespace-pre scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
                <AnimatePresence mode="wait">
                  <motion.code
                    key={activeTab}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="block"
                  >
                    {codeSnippets[activeTab]}
                  </motion.code>
                </AnimatePresence>
              </div>
            </div>

            {/* Run mock command output */}
            <div className="border-t border-slate-900 pt-4 mt-4 text-[10px] text-slate-500 flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <Play size={12} className="text-secondary animate-pulse" />
                <span className="text-slate-400 font-semibold">npm run start:dev</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={12} className="text-secondary" />
                <span>DB Connection Successful (MERN Cluster)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ChevronRight size={12} className="text-slate-650" />
                <span>GraphQL/Express router listening on port 5000</span>
              </div>
            </div>
          </motion.div>

        </div>
        
      </div>
    </div>
  );
};

export default Skills;