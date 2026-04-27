import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import brunch from "@/assets/menu-brunch.jpg";
import drinks from "@/assets/menu-drinks.jpg";
import shake from "@/assets/menu-shake.jpg";
import cake from "@/assets/menu-cake.jpg";

const sections = [
  { img: brunch, tag: "01 — Kitchen", title: "Cafe Food", body: "All-day brunch, sandwiches, hearty mains and our famous vegan fish & chips. Local free-range eggs, cooked-to-order, with options for every diet." },
  { img: drinks, tag: "02 — On Tap", title: "Craft Beer", body: "A rotating line-up supporting local brewers — sessionable pales to barrel-aged stouts. Cask, keg, cans and a tight wine list to match." },
  { img: shake, tag: "03 — Sweet", title: "Milkshakes & Soft", body: "Freshly blended milkshakes with real ice cream, sodas, kombuchas and proper alcohol-free options for the designated drivers." },
  { img: cake, tag: "04 — Bakery", title: "Homemade Cakes", body: "Baked in-house and changing weekly. Chocolate fudge, lemon drizzle, vegan brownies — best paired with our freshly ground espresso." },
];

export default function Menu() {
  return (
    <section id="menu" className="relative py-28 md:py-40 bg-blush-soft overflow-hidden">
      {/* decorative script word */}
      <div aria-hidden className="pointer-events-none absolute -top-10 right-[-4%] font-script text-cherry/[0.06] text-[18rem] md:text-[26rem] leading-none select-none">
        cherry
      </div>

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-20 md:mb-28">
          <div className="lg:col-span-8">
            <p className="reveal uppercase tracking-[0.3em] text-xs text-cherry/70 mb-6">
              The Menu
            </p>
            <h2 className="reveal reveal-delay-1 font-display text-cherry text-balance text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95]">
              Honest food.<br />
              <em className="font-script text-[1.35em] text-cherry">Generous</em> pours.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pb-3">
            <p className="reveal reveal-delay-2 text-foreground/75 text-lg leading-relaxed border-l-2 border-cherry/30 pl-6">
              Best value for money without skimping on portion size or quality. Last food orders <span className="text-cherry font-medium">9pm daily</span>.
            </p>
          </div>
        </div>

        {/* Editorial split rows */}
        <ul className="divide-y divide-cherry/15 border-y border-cherry/15">
          {sections.map((s, i) => (
            <li key={s.title} className="reveal group" style={{ transitionDelay: `${i * 0.06}s` }}>
              <Link
                to="/menu"
                className="grid grid-cols-12 gap-6 md:gap-10 items-center py-8 md:py-10 transition-colors"
              >
                {/* tag */}
                <span className="col-span-12 md:col-span-2 text-xs uppercase tracking-[0.25em] text-cherry/60 font-medium">
                  {s.tag}
                </span>

                {/* title */}
                <h3 className="col-span-9 md:col-span-3 font-display text-4xl md:text-5xl text-cherry leading-[1] transition-transform duration-700 ease-out group-hover:translate-x-2">
                  {s.title}
                </h3>

                {/* body */}
                <p className="hidden md:block md:col-span-4 text-foreground/70 leading-relaxed">
                  {s.body}
                </p>

                {/* peek image — slides up on hover */}
                <div className="col-span-2 md:col-span-2 relative h-20 md:h-28 rounded-xl overflow-hidden shadow-card">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                  />
                </div>

                {/* arrow */}
                <span className="col-span-1 flex justify-end text-cherry">
                  <ArrowUpRight
                    size={28}
                    className="transition-transform duration-500 group-hover:rotate-45"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="reveal mt-20 flex flex-col items-center text-center">
          <Link
            to="/menu"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-cherry text-cream uppercase tracking-[0.18em] text-sm font-medium hover:bg-cherry-deep transition-all duration-500 hover:shadow-elegant"
          >
            View the full menu
            <ArrowUpRight size={18} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
          <p className="mt-5 text-sm text-foreground/60">Walk-ins only · No table bookings · Order at the bar</p>
        </div>
      </div>
    </section>
  );
}
