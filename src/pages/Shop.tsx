import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PackSelector, PackSize } from "@/components/PackSelector";
import { ImpactSlider } from "@/components/ImpactSlider";
import { FloatingLabelInput } from "@/components/FloatingLabelInput";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import image1 from "@/assets/1.jpg";
import image2 from "@/assets/2.jpg";
import image3 from "@/assets/3.jpg";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import { ChevronLeft, ChevronRight, Loader2, Lock } from "lucide-react";

const images = [image1, image2, image3];

function RevealSection({ children, className = "", delay = 0 }: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const PACK_QUANTITIES: Record<PackSize, number> = {
  trial: 1,
  classic: 2,
  eco: 8,
};

const Shop = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [selectedPack, setSelectedPack] = useState<PackSize>("classic");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    quantity: String(PACK_QUANTITIES["classic"]),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Gallery navigation
  const goToImage = (index: number) => {
    if (isTransitioning || index === currentImageIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setIsTransitioning(false);
    }, 250);
  };

  const prev = () => goToImage((currentImageIndex - 1 + images.length) % images.length);
  const next = () => goToImage((currentImageIndex + 1) % images.length);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentImageIndex, isTransitioning]);

  const handlePackChange = (pack: PackSize, quantityValue: number) => {
    setSelectedPack(pack);
    setFormData((prev) => ({ ...prev, quantity: String(quantityValue) }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const qty = Math.max(1, parseInt(formData.quantity) || 1);
      const { error } = await supabase.from("contacts").insert([
        {
          full_name: formData.name.trim(),
          contact_number: formData.phone.trim(),
          email_address: formData.email.trim(),
          quantity: qty,
        },
      ]);
      if (error) {
        console.error("Supabase error:", JSON.stringify(error));
        throw new Error(error.message || "Database error");
      }
      toast.success("Order request received! We'll contact you soon. 🎉");
      setFormData({ name: "", phone: "", email: "", quantity: String(PACK_QUANTITIES[selectedPack]) });
    } catch (error: any) {
      console.error("Order submission error:", error);
      toast.error(error?.message || "Failed to submit order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* ─── PAGE HEADER ─────────────────────────────────── */}
      <section className="pt-12 pb-6 px-4">
        <div className="container mx-auto max-w-6xl">
          <div
            className="text-center opacity-0 animate-fade-up"
            style={{ animationFillMode: "forwards", animationDelay: "0.1s" }}
          >
            <p className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-3">Our Store</p>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight mb-4">
              Shop Date Seed Coffee
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every purchase supports women-led packaging units and recycles agricultural waste.
            </p>
          </div>
        </div>
      </section>

      {/* ─── PRODUCT SECTION ──────────────────────────────── */}
      <section className="py-12 px-4 flex-grow">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">

            {/* Gallery */}
            <RevealSection>
              <div className="space-y-4">
                {/* Main image */}
                <div
                  className="relative rounded-3xl overflow-hidden border border-border glass-card group"
                  role="img"
                  aria-label={`Product image ${currentImageIndex + 1} of ${images.length}`}
                >
                  <img
                    src={images[currentImageIndex]}
                    alt={`Khajoor Date Seed Coffee — Image ${currentImageIndex + 1}`}
                    className="w-full h-[420px] md:h-[520px] object-cover transition-all duration-300"
                    style={{ opacity: isTransitioning ? 0 : 1 }}
                  />
                  {/* Navigation arrows */}
                  <button
                    onClick={prev}
                    id="gallery-prev"
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 glass-card border border-border rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:border-accent/50 hover:text-accent"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={next}
                    id="gallery-next"
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 glass-card border border-border rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:border-accent/50 hover:text-accent"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  {/* Image counter */}
                  <div className="absolute bottom-4 right-4 glass-card rounded-lg px-3 py-1.5 text-xs font-bold text-muted-foreground">
                    {currentImageIndex + 1} / {images.length}
                  </div>
                </div>

                {/* Thumbnail dots */}
                <div className="flex justify-center gap-3">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      id={`gallery-thumb-${i}`}
                      onClick={() => goToImage(i)}
                      aria-label={`View image ${i + 1}`}
                      aria-pressed={currentImageIndex === i}
                      className="relative overflow-hidden rounded-xl border transition-all duration-300"
                      style={{
                        width: 56,
                        height: 56,
                        borderColor: currentImageIndex === i ? "hsl(32 80% 55%)" : "hsl(28 14% 22%)",
                        boxShadow: currentImageIndex === i ? "0 0 12px hsla(32,80%,55%,0.4)" : "none",
                      }}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </RevealSection>

            {/* Product info + Pack selector */}
            <RevealSection delay={150} className="space-y-8">
              {/* Title & tagline */}
              <div>
                <p className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-3">Premium Product</p>
                <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight mb-3">
                  Khajoor Date Seed Coffee
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  A healthier, lighter alternative to traditional coffee — naturally sweet, caffeine-free, and stomach-friendly.
                </p>
              </div>

              {/* Pack selector */}
              <div className="glass-card border border-border rounded-3xl p-6">
                <PackSelector value={selectedPack} onChange={handlePackChange} />
              </div>

              {/* Impact slider */}
              <div className="glass-card border border-border rounded-3xl p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                  Your Order's Impact
                </p>
                <ImpactSlider
                  initialValue={PACK_QUANTITIES[selectedPack]}
                  key={selectedPack}
                />
              </div>

              {/* Source story card */}
              <div className="p-5 rounded-2xl border border-border bg-secondary/10">
                <h4 className="font-semibold text-sm mb-2 text-foreground">Source Story</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Made from repurposed date seeds — a co-product of our zero-waste mission. Every purchase supports our circular economy and empowers women-led packaging units.
                </p>
              </div>
            </RevealSection>
          </div>

          {/* ─── ORDER FORM ───────────────────────────────── */}
          <RevealSection className="max-w-2xl mx-auto mb-24">
            <div className="glass-card border border-border rounded-3xl p-8 md:p-10">
              <div className="text-center mb-8">
                <p className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-2">Pre-Order</p>
                <h2 className="text-3xl font-heading font-extrabold tracking-tight">
                  Place Your Order
                </h2>
                <p className="text-sm text-muted-foreground mt-2">
                  We'll reach out to confirm your order and arrange delivery.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <FloatingLabelInput
                  label="Full Name"
                  name="name"
                  id="order-name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
                <FloatingLabelInput
                  label="Contact Number"
                  name="phone"
                  id="order-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  autoComplete="tel"
                />
                <FloatingLabelInput
                  label="Email Address"
                  name="email"
                  id="order-email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
                <FloatingLabelInput
                  label="Quantity (bags)"
                  name="quantity"
                  id="order-quantity"
                  type="number"
                  min="1"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                />

                <button
                  type="submit"
                  id="order-submit-btn"
                  disabled={isSubmitting}
                  className="relative w-full py-4 rounded-2xl font-bold text-base bg-accent text-accent-foreground hover:shadow-glow-amber-lg transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Request Order →"
                    )}
                  </span>
                  {!isSubmitting && (
                    <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </button>
              </form>
            </div>
          </RevealSection>

          {/* ─── COMING SOON PRODUCTS ─────────────────────── */}
          <RevealSection className="text-center mb-12">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-3">Coming Soon</p>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight mb-4">
              Our Zero-Waste Family Is Growing
            </h2>
            <div className="accent-line mx-auto" />
          </RevealSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                emoji: "🍰",
                title: "Gourmet Date Cakes",
                description:
                  "Premium baked goods crafted from whole dates, natural ingredients, and zero artificial additives.",
              },
              {
                emoji: "✨",
                title: "Natural Exfoliating Scrubs",
                description:
                  "Upcycled date seed coffee grounds transformed into luxury, skin-friendly natural scrubs.",
              },
            ].map((item, i) => (
              <RevealSection key={i} delay={i * 100}>
                <div className="relative glass-card border border-border rounded-3xl p-8 overflow-hidden group hover:border-muted-foreground/30 transition-all duration-300 hover:-translate-y-1">
                  {/* Lock overlay */}
                  <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px] flex flex-col items-center justify-center gap-3 opacity-100 rounded-3xl">
                    <div className="w-12 h-12 rounded-2xl glass-card border border-border flex items-center justify-center">
                      <Lock className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <span className="font-bold text-sm text-muted-foreground">Coming Soon</span>
                  </div>

                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 className="font-heading font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
