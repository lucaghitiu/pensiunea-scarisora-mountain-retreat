import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: "Acasă", id: "acasa" },
    { label: "Despre", id: "despre" },
    { label: "Cazare", id: "cazare" },
    { label: "Restaurant", id: "restaurant" },
    { label: "Galerie", id: "galerie" },
    { label: "Evenimente", id: "evenimente" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection("acasa")}>
            <img src={logo} alt="Pensiunea Scărișoara" className="h-16 w-16 object-contain" />
            <span className="font-heading font-bold text-xl text-primary hidden sm:block">
              Pensiunea Scărișoara
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary hover:bg-primary/10 font-body"
              >
                {item.label}
              </Button>
            ))}
            <Button
              onClick={() => scrollToSection("rezervare")}
              className="ml-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              Rezervă acum
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 bg-card rounded-lg shadow-lg mt-2 mb-4">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="w-full justify-start text-left font-body"
              >
                {item.label}
              </Button>
            ))}
            <Button
              onClick={() => scrollToSection("rezervare")}
              className="w-full mt-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              Rezervă acum
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
