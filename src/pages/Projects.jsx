import React from 'react';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: "Spotify Web Application Clone",
      description: "A fully functional Spotify clone with music streaming features",
      link: "https://github.com/Rajan1129/SpotifyClone",
      tech: ["React", "Node.js", "MongoDB"]
    }
  ];

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:underline"
              >
                <Github className="mr-2" size={16} />
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;