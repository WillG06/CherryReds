import interior from "@/assets/about-interior.jpg";

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 bg-background overflow-hidden">
      <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-5 relative reveal pl-6 pt-6 md:pl-10 md:pt-10">
          {/* Hand-drawn style offset frame, peeking top-left */}
          <div
            aria-hidden
            className="absolute top-0 left-0 right-6 bottom-6 md:right-10 md:bottom-10 border-[1.5px] border-cherry/50 rounded-md pointer-events-none"
          />
          <div className="relative aspect-[3/4] overflow-hidden rounded-md shadow-elegant">
            <img
              src={interior}
              alt="The marble bar at Cherry Reds with craft beer taps and blush velvet stools"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1080}
              height={1440}
            />
          </div>
        </div>

        <div className="lg:col-span-7 lg:pl-8">
          <p className="reveal uppercase tracking-[0.3em] text-xs text-cherry/70 mb-6">
            Our Story
          </p>
          <h2 className="reveal reveal-delay-1 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-cherry text-balance">
            Independent since <em className="font-script text-cherry text-[1.3em]">2010.</em>
          </h2>
          <div className="mt-10 space-y-6 text-lg text-foreground/80 leading-relaxed max-w-xl">
            <p className="reveal reveal-delay-2">
              Cherry Reds is an independent cafe and bar in Birmingham city centre — a stone's
              throw from New Street Station. We've been pouring tasty craft beer and pulling
              espresso since our humble beginnings in 2010.
            </p>
            <p className="reveal reveal-delay-3">
              Our food is simple, cooked to order, and made for every diet. We focus on real
              value without skimping on portion size or quality — local free-range eggs,
              homemade cakes, freshly blended milkshakes with real ice cream, and a drinks
              range for any mood.
            </p>
          </div>
          <dl className="reveal reveal-delay-3 mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              ["15+", "Years pouring"],
              ["10am", "Doors open"],
              ["11pm", "Last orders"],
            ].map(([n, l]) => (
              <div key={l} className="border-l border-cherry/20 pl-4">
                <div className="font-display text-4xl text-cherry">{n}</div>
                <div className="text-xs uppercase tracking-widest text-foreground/60 mt-1">{l}</div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
