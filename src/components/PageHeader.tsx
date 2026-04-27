import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface Props {
  kicker: string;
  title: string;
  script?: string;
  description?: string;
  image: string;
  crumbs?: { label: string; to?: string }[];
}

export default function PageHeader({ kicker, title, script, description, image, crumbs }: Props) {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="relative h-[78svh] min-h-[520px] w-full overflow-hidden">
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${y * 0.3}px, 0) scale(${1 + y * 0.0003})` }}
      >
        <img src={image} alt="" className="h-full w-full object-cover animate-slow-zoom" />
      </div>
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="relative z-10 h-full container-wide flex flex-col justify-end pb-20 md:pb-28">
        {crumbs && (
          <nav className="text-cream/75 text-xs uppercase tracking-[0.25em] mb-6 flex items-center gap-2 animate-fade-up">
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                {c.to ? (
                  <Link to={c.to} className="hover:text-cream transition">{c.label}</Link>
                ) : (
                  <span className="text-cream">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight size={12} />}
              </span>
            ))}
          </nav>
        )}
        <p className="text-cream/85 uppercase tracking-[0.4em] text-xs md:text-sm mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          {kicker}
        </p>
        <h1
          className="font-display text-cream text-balance text-[clamp(3rem,8vw,7.5rem)] leading-[0.95] max-w-5xl animate-fade-up"
          style={{ animationDelay: "0.25s" }}
        >
          {title}
          {script && <> <em className="font-script text-blush text-[1.25em] leading-none">{script}</em></>}
        </h1>
        {description && (
          <p className="mt-8 max-w-2xl text-cream/85 text-lg md:text-xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
