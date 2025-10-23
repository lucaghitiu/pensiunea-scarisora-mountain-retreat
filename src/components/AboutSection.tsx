import { Heart, Home, Leaf, Users } from "lucide-react";
import interiorDining from "@/assets/interior-dining.jpg";
import exteriorMountains from "@/assets/exterior-mountains.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: Heart,
      title: "Ospitalitate",
      description: "O pensiune de familie construită cu pasiune și dedicare",
    },
    {
      icon: Home,
      title: "Confort",
      description: "Camere dotate cu tot confortul modern în stil tradițional",
    },
    {
      icon: Leaf,
      title: "Natură",
      description: "Aer curat de munte și peisaje spectaculoase",
    },
    {
      icon: Users,
      title: "Tradiție",
      description: "Bucătărie tradițională cu produse locale autentice",
    },
  ];

  return (
    <section id="despre" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
            Despre Noi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            O poveste despre dragoste pentru munte și ospitalitate autentică
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground/90 font-body">
              Pensiunea Scărișoara este mai mult decât un simplu loc de cazare – este o casă
              departe de casă, construită cu dragoste și grijă pentru a oferi oaspeților
              noștri cele mai frumoase momente petrecute în inima Munților Apuseni.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 font-body">
              Situată în satul Scărișoara, județul Alba, pensiunea noastră vă invită să
              descoperiți frumusețea naturii, să vă bucurați de liniște și să savurați
              preparate tradiționale gătite cu produse locale de la gospodăria proprie.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 font-body">
              Cu camere confortabile, o bucătărie tradițională, spații generoase pentru
              evenimente și un loc de joacă pentru copii, suntem pregătiți să vă primim
              cu brațele deschise, indiferent dacă veniți în vacanță sau pentru evenimente speciale.
            </p>
          </div>
          <div className="relative">
            <img
              src={interiorDining}
              alt="Interior sala de mese"
              className="rounded-lg shadow-xl hover-lift w-full"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card rounded-lg shadow-md hover-lift"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-body">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="relative rounded-lg overflow-hidden shadow-2xl">
          <img
            src={exteriorMountains}
            alt="Vedere exterior cu munții în fundal"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h3 className="font-heading font-bold text-3xl mb-2">
                Peisaje de poveste
              </h3>
              <p className="text-lg font-body">
                Trezește-te cu vederi spectaculoase asupra Munților Apuseni
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
