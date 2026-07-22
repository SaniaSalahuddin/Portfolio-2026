import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { skillCategories } from "./skill";
import { techStack } from "./techStack";
import MarqueeRow from "./Marquee";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const section = useRef(null);

  useGSAP(() => {
    gsap.set(
      ".skills-heading, .skill-card, .tech-heading, .tech-card",
      {
        opacity: 0,
        y: 50
      }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });

    tl.to(".skills-heading", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power4.out"
    })
    .to(".skill-card", {
      opacity: 1,
      y: 0,
      scale: 1,
      stagger: 0.15,
      duration: 1,
      ease: "power4.out"
    }, "-=0.7")
    .to(".tech-heading", {
      opacity: 1,
      y: 0,
      duration: 0.8
    }, "-=0.5")
    .to(".tech-card", {
      opacity: 1,
      y: 0,
      rotateY: 0,
      scale: 1,
      stagger: 0.03,
      duration: 0.8,
      ease: "back.out(1.8)"
    }, "-=0.4");

    // floating icons
    gsap.to(".skill-icon", {
      y: -8,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
      stagger: 0.08
    });

    gsap.to(".skill-glow", {
      scale: 1.5,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
      stagger: 0.08
    });

    // tech cards floating
    gsap.to(".tech-card", {
      y: -8,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        each: 0.05,
        from: "random"
      }
    });

  }, { scope: section });

  return (
    <section ref={section} id="skills" className="relative overflow-hidden bg-[#09090B] py-32 px-8 md:px-20">
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[170px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[170px]" />

      <div className="max-w-7xl mx-auto">
        <div className="skills-heading text-center">
          <p className="uppercase tracking-[0.4em] text-emerald-400">Skills</p>
          <h2 className="mt-5 text-5xl font-bold text-white">What I Work With</h2>
        </div>

        {/* Skill Cards */}
        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="skill-card group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 hover:-translate-y-4 hover:border-emerald-400/50 cursor-pointer">
                <div className="skill-glow absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/20 blur-[90px] opacity-40" />
                <div className={`skill-icon relative z-10 flex h-20 w-20 items-center justify-center rounded-[20px] border border-white/10 bg-[#111] ${item.color}`}>
                  <Icon size={40} />
                </div>
                <h3 className="relative z-10 mt-8 text-2xl font-bold text-white">{item.title}</h3>
                <p className="relative z-10 mt-5 text-zinc-400 leading-8">{item.description}</p>
                <div className="relative z-10 my-8 h-px bg-white/10" />
                <div className="relative z-10 flex flex-wrap gap-3">
                  {item.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition-all hover:border-emerald-400 hover:text-emerald-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack Single Marquee Row */}
     {/* Tech Stack Single Marquee Row */}
        <section className="mt-40">
          <div className="tech-heading text-center mb-20">
            <p className="uppercase tracking-[0.45em] text-emerald-400">
              Daily Tech Stack
            </p>
            <h2 className="mt-4 text-5xl font-bold text-white">
              Technologies I Work With
            </h2>
          </div>

          {/* Added py-20 here to prevent top and bottom cut-offs during hover/floating */}
          <div className="relative overflow-hidden py-20">
            {/* LEFT FADE */}
            <div className="absolute left-0 top-0 z-20 h-full w-48 bg-gradient-to-r from-[#09090B] to-transparent pointer-events-none" />

            {/* RIGHT FADE */}
           
            {/* SINGLE ROW */}
            <MarqueeRow 
              items={techStack}
              direction="left"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Skills;