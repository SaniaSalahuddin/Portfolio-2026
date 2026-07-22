import GlobeScene from "./three/GlobeScene.jsx";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { toast } from "sonner";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef();
  const formRefContainer = useRef();
  const globeRef = useRef();
  const formRef = useRef();

  const [loading, setLoading] = useState(false);

useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 75%",
      end: "bottom center",
      toggleActions: "play none none reverse",
    },
  });

  // Heading animations
  tl.from(".contact-tag", {
    opacity: 0,
    y: 40,
    duration: 0.6,
    ease: "power3.out",
  })
    .from(
      ".contact-title",
      {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power4.out",
      },
      "-=0.3"
    )
    .from(
      ".contact-desc",
      {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.5"
    );

  // Form fields
  if (formRef.current) {
    const fields = formRef.current.querySelectorAll(".form-field-group");

    tl.from(
      fields,
      {
        opacity: 0,
        x: -80,
        filter: "blur(10px)",
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.3"
    );
  }

  // Button
  tl.from(
    ".contact-btn-wrapper",
    {
      opacity: 0,
      y: 40,
      scale: 0.8,
      duration: 0.8,
      ease: "back.out(1.7)",
    },
    "-=0.4"
  );


  // Globe entrance ONLY
  tl.from(
    globeRef.current,
    {
      opacity: 0,
      x: 120,
      scale: 0.9,
      duration: 1.2,
      ease: "power3.out",
    },
    "-=0.8"
  );


  // Cleanup
  return () => {
    tl.kill();
  };

}, { scope: sectionRef });

  const sendEmail = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Sending your message...");

    try {
      setLoading(true);

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message Sent!", {
        description: "Thank you! I'll get back to you soon.",
        id: toastId,
      });

      formRef.current.reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message", {
        description: "Please try again later.",
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="min-h-screen bg-[#09090B] px-8 lg:px-20 py-28 ">
      <div className="text-center">
        <p className="uppercase tracking-[0.35em] text-emerald-400 contact-tag">CONTACT</p>
        <h2 className="text-6xl font-bold text-white mt-5 contact-title">
          Let's Build
          <span className="block text-emerald-400">Something Amazing</span>
        </h2>
        <p className="text-zinc-400 max-w-3xl mx-auto mt-8 leading-8 text-lg contact-desc">
          Have an exciting project, collaboration, or opportunity in mind? I'm always open to discussing Full Stack development, AI & Machine Learning, or freelance work. Let's create something meaningful together.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-20 items-center mt-12 ">
        {/* Form Container */}
        <div className="w-full max-w-xl min-h-fit pb-16" ref={formRefContainer}>
          <form className="space-y-7 pb-10" ref={formRef} onSubmit={sendEmail}>
            
            <div className="form-field-group">
              <p className="mb-2 text-sm uppercase tracking-[0.25em] text-zinc-500">Your Name</p>
              <input
                type="text"
                placeholder="John Doe"
                name="name"
                autoComplete="name"
                required
                className="w-full rounded-[10px] border border-zinc-800 bg-zinc-900/70 px-6 py-4 text-white outline-none backdrop-blur-xl transition-all duration-300 focus:border-emerald-400 focus:bg-zinc-900"
              />
            </div>

            <div className="form-field-group">
              <p className="mb-2 text-sm uppercase tracking-[0.25em] text-zinc-500">Email Address</p>
              <input
                type="email"
                name="email"
                placeholder="john@gmail.com"
                autoComplete="email"
                required
                className="w-full rounded-[10px] border border-zinc-800 bg-zinc-900/70 px-6 py-4 text-white outline-none backdrop-blur-xl transition-all duration-300 focus:border-emerald-400"
              />
            </div>

            <div className="form-field-group">
              <p className="mb-2 text-sm uppercase tracking-[0.25em] text-zinc-500">Subject</p>
              <input
                type="text"
                name="subject"
                placeholder="Let's work together"
                className="w-full rounded-[10px] border border-zinc-800 bg-zinc-900/70 px-6 py-4 text-white outline-none backdrop-blur-xl transition-all duration-300 focus:border-emerald-400"
              />
            </div>

            <div className="form-field-group">
              <p className="mb-2 text-sm uppercase tracking-[0.25em] text-zinc-500">Message</p>
              <textarea
                rows="6"
                name="message"
                placeholder="Tell me about your project..."
                autoComplete="off"
                required
                className="w-full resize-none rounded-[20px] border border-zinc-800 bg-zinc-900/70 px-6 py-4 text-white outline-none backdrop-blur-xl transition-all duration-300 focus:border-emerald-400"
              />
            </div>
<div className="contact-btn-wrapper pt-3">
        <button
              type="submit"
              disabled={loading}
              style={{ opacity: 1 }}
              className={`contact-btn group flex items-center text-black gap-3 rounded-full px-8 py-4 font-semibold transition-all duration-300 ${
                loading
                  ? "cursor-not-allowed bg-emerald-300"
                  : "bg-emerald-500 hover:scale-105 hover:bg-emerald-400"
              }`}
            >
              {loading ? (
                <>
                  <div className="h-5 w-5 animate-spin rounded-full border-[3px] border-black/20 border-t-black"></div>
                  Sending...
                </>
              ) : (
                <>Send Message</>
              )}
              <span className="transition group-hover:translate-x-1">→</span>
            </button>
</div>
        

          </form>
        </div>

        {/* Globe Container */}
<div
    ref={globeRef}
    className="relative w-full h-[550px] flex items-center justify-center"
>
    <GlobeScene />
</div>
      </div>
    </section>
  );
}