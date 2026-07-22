import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import Navbar from "./newNav/Navbar";
import Hero from "../Hero";

const Home = () => {
  useGSAP(() => {
  const tl = gsap.timeline();

  tl.from(".hero-title", {
    opacity: 0,
    x: -80,
    duration: 0.8,
  })
    .from(".hero-subtitle", {
      opacity: 0,
      x: -50,
      duration: 0.6,
    })
    .from(".hero-description", {
      opacity: 0,
      y: 30,
      duration: 0.6,
    })
    .from(".hero-rotate", {
      opacity: 0,
      y: 20,
      duration: 0.5,
    })

    // Resume button appears AFTER hero-rotate
    .fromTo(
      ".resume-btn",
      {
        opacity: 0,
        y: 30,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
      }
    )

    // Then social icons
    .from(".social-btn", {
      opacity: 0,
      y: 20,
      stagger: 0.15,
      duration: 0.4,
    })

    // Then computer model
    .from(".computer", {
      opacity: 0,
      x: 100,
      duration: 1,
    });
});
useGSAP(() => {
  gsap.utils.toArray(".social-btn").forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, {
        scale: 1.15,
        y: -5,
        duration: 0.25,
      });
    });

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        scale: 1,
        y: 0,
        duration: 0.25,
      });
    });
  });
});
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
};

export default Home;