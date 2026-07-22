import { motion } from "motion/react";

export default function TextReveal({ text, className }) {
  return (
    <div className={`flex overflow-hidden ${className}`}>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{
            y: 120,
            opacity: 0,
            rotateX: -90,
          }}
          animate={{
            y: 0,
            opacity: 1,
            rotateX: 0,
          }}
          transition={{
            delay: index * 0.05,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
}