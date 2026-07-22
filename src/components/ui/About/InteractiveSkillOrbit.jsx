import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Comprehensive skill orbits including MongoDB, Express, MySQL, Git, and Figma
const skillOrbits = [
  // Inner Ring
  { name: "React", level: "Frontend UI", color: "from-cyan-500 to-blue-500", radius: 85, duration: 22, size: 48 },
  { name: "Python", level: "Scripting / Backend", color: "from-yellow-500 to-amber-600", radius: 85, duration: 22, delay: -11, size: 48 },

  // Middle-Inner Ring
  { name: "Express", level: "Node Framework", color: "from-zinc-600 to-zinc-800", radius: 135, duration: 28, delay: -4, size: 48 },
  { name: "MongoDB", level: "NoSQL Database", color: "from-emerald-600 to-green-700", radius: 135, duration: 28, delay: -14, size: 48 },
  { name: "MySQL", level: "Relational DB", color: "from-blue-500 to-indigo-600", radius: 135, duration: 28, delay: -21, size: 48 },

  // Middle-Outer Ring
  { name: "Next.js", level: "Full-Stack Web", color: "from-zinc-700 to-zinc-900 border border-zinc-600", radius: 185, duration: 35, delay: -7, size: 50 },
  { name: "PHP", level: "Backend Logic", color: "from-indigo-500 to-purple-500", radius: 185, duration: 35, delay: -18, size: 48 },
  { name: "Machine Learning", level: "AI & CNN Models", color: "from-emerald-500 to-teal-600", radius: 185, duration: 35, delay: -27, size: 50 },

  // Outer Ring
  { name: "Git", level: "Version Control", color: "from-orange-600 to-red-600", radius: 235, duration: 42, delay: -5, size: 46 },
  { name: "Figma", level: "UI / UX Design", color: "from-pink-500 to-rose-600", radius: 235, duration: 42, delay: -16, size: 46 },
  { name: "Wireshark", level: "Packet Analysis", color: "from-blue-600 to-cyan-700", radius: 235, duration: 42, delay: -25, size: 46 },
  { name: "Tailwind", level: "Styling System", color: "from-cyan-400 to-teal-500", radius: 235, duration: 42, delay: -34, size: 46 }
];

export default function InteractiveSkillOrbit({ onSelectSkill }) {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="relative w-full h-[550px] flex items-center justify-center overflow-hidden rounded-2xl bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-2xl shadow-2xl">
      
      {/* Background Ambient Glows */}
      <div className="absolute w-80 h-80 rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute w-80 h-80 rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />

      {/* Orbit Rings Guides */}
      <div className="absolute w-[170px] h-[170px] rounded-full border border-zinc-800/50 border-dashed pointer-events-none" />
      <div className="absolute w-[270px] h-[270px] rounded-full border border-zinc-800/40 border-dashed pointer-events-none" />
      <div className="absolute w-[370px] h-[370px] rounded-full border border-zinc-800/30 border-dashed pointer-events-none" />
      <div className="absolute w-[470px] h-[470px] rounded-full border border-zinc-800/20 border-dashed pointer-events-none" />

      {/* Central Core Node */}
      <div className="relative z-20 flex flex-col items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-700/80 shadow-2xl shadow-indigo-500/30 text-center p-3 group cursor-pointer">
        <div className="absolute inset-0 rounded-3xl bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="text-[7px] font-extrabold text-indigo-400  uppercase tracking-widest">Expertise</span>
        <span className="text-sm font-black text-white mt-0.5 tracking-tight">Full Stack</span>
        <span className="text-[9px] text-zinc-400 mt-0.5">& Security</span>
      </div>

      {/* Orbiting Skill Nodes */}
      {skillOrbits.map((skill, index) => {
        const isHovered = hoveredSkill === skill.name;

        return (
          <div
            key={index}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            {/* Parent rotator container */}
            <motion.div
              style={{ width: skill.radius * 2, height: skill.radius * 2 }}
              className="absolute rounded-full pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{
                duration: skill.duration,
                repeat: Infinity,
                ease: "linear",
                delay: skill.delay || 0,
              }}
            >
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Counter-rotator wrapper to keep text perfectly upright */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: skill.duration,
                    repeat: Infinity,
                    ease: "linear",
                    delay: skill.delay || 0,
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.25, zIndex: 60 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onSelectSkill && onSelectSkill(skill)}
                    style={{ width: skill.size, height: skill.size }}
                    className={`relative flex items-center justify-center rounded-2xl bg-gradient-to-br ${skill.color} p-0.5 shadow-xl cursor-pointer transition-shadow ${
                      isHovered ? "shadow-indigo-500/60 ring-2 ring-white" : "shadow-black/60"
                    }`}
                  >
                    {/* Inner card surface */}
                    <div className="w-full h-full bg-zinc-900/95 backdrop-blur-md rounded-[14px] flex flex-col items-center justify-center overflow-hidden p-1 text-center">
                      <span className="text-[9px] font-bold text-white tracking-tight leading-none">
                        {skill.name}
                      </span>
                    </div>

                    {/* Floating Tooltip Label */}
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className="absolute -bottom-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-700 text-nowrap shadow-2xl z-50 pointer-events-none"
                      >
                        <p className="text-[11px] font-bold text-white">{skill.name}</p>
                        <p className="text-[8px] text-zinc-400 text-center tracking-wide">{skill.level}</p>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        );
      })}

      {/* Interactive Helper Footer */}
      <div className="absolute bottom-3 left-0 right-0 text-center pointer-events-none">
        <span className="text-[10px] text-zinc-500 font-semibold tracking-widest uppercase">
          Interactive Skill Matrix 
        </span>
      </div>

    </div>
  );
}