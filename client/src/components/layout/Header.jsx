import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

// Enhanced Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-800/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white cursor-pointer flex gap-4 justify-center items-center">
            {/* <img src="/logomain.svg" alt="Logo" className="h-10" /> */}
          </div>

          {/* Mobile Menu Button */}
          <Link
            to="/dashboard"
            className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center gap-2">
            Get Started
            <ArrowRight size={24} />
          </Link>
        </nav>
      </div>

      
    </header>
  );
};

export default Header;
