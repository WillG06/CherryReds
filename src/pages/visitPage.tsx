import { useReveal } from "@/hooks/useReveal";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import Visit from "@/components/Visit";
import MapBand from "@/components/MapBand";
import BookingCTA from "@/components/BookingCTA";

const VisitPage = () => {
  useReveal();
  return (
    <main className="bg-background overflow-x-hidden">
      <SiteNav />
      <Visit />
      <MapBand />
      <Footer />
      <BookingCTA />
    </main>
  );
};

export default VisitPage;