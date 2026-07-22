import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="relative border-t border-emerald-500/10 bg-[#09090B] overflow-hidden">

      {/* background grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      />

      {/* glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-12 px-8 py-12 lg:flex-row lg:items-center">

        {/* Left */}

        <div>

          <div className="flex gap-4">

            <a
              href="https://github.com/SaniaSalahuddin"
              target="_blank"
              className="group flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/5 transition hover:border-emerald-400 hover:bg-emerald-500/15"
            >
              <FaGithub className="text-emerald-400 transition group-hover:scale-110" />
            </a>

            <a
              href="https://www.linkedin.com/in/sania-salahuddin-1a4781324/"
              target="_blank"
              className="group flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/5 transition hover:border-emerald-400 hover:bg-emerald-500/15"
            >
              <FaLinkedin className="text-emerald-400 transition group-hover:scale-110" />
            </a>

            <a
              href="https://www.instagram.com/saniasalahuddin07/"
              target="_blank"
              className="group flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/5 transition hover:border-emerald-400 hover:bg-emerald-500/15"
            >
              <FaInstagram className="text-emerald-400 transition group-hover:scale-110" />
            </a>

            <a
              href="mailto:saniasalahuddin07@email.com"
              className="group flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/5 transition hover:border-emerald-400 hover:bg-emerald-500/15"
            >
              <MdEmail className="text-emerald-400 transition group-hover:scale-110" />
            </a>

          </div>
<p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
  Stay connected and explore my journey in{" "}
  <span className="text-emerald-400">
    full-stack development
  </span>{" "}
  and innovation.
</p>

        </div>

        {/* Right */}

        <div className="text-right">

          <h2 className="text-3xl font-bold text-white">
            © {new Date().getFullYear()} •{" "}
            <span className="text-emerald-400">
              Sania Salahuddin
            </span>
          </h2>

          <p className="mt-2 text-zinc-400">
            MERN Stack Developer
          </p>

          <p className="mt-1 text-sm text-zinc-500">
            AI & Machine Learning Learner
          </p>

          <p className="mt-3 text-sm text-zinc-600">
            📍 Sargodha, Punjab, Pakistan
          </p>

        </div>

      </div>

    </footer>
  );
}