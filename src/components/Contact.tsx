import { Phone, Mail, MapPin, Instagram, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const address =
    "Shop No 4, Srikrushna Nagar & Near Amrutvel Hospital, Agasti Home to Sahkar Chowk Road, Ulkanagari, Aurangabad – 431001, Maharashtra";

  return (
    <section id="contact" className="py-20 md:py-32 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-rose-gold font-medium tracking-widest uppercase text-sm mb-4">
              Get in Touch
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
              Let's Create Magic Together
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to capture your precious moments? Reach out to us via phone or WhatsApp 
              to book your session. We'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Phone Numbers */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blush rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-rose-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Call Us</h4>
                  <div className="space-y-1">
                    <a
                      href="tel:+919049074865"
                      className="block text-muted-foreground hover:text-rose-gold transition-colors"
                    >
                      +91 90490 74865
                    </a>
                    <a
                      href="tel:+918123851604"
                      className="block text-muted-foreground hover:text-rose-gold transition-colors"
                    >
                      +91 81238 51604
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blush rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-rose-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Email Us</h4>
                  <a
                    href="mailto:rajgawali2811@gmail.com"
                    className="text-muted-foreground hover:text-rose-gold transition-colors"
                  >
                    rajgawali2811@gmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blush rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-rose-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Visit Us</h4>
                  <p className="text-muted-foreground leading-relaxed">{address}</p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-4 border-rose-gold text-charcoal hover:bg-rose-gold hover:text-white"
                  >
                    <a
                      href="https://maps.app.goo.gl/sfcK7fjZQxK8g6N8A"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Get Directions
                    </a>
                  </Button>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blush rounded-full flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-5 h-5 text-rose-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-2">Follow Us</h4>
                  <a
                    href="https://www.instagram.com/blissphotos._?igsh=aDFuMDNmdnRyeHdy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-rose-gold transition-colors"
                  >
                    @blissphotos._
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.2280!2d75.3481!3d19.8762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb98a6c85cd28f%3A0x0!2sUlkanagari%2C%20Aurangabad%2C%20Maharashtra%20431001!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bliss Photos Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
