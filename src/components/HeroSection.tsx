import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/exterior-rainbow.jpg";

const HeroSection = () => {
  const scrollToReservation = () => {
    const element = document.getElementById("rezervare");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById("despre");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="acasa" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/60 to-primary/80" />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in-up">
        <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6 drop-shadow-lg">
          Trăiește liniștea munților
        </h1>
        <p className="font-heading text-2xl md:text-3xl mb-4 drop-shadow-lg">
          în inima Apusenilor
        </p>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-body opacity-95">
          Ospitalitate tradițională, aer curat de munte și experiențe memorabile
          în Scărișoara, județul Alba
        </p>
        <Button
          onClick={scrollToReservation}
          size="lg"
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 shadow-2xl hover:scale-105 transition-transform"
        >
          Rezervă acum
        </Button>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer hover:scale-110 transition-transform"
        aria-label="Scroll jos"
      >
        <ChevronDown className="h-10 w-10" />
      </button>
    </section>
  );
};

export default HeroSection;
