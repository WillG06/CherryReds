import { useReveal } from "@/hooks/useReveal";
import SiteNav from "@/components/SiteNav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Visit from "@/components/Visit";
import MapBand from "@/components/MapBand";
import Footer from "@/components/Footer";
import BookingCTA from "@/components/BookingCTA";

const Index = () => {
  useReveal();
  return (
    <main className="bg-background overflow-x-hidden">
      <SiteNav />
      <Hero />
      <Marquee />
      <About />
      <Menu />
      <Events />
      <Gallery />
      <Visit />
      <MapBand />
      <Footer />
      <BookingCTA />
    </main>
  );
};

export default Index;
