import { Clock, MapPin, Mail, Accessibility } from "lucide-react";
import { useState } from "react";

const hours = [
  ["Monday – Sunday", "10:00 — 23:00"],
  ["Last food orders", "21:00"],
  ["Christmas Eve / NYE", "Close 21:00"],
  ["Christmas Day & Boxing", "Closed"],
];

export default function Visit() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    await new Promise((r) => setTimeout(r, 500));
    console.log("[mock POST /api/contact]", form);
    setSent(true);
  };

  return (
    <section id="visit" className="bg-cherry text-cream relative overflow-hidden">
      <div className="container-wide py-28 md:py-36 grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <p className="reveal uppercase tracking-[0.3em] text-xs text-blush mb-6">Visit</p>
          <h2 className="reveal reveal-delay-1 font-display text-5xl md:text-7xl text-balance leading-[1.02]">
            Come say <em className="font-script text-blush text-[1.3em]">hello</em>.
          </h2>
          <p className="reveal reveal-delay-2 mt-6 text-cream/80 text-lg max-w-md">
            We're a stone's throw from New Street Station on the gorgeous John Bright Street.
            Walk-ins only — no table bookings, just turn up.
          </p>

          <div className="reveal reveal-delay-3 mt-12 space-y-6">
            <div className="flex gap-4">
              <MapPin className="shrink-0 text-blush mt-1" size={22} />
              <div>
                <div className="uppercase text-xs tracking-[0.2em] text-blush mb-1">Address</div>
                <p>83 John Bright Street<br />Birmingham B1 1BL</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="shrink-0 text-blush mt-1" size={22} />
              <div className="flex-1">
                <div className="uppercase text-xs tracking-[0.2em] text-blush mb-2">Opening Hours</div>
                <dl className="space-y-1.5">
                  {hours.map(([d, t]) => (
                    <div key={d} className="flex justify-between gap-6 border-b border-cream/10 pb-1.5 max-w-sm">
                      <dt className="text-cream/85">{d}</dt>
                      <dd className="text-cream tabular-nums">{t}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="shrink-0 text-blush mt-1" size={22} />
              <div>
                <div className="uppercase text-xs tracking-[0.2em] text-blush mb-1">Email</div>
                <a href="mailto:people@cherryreds.com" className="hover:text-blush transition">people@cherryreds.com</a>
              </div>
            </div>
            <div className="flex gap-4">
              <Accessibility className="shrink-0 text-blush mt-1" size={22} />
              <div className="text-sm text-cream/80">
                Downstairs has wheelchair access and we have an accessible toilet — please email
                if you'd like us to reserve a table.
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 lg:pl-10">
          <div className="reveal bg-cream/5 backdrop-blur border border-cream/15 rounded-2xl p-8 md:p-12">
            <h3 className="font-display text-3xl md:text-4xl">Drop us a line</h3>
            <p className="mt-2 text-cream/70 text-sm">General questions, accessibility, press — we read everything.</p>
            {sent ? (
              <div className="mt-8 p-6 rounded-xl bg-blush text-cherry text-center">
                <p className="font-display text-2xl">Message received — thank you!</p>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-8 grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input required placeholder="Your name" value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="px-4 py-3 rounded-lg bg-cream/10 border border-cream/20 focus:border-blush outline-none placeholder:text-cream/50 transition" />
                  <input required type="email" placeholder="Email" value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="px-4 py-3 rounded-lg bg-cream/10 border border-cream/20 focus:border-blush outline-none placeholder:text-cream/50 transition" />
                </div>
                <textarea required rows={5} placeholder="Your message…" value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="px-4 py-3 rounded-lg bg-cream/10 border border-cream/20 focus:border-blush outline-none placeholder:text-cream/50 transition resize-none" />
                <button type="submit"
                  className="mt-2 px-8 py-4 rounded-full bg-cream text-cherry uppercase tracking-[0.18em] text-sm font-medium hover:bg-blush transition-all duration-500 hover:shadow-elegant">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
