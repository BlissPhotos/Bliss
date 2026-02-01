import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    text: "Absolutely magical experience! The team made our newborn feel so comfortable. The photos are beyond beautiful — we will treasure them forever.",
    service: "Newborn Photography",
  },
  {
    id: 2,
    name: "Anjali Patil",
    rating: 5,
    text: "The maternity shoot was such a wonderful experience. They captured the essence of this beautiful journey perfectly. Highly recommend!",
    service: "Maternity Photography",
  },
  {
    id: 3,
    name: "Sneha Kulkarni",
    rating: 5,
    text: "My kids had so much fun during the session! The photographers are so patient and creative. The photos turned out amazing.",
    service: "Kids Photography",
  },
  {
    id: 4,
    name: "Pooja Deshmukh",
    rating: 5,
    text: "The Diwali themed shoot for my baby was absolutely stunning! Such creative setups and beautiful captures. Will definitely come back!",
    service: "Festival Photography",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 md:py-32 bg-warm-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-rose-gold font-medium tracking-widest uppercase text-sm mb-4">
              Testimonials
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
              What Parents Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're honored to be part of your family's precious moments. 
              Here's what some of our lovely clients have to say.
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review) => (
              <Card
                key={review.id}
                className="bg-cream border-none shadow-sm hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <Quote className="w-10 h-10 text-rose-gold/30 mb-4" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-rose-gold text-rose-gold"
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    "{review.text}"
                  </p>

                  {/* Reviewer Info */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-charcoal">{review.name}</p>
                      <p className="text-sm text-rose-gold">{review.service}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Google Reviews Placeholder */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              See more reviews on Google
            </p>
            <a
              href="https://www.google.com/search?q=bliss+photos+aurangabad+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-charcoal hover:text-rose-gold transition-colors font-medium"
            >
              View Google Reviews →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
