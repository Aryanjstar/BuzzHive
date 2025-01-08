import React from "react";
import { motion } from "framer-motion";
import { BarChart2, Share2, Globe, LineChart, Target, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <BarChart2 size={24} />,
      title: "Analytics",
      description: "Real-time data insights",
    },
    {
      icon: <Globe size={24} />,
      title: "Global Reach",
      description: "Worldwide audience",
    },
    {
      icon: <LineChart size={24} />,
      title: "Growth",
      description: "Track performance",
    },
    {
      icon: <Target size={24} />,
      title: "Insights",
      description: "Know your audience",
    },
    {
      icon: <Zap size={24} />,
      title: "Automation",
      description: "Easy scheduling",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <h2 className="text-5xl font-extrabold text-white mb-4">
            Stellar Features
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Essential tools for your success
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative w-40 h-40 flex flex-col items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-xl p-6 text-center">
              <div className="text-2xl text-white mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-200">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Rotating animation layer */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div
            className="w-96 h-96 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-10 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
