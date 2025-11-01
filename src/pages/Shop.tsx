import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import productImage from "@/assets/coffee-product.jpg";
import { toast } from "sonner";

const Shop = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    quantity: "1",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Order request received! We'll contact you soon.");
    setFormData({ name: "", phone: "", email: "", quantity: "1" });
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
              <img
                src={productImage}
                alt="Khajoor Date Seed Coffee"
                className="w-full rounded-lg shadow-lg"
              />
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

                <Button type="submit" className="w-full bg-accent hover:bg-accent/90" size="lg">
                  REQUEST ORDER
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
                onSubmit={(e) => {
                  e.preventDefault();
                  toast.success("Thank you for subscribing!");
                }}
                className="flex gap-2"
              >
                <Input type="email" placeholder="Your email address" required />
                <Button type="submit" className="bg-accent hover:bg-accent/90">
                  Subscribe
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
