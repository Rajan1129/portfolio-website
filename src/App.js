import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from "./pages/Skills";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loading animation ke liye
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-primary mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-primary">Loading...</h2>
          <p className="text-gray-600 dark:text-gray-400">Rajan</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 relative ${darkMode ? 'dark' : ''}`}>
        {/* Global Premium Grid Pattern Background */}
        <div className="grid-bg-container">
          <div className="grid-bg"></div>
          <div className="radial-glow"></div>
          <div className="radial-glow-secondary"></div>
        </div>
        
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;