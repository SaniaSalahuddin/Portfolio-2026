import React from "react";
import "../index.css";




import ShinyText from "./ShinyText";
import RotatingText from "./RotatingText";

import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiEnvelope } from "react-icons/hi2";
import HeroExperience from "./HeroModel/HeroExperience.jsx";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen bg-[#09090B] text-white grid grid-cols-1 lg:grid-cols-2 gap-8 pt-28"
    >
      {/* LEFT */}

      <div className="flex flex-col justify-center px-8 lg:px-20">

        <h1 className="hero-title text-5xl lg:text-7xl font-bold font-space lg:mt-10">
          Hi, I'm Sania
        </h1>

        <div className="hero-subtitle mt-5">
          <ShinyText
            text="FULL STACK DEVELOPER"
            className="text-3xl lg:text-4xl font-bold tracking-wider"
            speed={2}
            color="#9CA3AF"
            shineColor="#10B981"
            spread={150}
          />
        </div>

        <p className="hero-description mt-6 text-xl leading-relaxed text-gray-300">
          Crafting modern, responsive and user-friendly
          <br />
          web applications with passion and precision.
        </p>

        <div className="hero-rotate flex items-center gap-3 mt-8 text-2xl">

          <span className="text-zinc-300">
            I build
          </span>

          <RotatingText
            texts={[
              "Modern Websites",
              "MERN Applications",
              "Interactive Experiences",
              "AI Solutions",
              "3D Interfaces",
            ]}
            mainClassName="
              px-4
              py-2
              rounded-xl
              border
              border-emerald-500/30
              bg-emerald-500/10
              text-emerald-400
              font-semibold
              overflow-hidden
            "
            staggerFrom="last"
            staggerDuration={0.03}
            rotationInterval={2200}
            splitBy="characters"
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 350,
            }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            auto
            loop
          />

        </div>

        {/* Buttons */}

        <div className="mt-10 flex items-center gap-4 ">
<a
  href="/Sania_Resume.pdf"
  download="Sania_Resume.pdf"
  className="
    resume-btn
    rounded-full
    bg-emerald-500
    px-7
    py-3
    opacity-0
    font-medium
    text-black
    transition
    hover:bg-transparent
    hover:text-white
    border-2
    border-emerald-500
    inline-block
  "
>
  Download Resume
</a>

          <a
            href="https://github.com/SaniaSalahuddin"
            className="social-btn rounded-full border border-zinc-600 p-3 hover:border-white hover:text-emerald-400"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/sania-salahuddin-1a4781324/"
            className="social-btn rounded-full border border-zinc-600 p-3 hover:border-white hover:text-emerald-400"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="mailto:saniasalahuddin07@gmail.com"
            className="social-btn rounded-full border border-zinc-600 p-3 hover:border-white hover:text-emerald-400"
          >
            <HiEnvelope size={22} />
          </a>

        </div>

      </div>

      {/* RIGHT */}
<div
className=" computer
relative
w-[600px]
h-[600px]
rounded-[50px]
overflow-hidden
bg-gradient-to-br
from-[#0b1115]
to-[#050505]
border border-white/5
shadow-[0_0_80px_rgba(16,185,129,.08)]
"
>
    <HeroExperience />
</div>




    </section>
  );
};

export default Hero;