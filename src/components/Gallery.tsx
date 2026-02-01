import { useState } from "react";
import { Camera, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const categories = [
  { id: "all", label: "All" },
  { id: "newborn", label: "Newborn" },
  { id: "kids", label: "Kids" },
  { id: "maternity", label: "Maternity" },
  { id: "festivals", label: "Festivals" },
];

// Placeholder structure - images will be replaced with actual uploads
const galleryImages: { id: number; category: string; src: string; alt: string }[] = [
  // Add your images here in this format:
  // { id: 1, category: "newborn", src: "/path/to/image.jpg", alt: "Newborn photo description" },
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
