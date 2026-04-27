import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useReveal } from "@/hooks/useReveal";
import SiteNav from "@/components/SiteNav";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import interior from "@/assets/about-interior.jpg";
import wedding from "@/assets/wedding-room.jpg";
import jazz from "@/assets/gallery-jazz.jpg";
import pride from "@/assets/gallery-pride.jpg";
import people from "@/assets/gallery-people.jpg";

const events = [
  {
    img: jazz,
    tag: "Live Music",
    title: "Jazz Nights",
    body: "Intimate live jazz in the Bosta Room — check our socials for the next session and arrive early for a good seat.",
  },
  {
    img: pride,
    tag: "Community",
    title: "Pride & Inclusivity",
    body: "We host Pride celebrations and proudly support our LGBTQ+ community year-round. Everyone is welcome at Cherry Reds.",
  },
  {
    img: people,
    tag: "Friday Takeover",
    title: "The Friday Chippy",
    body: "Every Friday from 5pm — freshly battered fish, rotating veggie & vegan options and our signature proper chips.",
  },
];

export default function AboutPage() {
  useReveal();
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  return (
    <main className="bg-background overflow-x-hidden">
      <SiteNav />
      <PageHeader
        kicker="Our Story · Events · Weddings"
        title="A little corner of"
        script="cherry."
        description="An independent cafe-bar on John Bright Street, Birmingham — pouring craft beer, pulling espresso and feeding the city since 2010."
        image={interior}
        crumbs={[{ label: "Home", to: "/" }, { label: "About & Events" }]}
      />

      {/* Story */}
      <section id="story" className="container-wide py-24 md:py-32 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 reveal">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-elegant">
            <img src={interior} alt="Cherry Reds interior bar" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-7">
          <p className="reveal uppercase tracking-[0.3em] text-xs text-cherry/70 mb-5">Our Story</p>
          <h2 className="reveal reveal-delay-1 font-display text-5xl md:text-6xl lg:text-7xl text-cherry leading-[1.02] text-balance">
            Independent since <em className="font-script text-[1.3em]">2010.</em>
          </h2>
          <div className="mt-10 space-y-6 text-lg text-foreground/80 leading-relaxed max-w-xl">
            <p className="reveal reveal-delay-2">
              Cherry Reds is an independent cafe and bar in Birmingham city centre — a stone's throw from
              New Street Station on the gorgeous John Bright Street. We've been pouring tasty craft beer
              and pulling espresso since 2010.
            </p>
            <p className="reveal reveal-delay-3">
              Our food is simple, cooked to order, with options for every diet. We focus on real value
              without skimping on portion size or quality — local free-range eggs, homemade cakes,
              freshly blended milkshakes with real ice cream, and a drinks range for any mood.
            </p>
            <p className="reveal reveal-delay-3">
              Walk-ins only — please don't expect table bookings. We're proud to lease and look after
              this beautiful old building, and proud to be a welcoming home to the community on John
              Bright Street.
            </p>
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="scroll-mt-28 bg-blush-soft py-24 md:py-32">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="reveal uppercase tracking-[0.3em] text-xs text-cherry/70 mb-4">What's On</p>
            <h2 className="reveal reveal-delay-1 font-display text-5xl md:text-7xl text-cherry leading-[1.02] text-balance">
              Events at <em className="font-script text-[1.3em]">Cherry Reds.</em>
            </h2>
            <p className="reveal reveal-delay-2 mt-6 text-foreground/75 text-lg">
              Live jazz, community celebrations, the Friday chippy takeover and our rolling calendar of
              private bookings. Follow us on Instagram for the latest line-ups.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((e, i) => (
              <article key={e.title} className="reveal hover-lift bg-cream rounded-2xl overflow-hidden shadow-card group" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={e.img} alt={e.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110" />
                  <span className="absolute top-5 left-5 px-3 py-1 rounded-full bg-cream/90 backdrop-blur text-cherry text-[10px] uppercase tracking-[0.2em] font-medium">{e.tag}</span>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-3xl text-cherry">{e.title}</h3>
                  <p className="mt-3 text-foreground/75 leading-relaxed">{e.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Weddings */}
      <section id="weddings" className="scroll-mt-28 relative bg-background overflow-hidden">
        <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
          <img src={wedding} alt="Wedding reception at Cherry Reds" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 container-wide flex items-end pb-16">
            <div>
              <p className="reveal text-cream/85 uppercase tracking-[0.3em] text-xs mb-5">Weddings</p>
              <h2 className="reveal reveal-delay-1 font-display text-cream text-5xl md:text-7xl leading-[1.02] text-balance max-w-3xl">
                Say <em className="font-script text-blush text-[1.3em]">"I do"</em> on John Bright Street.
              </h2>
            </div>
          </div>
        </div>

        <div className="container-wide py-20 md:py-28 grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-7 space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p className="reveal">
              The Bosta Room makes a beautiful, characterful wedding reception space — warm lighting,
              vintage details and a small stage for your first dance, speeches or live band.
            </p>
            <p className="reveal reveal-delay-1">
              <strong>Monday – Friday</strong> you can hire the entire upstairs floor and surrounding
              areas for a total capacity of <strong>up to 120 guests</strong>. We'll work with you on a
              buffet, drinks bundles (buy 5 of any bottle, get the 6th free) and timings to make your
              day exactly what you want it to be.
            </p>
            <p className="reveal reveal-delay-2">
              Smaller, more intimate ceremonies and after-parties also welcome — get in touch and we'll
              design something around you.
            </p>
            <div className="reveal reveal-delay-3 pt-4 flex flex-wrap gap-4">
              <Link to="/hire#enquire" className="px-8 py-4 rounded-full bg-cherry text-cream uppercase tracking-[0.18em] text-sm hover:bg-cherry-deep transition-all duration-500 hover:shadow-elegant">
                Enquire about your wedding
              </Link>
              <a href="mailto:people@cherryreds.com" className="px-8 py-4 rounded-full border border-cherry/30 text-cherry uppercase tracking-[0.18em] text-sm hover:bg-cherry hover:text-cream transition-all duration-500">
                Email us directly
              </a>
            </div>
          </div>
          <aside className="lg:col-span-5 reveal bg-blush-soft rounded-2xl p-8 md:p-10">
            <h3 className="font-display text-3xl text-cherry">At a glance</h3>
            <dl className="mt-6 divide-y divide-cherry/15">
              {[
                ["Total capacity", "Up to 120 (Mon–Fri)"],
                ["Bosta Room", "40 dining · 50 theatre · 60 standing"],
                ["First dance", "Stage with PA via XLR"],
                ["Catering", "Bespoke buffet menus"],
                ["Drinks deal", "Buy 5 bottles, 6th free"],
                ["Late licence", "Up to 1am Fri/Sat (2 weeks notice)"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 py-3 text-sm">
                  <dt className="text-foreground/70">{k}</dt>
                  <dd className="text-cherry font-medium text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* Outside area */}
      <section className="bg-cherry text-cream py-20">
        <div className="container-tight text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-blush mb-4">Also available</p>
          <h3 className="font-display text-4xl md:text-5xl">
            Outside reservations for groups <em className="font-script text-blush text-[1.3em]">up to 30.</em>
          </h3>
          <p className="mt-6 max-w-2xl mx-auto text-cream/80">
            We can also reserve part of our outside area, and tables near sockets upstairs on weekday
            daytimes — just drop us a line.
          </p>
          <a href="mailto:people@cherryreds.com" className="mt-8 inline-flex px-8 py-4 rounded-full bg-cream text-cherry uppercase tracking-[0.18em] text-sm hover:bg-blush transition-all duration-500">
            people@cherryreds.com
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
