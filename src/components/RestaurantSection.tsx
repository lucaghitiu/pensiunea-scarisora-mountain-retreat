import { Coffee, Utensils, Wine } from "lucide-react";
import interiorDining from "@/assets/interior-dining.jpg";

const RestaurantSection = () => {
  const highlights = [
    {
      icon: Utensils,
      title: "Mâncare tradițională",
      description: "Preparate gătite după rețete tradiționale românești",
    },
    {
      icon: Coffee,
      title: "Produse locale",
      description: "Ingrediente proaspete din gospodăria proprie",
    },
    {
      icon: Wine,
      title: "Atmosferă caldă",
      description: "Servim masa într-o ambianță primitoare și autentică",
    },
  ];

  return (
    <section id="restaurant" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
            Restaurant & Terasă
          </h2>
          <p className="text-xl text-secondary font-heading italic max-w-3xl mx-auto">
            Gustul autentic al Apusenilor, gătit cu suflet
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1 space-y-6">
            <p className="text-lg leading-relaxed text-foreground/90 font-body">
              La Pensiunea Scărișoara, bucătăria este mai mult decât o simplă necesitate – 
              este o expresie a dragostei pentru tradiție și gastronomie autentică. 
              Fiecare masă este pregătită cu grijă, folosind produse proaspete din 
              gospodăria noastră și de la producători locali.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 font-body">
              De la ciorbă de burtă tradițională la mămăligă cu brânză și smântână, 
              de la sarmale făcute în casă la plăcintele cu mere – fiecare preparat 
              are gustul copilăriei și al casei bunicilor.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 font-body">
              Masa poate fi servită în sala de mese generoasă sau pe terasa noastră cu 
              vedere panoramică la munte, în funcție de sezon și preferințe.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative">
            <img
              src={interiorDining}
              alt="Sala de mese"
              className="rounded-lg shadow-xl hover-lift w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-lg shadow-xl max-w-xs">
              <p className="font-heading text-lg font-bold">
                "Aici mănânci ca la mama acasă!"
              </p>
              <p className="text-sm opacity-90 font-body">- Oaspeții noștri</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg shadow-md hover-lift text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <item.icon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground font-body">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantSection;
