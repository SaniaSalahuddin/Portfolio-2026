import React from "react";

const Logo = () => {
  return (
    <a
      href="#home"
      className="logo group flex items-center"
    >
      <div
        className="
          relative
          z-50
          h-11
          w-11
          rounded-full
          border
          border-white/10
          bg-zinc-900
          backdrop-blur-xl
          flex
          items-center
          justify-center
          transition-all
          duration-300
          hover:border-emerald-500
          hover:rotate-12
          hover:text-emerald-300
        "
      >
        <img src="/logo.png" alt="" />
      </div>
    </a>
  );
};

export default Logo;