import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Calendar, ArrowUpRight } from "lucide-react";

/**
 * Floating "Book a Room" CTA pill, fixed bottom-right.
 * Appears after user scrolls past the hero and hides on the /hire page.
 */
export default function BookingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.pathname.startsWith("/hire")) return;

    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (typeof window !== "undefined" && window.location.pathname.startsWith("/hire")) {
    return null;
  }

  return (
    <Link
      to="/hire"
      aria-label="Book a room — free room hire"
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 group inline-flex items-center gap-3 pl-5 pr-6 py-4 rounded-full bg-cherry text-cream shadow-elegant border border-cream/15 backdrop-blur transition-all duration-500 hover:bg-cherry-deep hover:scale-[1.03] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/15">
        <Calendar size={18} />
      </span>
      <span className="flex flex-col leading-tight text-left">
        <span className="text-[10px] uppercase tracking-[0.22em] text-blush/90">Free Hire</span>
        <span className="text-sm font-medium tracking-wide">Book a Room</span>
      </span>
      <ArrowUpRight size={18} className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
