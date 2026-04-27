import cherry from "@/assets/cherry-mark.png";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-cherry-deep text-cream/85 relative overflow-hidden">
      <div className="container-wide pt-20 pb-12">
        <div className="grid md:grid-cols-12 gap-12 md:gap-10">
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={cherry} alt="" width={40} height={40} className="h-10 w-10" />
              <span className="font-display text-2xl text-cream">Cherry Reds</span>
            </Link>
            <p className="mt-5 max-w-sm text-cream/70 leading-relaxed">
              An independent cafe-bar on John Bright Street, Birmingham. Honest food, craft beer,
              and a warm welcome since 2010.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social"
                  className="h-10 w-10 rounded-full border border-cream/20 grid place-items-center hover:bg-cream hover:text-cherry transition-all duration-500">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.25em] text-blush mb-5">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-cream transition">Home</Link></li>
              <li><Link to="/menu" className="hover:text-cream transition">Menu</Link></li>
              <li><Link to="/about" className="hover:text-cream transition">About & Events</Link></li>
              <li><Link to="/hire" className="hover:text-cream transition">Room Hire</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-blush mb-5">Find Us</h4>
            <address className="not-italic text-sm leading-relaxed text-cream/80">
              83 John Bright Street<br />
              Birmingham B1 1BL<br />
              <a href="mailto:people@cherryreds.com" className="hover:text-cream transition mt-2 inline-block">
                people@cherryreds.com
              </a>
            </address>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-blush mb-5">Hours</h4>
            <ul className="space-y-2 text-sm text-cream/80">
              <li className="flex justify-between"><span>Daily</span><span>10am – 11pm</span></li>
              <li className="flex justify-between"><span>Last food</span><span>9pm</span></li>
              <li className="text-cream/60 text-xs mt-3">Closed Christmas Day & Boxing Day</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-cream/10 pt-10">
          <div className="font-display text-cream/10 text-[20vw] leading-none text-center select-none -mb-[3vw]">
            Cherry Reds
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream/50">
          <p>© {year} Cherry Reds Cafe & Bar. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream transition">Privacy</a>
            <a href="#" className="hover:text-cream transition">Terms</a>
            <a href="#" className="hover:text-cream transition">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
