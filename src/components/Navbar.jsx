import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="fixed w-full z-50 bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            Rajan<span className="text-secondary">.dev</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-primary transition">Home</Link>
            <Link to="/about" className="hover:text-primary transition">About</Link>
            <Link to="/projects" className="hover:text-primary transition">Projects</Link>
            <Link to="/contact" className="hover:text-primary transition">Contact</Link>
            <Link to="/skills">Skills</Link>
          </div>

          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;