import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-gold/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-2xl font-bold text-gold mb-4">
              Azi Shalom Cookies
            </h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Premium artisan cookies crafted with the finest ingredients in Hawassa, Ethiopia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-muted-foreground hover:text-gold transition-colors font-body text-sm">
                Home
              </Link>
              <Link to="/products" className="text-muted-foreground hover:text-gold transition-colors font-body text-sm">
                Products
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-gold transition-colors font-body text-sm">
                About Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
              Contact Us
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-body text-sm font-medium">Address</p>
                  <p className="text-muted-foreground font-body text-sm">
                    Addis Ketema Industry Zone,<br />
                    Hawassa, Ethiopia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-body text-sm font-medium">Email</p>
                  <a 
                    href="mailto:azishalomhawassa2022@gmail.com" 
                    className="text-muted-foreground hover:text-gold transition-colors font-body text-sm break-all"
                  >
                    azishalomhawassa2022@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:col-span-2">
                <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-body text-sm font-medium">Phone</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    <a 
                      href="tel:+2510938488874" 
                      className="text-muted-foreground hover:text-gold transition-colors font-body text-sm"
                    >
                      0938 488 874
                    </a>
                    <a 
                      href="tel:+2510938488878" 
                      className="text-muted-foreground hover:text-gold transition-colors font-body text-sm"
                    >
                      0938 488 878
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gold/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground font-body text-sm">
              © {new Date().getFullYear()} Azi Shalom Cookies PLC. All rights reserved.
            </p>
            <p className="text-muted-foreground font-body text-xs">
              Made with ♡ in Hawassa, Ethiopia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
