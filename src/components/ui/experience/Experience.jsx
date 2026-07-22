import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useRef} from 'react'
import {
  FaLaptopCode,
  FaBrain,
  FaPalette,
  FaRocket,
  FaSeedling,
  FaCode,
  FaCube,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);
const Experience = () => {
  const experience = useRef(null);
  useGSAP(() => {
    gsap.set(".timeline-item", {
    opacity: 0,
    y: 50,
  });
   const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-header", // Triggers when header enters
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  });
    gsap.to(".timeline-item", {
    opacity: 1,
    y: 0,
    duration: 0.9,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".timeline-item", // Triggers when the first timeline item hits the view
      start: "top 80%",          // Adjust this to control WHEN it starts (80% down the screen)
      toggleActions: "play none none reverse",
    },
  });

  }, {scope:experience});
  return (
       <section ref={experience} id="experience" className="min-h-screen bg-[#09090B] text-white px-8 md:px-20 py-28">
       <div className="mt-32">
          <p className="text-emerald-400 uppercase tracking-[0.3em] text-center">
            My Journey
          </p>

          <h2 className="text-4xl font-bold text-center mt-3">How I Started</h2>

          <div className="relative mt-16 max-w-4xl mx-auto">
            {/* Vertical line */}

            <div className="absolute left-4 top-0 h-full w-[2px] bg-emerald-500/30" />

            

            <div className=" timeline-item relative pl-14 pb-12">
             <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-emerald-500 border-4 border-[#09090B] flex items-center justify-center shadow-lg shadow-emerald-500/40">
    <FaSeedling className="text-white text-sm"/>
</div>

              <h3 className="text-xl font-semibold">
                Started My Programming Journey
              </h3>

              <span className="inline-block mt-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">
    2023
</span>

              <p className="text-zinc-400 mt-3 leading-7">
                Started learning programming fundamentals with HTML, CSS,
                JavaScript, Php and MySql. Built my first web pages and discovered my passion
                for web development.
              </p>
            </div>

            {/* Item */}
             <div className=" timeline-item relative pl-14 pb-12">
<div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-emerald-500 border-4 border-[#09090B] flex items-center justify-center shadow-lg shadow-emerald-500/40">
    <FaCode className="text-white text-sm"/>
</div>
              <h3 className="text-xl font-semibold">Learned MERN Stack</h3>

<span className="inline-block mt-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">
    2024
</span>
              <p className="text-zinc-400 mt-3 leading-7">
                Learned the MERN stack (MongoDB, Express.js, React.js and
                Node.js). Built CRUD applications, authentication systems and
                REST APIs while improving problem-solving skills.
              </p>
            </div> 

            {/* Item */}

             <div className="timeline-item relative pl-14 pb-12">
<div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-emerald-500 border-4 border-[#09090B] flex items-center justify-center shadow-lg shadow-emerald-500/40">
    <FaLaptopCode className="text-white text-sm"/>
</div>
              <h3 className="text-xl font-semibold">
                Building Real-World Projects
              </h3>

<span className="inline-block mt-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">
    2025
</span>
              <p className="text-zinc-400 mt-3 leading-7">
               Worked on multiple full-stack projects, including portfolio websites, AI-powered applications, healthcare systems, and responsive web platforms. Focused on writing clean, maintainable code, enhancing UI/UX, and exploring modern component libraries such as shadcn/ui to build scalable and visually appealing interfaces.
              </p>
            </div> 

            {/* Item */}

             <div className="  timeline-item relative pl-14 pb-12">
<div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-emerald-500 border-4 border-[#09090B] flex items-center justify-center shadow-lg shadow-emerald-500/40">
    <FaCube className="text-white text-sm"/>
</div>
              <h3 className="text-xl font-semibold">
                Exploring Creative Web Development
              </h3>

<span className="inline-block mt-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">
    Present
</span>
              <p className="text-zinc-400 mt-3 leading-7">
               Currently learning Artificial Intelligence, Machine Learning, Data Structures & Algorithms, GSAP, Three.js, and React Three Fiber to build scalable applications and immersive, animation-rich web experiences.
              </p>
            </div> 

             <div className="timeline-item relative pl-14">
<div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-emerald-500 border-4 border-[#09090B] flex items-center justify-center shadow-lg shadow-emerald-500/40">
    <FaRocket className="text-white text-sm"/>
</div>
              <h3 className="text-xl font-semibold mt-4">
                Future Goals{" "}
              
              </h3>
<span className="inline-block mt-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">Future
</span>
              <p className="text-zinc-400 mt-4 leading-7">
                Aspiring to build innovative, AI-driven products, contribute to impactful open-source projects, and grow into a software engineer who creates scalable, high-performance applications.
              </p>
            </div>
          </div>
        </div>
        </section> 
  )
}

export default Experience
