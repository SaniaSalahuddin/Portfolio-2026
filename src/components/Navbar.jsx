import { useState,useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const container = useRef();
  const menuRef=useRef();
  const [menuOpen, setMenuOpen]=useState(false)

  useGSAP(() => {
    gsap.from(".logo", {
      x: -80,
      opacity: 0,
      duration: 1,
      delay:0.5
    });

    gsap.from(".nav-item", {
      y: -60,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
    });
  }, { scope: container });
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
<>
    <div  ref={container} className='w-full h-20  z-100 flex text-white font-space items-center justify-around gap-2 p-3'>
        <div className="  logo text-cyan-500 text-2xl font-bold font-space flex gap-2">Sania Salahuddin <FaCode/></div>
        <div className=' hidden md:flex items-center justify-center gap-12 cursor-pointer'>
            <h3 className='nav-item'>
                Home
            </h3>
            <h3  className='nav-item'>
                About
            </h3>
            <h3  className='nav-item'>
                Skills
            </h3>
            <h3  className='nav-item'>
                Projects
            </h3>
            <h3  className='nav-item'>
                Contact
            </h3>
        </div>

        {/* Mobile Resposive */}

        <button className="md:hidden text-2xl" onClick={()=>setMenuOpen(!menuOpen)}>
            {menuOpen?<FaTimes/>:<FaBars/>}

        </button>
</div>   
    {menuOpen && (
  <div  ref={menuRef} className="md:hidden bg-black/90 backdrop-blur-md text-white">
    <div className="flex flex-col items-center gap-8 py-8 cursor-pointer">

      <h3 onClick={() => setMenuOpen(false)}>Home</h3>

      <h3 onClick={() => setMenuOpen(false)}>About</h3>

      <h3 onClick={() => setMenuOpen(false)}>Skills</h3>

      <h3 onClick={() => setMenuOpen(false)}>Projects</h3>

      <h3 onClick={() => setMenuOpen(false)}>Contact</h3>

    </div>
  </div>

    )}
</>
  )
}

export default Navbar
