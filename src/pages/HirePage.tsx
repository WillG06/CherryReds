import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useReveal } from "@/hooks/useReveal";
import SiteNav from "@/components/SiteNav";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { Check, AlertCircle, Music, Cake, Users, PoundSterling } from "lucide-react";
import mapRoom from "@/assets/map-room.jpg";
import bostaRoom from "@/assets/events-room.jpg";
import wedding from "@/assets/wedding-room.jpg";

const mapSpend = [
  ["Sun – Thu, 5pm – 11pm", "£50"],
  ["Fri after 5pm, all day Sat & Sun 10am – 5pm", "£100"],
];

const bostaSpend = [
  ["Sun – Fri, 10am – 5pm", "£200", "Can be waived for short notice or charity"],
  ["Sun – Fri, 5pm – close", "£200"],
  ["Saturday 10am – 2pm", "£200"],
  ["Saturday 2pm – 7pm", "£200"],
  ["Saturday 7pm – close", "£500"],
  ["Combined Saturday day + evening", "£700"],
];

const faqs = [
  {
    q: "When can I access the room to decorate?",
    a: "From the time of your booking. You're welcome to drop decorations or cakes off the day before and leave them with us at your own risk.",
  },
  {
    q: "Can you move tables and chairs?",
    a: "Yes — we can move out tables and chairs on and around the stage if you need more standing space.",
  },
  {
    q: "Is the upstairs accessible?",
    a: "We're proud to lease and look after this beautiful old building, but it has no wheelchair access for upstairs. We can seat up to 8 people downstairs — if one of your party can't manage the stairs please email us.",
  },
  {
    q: "Are dogs allowed?",
    a: "We love dogs but we can't assume all our customers would be happy to eat next to one — therefore only guide dogs are allowed inside.",
  },
  {
    q: "Is the meat halal?",
    a: "Our meat is not halal. Guests following a halal diet can enjoy our vegetarian items. Please request no pork on the buffet, but be aware we use pork in the kitchen.",
  },
  {
    q: "Can we bring our own cake?",
    a: "You're welcome to bring your own celebration cake — all other food must be bought from us.",
  },
];

