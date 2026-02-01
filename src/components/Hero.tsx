import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blush via-cream to-warm-white"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-rose-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-10 w-48 h-48 bg-blush/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <p className="text-rose-gold font-medium tracking-widest uppercase text-sm mb-4 animate-fade-in">
            Newborn • Kids • Maternity
          </p>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-charcoal leading-tight mb-6 animate-fade-in-up">
            Capturing Life's
            <span className="block text-rose-gold">Precious Moments</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Creating timeless memories of your little ones with warmth, care, and artistic vision. 
            Every smile, every tiny finger, every moment of joy — beautifully preserved forever.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button
              asChild
              size="lg"
              className="bg-charcoal hover:bg-charcoal/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <a href="tel:+919049074865">
                <Phone className="w-5 h-5 mr-2" />
                Call to Book
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-rose-gold text-charcoal hover:bg-rose-gold hover:text-white px-8 py-6 text-lg rounded-full transition-all"
            >
              <a
                href="https://wa.me/919049074865?text=Hi%2C%20I%20would%20like%20to%20book%20a%20photography%20session"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-charcoal/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-charcoal/40 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
