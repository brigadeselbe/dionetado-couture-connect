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
              <a 
                href="https://maps.app.goo.gl/X5gh1bjnKawKSxai7?g_st=com.google.maps.preview.copy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded font-medium hover:bg-accent/90 transition-colors"
              >
                📍 Voir sur Maps
              </a>
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
                  <span className="font-medium">Lun - Ven:</span> 10h30 - 20h30
                </p>
                <p className="text-sm">
                  <span className="font-medium">Samedi:</span> 10h30 - 20h30
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
              <a 
                href="https://wa.me/221771131282" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                </svg>
                Contacter via WhatsApp
              </a>
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