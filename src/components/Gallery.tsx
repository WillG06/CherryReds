import { useEffect, useRef, useState } from "react";
import jazz from "@/assets/gallery-jazz.jpg";
import food from "@/assets/gallery-food.jpg";
import coffee from "@/assets/gallery-coffee.jpg";
import people from "@/assets/gallery-people.jpg";
import exterior from "@/assets/gallery-exterior.jpg";
import pride from "@/assets/gallery-pride.jpg";

/**
 * Full-bleed gallery with three vertical columns. Each column scrolls
 * continuously (auto animated) while also responding to the user's scroll
 * position, creating a living parallax "coming and going" effect. The canvas
 * is always densely populated because each column loops its own image strip.
 */

type ColumnItem = { src: string; alt: string };

const columns: { items: ColumnItem[]; direction: 1 | -1; speed: number }[] = [
  {
    direction: -1, // moves up
    speed: 22,
    items: [
      { src: exterior, alt: "Cherry Reds exterior on John Bright Street" },
      { src: coffee, alt: "Latte art coffee" },
      { src: jazz, alt: "Live jazz performance" },
      { src: people, alt: "Friends at the bar" },
    ],
  },
  {
    direction: 1, // moves down
    speed: 28,
    items: [
      { src: food, alt: "Plates from the kitchen" },
      { src: pride, alt: "Pride celebrations" },
      { src: exterior, alt: "Cherry Reds at night" },
      { src: coffee, alt: "Morning coffee" },
    ],
  },
  {
    direction: -1, // moves up
    speed: 18,
    items: [
      { src: jazz, alt: "Saturday night jazz" },
      { src: people, alt: "Good company" },
      { src: pride, alt: "Pride at Cherry Reds" },
      { src: food, alt: "Sunday roasts" },
    ],
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [scrollBoost, setScrollBoost] = useState(0);

  // Track how the gallery section sits in the viewport so scrolling adds
  // a subtle boost on top of the continuous auto-animation.
  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when section enters from bottom, 1 when it leaves from top
      const p = 1 - (rect.top + rect.height) / (vh + rect.height);
      setScrollBoost(Math.max(0, Math.min(1, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative bg-cherry-deep text-cream overflow-hidden"
    >
      {/* Heading */}
      <div className="relative z-20 px-6 md:px-10 pt-24 md:pt-32 pb-10 text-center">
        <p className="uppercase tracking-[0.35em] text-xs text-blush/80 mb-5">Gallery</p>
        <h2 className="font-display text-cream text-balance leading-[0.95] text-[clamp(3rem,8vw,7.5rem)]">
          A peek inside our <em className="font-script text-blush text-[1.25em]">little</em> world.
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-cream/70 text-sm md:text-base">
          Sixteen years of late nights, good food, live music and the people who make it all hum.
        </p>
      </div>

      {/* Marquee columns */}
      <div
        className="relative grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 px-4 md:px-6 pb-16"
        style={{ height: "min(110vh, 900px)" }}
      >
        {columns.map((col, colIndex) => {
          // Duplicate the items so the CSS animation can loop seamlessly.
          const loop = [...col.items, ...col.items];
          // Scroll adds ±15% speed boost as user moves through the section.
          const boost = 1 + scrollBoost * 0.15;
          const duration = col.speed / boost;
          const hideOnMobile = colIndex === 2 ? "hidden md:flex" : "flex";
          return (
            <div
              key={colIndex}
              className={`relative ${hideOnMobile} h-full overflow-hidden`}
            >
              <div
                className="flex flex-col gap-4 md:gap-6 w-full will-change-transform"
                style={{
                  animation: `gallery-scroll-${col.direction === 1 ? "down" : "up"} ${duration}s linear infinite`,
                }}
              >
                {loop.map((it, i) => (
                  <figure
                    key={`${colIndex}-${i}`}
                    className="relative shrink-0 overflow-hidden rounded-md ring-1 ring-cream/10 shadow-elegant"
                  >
                    <img
                      src={it.src}
                      alt={it.alt}
                      loading="lazy"
                      className="block w-full h-auto object-cover"
                    />
                    <figcaption className="absolute bottom-3 left-4 text-cream/90 text-[11px] uppercase tracking-[0.2em]">
                      {it.alt}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          );
        })}

        {/* Edge fades for a softer, cinematic feel */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cherry-deep to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-cherry-deep to-transparent" />
      </div>

      {/* Keyframes (scoped via global style tag; Tailwind arbitrary animations
          are harder to express with two directions, so inline CSS is clearest). */}
      <style>{`
        @keyframes gallery-scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes gallery-scroll-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
