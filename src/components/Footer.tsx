import { Heart } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Pensiunea Scărișoara" className="h-16 w-16 object-contain" />
              <span className="font-heading font-bold text-xl">Pensiunea Scărișoara</span>
            </div>
            <p className="text-primary-foreground/80 font-body">
              Ospitalitate tradițională în inima Munților Apuseni
            </p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Link-uri rapide</h3>
            <ul className="space-y-2 font-body">
              <li>
                <a
                  href="#despre"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Despre noi
                </a>
              </li>
              <li>
                <a
                  href="#cazare"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Cazare
                </a>
              </li>
              <li>
                <a
                  href="#restaurant"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Restaurant
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-primary-foreground/80 font-body">
              <li>Sat Scărișoara, Județul Alba</li>
              <li>
                <a href="tel:+40123456789" className="hover:text-primary-foreground transition-colors">
                  +40 123 456 789
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@pensiunea-scarisoara.ro"
                  className="hover:text-primary-foreground transition-colors"
                >
                  contact@pensiunea-scarisoara.ro
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80 font-body">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Pensiunea Scărișoara. Creat cu <Heart className="h-4 w-4 fill-secondary text-secondary" /> în Apuseni
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
