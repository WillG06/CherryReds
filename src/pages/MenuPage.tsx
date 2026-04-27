import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import SiteNav from "@/components/SiteNav";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { foodSections, drinksSections, allergyNote, type Section, type Group, type Item } from "@/data/menu";
import heroImg from "@/assets/menu-pancakes.jpg";
import burger from "@/assets/menu-burger.jpg";
import wine from "@/assets/menu-wine.jpg";

function TagPill({ t }: { t: string }) {
  return (
    <span className="inline-block px-2 py-0.5 rounded-full bg-blush/60 text-cherry text-[10px] uppercase tracking-[0.15em] font-medium">
      {t}
    </span>
  );
}

function ItemRow({ item }: { item: Item }) {
  return (
    <li className="reveal py-5 first:pt-0 border-b border-cherry/10 last:border-b-0">
      <div className="flex justify-between gap-6 items-baseline">
        <div className="flex-1">
          <h4 className="font-display text-xl md:text-2xl text-cherry leading-snug">
            {item.name}
            {item.tags && (
              <span className="ml-3 inline-flex flex-wrap gap-1.5 align-middle">
                {item.tags.map((t) => <TagPill key={t} t={t} />)}
              </span>
            )}
          </h4>
          {item.desc && <p className="mt-1.5 text-foreground/70 text-sm md:text-base leading-relaxed max-w-2xl">{item.desc}</p>}
        </div>
        {item.price && (
          <div className="font-display text-xl md:text-2xl text-cherry tabular-nums shrink-0">
            {item.price}
          </div>
        )}
      </div>
    </li>
  );
}

function GroupBlock({ group }: { group: Group }) {
  return (
    <div className="reveal mb-12">
      <div className="flex items-baseline justify-between mb-4 border-b border-cherry/30 pb-3">
        <h3 className="font-display text-2xl md:text-3xl text-cherry-deep">{group.title}</h3>
      </div>
      {group.note && <p className="italic text-foreground/65 mb-4">{group.note}</p>}
      {group.items.length > 0 && (
        <ul>
          {group.items.map((it, i) => <ItemRow key={i} item={it} />)}
        </ul>
      )}
    </div>
  );
}

function SectionBlock({ section }: { section: Section }) {
  return (
    <section id={section.id} className="scroll-mt-28 py-16 md:py-24 border-t border-cherry/10 first:border-t-0">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
          <p className="reveal uppercase tracking-[0.3em] text-xs text-cherry/70 mb-4">{section.kicker}</p>
          <h2 className="reveal reveal-delay-1 font-display text-4xl md:text-5xl lg:text-6xl text-cherry leading-[1.02] text-balance">
            {section.title}
          </h2>
          {section.intro && (
            <p className="reveal reveal-delay-2 mt-5 text-foreground/75 leading-relaxed">{section.intro}</p>
          )}
        </div>
        <div className="lg:col-span-8">
          {section.groups.map((g, i) => <GroupBlock key={i} group={g} />)}
        </div>
      </div>
    </section>
  );
}

export default function MenuPage() {
  const [tab, setTab] = useState<"food" | "drinks">("food");
  const sections = tab === "food" ? foodSections : drinksSections;
  useReveal([tab]);

  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  return (
    <main className="bg-background overflow-x-hidden">
      <SiteNav />
      <PageHeader
        kicker="Daily 10am – 9pm (last food orders)"
        title="The"
        script="full menu"
        description="Honest food, real ingredients, generous portions — cooked to order with options for every diet. Order at the bar with your table number. All food is available to take away."
        image={heroImg}
        crumbs={[{ label: "Home", to: "/" }, { label: "Menu" }]}
      />

      {/* Sticky tab + section nav */}
      <div className="sticky top-20 md:top-24 z-30 bg-cream/90 backdrop-blur-xl border-b border-border">
        <div className="container-wide flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-4">
          <div className="inline-flex bg-blush rounded-full p-1 self-start">
            {(["food", "drinks"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-2 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
                  tab === t ? "bg-cherry text-cream shadow-soft" : "text-cherry hover:bg-cream/40"
                }`}
              >
                {t === "food" ? "Food Menu" : "Drinks List"}
              </button>
            ))}
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.18em] text-cherry/80">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="hover:text-cherry transition">
                {s.title.split(" ").slice(0, 2).join(" ")}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="container-wide py-12 md:py-16">
        {sections.map((s) => <SectionBlock key={s.id} section={s} />)}
      </div>

      {/* Editorial visual break */}
      <section className="grid md:grid-cols-2 gap-1">
        <img src={burger} alt="Smashed beef burger with chips and slaw" loading="lazy" className="w-full h-[60vh] object-cover" />
        <img src={wine} alt="Wine and craft cocktail at the bar" loading="lazy" className="w-full h-[60vh] object-cover" />
      </section>

      {/* Allergy / footer info */}
      <section className="bg-blush-soft py-20">
        <div className="container-tight">
          <div className="reveal bg-cream rounded-2xl p-8 md:p-12 shadow-card">
            <h3 className="font-display text-2xl md:text-3xl text-cherry mb-4">A note on allergens & dietary needs</h3>
            <p className="text-foreground/75 leading-relaxed">{allergyNote}</p>
          </div>
          <p className="reveal text-center mt-10 text-sm text-foreground/60">
            Walk-ins only · No table bookings · We can serve alcohol from 10am · Last food orders 9pm
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
