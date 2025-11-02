import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-coffee.jpg";
import productImage from "@/assets/coffee-product.jpg";
import { Leaf, Users, Recycle } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
          <p className="text-lg md:text-xl mb-4 opacity-95 font-medium">
            Where Coffee Meets Conscious Living.
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
            The Caffeine-Free Future of Coffee
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            A Zero-Waste, Women-Led Circular Economy.
          </p>
          <Link to="/shop" className="mt-12 inline-block">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6">
              SHOP DATE SEED COFFEE
            </Button>
          </Link>
        </div>
      </section>

      {/* Product Highlight Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img
                src={productImage}
                alt="Date Seed Coffee"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Date Seed Coffee
              </h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Naturally sweet, zero-sugar, and zero-caffeine crash.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Naturally sweet with no added sugar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Caffeine-free alternative to traditional coffee</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Stomach-friendly and easy to digest</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Made from upcycled date seeds</span>
                </li>
              </ul>
              <Link to="/shop">
                <Button className="bg-accent hover:bg-accent/90">Shop Now</Button>
              </Link>
              <div className="mt-8 p-4 bg-secondary/20 rounded-lg">
                <h3 className="font-semibold mb-2">More Products Coming Soon!</h3>
                <p className="text-sm text-muted-foreground">
                  Gourmet Date Cakes and Natural Exfoliating Scrubs are in development, expanding our zero-waste mission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Impact Snapshot */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Our Mission in Action
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Recycle className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-4xl font-heading font-bold mb-2 text-accent">200kg+</h3>
                <p className="text-lg font-medium">Agri-Waste Recycled</p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-4xl font-heading font-bold mb-2 text-accent">30+</h3>
                <p className="text-lg font-medium">Women Trained & Empowered</p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-4xl font-heading font-bold mb-2 text-accent">100%</h3>
                <p className="text-lg font-medium">Zero-Waste Philosophy</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
