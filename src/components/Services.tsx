import { Baby, Users, Heart, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Baby,
    title: "Newborn Photography",
    description:
      "Gentle, safe sessions for your precious newborn. We specialize in capturing those fleeting first days with the utmost care and artistic vision.",
    features: ["First 2 weeks ideal", "Safety-trained", "Props included"],
  },
  {
    icon: Users,
    title: "Kids Photography",
    description:
      "Fun, playful sessions that capture your child's unique personality. From milestone birthdays to candid moments of joy.",
    features: ["Age-appropriate poses", "Outdoor & studio", "Family welcome"],
  },
  {
    icon: Heart,
    title: "Maternity Photography",
    description:
      "Celebrating the beautiful journey of motherhood. Elegant, timeless portraits that honor this special chapter of your life.",
    features: ["Studio & outdoor", "Gowns available", "Partner inclusive"],
  },
  {
    icon: Sparkles,
    title: "Festival & Themed Shoots",
    description:
      "Custom setups for Diwali, Christmas, birthdays, and more. Let us create magical themed memories for your little ones.",
    features: ["Diwali & Christmas", "Birthday themes", "Custom setups"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-warm-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-rose-gold font-medium tracking-widest uppercase text-sm mb-4">
              Our Services
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
              Photography That Tells Your Story
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From the first breath to the first steps and beyond — we're here to 
              document every precious milestone with artistry and heart.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group bg-cream border-none shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-blush rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-rose-gold/20 transition-colors">
                      <service.icon className="w-7 h-7 text-rose-gold" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-serif text-xl md:text-2xl text-charcoal mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      {/* Features */}
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-blush text-charcoal px-3 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
