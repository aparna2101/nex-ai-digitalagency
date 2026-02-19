import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-dark border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Nex-AI<span className="gradient-text"> Digital</span>
            </h3>
            <p className="text-sm text-white/50 leading-relaxed">
              A results-driven digital marketing agency in Dubai helping brands grow with SEO, PPC, social media, and web development.
            </p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors"
                  aria-label="Social media"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Portfolio", "Testimonials", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm text-white/50 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              {["SEO Optimization", "PPC Advertising", "Social Media", "Web Development", "E-Commerce", "Branding"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-white/50 hover:text-white transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li>Dubai, UAE</li>
              <li>+971 4 123 4567</li>
              <li>hello@nexaidigital.ae</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/30">
            © 2026  Nex-AI Digital Agency. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
