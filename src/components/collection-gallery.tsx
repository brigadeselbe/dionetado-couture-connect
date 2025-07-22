import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export const CollectionGallery = () => {
  const collections = [
    {
      id: 1,
      image: "/lovable-uploads/8a78fc0f-a6c5-4572-9945-16aa5701c189.png",
      title: "Élégance Rose",
      category: "Femme",
      description: "Tenue traditionnelle avec motifs délicats"
    },
    {
      id: 2,
      image: "/lovable-uploads/b33460d5-ed23-4ba2-a806-067d1e2b7d1a.png",
      title: "Majesté Colorée",
      category: "Femme",
      description: "Robe majestueuse aux couleurs vives"
    },
    {
      id: 3,
      image: "/lovable-uploads/a9fdf38a-8eeb-4767-aed2-284edaf8b078.png",
      title: "Grâce Brodée",
      category: "Femme",
      description: "Boubou avec broderies dorées traditionnelles"
    },
    {
      id: 4,
      image: "/lovable-uploads/86e75c95-946e-4dee-a594-422b3f6342eb.png",
      title: "Arc-en-ciel",
      category: "Femme",
      description: "Création multicolore exceptionnelle"
    },
    {
      id: 5,
      image: "/lovable-uploads/b3899c5f-1809-4540-a6bd-33bd58deb85f.png",
      title: "Saphir Royal",
      category: "Femme",
      description: "Tenue de soirée en bleu royal"
    },
    {
      id: 6,
      image: "/lovable-uploads/0e95674e-80ef-4072-ba9b-bf84169f0531.png",
      title: "Mystique Bordeaux",
      category: "Femme",
      description: "Élégance en dentelle bordeaux"
    },
    {
      id: 7,
      image: "/lovable-uploads/8300eaa8-3f8d-4437-9e7e-25403bd4f755.png",
      title: "Océan Vibrant",
      category: "Femme",
      description: "Robe sirène aux tons océaniques"
    },
    {
      id: 8,
      image: "/lovable-uploads/03b644d1-58e0-4072-926d-b4da3f7421bd.png",
      title: "Forêt Émeraude",
      category: "Femme",
      description: "Ensemble vert aux motifs dorés"
    },
    {
      id: 9,
      image: "/lovable-uploads/30229ded-4a78-4004-b006-4a53dcd1e166.png",
      title: "Dualité Dorée",
      category: "Femme",
      description: "Mélange harmonieux vert et or"
    },
    {
      id: 10,
      image: "/lovable-uploads/542ef797-8d48-46e8-b689-bd8bbdb285bb.png",
      title: "Terre d'Afrique",
      category: "Femme",
      description: "Ensemble aux motifs terrestres"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nos Créations
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre collection exclusive de prêt-à-porter traditionnel, 
            où chaque pièce raconte une histoire d'élégance et d'authenticité.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {collections.map((item) => (
                <CarouselItem key={item.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="group hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-accent/30 overflow-hidden animate-slide-in-left">
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden">
                          <img 
                            src={item.image}
                            alt={item.title}
                            className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <span className="inline-block bg-gold/90 text-gold-foreground px-2 py-1 rounded text-xs font-medium mb-2">
                              {item.category}
                            </span>
                            <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                            <p className="text-sm opacity-90">{item.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white hover:text-white" />
            <CarouselNext className="right-4 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white hover:text-white" />
          </Carousel>
        </div>

        <div className="mt-12 text-center animate-fade-in">
          <div className="bg-gradient-hero p-8 rounded-lg shadow-gold max-w-4xl mx-auto text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4 animate-float">✨ Chaque création est unique ✨</h3>
            <p className="text-lg mb-6 opacity-90">
              Nos tenues allient tradition et modernité, confectionnées avec passion 
              par nos maîtres couturiers expérimentés.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="animate-slide-in-left">
                <div className="text-3xl font-bold mb-2 text-gold">10+</div>
                <p className="text-sm opacity-90">Styles différents</p>
              </div>
              <div className="animate-fade-in">
                <div className="text-3xl font-bold mb-2 text-gold">100%</div>
                <p className="text-sm opacity-90">Fait sur mesure</p>
              </div>
              <div className="animate-slide-in-right">
                <div className="text-3xl font-bold mb-2 text-gold">48h</div>
                <p className="text-sm opacity-90">Livraison rapide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};