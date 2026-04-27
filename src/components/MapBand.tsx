export default function MapBand() {
  return (
    <section aria-label="Find us on the map" className="relative w-full bg-background">
      <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden border-y border-border">
        {/* Tinted overlay to match brand */}
        <div className="absolute inset-0 pointer-events-none z-10 bg-blush/15 mix-blend-multiply" />
        <iframe
          title="Cherry Reds on Google Maps"
          src="https://www.google.com/maps?q=83+John+Bright+Street,+Birmingham&output=embed"
          className="absolute inset-0 w-full h-full grayscale-[40%] contrast-[0.95]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
