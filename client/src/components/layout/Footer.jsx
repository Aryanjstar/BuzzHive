import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16">
          {/* Company Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">About Us</h4>
            <p className="text-gray-400">
              Transforming social media strategy with AI-powered analytics.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to={"/"} onClick={scrollToTop}>
                <button className="text-gray-400 hover:text-white transition-colors text-left">
                  Features
                </button>
              </Link>
              <Link to={"/"} onClick={scrollToTop}>
                <button className="text-gray-400 hover:text-white transition-colors text-left">
                  Team
                </button>
              </Link>
              <Link to={"/dashboard"} onClick={scrollToTop}>
                <button className="text-gray-400 hover:text-white transition-colors text-left">
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>Email: 22bcs018@iiitdwd.ac.in</p>
              <p>Location: IIIT Dharwad</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* <p className="text-gray-400 text-center md:text-left">
            © 2024 Insightly. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a> */}
          {/* </div> */}
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-primary-600 text-white p-3 rounded-full shadow-lg hover:bg-primary-700 transition-colors">
        <ArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;