import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPalette,
  FaBrain,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiGreensock,
  SiThreedotjs,
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Frontend Development",
    icon: FaReact,
    color: "text-cyan-400",
    description:
      "Building fast, responsive and modern user interfaces with the latest frontend technologies.",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "shadcn/ui",
      
      
      "Responsive Design",
    ],
  },

  {
    title: "Backend Development",
    icon: FaNodeJs,
    color: "text-green-400",
    description:
      "Developing scalable APIs, authentication systems and real-time applications.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "Authentication",
      "Socket.io",
      "FastAPI",
      "PHP",
      "Python",
      "XAMPP",
    ],
  },

  {
    title: "Database & Cloud",
    icon: FaDatabase,
    color: "text-red-400",
    description:
      "Designing secure databases and integrating cloud-based backend services.",
    skills: [
      "MongoDB",
      "MySQL",
      "Firebase",
      "Clerk Authentication",
      "Database Design",
      "CRUD Operations",
    ],
  },

  {
    title: "UI / UX & Design",
    icon: FaPalette,
    color: "text-pink-400",
    description:
      "Designing clean, user-friendly and visually engaging digital experiences.",
    skills: [
      "Figma",
      "Canva",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "UI Design",
      "UX Principles",
      "Wireframing",
      "Prototyping",
    ],
  },

  {
    title: "Creative Development",
    icon: SiGreensock,
    color: "text-emerald-400",
    description:
      "Crafting immersive animations, 3D experiences and interactive web interfaces.",
    skills: [
      "GSAP",
      "Three.js",
      "React Three Fiber",
      "Framer Motion",
      "Lenis",
      "WebGL",
      "3D Animation",
    ],
  },

  {
    title: "AI & Software Engineering",
    icon: FaBrain,
    color: "text-yellow-400",
    description:
      "Exploring artificial intelligence while strengthening software engineering fundamentals.",
    skills: [
      "Machine Learning",
      "OpenAI API",
      "Prompt Engineering",
      "Python",
      "Data Structures",
      "Algorithms",
      "Git",
      "GitHub",
      "Cursor AI",
      "Problem Solving",
    ],
  },
];