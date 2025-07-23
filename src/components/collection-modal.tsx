import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

interface CollectionItem {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
}

interface CollectionModalProps {
  item: CollectionItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CollectionModal = ({ item, isOpen, onClose }: CollectionModalProps) => {
  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto p-0">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[400px] md:h-[600px] object-cover"
              />
            </div>
            
            {/* Details */}
            <div className="p-8">
              <DialogHeader className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary" className="bg-gold text-gold-foreground">
                    {item.category}
                  </Badge>
                </div>
                <DialogTitle className="text-3xl font-bold text-primary mb-4">
                  {item.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                
                <div className="border-t border-border pt-6">
                  <h4 className="font-semibold text-primary mb-4">Caractéristiques :</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Confection artisanale traditionnelle</li>
                    <li>• Finitions modernes et soignées</li>
                    <li>• Tissus de qualité premium</li>
                    <li>• Design contemporain et élégant</li>
                    <li>• Tailles personnalisables</li>
                  </ul>
                </div>
                
                <div className="border-t border-border pt-6">
                  <h4 className="font-semibold text-primary mb-4">Informations pratiques :</h4>
                  <div className="space-y-3 text-muted-foreground">
                    <p><strong>Délai de confection :</strong> 5-7 jours</p>
                    <p><strong>Retouches :</strong> Incluses</p>
                    <p><strong>Consultation :</strong> Sur rendez-vous</p>
                  </div>
                </div>
                
                <div className="bg-gradient-hero p-6 rounded-lg text-primary-foreground mt-8">
                  <h4 className="font-bold text-xl mb-3">Intéressé(e) par cette création ?</h4>
                  <p className="mb-4 opacity-90">
                    Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href="tel:338644326" 
                      className="bg-gold text-gold-foreground px-6 py-2 rounded font-semibold hover:bg-gold/90 transition-colors text-center"
                    >
                      33 864 43 26
                    </a>
                    <a 
                      href="tel:771131282" 
                      className="bg-white/20 text-white px-6 py-2 rounded font-semibold hover:bg-white/30 transition-colors text-center"
                    >
                      77 113 12 82
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};