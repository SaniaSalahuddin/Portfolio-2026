import React, { useState } from 'react';
import { Code2, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useCallback } from "react";


// --- Helper Functions ---
const srcOf = (v) => (typeof v === "string" ? v : v?.src || "");

function modIdx(i, n) { return ((i % n) + n) % n; }
function easeCubicInOut(p) { return p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2; }

// --- Klarna Carousel Component ---
function KlarnaCarousel({
    items = [],
    cardRadius = 16,
    imageWidth = 300,
    imageHeight = 280,
    buttonCount = 8, // Accommodates up to 8 projects
    buttonSize = 52,
    buttonRadius = 14,
    curve = 4.2,     // Adjusted curve arc to elegantly handle 8 items
    gap = 24,        // Spacing between items
    labelShow = true,
    labelX = 0,
    labelY = 0,
    labelColor = "#ffffff",
    labelFont = { fontFamily: "inherit", fontWeight: 600, fontSize: 18, lineHeight: "1.3em", letterSpacing: "0em" },
    backgroundColor = "transparent",
    style = {},
    currentIndex = 0,
    onSelect = () => {}
}) {
    const list = items;
    const M = list.length;
    const posRef = useRef(currentIndex);
    const [posDisplay, setPosDisplay] = useState(currentIndex);
    const rafRef = useRef(null);
    const animRef = useRef({ startPos: 0, targetPos: 0, startTime: 0 });
    const [dir, setDir] = useState(1);

    // Sync internal carousel position when external currentIndex changes
    useEffect(() => {
        let delta = currentIndex - Math.round(posRef.current);
        delta = ((delta % M) + M) % M;
        if (delta > M / 2) delta -= M;
        if (delta !== 0) {
            setDir(Math.sign(delta));
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            animRef.current = { startPos: posRef.current, targetPos: posRef.current + delta, startTime: performance.now() };
            
            function tick(now) {
                const { startPos, targetPos, startTime } = animRef.current;
                const progress = Math.min(1, (now - startTime) / 320);
                posRef.current = startPos + (targetPos - startPos) * easeCubicInOut(progress);
                setPosDisplay(posRef.current);
                if (progress < 1) rafRef.current = requestAnimationFrame(tick);
                else { posRef.current = targetPos; setPosDisplay(targetPos); rafRef.current = null; }
            }
            rafRef.current = requestAnimationFrame(tick);
        }
    }, [currentIndex, M]);

    const active = modIdx(Math.round(posDisplay), M);
    const effectiveButtonCount = Math.min(buttonCount, M);
    const half = Math.floor(effectiveButtonCount / 2);

    const cardRadiusPx = (Math.max(0, Math.min(20, cardRadius)) / 20) * (Math.min(imageWidth, imageHeight) / 2);
    const buttonRadiusPx = (Math.max(0, Math.min(20, buttonRadius)) / 20) * (buttonSize / 2);
    const t = Math.max(0.0001, Math.min(10, curve) / 10);
    const step = buttonSize + gap;
    const dPsi = ((Math.PI * 2) / M) * t;
    const R = step / (2 * Math.sin(dPsi / 2));
    const baseTop = buttonSize * 0.7;
    const fadeInner = Math.max(0, half - 0.6);
    const fadeEnd = half + 0.4;
    const maxPsi = Math.min(Math.PI, fadeEnd * dPsi);
    const stripHeight = baseTop + R * (1 - Math.cos(maxPsi)) + buttonSize / 2 + 12;

    const select = useCallback((itemIdx) => {
        onSelect(itemIdx);
    }, [onSelect]);

    useEffect(() => { return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); }; }, []);

    // Render all unique items dynamically so all 8 projects are accounted for
    const renderItems = Array.from({ length: M }, (_, i) => i);

    function getVisualSlot(itemIdx) {
        let slot = itemIdx - posDisplay;
        slot = ((slot % M) + M) % M;
        if (slot > M / 2) slot -= M;
        return slot;
    }

    function slotStyle(slot) {
        const angle = slot * dPsi;
        const x = R * Math.sin(angle);
        const y = R * (1 - Math.cos(angle));
        const deg = (angle * 180) / Math.PI;
        const absSlot = Math.abs(slot);
        
        // Hide items outside of the visible view buffer cleanly
        if (absSlot > half + 0.8) {
            return { x, y: -9999, deg: 0, scale: 0, opacity: 0, zIndex: -1 };
        }

        const depth = Math.max(0, 1 - (0.35 * absSlot) / Math.max(1, half));
        const scale = 0.55 + 0.45 * depth;
        const opacity = absSlot <= fadeInner ? 1 : Math.max(0, 1 - (absSlot - fadeInner) / (fadeEnd - fadeInner));
        const zIndex = Math.round(depth * 100) + (absSlot < 0.5 ? 100 : 0);
        return { x, y, deg, scale, opacity, zIndex };
    }

    const imageVariants = {
        enter: (d) => ({ x: d * 200, y: 100, opacity: 0, scale: 0.85, rotate: d * 5 }),
        center: { x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 },
        exit: (d) => ({ x: -d * 200, y: 100, opacity: 0, scale: 0.85, rotate: -d * 5 }),
    };

    return (
        <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, overflow: "hidden", background: backgroundColor, ...style }}>
            <div style={{ position: "relative", width: imageWidth, height: imageHeight, borderRadius: cardRadiusPx, overflow: "hidden", boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" }}>
                <AnimatePresence mode="popLayout" initial={false} custom={dir}>
                    <motion.div key={active} custom={dir} variants={imageVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} style={{ position: "absolute", inset: 0 }}>
                        <img src={srcOf(list[active]?.image)} alt="" draggable={false} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    </motion.div>
                </AnimatePresence>
            </div>
            
            {labelShow && (
                <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                        key={`label-${active}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        style={{ flex: "0 0 auto", maxWidth: "100%", textAlign: "center", color: labelColor, transform: `translate(${labelX}px, ${labelY}px)`, fontFamily: labelFont?.fontFamily, fontWeight: labelFont?.fontWeight, fontSize: labelFont?.fontSize, fontStyle: labelFont?.fontStyle, letterSpacing: labelFont?.letterSpacing, lineHeight: labelFont?.lineHeight }}
                    >
                        {list[active]?.label ?? ""}
                    </motion.div>
                </AnimatePresence>
            )}

            <div style={{ position: "relative", width: "100%", height: stripHeight, overflow: "hidden", flex: "0 0 auto" }}>
                {renderItems.map((itemIdx) => {
                    const slot = getVisualSlot(itemIdx);
                    const { x, y, deg, scale, opacity, zIndex } = slotStyle(slot);
                    if (opacity === 0) return null;
                    
                    const isActive = itemIdx === active;
                    const item = list[itemIdx];

                    return (
                        <div key={itemIdx} style={{ position: "absolute", left: "50%", top: baseTop, marginLeft: -buttonSize / 2, marginTop: -buttonSize / 2, width: buttonSize, height: buttonSize, transform: `translate(${x}px, ${y}px) rotate(${deg}deg) scale(${scale})`, transformOrigin: "center", opacity, zIndex, willChange: "transform, opacity" }}>
                            <div
                                style={{ width: "100%", height: "100%", borderRadius: buttonRadiusPx, overflow: "hidden", position: "relative", transform: `rotate(${-deg}deg)`, transformOrigin: "center", background: isActive ? "#ffffff" : "rgba(255,255,255,0.15)", border: isActive ? "2px solid #6366f1" : "1px solid rgba(255,255,255,0.25)", backdropFilter: isActive ? undefined : "blur(6px)", WebkitBackdropFilter: isActive ? undefined : "blur(6px)", cursor: "pointer", WebkitTapHighlightColor: "transparent", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: isActive ? "0 4px 15px rgba(99, 102, 241, 0.5)" : "none" }}
                                onClick={() => select(itemIdx)}
                            >
                                {item?.image && (
                                    <img src={srcOf(item.image)} alt="" draggable={false} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

// --- Main Project Component (8 Projects) ---
const projects = [
  {
    id: 1,
    title: "MedFusion Healthcare Platform",
    description: "A full-stack web-based healthcare management application featuring scheduling, user registrations, and notification center dashboards.",
     tech:[
      "HTML5",
      "CSS3",
      "PHP",
      "MySql",
      "JavaScript"
   ],

    image: "/images/medfusion.png",
    
    github: "https://github.com/SaniaSalahuddin/webeng-project-MedFusion",
    live: "https://med-fusion.xo.je/index.php"
  },
  {
    id: 2,
    title: "RoadSense Pro",
    description: "A web dashboard application to run automated analysis on road infrastructure defects using custom-trained models and interactive charts.",
     tech:[
      "React",
      "Python",
      "TailwindCSS",
      "FastAPI",
      "TensorFlow",
      "AI"
   ],

    image: "/images/road.png",
    github: "https://github.com/SaniaSalahuddin/Road-Issue-Detection-Ai-Model-",
    live: "https://www.linkedin.com/posts/sania-salahuddin-1a4781324_ai-fastapi-machinelearning-ugcPost-7457319337285066752-6eRv/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFH748wBqfNSEtjtePjjt0xM3wV0YgYUw7M"
  },
  {
    id: 3,
    title: "Intrusion Detection System",
    description: "An ML-powered network security tool utilizing the NSL-KDD dataset framework to ingest and analyze network logs and traffic captures.",
     tech:[
      "React",
      "Python",
      "FastAPI",
      "MongoDB",
      "Express"
   ],

    image: "/images/ids.png",
    github: "https://github.com/SaniaSalahuddin/Secure-IDS",
    live: "https://www.linkedin.com/posts/sania-salahuddin-1a4781324_cybersecurity-machinelearning-fullstackdevelopment-ugcPost-7468645425890222081-iJrh/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFH748wBqfNSEtjtePjjt0xM3wV0YgYUw7M"
  },
  {
    id: 4,
    title: "Lynkbit",
    description: "A web-based link-sharing profile application built with Next.js to handle custom profile handles and dynamic link generation.",
     tech:[
      "Express",
      "Nextjs",
      "TailwindCSS",
      "MongoDB"
   ],

    image: "/images/lynkbit.png",
    github: "https://github.com/SaniaSalahuddin/Lynkbit",
    live: "https://www.linkedin.com/posts/sania-salahuddin-1a4781324_nextjs-reactjs-frontenddevelopment-ugcPost-7465761004577153024-4x3k/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFH748wBqfNSEtjtePjjt0xM3wV0YgYUw7M"
  },
  {
    id: 5,
    title: "CollabDoc",
    description: "A real-time collaborative document editor enabling multiple users to edit, share, and sync documents instantly with live collaboration features.",
    tech:[
      "React",
      "Socket.IO",
      "Express",
      "TailwindCSS",
      "MongoDB"
   ],

    image: "/images/collba.png",
    github: "https://github.com/SaniaSalahuddin/CollabDoc",
    live: "https://www.linkedin.com/posts/sania-salahuddin-1a4781324_reactjs-nodejs-expressjs-ugcPost-7479428325354967040-Et9J/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFH748wBqfNSEtjtePjjt0xM3wV0YgYUw7M"
  },
  {
    id: 6,
    title: "Location Tracker",
    description: "A real-time location tracking application built with Express and Socket.IO that enables live GPS updates, instant data synchronization, and interactive user tracking",
    tech:[
      "React",
      "Socket.IO",
      "TailwindCSS",
      "Express",
      "Leaflet.js"
   ],

    image: "/images/location.png",
    github: "https://github.com/SaniaSalahuddin/Location-Tracker",
    live: "https://www.linkedin.com/posts/sania-salahuddin-1a4781324_project-spotlight-real-time-location-activity-7430520405934809088-FNay?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFH748wBqfNSEtjtePjjt0xM3wV0YgYUw7M"
  },
  {
    id: 7,
    title: "Aural News",
    description: "A real-time news platform that integrates News API to deliver categorized news updates with a clean and user-friendly browsing experience",
    tech:[
      "React",
      "NewsAPI",
      "TailwindCSS",
      
   ],

    image: "/images/aural.png",
    github: "https://github.com/SaniaSalahuddin/Aural-News",
    live: "https://www.linkedin.com/posts/sania-salahuddin-1a4781324_reactjs-webdevelopment-newsapp-activity-7373292338913107968-cbmD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFH748wBqfNSEtjtePjjt0xM3wV0YgYUw7M"
  },
  {
    id: 8,
    title: "Trimly",
    description: "A URL shortening platform that creates compact, shareable links with fast redirection and efficient link management features.",
     tech:[
      "Next",
      "TailwindCSS",
      "MongoDB"
   ],

    image: "/images/trimly.png",
    github: "https://github.com/SaniaSalahuddin/Trimly-Website",
    live: "https://www.linkedin.com/posts/sania-salahuddin-1a4781324_webdeveloper-coder-activity-7370397087571652608-KNQT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFH748wBqfNSEtjtePjjt0xM3wV0YgYUw7M"
  }
];

export default function Project() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeProject = projects[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const carouselItems = projects.map(p => ({
    image: p.image,
    label: p.title
  }));

  return (
    <section id="project" className="py-16 px-4 max-w-7xl mx-auto ">
<div className="text-center mb-20">
  <p className="uppercase tracking-[0.35em] text-emerald-400 font-medium">
    My Work
  </p>

  <h2 className="text-5xl md:text-6xl font-bold mt-4">
    Projects That
    <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-lime-300 bg-clip-text text-transparent">
      {" "}Tell My Story
    </span>
  </h2>

  <p className="text-zinc-400 mt-8 max-w-3xl mx-auto text-lg leading-8">
    Every project here represents a challenge I enjoyed solving and an
    opportunity to learn something new. From full-stack web applications to
    AI-powered experiments, each one has helped shape my journey as a
    developer and reflects my passion for building meaningful digital
    experiences.
  </p>
</div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* LEFT SIDE: Active Project Card Details & Controls */}
       
<div className="lg:col-span-6 relative overflow-hidden rounded-3xl border border-emerald-500/10 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 p-7 transition-all duration-500 hover:border-emerald-400/30 hover:shadow-[0_0_50px_rgba(16,185,129,.15)]">

  {/* Project Image */}
  <div className="relative h-72 overflow-hidden rounded-2xl group">
    <img
      src={activeProject.image}
      alt={activeProject.title}
      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

    {/* Badge */}
    <div className="absolute left-5 top-5 rounded-full border border-emerald-400/30 bg-black/40 px-4 py-2 backdrop-blur-md">
      <p className="text-xs uppercase tracking-[0.3em] text-emerald-300">
        Featured Project
      </p>
    </div>

    {/* Project Number */}
    <div className="absolute right-6 bottom-6 text-7xl font-black text-white/10">
      0{activeProject.id}
    </div>
  </div>

  {/* Content */}
  <div className="mt-6">

    <h2 className="text-4xl font-bold text-white">
      {activeProject.title}
    </h2>

    <p className="mt-5 max-w-xl leading-8 text-zinc-400">
      {activeProject.description}
    </p>

    {/* Tech Stack */}
    <div className="mt-6 flex flex-wrap gap-3">

      {activeProject.tech.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300"
        >
          {tech}
        </span>
      ))}

    </div>

    {/* Buttons */}
    <div className="mt-8 flex gap-5">

      <a
        href={activeProject.github}
        target="_blank"
        className="flex items-center gap-3 rounded-xl border border-zinc-700 px-6 py-3 text-white transition hover:border-emerald-400 hover:bg-emerald-500/10"
      >
        <Code2 size={20} />
        Source Code
      </a>

      <a
        href={activeProject.live}
        target="_blank"
        className="flex items-center gap-3 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-emerald-400"
      >
        <ExternalLink size={20} />
        Live Demo
      </a>

    </div>

    {/* Bottom */}
    <div className="mt-8 flex items-center justify-between border-t border-zinc-800 pt-6">

      <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
        {String(currentIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
      </p>

      <div className="flex gap-3">

        <button
          onClick={handlePrev}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 transition hover:border-emerald-400 hover:bg-emerald-500/10"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={handleNext}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 transition hover:border-emerald-400 hover:bg-emerald-500/10"
        >
          <ChevronRight />
        </button>

      </div>

    </div>

  </div>

</div>


        {/* RIGHT SIDE: Expanded Klarna Carousel for 8 Projects */}
        <div className="lg:col-span-6 h-[600px] flex items-center justify-center">
          <KlarnaCarousel 
            items={carouselItems}
            currentIndex={currentIndex}
            onSelect={(index) => setCurrentIndex(index)}
            imageWidth={300}
            imageHeight={240}
            buttonSize={48}
            buttonRadius={12}
            gap={20}
            curve={4.2}
            labelShow={true}
            labelFont={{ fontFamily: "inherit", fontWeight: 700, fontSize: 16 }}
            style={{ width: "100%", height: "100%" }}
          />
        </div>

      </div>
    </section>
  );
}