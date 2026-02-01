import { useState } from "react";
import { Camera } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Import gallery images - Kids
import kids1 from "@/assets/gallery/kids-1.jpg";
import newborn1 from "@/assets/gallery/newborn-1.jpg";
import kids2 from "@/assets/gallery/kids-2.jpg";
import kids3 from "@/assets/gallery/kids-3.jpg";
import kids4 from "@/assets/gallery/kids-4.jpg";

// Import gallery images - Maternity
import maternity1 from "@/assets/gallery/maternity-1.jpg";
import maternity2 from "@/assets/gallery/maternity-2.jpg";
import maternity3 from "@/assets/gallery/maternity-3.jpg";
import maternity4 from "@/assets/gallery/maternity-4.jpg";
import maternity5 from "@/assets/gallery/maternity-5.jpg";

const categories = [
  { id: "all", label: "All" },
  { id: "kids", label: "Kids" },
  { id: "maternity", label: "Maternity" },
  { id: "festivals", label: "Festivals" },
];

const galleryImages: { id: number; category: string; src: string; alt: string }[] = [
  // Kids photos (5)
  { id: 1, category: "kids", src: kids1, alt: "Traditional festival themed baby photoshoot with marigolds" },
  { id: 2, category: "kids", src: newborn1, alt: "Newborn baby in pink wrap with teddy bear" },
  { id: 3, category: "kids", src: kids2, alt: "Beach themed kids photoshoot with umbrella" },
  { id: 4, category: "kids", src: kids3, alt: "First birthday piano themed photoshoot" },
  { id: 5, category: "kids", src: kids4, alt: "Lemon bath themed baby photoshoot" },
  // Maternity photos (5)
  { id: 6, category: "maternity", src: maternity1, alt: "Elegant black gown maternity photoshoot" },
  { id: 7, category: "maternity", src: maternity2, alt: "Traditional saree maternity photoshoot" },
  { id: 8, category: "maternity", src: maternity3, alt: "Green saree with peacock feathers maternity photoshoot" },
  { id: 9, category: "maternity", src: maternity4, alt: "Navy blue flowing gown maternity photoshoot" },
  { id: 10, category: "maternity", src: maternity5, alt: "Couple maternity photoshoot with announcement" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 md:py-32 bg-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-rose-gold font-medium tracking-widest uppercase text-sm mb-4">
              Our Work
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
              Portfolio Gallery
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A glimpse into the precious moments we've had the honor of capturing. 
              Each photograph tells a unique story of love and joy.
            </p>
          </div>

          {/* Category Tabs */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent mb-12">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className="px-6 py-2 rounded-full data-[state=active]:bg-rose-gold data-[state=active]:text-white bg-blush text-charcoal hover:bg-rose-gold/20 transition-all"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Gallery Grid */}
            <TabsContent value={activeCategory} className="mt-0">
              {filteredImages.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredImages.map((image) => (
                    <Dialog key={image.id}>
                      <DialogTrigger asChild>
                        <div
                          className="aspect-square rounded-lg overflow-hidden cursor-pointer group relative"
                          onClick={() => setSelectedImage(image.src)}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors" />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl bg-transparent border-none shadow-none">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-auto rounded-lg"
                        />
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              ) : (
                /* Placeholder when no images */
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[...Array(8)].map((_, index) => (
                    <div
                      key={index}
                      className="aspect-square bg-gradient-to-br from-blush to-rose-gold/20 rounded-lg flex items-center justify-center"
                    >
                      <div className="text-center p-4">
                        <Camera className="w-8 h-8 text-rose-gold mx-auto mb-2" />
                        <p className="text-xs text-muted-foreground">
                          Upload your photo
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>

          {/* Upload instruction */}
          <p className="text-center text-sm text-muted-foreground mt-8">
            Gallery will be populated with your beautiful photographs
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
