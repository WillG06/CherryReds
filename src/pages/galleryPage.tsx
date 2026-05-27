import { useReveal } from "@/hooks/useReveal";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import BookingCTA from "@/components/BookingCTA";

const GalleryPage = () => {
  useReveal();
  return (
    <main className="bg-background overflow-x-hidden">
      <SiteNav />
      <Gallery />
      <Footer />
      <BookingCTA />
    </main>
  );
};

export default GalleryPage;