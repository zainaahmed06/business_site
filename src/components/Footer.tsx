import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gradient-to-br from-[#1B3C73] to-[#0A2F5C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-white">OG</span>
              </div>
              <span className="text-xl">Olena Group</span>
            </div>
            <p className="text-blue-200 mb-4">
              Building Digital Experiences That Inspire
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Apps", "Careers", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      onNavigate(item.toLowerCase());
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-blue-200">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>123 Innovation Drive, Tech City, TC 12345</span>
              </li>
              <li className="flex items-center gap-2 text-blue-200">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:hello@olenagroup.com" className="hover:text-white transition-colors">
                  hello@olenagroup.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-blue-200">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4">Newsletter</h3>
            <p className="text-blue-200 mb-4">
              Stay updated with our latest apps and news.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
              />
              <Button className="bg-accent hover:bg-accent/90 text-white shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center text-blue-200">
          <p>© 2025 Olena Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
