import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/ui/newNav/Navbar.jsx";
import Hero from "./components/Hero";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Home from "./components/ui/Home.jsx"
import About from "./components/ui/About/About";
import Skills from "./components/ui/Skill/Skills.jsx";
import Project from "./components/ui/projects/Project.jsx";
import Experience from "./components/ui/experience/Experience";
import  Contact  from "./components/ui/contact/Contact.jsx";
import Footer from "./components/ui/Footer/Footer";
function App() {
  const [loading, setLoading] = useState(true);
//   useGSAP(() => {
//   const tl = gsap.timeline();

//   tl.from(".navbar", {
//     opacity: 0,
//     y: -40,
//     duration: 0.7,
//   })

//   .from(".logo", {
//     x: -50,
//     opacity: 0,
//     duration: 0.5,
//   })

//   .from(".nav-item", {
//     opacity: 0,
//     y: -20,
//     stagger: 0.1,
//     duration: 0.4,
//   })

//   .from(".resume-nav", {
//     opacity: 0,
//     scale: 0.8,
//     duration: 0.5,
//   })

//   .from(".hero-title", {
//     opacity: 0,
//     x: -80,
//     duration: 0.8,
//   })

//   .from(".hero-subtitle", {
//     opacity: 0,
//     x: -50,
//     duration: 0.6,
//   })

//   .from(".hero-description", {
//     opacity: 0,
//     y: 30,
//     duration: 0.6,
//   })

//   .from(".hero-rotate", {
//     opacity: 0,
//     y: 20,
//     duration: 0.5,
//   })

//   .from(".resume-btn", {
//     opacity: 0,
//     scale: 0.8,
//     duration: 0.5,
//   })

//   .from(".social-btn", {
//     opacity: 0,
//     y: 20,
//     stagger: 0.15,
//     duration: 0.4,
//   })

//   .from(".computer", {
//     opacity: 0,
//     x: 100,
//     scale: 0.9,
//     duration: 1,
//   });

// });

  return (
    <div className="min-h-screen w-full bg-[#09090B] top-0  cursor-auto">
    
      {loading ? (
        <SplashScreen onComplete={() => setLoading(false)} />
      ) : (
        <>
          {/* <Navbar />
          <Hero/> */}
          <Home/>
          <About/>
      
       
          <Experience/>
              <Skills/>
                 <Project/>
          <Contact/>
          <Footer/>
        </>
      )}
    </div>
  );
}

export default App;