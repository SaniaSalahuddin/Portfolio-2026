import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import Scene from "./three/Scene";
import TextReveal from "./TextReveal";

const terminalLines = [
  "> portfolio.init()",
  "Loading React .......... ✓",
  "Loading Node.js ........ ✓",
  "Connecting Express ..... ✓",
  "Syncing MongoDB ........ ✓",
  "Portfolio Ready ✓",
];
const skills = ["MERN", "PHP", "MySql", "AI/ML", "C++","GSAP"];


const SplashScreen = ({ onComplete }) => {
  const terminalRef = useRef(null);
  const introRef = useRef(null);
  const roleRef = useRef(null);
  const subtitleRef = useRef(null);
  const progressRef = useRef(null);
  const linesRef = useRef([]);
    const pills = useRef([]);


  useEffect(() => {
    // Initial state
    gsap.set(introRef.current, {
      opacity: 0,
      y: 50,
    });

    gsap.set(roleRef.current, {
      opacity: 0,
      y: 20,
    });

    gsap.set(subtitleRef.current, {
      opacity: 0,
      y: 20,
    });
        gsap.set(pills.current,{opacity:0, y:20, scale:.9});


   gsap.set(progressRef.current, {
  width: "0%",
});
    const tl = gsap.timeline();

    // ==========================
    // TERMINAL
    // ==========================

    tl.from(linesRef.current, {
      opacity: 0,
      y: 20,
      stagger: 0.3,
      duration: 0.45,
      ease: "power3.out",
    });

    tl.to({}, { duration: 0.5 });

    tl.to(terminalRef.current, {
      opacity: 0,
      duration: 0.7,
      ease: "power2.inOut",
    });

  

    tl.to(
      introRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
      },
      "-=0.3"
    );

    tl.to(
      roleRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
      },
      "-=0.5"
    );

    tl.to(
      subtitleRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
      },
      "-=0.4"
    );
      tl.to(pills.current,{
        opacity:1,y:0,scale:1,stagger:.08,duration:.35
      })
tl.to(progressRef.current, {
  width: "100%",
  duration: 1.4,
  ease: "power2.out",
});
      tl.to({}, {duration:1})
      



    // Fade everything

    tl.to(
      introRef.current,
      {
        opacity: 0,
        duration: 0.8,
      },
      "-=0.2"
    );

    tl.call(() => {
      onComplete();
    });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <section className="relative w-screen h-screen overflow-hidden bg-[#090909] text-white">

      <Scene />

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,transparent_35%,rgba(0,0,0,0.75)_100%)]" />

      {/* ================= TERMINAL ================= */}

      <div
        ref={terminalRef}
        className="absolute inset-0 z-20 flex items-center justify-center"
      >
        <div className="space-y-3 text-left font-mono text-gray-400">
          {terminalLines.map((line, index) => (
            <p className="font-bold"
              key={index}
              ref={(el) => (linesRef.current[index] = el)}
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* ================= INTRO ================= */}

      <div
        ref={introRef}
        className="absolute inset-0 z-30 flex flex-col items-center justify-center opacity-0"
      >
        <div className="absolute w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[180px]" />

        <div className="relative">
          <div className="absolute inset-0 blur-3xl bg-emerald-500/10" />

          <TextReveal
            text="SANIA"
            className="relative text-8xl font-bold"
          />
        </div>

        <TextReveal
          text="SALAHUDDIN"
          className="text-7xl font-bold"
        />

        <p
          ref={roleRef}
          className="mt-6 tracking-[0.25em] text-emerald-500"
        >
          MERN STACK DEVELOPER
        </p>

        <p
          ref={subtitleRef}
          className="mt-3 text-gray-400 font-bold"
        >
          Building modern web experiences
        </p>
         <div className="mt-10 flex flex-wrap gap-4">
          {skills.map((s,i)=>(
            <div
              key={s}
              ref={el=>pills.current[i]=el}
              className="rounded-full font-bold border border-cyan-400/30 px-6 py-3 text-sm hover:bg-cyan-400/10 transition"
            >
              {s}
            </div>
          ))}
        </div>


   <div className="mt-10 w-72">

  <div className="flex justify-between text-xs tracking-[0.4em] text-zinc-400 uppercase mb-3">
    <span>Complete</span>
    <span>100%</span>
  </div>

  <div className="h-[3px] overflow-hidden rounded-full bg-zinc-800">
    <div
      ref={progressRef}
      className="h-full w-0 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600"
    />
  </div>

</div>
</div>

    </section>
  );
};

export default SplashScreen;
