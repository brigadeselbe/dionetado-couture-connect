import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Users, ShoppingBag, Palette } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: Scissors,
      title: "Couture Traditionnelle",
      description: "Création de tenues traditionnelles authentiques avec des techniques ancestrales préservées par nos maîtres couturiers."
    },
    {
      icon: Users,
      title: "Prêt-à-porter Homme & Femme",
      description: "Collections modernes alliant style contemporain et touches traditionnelles pour tous les goûts et occasions."
    },
    {
      icon: ShoppingBag,
      title: "Accessoires Uniques",
      description: "Sélection d'accessoires artisanaux : sacs, bijoux, chaussures et ornements pour parfaire votre style."
    },
    {
      icon: Palette,
      title: "Tissus d'Exception",
      description: "Large gamme de tissus authentiques, wax, bogolan, et étoffes traditionnelles de la plus haute qualité."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nos Services
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            DIONETADO vous offre une expertise complète dans l'art de la couture traditionnelle, 
            du conseil personnalisé à la création sur mesure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-warm transition-all duration-300 border-border/50 hover:border-accent/50">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-accent text-white p-8 rounded-lg shadow-gold max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Service Sur Mesure</h3>
            <p className="text-lg mb-6">
              Chaque création est unique. Nous travaillons en étroite collaboration avec vous 
              pour donner vie à vos idées et créer des pièces qui vous ressemblent.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">15+</div>
                <p className="text-sm opacity-90">Années d'expérience</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <p className="text-sm opacity-90">Clients satisfaits</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <p className="text-sm opacity-90">Fait main</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};