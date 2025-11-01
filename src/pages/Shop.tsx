import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import image1 from "@/assets/1.jpg";
import image2 from "@/assets/2.jpg";
import image3 from "@/assets/3.jpg";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

const Shop = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    quantity: "1",
  });
  const [emailSignup, setEmailSignup] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const imageRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  const images = [image1, image2, image3];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const containerWidth = scrollContainer.clientWidth;
      const newIndex = Math.round(scrollLeft / containerWidth);
      setCurrentImageIndex(newIndex);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToImage = (index: number) => {
    const scrollContainer = scrollContainerRef.current;
    const imageContainer = imageRefs[index].current;
    if (scrollContainer && imageContainer) {
      imageContainer.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("contacts").insert({
        full_name: formData.name,
        contact_number: formData.phone,
        email_address: formData.email,
        quantity: parseInt(formData.quantity),
      });

      if (error) {
        throw error;
      }

      toast.success("Order request received! We'll contact you soon.");
      setFormData({ name: "", phone: "", email: "", quantity: "1" });
    } catch (error: any) {
      console.error("Error submitting order:", error);
      toast.error(error.message || "Failed to submit order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="py-16 px-4 flex-grow">
        <div className="container mx-auto max-w-6xl">
          {/* Product Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              {/* Horizontal Scroll Gallery */}
              <div 
                ref={scrollContainerRef}
                className="overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
              >
                <div className="flex gap-4 pb-4">
                  {images.map((image, index) => (
                    <div 
                      key={index}
                      ref={imageRefs[index]}
                      className="flex-shrink-0 w-full snap-center"
                    >
                      <img
                        src={image}
                        alt={`Khajoor Date Seed Coffee - Image ${index + 1}`}
                        className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg transition-transform hover:scale-[1.02]"
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToImage(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      currentImageIndex === index
                        ? "bg-accent w-8"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-heading font-bold mb-4">
                Khajoor Date Seed Coffee
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                A healthier, lighter alternative to traditional coffee
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold">Key Benefits:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Naturally sweet, zero-sugar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Caffeine-free (no crash)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Stomach-friendly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>A healthier, lighter alternative to traditional coffee</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-secondary/20 rounded-lg">
                <h4 className="font-semibold mb-2">Source Story</h4>
                <p className="text-sm text-muted-foreground">
                  Made from repurposed date seeds, a co-product of our zero-waste mission. Every purchase supports our circular economy and empowers women-led packaging units.
                </p>
              </div>
            </div>
          </div>

          {/* Order Form */}
          <Card className="max-w-2xl mx-auto mb-20">
            <CardContent className="pt-8">
              <h2 className="text-3xl font-heading font-bold mb-6 text-center">
                Place Your Order
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Contact Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="quantity">Quantity *</Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    type="number"
                    min="1"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "REQUEST ORDER"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Coming Soon Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
              Our Zero-Waste Family Is Growing
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-xl font-heading font-semibold mb-2">
                    Gourmet Date Cakes
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Made from date pulp
                  </p>
                  <span className="inline-block px-4 py-2 bg-secondary/30 rounded-full text-sm font-medium">
                    Coming Soon
                  </span>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-xl font-heading font-semibold mb-2">
                    Natural Exfoliating Scrubs
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Made from used coffee grounds
                  </p>
                  <span className="inline-block px-4 py-2 bg-secondary/30 rounded-full text-sm font-medium">
                    Coming Soon
                  </span>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Email Signup */}
          <Card className="max-w-xl mx-auto bg-accent/5">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-heading font-bold mb-4 text-center">
                Subscribe for Launch Alerts
              </h3>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setIsSubscribing(true);

                  try {
                    const { error } = await supabase.from("emails").insert({
                      email_address: emailSignup,
                    });

                    if (error) {
                      throw error;
                    }

                    toast.success("Thank you for subscribing!");
                    setEmailSignup("");
                  } catch (error: any) {
                    console.error("Error subscribing:", error);
                    toast.error(error.message || "Failed to subscribe. Please try again.");
                  } finally {
                    setIsSubscribing(false);
                  }
                }}
                className="flex gap-2"
              >
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={emailSignup}
                  onChange={(e) => setEmailSignup(e.target.value)}
                  required
                  disabled={isSubscribing}
                />
                <Button
                  type="submit"
                  className="bg-accent hover:bg-accent/90"
                  disabled={isSubscribing}
                >
                  {isSubscribing ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
