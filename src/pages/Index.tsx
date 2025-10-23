import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AccommodationSection from "@/components/AccommodationSection";
import RestaurantSection from "@/components/RestaurantSection";
import GallerySection from "@/components/GallerySection";
import EventsSection from "@/components/EventsSection";
import ReservationForm from "@/components/ReservationForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <AccommodationSection />
        <RestaurantSection />
        <GallerySection />
        <EventsSection />
        <ReservationForm />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
