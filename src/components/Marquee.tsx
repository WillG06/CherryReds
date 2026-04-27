const items = [
  "Craft Beer",
  "Freshly Ground Coffee",
  "Homemade Cakes",
  "Real Milkshakes",
  "Local Free-Range Eggs",
  "Vegan & GF Friendly",
  "Walk-ins Welcome",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="bg-cherry text-cream py-6 overflow-hidden border-y border-cherry-deep/40">
      <div className="marquee">
        {row.map((t, i) => (
          <span
            key={i}
            className="font-display italic text-3xl md:text-4xl whitespace-nowrap flex items-center gap-16"
          >
            {t}
            <span className="text-blush">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
