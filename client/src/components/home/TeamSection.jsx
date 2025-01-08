import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, GraduationCap } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Aryan Jaiswal",
      role: "Designer & ML Developer",
      image:
        "aryan.jpg",
      graduationYear: "2026",
      college: "IIIT DHARWAD",
      linkedin: "https://linkedin.com/in/aryanjstar/",
      github: "https://github.com/aryanjstar",
    },
    {
      name: "Vinay Jain",
      role: "Fullstack Developer",
      image:
        "vinay.jpg",
      graduationYear: "2026",
      college: "IIIT DHARWAD",
      linkedin: "https://www.linkedin.com/in/vinayj767/",
      github: "https://github.com/vinayj767",
    },
    {
      name: "Pranay Ch.",
      role: "Langflow Developer",
      image:
        "pranay.jpg",
      graduationYear: "2026",
      college: "IIIT Dharwad",
      linkedin: "https://www.linkedin.com/in/chpranay/",
      github: "https://github.com/FalconCod",
    },
  ];

  return (
    <section
      id="team"
      className="py-20 px-4 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <h2 className="text-5xl font-extrabold text-yellow-400 mb-4">
            Meet the Cosmic Team
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            The brilliant stars behind NebulaAnalytics, pushing the boundaries of technology and innovation.
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-10">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 p-6 text-center w-64">
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover ring-4 ring-yellow-400 group-hover:ring-yellow-500 transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {member.name}
              </h3>
              <p className="text-yellow-400 font-medium mb-3">
                {member.role}
              </p>
              <div className="flex items-center justify-center gap-2 text-gray-400 mb-4">
                <GraduationCap size={18} className="text-yellow-500" />
                <span className="text-sm">
                  {member.college} ({member.graduationYear})
                </span>
              </div>
              <div className="flex justify-center gap-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-yellow-400 hover:bg-gray-700 rounded-full transition-colors duration-300">
                  <Linkedin size={20} />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-yellow-400 hover:bg-gray-700 rounded-full transition-colors duration-300">
                  <Github size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
