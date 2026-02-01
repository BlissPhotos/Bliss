import { Heart, Shield, Camera } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-blush to-rose-gold/30 rounded-2xl overflow-hidden shadow-xl">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <Camera className="w-16 h-16 text-rose-gold mx-auto mb-4" />
                    <p className="text-muted-foreground">Your studio photo here</p>
                  </div>
                </div>
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-rose-gold/30 rounded-2xl -z-10" />
            </div>

            {/* Content */}
            <div>
              <p className="text-rose-gold font-medium tracking-widest uppercase text-sm mb-4">
                About Us
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
                Where Every Moment Becomes a Treasure
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At <span className="font-semibold text-charcoal">Bliss Photos</span>, 
                  we believe that the first years of life are filled with magical moments 
                  that deserve to be preserved forever. Our passion lies in capturing the 
                  pure innocence of newborns, the playful spirit of children, and the 
                  radiant glow of motherhood.
                </p>
                <p>
                  With years of experience and a gentle approach, we create a calm, 
                  safe environment where your little ones feel comfortable and their 
                  natural expressions shine through. Every session is crafted with love, 
                  patience, and an artistic eye for detail.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blush rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-rose-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal">Baby Safe</h4>
                    <p className="text-sm text-muted-foreground">Trained in newborn handling</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blush rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-rose-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal">With Love</h4>
                    <p className="text-sm text-muted-foreground">Every shot with care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
