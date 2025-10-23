import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Bed, Wifi, Tv, Sun, Bath } from "lucide-react";
import roomImage from "@/assets/room-traditional.jpg";

const AccommodationSection = () => {
  const scrollToReservation = () => {
    const element = document.getElementById("rezervare");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const rooms = [
    {
      title: "Cameră Dublă",
      description: "Perfectă pentru cupluri care doresc intimitate și confort",
      features: ["Pat matrimonial", "Baie proprie", "Balcon cu vedere la munte", "Wi-Fi gratuit", "TV", "Încălzire"],
      image: roomImage,
    },
    {
      title: "Cameră Triplă",
      description: "Ideală pentru familii sau grupuri de prieteni",
      features: ["2-3 paturi", "Baie proprie", "Balcon spațios", "Wi-Fi gratuit", "TV", "Încălzire"],
      image: roomImage,
    },
    {
      title: "Apartament",
      description: "Spațiu generos pentru familii mari sau grupuri",
      features: ["Cameră separată", "Living cu canapea", "Baie proprie", "Wi-Fi gratuit", "TV", "Balcon mare"],
      image: roomImage,
    },
  ];

  const amenityIcons: Record<string, any> = {
    "Wi-Fi gratuit": Wifi,
    "TV": Tv,
    "Balcon cu vedere la munte": Sun,
    "Balcon spațios": Sun,
    "Balcon mare": Sun,
    "Baie proprie": Bath,
  };

  return (
    <section id="cazare" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
            Cazare
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            Camere confortabile cu tot ce aveți nevoie pentru un sejur plăcut
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <Card key={index} className="hover-lift overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-heading text-2xl text-primary flex items-center gap-2">
                  <Bed className="h-6 w-6" />
                  {room.title}
                </CardTitle>
                <CardDescription className="text-base font-body">
                  {room.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {room.features.map((feature, i) => {
                    const Icon = amenityIcons[feature];
                    return (
                      <li key={i} className="flex items-center gap-2 text-foreground/80 font-body">
                        {Icon ? <Icon className="h-4 w-4 text-primary" /> : <span className="h-1.5 w-1.5 bg-primary rounded-full" />}
                        {feature}
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={scrollToReservation}
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                  Rezervă camera
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;
