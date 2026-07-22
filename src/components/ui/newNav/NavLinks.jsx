import { useRef } from "react";
import navLinks from "./navLinks.js";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";

const NavLinks = () => {
  //   const navref=useRef();
    
  // useGSAP(() => {
 

  //   gsap.from(".nav-item", {
  //     y: -80,
  //     opacity: 0,
  //     stagger: 0.15,
  //     duration: 0.8,
  //   });
  // }, { scope: navref });

  return (
    <ul  className="flex items-center gap-10 ">
      {navLinks.map((item) => (
        <li key={item.title} className="nav-item">
          <a
            href={item.href}
            className="
            relative
            text-sm
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
            hover:after:w-full
            "
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;