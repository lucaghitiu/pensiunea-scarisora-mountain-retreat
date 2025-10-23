import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
            Contact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            Suntem aici pentru a răspunde întrebărilor dumneavoastră
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-6">
                Informații de contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-foreground">Adresă</p>
                    <p className="text-muted-foreground font-body">
                      Sat Scărișoara, Județul Alba<br />
                      România
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-foreground">Telefon</p>
                    <a
                      href="tel:+40123456789"
                      className="text-muted-foreground hover:text-primary transition-colors font-body"
                    >
                      +40 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-foreground">Email</p>
                    <a
                      href="mailto:contact@pensiunea-scarisoara.ro"
                      className="text-muted-foreground hover:text-primary transition-colors font-body"
                    >
                      contact@pensiunea-scarisoara.ro
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                Urmăriți-ne pe rețelele sociale
              </h3>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 rounded-full hover:bg-accent hover:text-accent-foreground"
                  asChild
                >
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <Facebook className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 rounded-full hover:bg-accent hover:text-accent-foreground"
                  asChild
                >
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg shadow-xl overflow-hidden h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44557.36831447556!2d23.090853!3d46.487667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474892b0c6f3e2a7%3A0x7e7c1f8e3c7c1f8e!2sSc%C4%83ri%C8%99oara%2C%20Romania!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locația Pensiunii Scărișoara"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
