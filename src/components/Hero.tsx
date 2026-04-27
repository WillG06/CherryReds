import { useEffect, useState } from "react";
import hero from "@/assets/hero-cherries.jpg";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${y * 0.35}px, 0) scale(${1 + y * 0.0003})` }}
      >
        <img
          src={hero}
          alt="Fresh cherries on cream linen at Cherry Reds cafe and bar in Birmingham"
          className="h-full w-full object-cover animate-slow-zoom"
          width={1920}
          height={1080}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="relative z-10 h-full container-wide flex flex-col justify-end pb-20 md:pb-28">
        <p
          className="text-cream/85 uppercase tracking-[0.4em] text-xs md:text-sm mb-6 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Independent · Birmingham · Since 2010
        </p>
        <h1
          className="font-display text-cream text-balance text-[clamp(3rem,9vw,8.5rem)] leading-[0.95] max-w-5xl animate-fade-up"
          style={{ animationDelay: "0.35s" }}
        >
          A little corner of <span className="font-script text-blush text-[1.25em] leading-none">cherry</span> on John Bright Street.
        </h1>
        <p
          className="mt-8 max-w-xl text-cream/85 text-lg md:text-xl leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          Cafe by day, bar by night. Honest food, craft beer, freshly blended milkshakes
          and a warm welcome — a stone's throw from New Street.
        </p>
        <div
          className="mt-10 flex flex-wrap gap-4 animate-fade-up"
          style={{ animationDelay: "0.65s" }}
        >
          <a
            href="#menu"
            className="px-8 py-4 rounded-full bg-cream text-cherry uppercase tracking-[0.18em] text-sm font-medium hover:bg-blush transition-all duration-500 hover:shadow-elegant"
          >
            See the Menu
          </a>
          <a
            href="#events"
            className="px-8 py-4 rounded-full border border-cream/50 text-cream uppercase tracking-[0.18em] text-sm font-medium hover:bg-cream/10 transition-all duration-500"
          >
            Hire a Room
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-cream/80 hover:text-cream transition-colors animate-float"
        aria-label="Scroll"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
}
