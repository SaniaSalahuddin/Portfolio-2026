import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaLaptopCode,
  FaBrain,
  FaPalette,
  FaRocket,
} from "react-icons/fa";
import InteractiveSkillOrbit from "./InteractiveSkillOrbit.jsx";

const MY_TECH_STACK = [
    { image: { src: "https://cdn.simpleicons.org/nextdotjs/white" }, label: "Next.js" },
    { image: { src: "https://cdn.simpleicons.org/javascript/yellow" }, label: "JavaScript" },
    { image: { src: "https://cdn.simpleicons.org/python/blue" }, label: "Python" },
    { image: { src: "https://cdn.simpleicons.org/openai/white" }, label: "AI & ML" },
    { image: { src: "https://cdn.simpleicons.org/react/cyan" }, label: "React" },
    { image: { src: "https://cdn.simpleicons.org/nodedotjs/green" }, label: "Node.js" },
];


gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef(null);

useGSAP(() => {
  const q = gsap.utils.selector(container);

  // =========================
  // ABOUT HEADER
  // =========================
  gsap.fromTo(
    q(".about-header"),
    {
      opacity: 0,
      y: 60,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: q(".about-header")[0],
        start: "top 80%",
        toggleActions: "restart none none reverse",
      },
    }
  );

  // =========================
  // IMAGE
  // =========================
  gsap.fromTo(
    q(".about-img"),
    {
      opacity: 0,
      x: -80,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: q(".about-img")[0],
        start: "top 80%",
        toggleActions: "restart none none reverse",
      },
    }
  );

  // =========================
  // TEXT
  // =========================
  gsap.fromTo(
    q(".about-text"),
    {
      opacity: 0,
      x: 80,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: q(".about-text")[0],
        start: "top 80%",
        toggleActions: "restart none none reverse",
      },
    }
  );

  // =========================
  // WHAT I BRING TITLE
  // =========================
  gsap.fromTo(
    q(".bring-title"),
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: q(".bring-title")[0],
        start: "top 85%",
        toggleActions: "restart none none reverse",
      },
    }
  );

  // =========================
  // BRING CARDS
  // =========================
  gsap.fromTo(
    q(".bring-card"),
    {
      opacity: 0,
      y: 70,
      scale: 0.9,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      stagger: 0.15,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: q(".bring-card")[0],
        start: "top 85%",
        toggleActions: "restart none none reverse",
      },
    }
  );

  // =========================
  // WHY TITLE
  // =========================
  gsap.fromTo(
    q(".why-title"),
    {
      opacity: 0,
      y: 60,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: q(".why-title")[0],
        start: "top 85%",
        toggleActions: "restart none none reverse",
      },
    }
  );

  // =========================
  // WHY CARDS
  // =========================
  gsap.fromTo(
    q(".why-card"),
    {
      opacity: 0,
      y: 70,
      scale: 0.9,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      stagger: 0.2,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: q(".why-card")[0],
        start: "top 85%",
        toggleActions: "restart none none reverse",
      },
    }
  );

  // =========================
  // QUOTE
  // =========================
  gsap.fromTo(
    q(".quote-section"),
    {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: q(".quote-section")[0],
        start: "top 85%",
        toggleActions: "restart none none reverse",
      },
    }
  );

}, { scope: container });


  return (
    <section ref={container} id="about" className="min-h-screen bg-[#09090B] text-white px-8 md:px-20 py-28">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20 about-header">
          <p className="text-emerald-400 uppercase tracking-[0.3em]">About Me</p>
          <h2 className="text-5xl font-bold mt-4">Get To Know Me</h2>
      
<p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
  Blending creativity, technology, and thoughtful design to build modern digital experiences that inspire and perform.
</p>          
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center about-img">
         <div className="w-[500px] h-[550px] z-0  rounded-3xl border border-white/10 bg-zinc-900 relative overflow-hidden">
  <div className="absolute -top-20 -left-20 w-80 h-64 rounded-full bg-emerald-500/20 blur-[100px]" />
  <div className=" carousel-wrapper">
    <InteractiveSkillOrbit />
  </div> 
</div>
          </div>

          <div className="about-text">
            <p className="text-emerald-400 uppercase tracking-[0.3em]">Who Am I?</p>
            <h3 className="text-4xl font-bold mt-4 leading-tight">
              Turning Ideas Into <br /> Beautiful <span className="text-emerald-400"> Web Experiences.</span>
            </h3>
            <p className="mt-8 text-zinc-400 leading-8">
  I'm a <span className="text-accent">Software Engineer </span> and <span className="text-accent">passionate developer</span>  who enjoys turning ideas into meaningful digital experiences. I believe great products are built by combining creativity, clean architecture, and attention to detail. Every project I work on is an opportunity to solve real-world problems while continuously learning and improving my craft.
</p>
            <div className="mt-10 flex gap-4">
              <a
                href="#project"
                className="rounded-full bg-emerald-500 px-6 py-3 font-semibold text-black transition hover:bg-black hover:text-emerald-500 border-2"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/20 px-6 py-3 transition hover:border-emerald-500 hover:text-emerald-400"
              >
                Contact Me
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div>
                <p className="text-zinc-500 text-sm">Location</p>
                <h4 className="text-lg font-semibold">Pakistan</h4>
              </div>

              <div>
                <p className="text-zinc-500 text-sm">Education</p>
                <h4 className="text-lg font-semibold">
                  BS Software Engineering
                </h4>
              </div>

              <div>
                <p className="text-zinc-500 text-sm">Experience</p>
                <h4 className="text-lg font-semibold">MERN Stack Developer</h4>
              </div>

              <div>
                <p className="text-zinc-500 text-sm">Interests</p>
                <h4 className="text-md font-semibold">
                  3D Web • UI Animation • Creative Coding
                </h4>
              </div>
            </div>

            <div className="mt-24">
              <h3 className="text-3xl font-bold text-center mb-12">
                What I Bring
              </h3>
            </div>
          </div>
        </div>

        {/* Bring Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bring-card rounded-[10px] border border-white/10 bg-zinc-900 p-5 hover:border-emerald-500 transition">
            <FaLaptopCode className="text-3xl text-blue-400 mb-4" />
            <h4 className="text-xl font-semibold">Full Stack Development</h4>
            <p className="text-zinc-400 mt-2 text-sm leading-7">
              Building scalable MERN applications with clean architecture and responsive design.
            </p>
          </div>

          <div className="bring-card rounded-[10px] border border-white/10 bg-zinc-900 p-5 hover:border-emerald-500 transition">
            <FaBrain className="text-3xl text-yellow-400 mb-4" />
            <h4 className="text-xl font-semibold">Problem Solving</h4>
            <p className="text-zinc-400 mt-2 text-sm leading-7">
              Enjoy solving algorithmic challenges and developing efficient, maintainable solutions.
            </p>
          </div>

          <div className="bring-card rounded-[10px] border border-white/10 bg-zinc-900 p-5 hover:border-emerald-500 transition">
            <FaPalette className="text-3xl text-pink-400 mb-4" />
            <h4 className="text-xl font-semibold">UI & Animation</h4>
            <p className="text-zinc-400 mt-2 text-sm leading-7">
              Creating modern interfaces with smooth animations using GSAP, Three.js and Tailwind CSS.
            </p>
          </div>

          <div className="bring-card rounded-[10px] border border-white/10 bg-zinc-900 p-5 hover:border-emerald-500 transition">
            <FaRocket className="text-3xl text-purple-400 mb-4" />
            <h4 className="text-xl font-semibold">Continuous Learning</h4>
            <p className="text-zinc-400 mt-2 text-sm leading-7">
              Constantly exploring new technologies to improve performance, design, and user experience.
            </p>
          </div>
        </div>

        {/* Changed inner section to a div to prevent invalid HTML nesting */}
        <div className="bg-[#09090B] text-white py-28">
          {/* Availability Badge */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 rounded-full">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 text-sm font-medium">Available for Remote, Full-time & Part-time roles</span>
            </div>
          </div>
          
          {/* Why Choose Me Section */}
<div className="mt-24 why-section">
  <h3 className="why-title text-3xl font-bold text-center mb-12 text-white">
    Why Work With <span className="text-emerald-400">Me?</span>
  </h3>
  <div className="grid md:grid-cols-3 gap-8">
    <div className="why-card p-6 border border-emerald-500/20 rounded-[10px] bg-zinc-950/80 hover:border-emerald-500/50 transition-all duration-300 group shadow-lg shadow-emerald-950/20">
      <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-emerald-400 transition-colors">
        Full-Stack Ownership
      </h4>
      <p className="text-zinc-400 text-sm leading-relaxed">
        I bridge the gap between heavy-duty backend logic and polished, responsive interfaces. You get a complete, production-ready product without needing multiple developers.
      </p>
    </div>
    <div className="why-card p-6 border border-emerald-500/20 rounded-[10px] bg-zinc-950/80 hover:border-emerald-500/50 transition-all duration-300 group shadow-lg shadow-emerald-950/20">
      <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-emerald-400 transition-colors">
        Engineering with Purpose
      </h4>
      <p className="text-zinc-400 text-sm leading-relaxed">
        I don't just paste code together—I build maintainable architecture, secure data flows, and clean codebases designed to scale smoothly as your user base grows.
      </p>
    </div>
    <div className="why-card p-6 border border-emerald-500/20 rounded-[10px] bg-zinc-950/80 hover:border-emerald-500/50 transition-all duration-300 group shadow-lg shadow-emerald-950/20">
      <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-emerald-400 transition-colors">
        Detail-Oriented & Adaptable
      </h4>
      <p className="text-zinc-400 text-sm leading-relaxed">
        Whether it's squashing hard-to-find bugs, optimizing performance, or learning a new tool stack on the fly, I focus on delivering clean execution every single time.
      </p>
    </div>
  </div>
</div>
        </div>

        <div className="quote-section mt-24 text-center max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold italic">
            "Every project is an opportunity to learn, innovate, and create something meaningful."
          </h3>
        </div>
      </div> 
    </section>
  );
};

export default About; // (Or export default About; depending on your setup)