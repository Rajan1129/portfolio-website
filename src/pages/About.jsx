import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
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
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h1>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Tailwind', 'Bootstrap', 'Git', 'GitHub', 'Figma', 'Canva', 'Photoshop', 'Python', 'Microsoft Office'].map((skill) => (
                <motion.span 
                  key={skill}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            <div className="space-y-4">
              <motion.div 
                className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover:shadow-lg transition"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-2">
                  <Briefcase className="mr-2 text-primary" />
                  <h3 className="font-bold">MERN Stack Intern</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">Excellence Technology</p>
                <p className="text-sm text-gray-500">August 2023 - February 2024</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;