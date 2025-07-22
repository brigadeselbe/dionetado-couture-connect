import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail, Facebook, Instagram } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nous Contacter
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Rendez-nous visite dans notre boutique ou contactez-nous pour discuter de vos projets de couture.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="text-center hover:shadow-warm transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl text-primary">Notre Adresse</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Liberté 6<br />
                Dakar, Sénégal
              </p>
              <p className="text-sm text-accent font-medium">
                Facilement accessible en transport
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-warm transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl text-primary">Téléphone</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <p className="text-lg font-semibold text-accent">
                  33 864 43 26
                </p>
                <p className="text-lg font-semibold text-accent">
                  77 113 12 82
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                Appelez pour un rendez-vous
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-warm transition-all duration-300">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl text-primary">Horaires</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <p className="text-sm">
                  <span className="font-medium">Lun - Ven:</span> 8h - 19h
                </p>
                <p className="text-sm">
                  <span className="font-medium">Samedi:</span> 9h - 18h
                </p>
                <p className="text-sm">
                  <span className="font-medium">Dimanche:</span> Sur rendez-vous
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-hero p-8 rounded-lg text-primary-foreground text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Prêt à créer ensemble ?</h3>
            <p className="text-lg mb-6 opacity-90">
              Que vous souhaitiez une tenue traditionnelle pour une occasion spéciale 
              ou moderniser votre garde-robe, notre équipe est là pour vous accompagner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg">
                Prendre rendez-vous
              </Button>
              <Button variant="outline" size="lg" className="border-gold text-gold hover:bg-gold hover:text-gold-foreground">
                Devis gratuit
              </Button>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-warm">
            <h4 className="text-xl font-semibold text-primary mb-4 text-center">
              Suivez-nous bientôt sur les réseaux sociaux
            </h4>
            <div className="flex justify-center gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Facebook className="w-5 h-5 text-accent" />
                <span>Facebook (bientôt)</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Instagram className="w-5 h-5 text-accent" />
                <span>Instagram (bientôt)</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-5 h-5 text-accent" />
                <span>Email pro (bientôt)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};