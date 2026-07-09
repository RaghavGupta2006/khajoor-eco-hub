import { Link, useLocation } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Impact", path: "/impact" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "backdrop-blur-xl bg-background/80 border-b border-border/60 shadow-[0_4px_32px_hsla(28,40%,4%,0.5)]"
            : "bg-gradient-to-b from-background/70 to-transparent"
        )}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo + Brand */}
            <Link
              to="/"
              className="flex items-center gap-3 group"
              aria-label="Project Khajoor — Home"
            >
              <div className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-accent/15 border border-accent/30 group-hover:shadow-glow-amber transition-all duration-300">
                <img
                  src="/club-logo.png"
                  alt="Project Khajoor Logo"
                  className="w-6 h-6 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <Leaf className="h-5 w-5 text-accent absolute opacity-0 [img+&]:opacity-100" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-foreground group-hover:text-accent transition-colors duration-300">
                Project Khajoor
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group",
                      isActive
                        ? "text-accent"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.name}
                    {/* Animated underline */}
                    <span
                      className={cn(
                        "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-accent transition-all duration-300",
                        isActive ? "w-4/5" : "w-0 group-hover:w-1/2"
                      )}
                    />
                  </Link>
                );
              })}

              {/* CTA Shop button with gradient border */}
              <Link to="/shop" className="ml-3">
                <button
                  id="nav-shop-cta"
                  className="relative px-5 py-2 text-sm font-bold text-accent rounded-xl overflow-hidden transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:shadow-glow-amber group"
                  style={{
                    border: "1px solid hsl(32 80% 55% / 0.5)",
                  }}
                >
                  <span className="relative z-10">Shop Now</span>
                  {/* Shimmer on hover */}
                  <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl border border-border/60 glass-card transition-all duration-200 hover:border-accent/50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <Menu
                className={cn(
                  "h-5 w-5 absolute transition-all duration-300",
                  mobileMenuOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
                )}
              />
              <X
                className={cn(
                  "h-5 w-5 absolute transition-all duration-300",
                  mobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
                )}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Side Drawer Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-400",
          mobileMenuOpen ? "visible" : "invisible"
        )}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={cn(
            "absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-300",
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          )}
        />
      </div>

      {/* Mobile Drawer Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-72 md:hidden flex flex-col",
          "bg-card border-l border-border shadow-[−8px_0_40px_hsla(28,40%,4%,0.6)]",
          "transition-transform duration-400 ease-spring",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <span className="font-heading font-bold text-lg">Menu</span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
            aria-label="Close menu"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex flex-col gap-1 p-4 flex-1">
          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-accent/15 text-accent border border-accent/30"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
                style={{ transitionDelay: mobileMenuOpen ? `${i * 50}ms` : "0ms" }}
              >
                {link.name}
                {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-accent" />}
              </Link>
            );
          })}
        </nav>

        {/* Drawer CTA */}
        <div className="p-4 border-t border-border">
          <Link to="/shop" className="block">
            <button
              id="mobile-shop-cta"
              className="w-full py-3 rounded-xl font-bold text-sm bg-accent text-accent-foreground hover:shadow-glow-amber transition-all duration-300"
            >
              Shop Date Seed Coffee
            </button>
          </Link>
        </div>
      </div>

      {/* Spacer to push page content below fixed nav */}
      <div className="h-[72px]" />
    </>
  );
};

export default Navigation;
