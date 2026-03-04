import React from 'react';
import { Github, Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">Rajan<span className="text-primary">.dev</span></h3>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.linkedin.com/in/rajan-nautiyal-142397357" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/Rajan1129" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary">
            <Github size={24} />
          </a>
          <a href="https://www.instagram.com/rajannautiyal1/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary">
            <Instagram size={24} />
          </a>
          <a href="https://www.facebook.com/share/17tzzbXWGr/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary">
            <Facebook size={24} />
          </a>
          <a href="https://youtube.com/@rajannautiyal11" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary">
            <Youtube size={24} />
          </a>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          © 2024 Rajan Nautiyal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;