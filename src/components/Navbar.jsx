import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode }) => {

  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-6 py-4">

        <div className="flex justify-between items-center">

          <Link to="/" className="text-2xl font-bold text-primary">
            Rajan<span className="text-secondary">.dev</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-primary transition">Home</Link>
            <Link to="/about" className="hover:text-primary transition">About</Link>
            <Link to="/projects" className="hover:text-primary transition">Projects</Link>
            <Link to="/skills" className="hover:text-primary transition">Skills</Link>
            <Link to="/contact" className="hover:text-primary transition">Contact</Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">

            {/* Dark Mode */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Hamburger */}
            <button
              className="md:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-4 flex flex-col space-y-4">

            <Link onClick={() => setOpen(false)} to="/">Home</Link>
            <Link onClick={() => setOpen(false)} to="/about">About</Link>
            <Link onClick={() => setOpen(false)} to="/projects">Projects</Link>
            <Link onClick={() => setOpen(false)} to="/skills">Skills</Link>
            <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;