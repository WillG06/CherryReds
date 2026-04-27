import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import SiteNav from "@/components/SiteNav";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { Clock, Users, UtensilsCrossed, Phone } from "lucide-react";
import diningImg from "@/assets/book-table.jpg";

const times = [
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
  "20:00", "20:30", "21:00",
];

export default function BookPage() {
  useReveal();
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "19:00",
    guests: "2",
    occasion: "",
    notes: "",
  });
  const [sent, setSent] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    await new Promise((r) => setTimeout(r, 600));
    console.log("[mock POST /api/book-table]", form);
    setSent(true);
  };

  return (
    <main className="bg-background overflow-x-hidden">
      <SiteNav />
      <PageHeader
        kicker="Book a Table"
        title="Reserve your"
        script="seat with us."
        description="Whether it's a casual lunch, a long dinner with friends, or a quick coffee — book ahead and we'll save the perfect spot."
        image={diningImg}
        crumbs={[{ label: "Home", to: "/" }, { label: "Book a Table" }]}
      />

      {/* Quick info */}
      <section className="container-wide py-16 md:py-20 grid md:grid-cols-3 gap-6">
        {[
          { icon: Clock, t: "Open daily", d: "Mon – Sat 10am – late · Sun 10am – 6pm. Kitchen closes 9pm." },
          { icon: Users, t: "Parties up to 7", d: "Larger groups (8+)? Head to our Room Hire page instead." },
          { icon: UtensilsCrossed, t: "Walk-ins welcome", d: "We always keep a few tables free for those who fancy a wander in." },
        ].map((b, i) => (
          <div key={i} className="reveal bg-blush-soft rounded-2xl p-8" style={{ transitionDelay: `${i * 0.08}s` }}>
            <b.icon className="text-cherry mb-4" />
            <h3 className="font-display text-2xl text-cherry">{b.t}</h3>
            <p className="mt-2 text-foreground/75 text-sm leading-relaxed">{b.d}</p>
          </div>
        ))}
      </section>

      {/* Booking form */}
      <section id="reserve" className="scroll-mt-28 bg-cherry text-cream py-24">
        <div className="container-tight grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="uppercase tracking-[0.3em] text-xs text-blush mb-4">Reserve a table</p>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.02]">
              Pick a date, <em className="font-script text-blush text-[1.3em]">we'll do the rest.</em>
            </h2>
            <p className="mt-6 text-cream/80 text-lg max-w-md">
              We'll confirm by email within a couple of hours during opening. For same-day bookings, please call us on{" "}
              <a href="tel:+441214488607" className="underline hover:text-blush whitespace-nowrap">
                <Phone className="inline -mt-1" size={16} /> 0121 448 8607
              </a>.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-cream/5 backdrop-blur border border-cream/15 rounded-2xl p-8 md:p-10">
              {sent ? (
                <div className="p-6 rounded-xl bg-blush text-cherry text-center">
                  <p className="font-display text-2xl">Table requested!</p>
                  <p className="mt-2 text-cherry/80 text-sm">
                    We've got your details — keep an eye on your inbox for confirmation shortly.
                  </p>
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
                  <input type="tel" placeholder="Phone (optional)" value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="px-4 py-3 rounded-lg bg-cream/10 border border-cream/20 focus:border-blush outline-none placeholder:text-cream/50 transition" />

                  <div className="grid sm:grid-cols-3 gap-4">
                    <label className="flex flex-col gap-1.5">
                      <span className="text-xs uppercase tracking-[0.18em] text-cream/70">Date</span>
                      <input required type="date" value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="px-4 py-3 rounded-lg bg-cream/10 border border-cream/20 focus:border-blush outline-none text-cream/90 transition" />
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="text-xs uppercase tracking-[0.18em] text-cream/70">Time</span>
                      <select value={form.time}
                        onChange={(e) => setForm({ ...form, time: e.target.value })}
                        className="px-4 py-3 rounded-lg bg-cream/10 border border-cream/20 focus:border-blush outline-none text-cream transition">
                        {times.map((t) => (
                          <option key={t} value={t} className="text-cherry">{t}</option>
                        ))}
                      </select>
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="text-xs uppercase tracking-[0.18em] text-cream/70">Guests</span>
                      <select value={form.guests}
                        onChange={(e) => setForm({ ...form, guests: e.target.value })}
                        className="px-4 py-3 rounded-lg bg-cream/10 border border-cream/20 focus:border-blush outline-none text-cream transition">
                        {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                          <option key={n} value={n} className="text-cherry">{n} {n === 1 ? "guest" : "guests"}</option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <select value={form.occasion}
                    onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                    className="px-4 py-3 rounded-lg bg-cream/10 border border-cream/20 focus:border-blush outline-none text-cream transition">
                    <option value="" className="text-cherry">Occasion (optional)</option>
                    <option className="text-cherry">Just a meal</option>
                    <option className="text-cherry">Birthday</option>
                    <option className="text-cherry">Anniversary</option>
                    <option className="text-cherry">Date night</option>
                    <option className="text-cherry">Catch-up with friends</option>
                  </select>

                  <textarea rows={4} placeholder="Allergies, high chair, accessibility needs…" value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="px-4 py-3 rounded-lg bg-cream/10 border border-cream/20 focus:border-blush outline-none placeholder:text-cream/50 transition resize-none" />

                  <button type="submit"
                    className="mt-2 px-8 py-4 rounded-full bg-blush text-cherry uppercase tracking-[0.18em] text-sm hover:bg-cream transition-all duration-500 hover:shadow-elegant">
                    Request Table
                  </button>
                  <p className="text-xs text-cream/60 text-center">
                    Tables are held for 15 minutes past the booked time.
                  </p>
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
