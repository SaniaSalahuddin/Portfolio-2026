import Logo from "./Logo.jsx";
import NavLinks from "./NavLinks.jsx";
import {useState, useRef} from "react"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
   
     const [menuOpen, setMenuOpen]=useState(false);

       const menuRef=useRef();
          useGSAP(()=>{
    if(menuOpen){
        gsap.from(menuRef.current,{
            y:-50,
            opacity:0,
            duration:1
        })
    }
  },[menuOpen])
  return (

    <header
      className="
      fixed
      top-6
      left-1/2
      -translate-x-1/2
      z-50
      w-[90%]
      max-w-7xl cursor-pointer
      "
    >
      <nav
        className="
        flex
        items-center
        justify-between
        rounded-full
        border
        border-white/10
        bg-black/40
        backdrop-blur-2xl
        px-8
        py-4
        shadow-2xl
        "
      >
        <Logo />

        <div className="hidden md:block">
          <NavLinks  />
        </div>

        <a
         href="/Sania_Resume.pdf"
  download="Sania_Resume.pdf"
          className="
          hidden
          
          md:block
          rounded-full
          border
          border-emerald-500
          px-6
          py-2
          text-sm
          transition
          hover:bg-emerald-500
          hover:text-black
          "
        >
          Resume
        </a>

         <button className="md:hidden text-2xl text-white"  onClick={()=>setMenuOpen(!menuOpen)}>
                    {menuOpen?<FaTimes/>:<FaBars/>} </button>
        

        {/* Mobile menu will go here */}
        
      </nav>
        {menuOpen && (
  <div  ref={menuRef} className="md:hidden bg-black/90 backdrop-blur-md text-white">
    <div className="flex flex-col items-center mt-1  gap-8 py-8 cursor-pointer">

      <h3 onClick={() => setMenuOpen(false)}>  <a
            href="#"
            className="
            relative
            text-lg
            font-body
            text-gray-300
            transition
            hover:text-white
            after:absolute
            after:left-0
            after:-bottom-1
            after:h-[2px]
            after:w-0
            after:bg-emerald-500
            after:transition-all
          
            "
          >
Home          </a></h3>
 <h3 onClick={() => setMenuOpen(false)}>  <a
            href="#about"
            className="
            relative
            text-lg
            font-body
            text-gray-300
            transition
            hover:text-white
            after:absolute
            after:left-0
            after:-bottom-1
            after:h-[2px]
            after:w-0
            after:bg-emerald-500
            after:transition-all
          
            "
          >About</a></h3>
           <h3 onClick={() => setMenuOpen(false)}>  <a
            href="#experiece"
            className="
            relative
            text-lg
            font-body
            text-gray-300
            transition
            hover:text-white
            after:absolute
            after:left-0
            after:-bottom-1
            after:h-[2px]
            after:w-0
            after:bg-emerald-500
            after:transition-all
          
            "
          >Experience</a></h3>
           <h3 onClick={() => setMenuOpen(false)}>  <a
            href="#skills"
            className="
            relative
            text-lg
            font-body
            text-gray-300
            transition
            hover:text-white
            after:absolute
            after:left-0
            after:-bottom-1
            after:h-[2px]
            after:w-0
            after:bg-emerald-500
            after:transition-all
          
            "
          >Skills</a></h3>
           <h3 onClick={() => setMenuOpen(false)}>  <a
            href="#project"
            className="
            relative
            text-lg
            font-body
            text-gray-300
            transition
            hover:text-white
            after:absolute
            after:left-0
            after:-bottom-1
            after:h-[2px]
            after:w-0
            after:bg-emerald-500
            after:transition-all
          
            "
          >Projects</a></h3>
           <h3 onClick={() => setMenuOpen(false)}>  <a
            href="#contact"
            className="
            relative
            text-lg
            font-body
            text-gray-300
            transition
            hover:text-white
            after:absolute
            after:left-0
            after:-bottom-1
            after:h-[2px]
            after:w-0
            after:bg-emerald-500
            after:transition-all
          
            "
          >Contacts</a></h3>

   

    </div>
  </div>

    )}
    </header>
  );
};

export default Navbar;