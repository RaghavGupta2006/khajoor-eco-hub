import { Link } from "react-router-dom";
import { Phone, Mail, Instagram } from "lucide-react";

const Footer = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Impact", path: "/impact" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">Project Khajoor</h3>
            <p className="text-sm opacity-90">
              Where Coffee Meets Conscious Living. A zero-waste, women-led circular economy.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-90 hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <a
                href="tel:+91 8178244698"
                className="flex items-center gap-2 text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                <Phone className="h-4 w-4" />
               +91 8178244698
              </a>
              <a
                href="tel:+91 9289920466"
                className="flex items-center gap-2 text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                <Phone className="h-4 w-4" />
                +91 92899 20466
              </a>
              <a
                href="https://www.instagram.com/project_khajoor?igsh=cGNuaHU4anFrYnM5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&to=projectkhajoorenactus@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                <Mail className="h-4 w-4" />
                projectkhajoorenactus@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm opacity-75">
            © {new Date().getFullYear()} Project Khajoor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