export default function HirePage() {
  useReveal();
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", guests: "", room: "Map Room", notes: "" });
  const [sent, setSent] = useState(false);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    await new Promise((r) => setTimeout(r, 600));
    console.log("[mock POST /api/hire]", form);
    setSent(true);
  };

  return (
    <main className="bg-background overflow-x-hidden">
      <SiteNav />
      <PageHeader
        kicker="Room Hire & Private Events"
        title="Two beautiful rooms,"
        script="free to hire."
        description="In a nutshell — both rooms are FREE to hire, with a minimum spend on food & drink. Tell us a little about your event and we'll take it from there."
        image={bostaRoom}
        crumbs={[{ label: "Home", to: "/" }, { label: "Room Hire" }]}
      />

      {/* Quick summary */}
      <section className="container-wide py-16 md:py-20 grid md:grid-cols-3 gap-6">
        {[
          { icon: PoundSterling, t: "Free to hire", d: "Both rooms come with no rental fee — just a minimum spend on food & drink." },
          { icon: Users, t: "8 guests minimum", d: "From 8 people for the Map Room, larger gatherings welcome in the Bosta." },
          { icon: Cake, t: "Buffets & extras", d: "Optional buffets, tea urn for £3.50pp, and bundle deals on prosecco and softs." },
        ].map((b, i) => (
          <div key={i} className="reveal bg-blush-soft rounded-2xl p-8" style={{ transitionDelay: `${i * 0.08}s` }}>
            <b.icon className="text-cherry mb-4" />
            <h3 className="font-display text-2xl text-cherry">{b.t}</h3>
            <p className="mt-2 text-foreground/75 text-sm leading-relaxed">{b.d}</p>
          </div>
        ))}
      </section>

      {/* Map Room */}
      <section id="map-room" className="scroll-mt-28 bg-blush-soft py-20 md:py-28">
        <div className="container-wide grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 reveal">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant">
              <img src={mapRoom} alt="The Map Room at Cherry Reds" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-6">
            <p className="reveal uppercase tracking-[0.3em] text-xs text-cherry/70 mb-4">The Map Room</p>
            <h2 className="reveal reveal-delay-1 font-display text-5xl md:text-6xl text-cherry leading-[1.02]">
              Intimate. <em className="font-script text-[1.25em]">Bright.</em>
            </h2>
            <p className="reveal reveal-delay-2 mt-6 text-foreground/75 text-lg max-w-xl">
              Capacity: <strong>17 seated</strong> · <strong>20 standing</strong>. Perfect for meetings, baby
              showers and tasting sessions. Minimum 8 guests to book.
            </p>

            <div className="reveal reveal-delay-3 mt-8">
              <h4 className="text-xs uppercase tracking-[0.25em] text-cherry/70 mb-3">Minimum spend</h4>
              <ul className="divide-y divide-cherry/15 border-y border-cherry/15">
                {mapSpend.map(([when, spend]) => (
                  <li key={when} className="flex justify-between py-3">
                    <span className="text-foreground/80">{when}</span>
                    <span className="font-display text-xl text-cherry">{spend}</span>
                  </li>
                ))}
              </ul>
            </div>

            <ul className="reveal mt-8 space-y-3 text-foreground/80">
              {[
                "Minimum 8 guests (enter 8 to book on weekday daytimes)",
                "December: £50 deposit applied to your buffet or prepaid drinks",
                "Card details required — £50 charge for no-show or unmet minimum",
                "Finalise buffet & pre-ordered drinks via email a week before",
              ].map((b) => (
                <li key={b} className="flex gap-3"><Check size={20} className="text-cherry shrink-0 mt-0.5" />{b}</li>
              ))}
            </ul>

            <a href="#enquire" className="mt-10 inline-flex px-8 py-4 rounded-full bg-cherry text-cream uppercase tracking-[0.18em] text-sm hover:bg-cherry-deep transition-all duration-500 hover:shadow-elegant">
              Enquire about the Map Room
            </a>
          </div>
        </div>
      </section>

      {/* Bosta Room */}
      <section id="bosta-room" className="scroll-mt-28 py-20 md:py-28">
        <div className="container-wide grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 lg:order-2 reveal">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elegant">
              <img src={bostaRoom} alt="The Bosta Room at Cherry Reds" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-6 lg:order-1">
            <p className="reveal uppercase tracking-[0.3em] text-xs text-cherry/70 mb-4">The Bosta Room</p>
            <h2 className="reveal reveal-delay-1 font-display text-5xl md:text-6xl text-cherry leading-[1.02]">
              Big nights. <em className="font-script text-[1.25em]">Bigger</em> moments.
            </h2>
            <p className="reveal reveal-delay-2 mt-6 text-foreground/75 text-lg max-w-xl">
              Capacity: <strong>40 dining</strong> · <strong>50 theatre</strong> · <strong>60 standing</strong>.
              Ideal for private parties, wedding receptions (Mon–Fri hire the whole floor for up to 120),
              conferences and comedy.
            </p>

            <div className="reveal reveal-delay-3 mt-8">
              <h4 className="text-xs uppercase tracking-[0.25em] text-cherry/70 mb-3">Minimum spend</h4>
              <ul className="divide-y divide-cherry/15 border-y border-cherry/15">
                {bostaSpend.map(([when, spend, note]) => (
                  <li key={when} className="flex justify-between py-3 gap-4">
                    <div>
                      <div className="text-foreground/80">{when}</div>
                      {note && <div className="text-xs text-foreground/55 italic mt-0.5">{note}</div>}
                    </div>
                    <span className="font-display text-xl text-cherry shrink-0">{spend}</span>
                  </li>
                ))}
              </ul>
            </div>

            <ul className="reveal mt-8 space-y-3 text-foreground/80">
              {[
                "Up to £200 charge if minimum spend isn't met (or for damages — confetti use £20–50)",
                "December: £100 deposit applied to your buffet or prepaid drinks",
                "Small stage with aux & XLR for your own music or PA (we don't supply equipment)",
                "Amplified music must run through our speakers / limiter (planning condition)",
              ].map((b) => (
                <li key={b} className="flex gap-3"><Check size={20} className="text-cherry shrink-0 mt-0.5" />{b}</li>
              ))}
            </ul>

            <a href="#enquire" className="mt-10 inline-flex px-8 py-4 rounded-full bg-cherry text-cream uppercase tracking-[0.18em] text-sm hover:bg-cherry-deep transition-all duration-500 hover:shadow-elegant">
              Enquire about the Bosta Room
            </a>
          </div>
        </div>
      </section>

      {/* Wedding strip */}
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <img src={wedding} alt="Wedding reception in the Bosta Room" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-cherry-deep/80 via-cherry-deep/40 to-transparent" />
        <div className="relative h-full container-wide flex items-center">
          <div className="max-w-xl">
            <p className="text-cream/85 uppercase tracking-[0.3em] text-xs mb-5">Weddings</p>
            <h2 className="font-display text-cream text-5xl md:text-6xl leading-[1.02] text-balance">
              Hire the whole floor <em className="font-script text-blush text-[1.25em]">Mon – Fri.</em>
            </h2>
            <p className="mt-6 text-cream/85 text-lg max-w-md">
              Up to 120 guests across the Bosta and surrounding floor. Romantic, intimate and uniquely Cherry Reds.
            </p>
            <Link to="/about#weddings" className="mt-8 inline-flex px-8 py-4 rounded-full bg-cream text-cherry uppercase tracking-[0.18em] text-sm hover:bg-blush transition-all duration-500">
              See weddings & events
            </Link>
          </div>
        </div>
      </section>

      {/* Food, drink, music, decor & licence */}
      <section className="container-wide py-20 md:py-28 grid md:grid-cols-2 gap-10">
        {[
          {
            icon: Cake,
            t: "Food & Drink",
            items: [
              "Bring your own celebration cake — all other food must be bought from us",
              "Buffet menus available — see the food & drink page",
              "Tea urn & biscuits: £3.50 per head (advance)",
              "Snack buffet: £3pp (crisps, popcorn) or £5pp (olives, nachos, nuts)",
              "Buy 5 of any bottle (incl. Prosecco / soft) — get the 6th FREE",
              "Day Delegate Rate from £10pp: tea urn, biscuits, sandwich buffet",
            ],
          },
          {
            icon: Music,
            t: "Music & Facilities",
            items: [
              "Map Room: music can be switched off; bring a small speaker (must not be heard outside the room)",
              "Bosta: aux cable + 2 XLRs into our PA — bring your own mics & laptop adaptor",
              "Rooms are free — TVs / projectors / mics not included",
              "You can have equipment delivered (we won't sign for it)",
              "All amplified music must go through our speakers / limiter",
            ],
          },
          {
            icon: AlertCircle,
            t: "Decoration",
            items: [
              "Decorate however you like!",
              "No Sellotape, confetti (incl. confetti balloons) or stickers",
              "Damage fees apply if these are used",
            ],
          },
          {
            icon: Users,
            t: "Licence",
            items: [
              "No drinking outside after 11pm",
              "No restrictions on children attending; under-7pm rule: must be accompanied by an adult",
              "We don't host 18ths or under-18 gigs",
              "Last orders 11pm weekdays; up to 1am Fri/Sat with 2 weeks notice",
            ],
          },
        ].map((b, i) => (
          <div key={i} className="reveal bg-blush-soft rounded-2xl p-8 md:p-10" style={{ transitionDelay: `${i * 0.06}s` }}>
            <b.icon className="text-cherry mb-4" />
            <h3 className="font-display text-3xl text-cherry">{b.t}</h3>
            <ul className="mt-5 space-y-2.5 text-foreground/80 text-sm leading-relaxed">
              {b.items.map((it) => (
                <li key={it} className="flex gap-3"><span className="text-cherry mt-2 h-1 w-1 rounded-full bg-cherry shrink-0" />{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section className="bg-blush-soft py-20 md:py-28">
        <div className="container-tight">
          <p className="reveal uppercase tracking-[0.3em] text-xs text-cherry/70 mb-4 text-center">FAQs</p>
          <h2 className="reveal reveal-delay-1 font-display text-5xl md:text-6xl text-cherry text-center text-balance leading-[1.02]">
            Good to <em className="font-script text-[1.3em]">know.</em>
          </h2>
          <div className="mt-14 grid md:grid-cols-2 gap-8">
            {faqs.map((f, i) => (
              <div key={i} className="reveal" style={{ transitionDelay: `${(i % 4) * 0.06}s` }}>
                <h4 className="font-display text-2xl text-cherry">{f.q}</h4>
                <p className="mt-2 text-foreground/75 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="enquire" className="scroll-mt-28 bg-cherry text-cream py-24">
        <div className="container-tight grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="uppercase tracking-[0.3em] text-xs text-blush mb-4">Enquire</p>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.02]">
              Tell us about your <em className="font-script text-blush text-[1.3em]">event.</em>
            </h2>
            <p className="mt-6 text-cream/80 text-lg max-w-md">
              We'll come back to you within 24 hours. Or email us directly at{" "}
              <a href="mailto:people@cherryreds.com" className="underline hover:text-blush">people@cherryreds.com</a>.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="bg-cream/5 backdrop-blur border border-cream/15 rounded-2xl p-8 md:p-10">
              {sent ? (
                <div className="p-6 rounded-xl bg-blush text-cherry text-center">
                  <p className="font-display text-2xl">Thank you — enquiry sent!</p>
                  <p className="mt-2 text-cherry/80 text-sm">We'll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={submit} className="grid gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input required placeholder="Your name" value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="px-4 py-3 rounded-lg bg-cream/10 border border-cream/20 focus:border-blush outline-none placeholder:text-cream/50 transition" />
                    <input required type="email" placeholder="Email" value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="px-4 py-3 rounded-lg bg-cream/10 border border-cream/20 focus:border-blush outline-none placeholder:text-cream/50 transition" />
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <input type="tel" placeholder="Phone" value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="px-4 py-3 rounded-lg bg-cream/10 border border-cream/20 focus:border-blush outline-none placeholder:text-cream/50 transition" />
                    <input required type="date" value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="px-4 py-3 rounded-lg bg-cream/10 border border-cream/20 focus:border-blush outline-none placeholder:text-cream/50 transition text-cream/80" />
                    <input required type="number" min={8} placeholder="Guests" value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: e.target.value })}
                      className="px-4 py-3 rounded-lg bg-cream/10 border border-cream/20 focus:border-blush outline-none placeholder:text-cream/50 transition" />
                  </div>
                  <select value={form.room} onChange={(e) => setForm({ ...form, room: e.target.value })}
                    className="px-4 py-3 rounded-lg bg-cream/10 border border-cream/20 focus:border-blush outline-none text-cream transition">
                    <option className="text-cherry">Map Room</option>
                    <option className="text-cherry">Bosta Room</option>
                    <option className="text-cherry">Wedding / whole floor</option>
                    <option className="text-cherry">Outside area (up to 30)</option>
                    <option className="text-cherry">Not sure yet</option>
                  </select>
                  <textarea rows={5} placeholder="Tell us about your event…" value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="px-4 py-3 rounded-lg bg-cream/10 border border-cream/20 focus:border-blush outline-none placeholder:text-cream/50 transition resize-none" />
                  <button type="submit"
                    className="mt-2 px-8 py-4 rounded-full bg-cream text-cherry uppercase tracking-[0.18em] text-sm font-medium hover:bg-blush transition-all duration-500 hover:shadow-elegant">
                    Send Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
