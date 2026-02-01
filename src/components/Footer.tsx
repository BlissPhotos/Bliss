import { Instagram, Phone, Mail, MapPin, Heart } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

const Footer = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="font-serif text-2xl mb-4">Bliss Photos</h3>
              <p className="text-white/70 leading-relaxed mb-6 max-w-md">
                Capturing life's most precious moments with warmth, care, and artistic vision. 
                Specializing in newborn, kids, and maternity photography.
              </p>
              <a
                href="https://www.instagram.com/blissphotos._?igsh=aDFuMDNmdnRyeHdy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/70 hover:text-rose-gold transition-colors"
              >
                <Instagram className="w-5 h-5" />
                @blissphotos._
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className="text-white/70 hover:text-rose-gold transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:+919049074865"
                    className="flex items-center gap-2 text-white/70 hover:text-rose-gold transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    +91 90490 74865
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:rajgawali2811@gmail.com"
                    className="flex items-center gap-2 text-white/70 hover:text-rose-gold transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    rajgawali2811@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.app.goo.gl/sfcK7fjZQxK8g6N8A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 text-white/70 hover:text-rose-gold transition-colors"
                  >
                    <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>Ulkanagari, Aurangabad</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Bliss Photos. All rights reserved.
            </p>
            <p className="text-white/50 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-rose-gold" /> for precious moments
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
