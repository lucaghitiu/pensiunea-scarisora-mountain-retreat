import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria P.",
      location: "București",
      text: "O oază de liniște și tradiție. Gazdele sunt minunate, mâncarea excelentă și vederea spre munte te lasă fără cuvinte. Cu siguranță vom reveni!",
      rating: 5,
    },
    {
      name: "Adrian T.",
      location: "Cluj-Napoca",
      text: "Ne-am simțit ca acasă. Camerele sunt curate și confortabile, iar atmosfera e de neuitat. Copiii au avut unde să se joace în voie și au iubit focul de tabără.",
      rating: 5,
    },
    {
      name: "Elena și Mihai S.",
      location: "Timișoara",
      text: "Am organizat aici un team building pentru companie și a fost perfect! Spațiile sunt generoase, mâncarea delicioasă și peisajul de vis. Recomand cu încredere!",
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
            Ce spun oaspeții noștri
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            Recenzii reale de la persoane care au ales să petreacă timp la noi
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground/90 mb-6 font-body italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-heading font-bold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground font-body">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
