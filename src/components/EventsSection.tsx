import { Calendar, Mountain, Users, Flame } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import eventOutdoor from "@/assets/event-outdoor.jpg";
import groupPhoto from "@/assets/group-photo.jpg";

const EventsSection = () => {
  const activities = [
    {
      icon: Calendar,
      title: "Tabere & Retreat-uri",
      description: "Spațiu ideal pentru tabere școlare, retreat-uri spirituale și programe educaționale",
    },
    {
      icon: Mountain,
      title: "Drumeții & Excursii",
      description: "Trasee montane spectaculoase, inclusiv vizite la celebra Peștera Scărișoara",
    },
    {
      icon: Users,
      title: "Team Building",
      description: "Activități de grup personalizate pentru companii și organizații",
    },
    {
      icon: Flame,
      title: "Foc de tabără",
      description: "Seri memorabile cu foc de tabără, chitară și povești sub cerul înstelat",
    },
  ];

  return (
    <section id="evenimente" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
            Evenimente & Activități
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            Experiențe memorabile pentru toate vârstele
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-3xl text-foreground">
              Mai mult decât o simplă cazare
            </h3>
            <p className="text-lg leading-relaxed text-foreground/90 font-body">
              La Pensiunea Scărișoara organizăm și găzduim diverse evenimente și activități
              pentru toate vârstele. De la tabere pentru copii la team building-uri pentru
              companii, de la serbări școlare la excursii ghidate în Munții Apuseni.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 font-body">
              Curtea noastră spațioasă, sala mare de evenimente și spațiile amenajate special
              pentru activități în aer liber fac din pensiunea noastră locul perfect pentru
              orice tip de eveniment.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90 font-body">
              Fie că vreți să explorați Peștera Scărișoara, să faceți drumeții pe poteci de munte,
              sau pur și simplu să vă relaxați la un foc de tabără, suntem aici pentru a vă
              crea amintiri de neuitat.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={groupPhoto}
              alt="Grup de participanți"
              className="rounded-lg shadow-xl hover-lift col-span-2"
            />
            <img
              src={eventOutdoor}
              alt="Activități outdoor"
              className="rounded-lg shadow-lg hover-lift col-span-2"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <Card key={index} className="hover-lift text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4 mx-auto">
                  <activity.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-heading text-xl text-foreground">
                  {activity.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base font-body">
                  {activity.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
