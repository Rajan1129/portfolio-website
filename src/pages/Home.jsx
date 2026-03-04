import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code, Database, Server, ArrowRight, Download } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import profile from "../assets/images/profile.jpeg";
import ThreeScene from '../components/ThreeScene';

const Home = () => {
  // Particle Background Animation
  useEffect(() => {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-bg';
    document.body.appendChild(particleContainer);

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 15 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
      particleContainer.appendChild(particle);
    }

    return () => {
      document.body.removeChild(particleContainer);
    };
  }, []);

  // Scroll Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="pt-24 pb-12 relative min-h-screen">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-20"
      >
        <source src="/assets/video/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Video Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 to-purple-50/90 dark:from-gray-900/90 dark:to-gray-800/90 -z-10"></div>
      
      {/* Particle Background */}
      <div className="particle-bg absolute inset-0 pointer-events-none -z-10"></div>
      
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="md:w-1/2">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hi, I'm <span className="text-primary">Rajan</span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typewriter
                options={{
                  strings: ['MERN Stack Developer', 'Web Developer', 'Freelancer'],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-700 dark:text-gray-400 mb-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I am a MERN stack developer with a strong interest in building scalable web applications. 
I specialize in React, Node.js, and MongoDB, and enjoy solving real-world problems through clean and efficient code.

Currently focused on building full-stack projects and improving my problem-solving skills.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link 
                to="/projects" 
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition transform hover:scale-105 btn-hover flex items-center"
              >
                View Projects <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition transform hover:scale-105 btn-hover"
              >
                Contact Me
              </Link>
              <a 
                href="/resume.pdf" 
                download="Rajan_Resume.pdf"
                className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-green-600 transition transform hover:scale-105 btn-hover flex items-center"
              >
                <Download className="mr-2" size={18} />
                Download Resume
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            className="md:w-1/2 mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="bg-gray-200 dark:bg-gray-700 rounded-full w-64 h-64 mx-auto flex items-center justify-center hover:shadow-2xl transition transform hover:scale-110"
              whileHover={{ scale: 1.1 }}
            >
              <img 
                src={profile}
                alt="Rajan"
                className="w-64 h-64 rounded-full object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Features Section - Glassmorphism */}
        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            variants={itemVariants}
            className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-center hover:shadow-lg transition transform hover:-translate-y-2 card-hover"
          >
            <Code size={40} className="mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Frontend</h3>
            <p className="text-gray-600 dark:text-gray-400">React, Tailwind, Bootstrap</p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-center hover:shadow-lg transition transform hover:-translate-y-2 card-hover"
          >
            <Server size={40} className="mx-auto mb-4 text-secondary" />
            <h3 className="text-xl font-bold mb-2">Backend</h3>
            <p className="text-gray-600 dark:text-gray-400">Node.js, Express, MongoDB</p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-center hover:shadow-lg transition transform hover:-translate-y-2 card-hover"
          >
            <Database size={40} className="mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Tools</h3>
            <p className="text-gray-600 dark:text-gray-400">Git, GitHub, Figma</p>
          </motion.div>
        </motion.div>

        {/* Stats Section - Glassmorphism */}
        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">
            <h2 className="text-4xl font-bold text-primary mb-2">5+</h2>
            <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">
            <h2 className="text-4xl font-bold text-secondary mb-2">1+</h2>
            <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">
            <h2 className="text-4xl font-bold text-primary mb-2">15+</h2>
            <p className="text-gray-600 dark:text-gray-400">Skills Mastered</p>
          </motion.div>
        </motion.div>

        {/* 3D Animation Section */}
        <motion.section 
          className="mt-20 py-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Interactive 3D Experience
          </motion.h2>
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ThreeScene />
          </motion.div>
          <motion.p 
            className="text-center text-gray-600 dark:text-gray-400 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Explore the interactive 3D sphere - drag to rotate!
          </motion.p>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;