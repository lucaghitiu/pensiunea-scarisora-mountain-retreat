import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import exteriorMountains from "@/assets/exterior-mountains.jpg";
import exteriorRainbow from "@/assets/exterior-rainbow.jpg";
import exteriorAutumn from "@/assets/exterior-autumn.jpg";
import exteriorFront from "@/assets/exterior-front.jpg";
import interiorDining from "@/assets/interior-dining.jpg";
import roomTraditional from "@/assets/room-traditional.jpg";
import eventPerformance from "@/assets/event-performance.jpg";
import eventOutdoor from "@/assets/event-outdoor.jpg";
import groupPhoto from "@/assets/group-photo.jpg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: exteriorRainbow, alt: "Vedere exterioară cu curcubeu", category: "Exterior" },
    { src: interiorDining, alt: "Sala de mese", category: "Interior" },
    { src: roomTraditional, alt: "Cameră cu decor tradițional", category: "Camere" },
    { src: exteriorMountains, alt: "Pensiunea cu munții în fundal", category: "Exterior" },
    { src: eventPerformance, alt: "Spectacol pentru copii", category: "Evenimente" },
    { src: exteriorAutumn, alt: "Toamna în Apuseni", category: "Exterior" },
    { src: groupPhoto, alt: "Grup de oaspeți fericiți", category: "Evenimente" },
    { src: exteriorFront, alt: "Vedere frontală a pensiunii", category: "Exterior" },
    { src: eventOutdoor, alt: "Activități în aer liber", category: "Evenimente" },
  ];

  return (
    <section id="galerie" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
            Galerie foto
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
            Imagini din pensiune, camerele noastre și momentele frumoase petrecute aici
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="font-heading font-bold text-lg">{image.category}</p>
                  <p className="text-sm font-body">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0">
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Imagine mărită"
                className="w-full h-auto rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;
