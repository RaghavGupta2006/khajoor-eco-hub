import { Link } from "react-router-dom";
import { Phone, Mail, Instagram, Leaf, ArrowRight } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Impact", path: "/impact" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/project_khajoor?igsh=cGNuaHU4anFrYnM5",
  },
  {
    icon: Mail,
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&to=projectkhajoorenactus@gmail.com",
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubscribing(true);
    try {
      const { error } = await supabase.from("contacts").insert({
        full_name: "Newsletter Subscriber",
        email_address: email,
        contact_number: "",
        quantity: 0,
      });
      if (error) throw error;
      toast.success("You're subscribed! We'll keep you updated.");
      setEmail("");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-card via-card to-background opacity-60 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-0.5 bg-gradient-accent opacity-40" />

      <div className="relative container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand Column */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-accent/15 border border-accent/30">
                <Leaf className="h-4 w-4 text-accent" />
              </div>
              <span className="font-heading font-bold text-lg">Project Khajoor</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Where Coffee Meets Conscious Living. A zero-waste, women-led circular economy brewing change, one cup at a time.
            </p>
            {/* Mission badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/8 text-xs text-accent font-semibold">
              <span className="animate-spin-slow inline-block">♻️</span>
              100% Zero Waste Philosophy
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-muted-foreground">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 text-accent" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-muted-foreground">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+918178244698"
                  className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <Phone className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                  +91 81782 44698
                </a>
              </li>
              <li>
                <a
                  href="tel:+919289920466"
                  className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <Phone className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                  +91 92899 20466
                </a>
              </li>
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=projectkhajoorenactus@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 break-all"
                >
                  <Mail className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                  projectkhajoorenactus@gmail.com
                </a>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-border glass-card hover:border-accent/50 hover:shadow-glow-amber hover:-translate-y-0.5 transition-all duration-300 text-muted-foreground hover:text-accent"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-muted-foreground">
              Stay Updated
            </h4>
            <p className="text-sm text-muted-foreground">
              Be the first to know about new products and our growing impact.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                id="footer-newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="flex-1 min-w-0 px-3 py-2 text-sm rounded-xl border border-border bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:shadow-glow-amber transition-all duration-200"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                disabled={isSubscribing}
                className="px-3 py-2 rounded-xl bg-accent text-accent-foreground font-bold text-sm hover:shadow-glow-amber transition-all duration-300 disabled:opacity-60 flex-shrink-0"
                aria-label="Subscribe to newsletter"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Project Khajoor · Enactus IGDTUW · New Delhi
          </p>
          <p className="text-xs text-muted-foreground">
            Made with ♻️ for a zero-waste future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
