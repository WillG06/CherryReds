import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import cherry from "@/assets/cherry-mark.png";

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About & Events" },
  { href: "/hire", label: "Room Hire" },
  { href: "/book", label: "Book" },
  { href: "/gallery", label: "Gallery" },
  { href: "/visit", label: "Visit" },
];

interface Props {
  /** Force solid styling (for inner pages where there's no hero behind nav). */
  solid?: boolean;
}

export default function SiteNav({ solid = false }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (solid) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  const isSolid = solid || scrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        isSolid
          ? "bg-cream/85 backdrop-blur-xl border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="container-wide flex items-center justify-between h-20 md:h-24">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={cherry}
            alt=""
            width={36}
            height={36}
            className={`h-9 w-9 transition-transform duration-700 group-hover:rotate-12 ${
              isSolid ? "" : "drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
            }`}
          />
          <span
            className={`font-display text-xl md:text-2xl tracking-wide transition-colors ${
              isSolid ? "text-cherry" : "text-cream"
            }`}
          >
            Cherry Reds
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              {l.href.startsWith("/#") ? (
                <a
                  href={l.href}
                  className={`text-sm uppercase tracking-[0.18em] font-medium relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-current after:transition-all after:duration-500 hover:after:w-full ${
                    isSolid ? "text-cherry" : "text-cream"
                  }`}
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  to={l.href}
                  className={`text-sm uppercase tracking-[0.18em] font-medium relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-current after:transition-all after:duration-500 hover:after:w-full ${
                    isSolid ? "text-cherry" : "text-cream"
                  }`}
                >
                  {l.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <Link
          to="/hire"
          className={`hidden lg:inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm uppercase tracking-[0.18em] font-medium transition-all duration-500 ${
            isSolid
              ? "bg-cherry text-cream hover:bg-cherry-deep"
              : "bg-cream/95 text-cherry hover:bg-cream"
          }`}
        >
          Hire a Room
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 ${isSolid ? "text-cherry" : "text-cream"}`}
          aria-label="Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 bg-cream/98 backdrop-blur-xl ${
          open ? "max-h-[28rem] border-b border-border" : "max-h-0"
        }`}
      >
        <ul className="container-wide py-6 flex flex-col gap-3">
          {links.map((l) => (
            <li key={l.href}>
              {l.href.startsWith("/#") ? (
                <a href={l.href} onClick={() => setOpen(false)} className="block py-2 font-display text-2xl text-cherry">
                  {l.label}
                </a>
              ) : (
                <Link to={l.href} onClick={() => setOpen(false)} className="block py-2 font-display text-2xl text-cherry">
                  {l.label}
                </Link>
              )}
            </li>
          ))}
          <Link to="/hire" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center px-6 py-3 rounded-full bg-cherry text-cream uppercase tracking-[0.18em] text-sm">
            Hire a Room
          </Link>
        </ul>
      </div>
    </header>
  );
}
