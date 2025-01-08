import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Camera } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen relative bg-gradient-to-b from-black via-gray-900 to-purple-900">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/3 -right-1/3 w-full h-full bg-indigo-700 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-1/3 -left-1/3 w-full h-full bg-pink-700 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto min-h-screen flex items-center px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
          {/* Text content on the left */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>
            {/* <div className="inline-flex items-center gap-2 bg-indigo-800 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles size={16} />
              Galactic Influence
            </div> */}

            <h1 className="text-6xl lg:text-8xl font-extrabold text-white leading-tight">
              Illuminate the Cosmos <br />
              <span className="text-pink-400">Lead the Stars</span>
            </h1>

            <p className="text-2xl text-gray-300 max-w-xl">
              Harness AI-driven tools and insights to amplify your influence and captivate audiences across the galaxy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* <Link
                to="/features"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-700 text-white px-8 py-4 rounded-lg hover:opacity-90 transition-transform duration-300 transform hover:scale-105 shadow-lg">
                Get Started
                <ArrowRight size={20} />
              </Link> */}

              <Link
                to="https://youtu.be/TGx_P_ZqODM?si=xarEUl8PBNHYYbXy"
                className="inline-flex items-center justify-center gap-2 bg-gray-800 text-pink-400 px-8 py-4 rounded-lg hover:bg-gray-700 transition-transform duration-300 transform hover:scale-105 border border-gray-700 shadow-sm">
                Watch Demo
                <Camera size={20} />
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-8">
              {/* <div className="flex -space-x-4">
                {[...Array(4)].map((_, i) => (
                  <motion.img
                    key={i}
                    src={`https://picsum.photos/50/50?random=${i}`}
                    alt={`User ${i + 1}`}
                    className="w-12 h-12 rounded-full border-2 border-gray-800"
                    whileHover={{ scale: 1.1 }}
                  />
                ))}
              </div> */}
              <div>
                {/* <p className="text-gray-400">
                  <span className="font-bold text-pink-400">500+</span>{" "}
                  influencers onboard
                </p> */}
              </div>
            </div>
          </motion.div>

          {/* Image moved to the right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-600 to-indigo-700 rounded-2xl blur-2xl opacity-20 transform rotate-6"></div>
            <motion.img
              src="/hero.png"
              alt="Influencer Dashboard"
              className="relative rounded-2xl shadow-2xl border border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
