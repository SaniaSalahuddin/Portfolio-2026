import { useEffect, useRef } from "react";
import gsap from "gsap";

const MarqueeRow = ({ items, direction }) => {
  const row = useRef(null);

  useEffect(() => {
    const distance = row.current.scrollWidth / 2;

    if (direction === "right") {
      gsap.set(row.current, { x: -distance });
    }

    gsap.to(row.current, {
      x: direction === "left" ? -distance : 0,
      duration: 20,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => {
          const currentX = parseFloat(x);
          if (direction === "left") {
            return currentX <= -distance ? currentX + distance : currentX;
          } else {
            return currentX >= 0 ? currentX - distance : currentX;
          }
        }),
      },
    });
  }, [direction]);

  return (
    <div className="overflow-hidden w-full py-6">
      <div
        ref={row}
        className="flex gap-8 w-max items-center"
      >
        {[...items, ...items].map((tech, index) => {
          const Icon = tech.icon;

          return (
            <div
              key={index}
              className="
                tech-card
                group
                relative
                flex
                h-[150px]
                w-[170px]
                shrink-0
                flex-col
                items-center
                justify-center
                rounded-[35px]
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-5
                hover:scale-110
                hover:border-emerald-400/50
              "
              style={{
                boxShadow: `0 0 45px ${tech.glow}`,
              }}
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  h-28
                  w-28
                  rounded-full
                  blur-[60px]
                  opacity-30
                "
                style={{
                  background: tech.glow,
                }}
              />

              {/* ICON */}
              <div
                className={`
                  relative z-10
                  ${tech.color}
                  transition-transform
                  duration-500
                  group-hover:rotate-[15deg]
                `}
              >
                <Icon className="text-6xl" />
              </div>

              <h3
                className="
                  relative z-10
                  mt-7
                  text-lg
                  font-semibold
                  text-white
                "
              >
                {tech.name}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarqueeRow;