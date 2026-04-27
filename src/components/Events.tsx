import { useState } from "react";
import { Link } from "react-router-dom";
import events from "@/assets/events-room.jpg";
import { Check } from "lucide-react";

const rooms = [
  {
    name: "Map Room",
    capacity: "17 seated · 20 standing",
    best: "Meetings, baby showers, tasting sessions",
    minimum: "From £50 minimum spend",
  },
  {
    name: "Bosta Room",
    capacity: "40 dining · 50 theatre · 60 standing",
    best: "Parties, wakes, larger gatherings, live performances",
    minimum: "From £100 minimum spend",
  },
];

export default function Events() {
  const [form, setForm] = useState({ name: "", email: "", date: "", guests: "", room: "Map Room", message: "" });
  const [sent, setSent] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Mock backend endpoint — replace with real /api/booking
    await new Promise((r) => setTimeout(r, 600));
    console.log("[mock POST /api/booking]", form);
    setSent(true);
  };

  return (
    <section id="events" className="relative bg-background overflow-hidden">
      {/* Parallax-style image band */}
      <div className="relative h-[55vh] min-h-[420px] w-full overflow-hidden">
        <img
          src={events}
          alt="Private dining room set with candles at Cherry Reds"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cherry-deep/30 via-transparent to-background" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-wide">
            <p className="reveal uppercase tracking-[0.3em] text-xs text-cream/85 mb-4">
              Events & Room Hire
            </p>
            <h2 className="reveal reveal-delay-1 font-display text-cream text-5xl md:text-7xl lg:text-8xl text-balance max-w-3xl leading-[1]">
              Two beautiful rooms,<br />
              <em className="font-script text-blush text-[1.3em]">free</em> to hire.
            </h2>
          </div>
        </div>
      </div>

      <div className="container-wide py-24 md:py-32 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-6 space-y-10">
          {rooms.map((r, i) => (
            <div
              key={r.name}
              className="reveal border-t border-cherry/15 pt-8"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-baseline justify-between flex-wrap gap-4">
                <h3 className="font-display text-4xl md:text-5xl text-cherry">{r.name}</h3>
                <span className="text-sm uppercase tracking-[0.18em] text-cherry/70">{r.minimum}</span>
              </div>
              <p className="mt-3 text-foreground/75">{r.capacity}</p>
              <p className="mt-2 text-foreground/60 italic">Best for · {r.best}</p>
            </div>
          ))}
          <ul className="reveal space-y-3 pt-4 text-foreground/80">
            {[
              "Both rooms are FREE to hire with a minimum spend",
              "Buffets and pre-ordered drinks available",
              "December bookings require a £50 deposit",
              "Live music & private events welcome",
            ].map((b) => (
              <li key={b} className="flex gap-3">
                <Check size={20} className="text-cherry shrink-0 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-6 lg:pl-8">
          <div className="reveal bg-blush rounded-2xl p-8 md:p-12 shadow-soft">
            <h3 className="font-display text-3xl md:text-4xl text-cherry">
              <Link to="/hire" className="hover:text-cherry-deep transition">Enquire about a booking →</Link>
            </h3>
            <p className="mt-2 text-foreground/70 text-sm">
              We'll get back to you within 24 hours. Walk-ins are also always welcome.
            </p>

            {sent ? (
              <div className="mt-8 p-6 rounded-xl bg-cream text-center">
                <p className="font-display text-2xl text-cherry">Thank you — request sent!</p>
                <p className="mt-2 text-foreground/70 text-sm">We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-8 grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input required placeholder="Your name" value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="px-4 py-3 rounded-lg bg-cream border border-transparent focus:border-cherry outline-none transition" />
                  <input required type="email" placeholder="Email" value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="px-4 py-3 rounded-lg bg-cream border border-transparent focus:border-cherry outline-none transition" />
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <input required type="date" value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="px-4 py-3 rounded-lg bg-cream border border-transparent focus:border-cherry outline-none transition" />
                  <input required type="number" min={8} placeholder="Guests (8+)" value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    className="px-4 py-3 rounded-lg bg-cream border border-transparent focus:border-cherry outline-none transition" />
                  <select value={form.room}
                    onChange={(e) => setForm({ ...form, room: e.target.value })}
                    className="px-4 py-3 rounded-lg bg-cream border border-transparent focus:border-cherry outline-none transition">
                    {rooms.map((r) => <option key={r.name}>{r.name}</option>)}
                  </select>
                </div>
                <textarea rows={4} placeholder="Tell us about your event…" value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="px-4 py-3 rounded-lg bg-cream border border-transparent focus:border-cherry outline-none transition resize-none" />
                <button type="submit"
                  className="mt-2 px-8 py-4 rounded-full bg-cherry text-cream uppercase tracking-[0.18em] text-sm hover:bg-cherry-deep transition-all duration-500 hover:shadow-elegant">
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
