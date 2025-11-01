import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import womenImage from "@/assets/women-empowerment.jpg";
import circularImage from "@/assets/circular-economy.jpg";
import { Users, Recycle, Heart, TrendingUp, Leaf, HandHeart } from "lucide-react";

const Impact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* The Seed of Change Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">
            The Seed of Change
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Every bag of Khajoor Coffee purchased directly supports our goal: transforming agri-waste and empowering home-based, fair-wage, women-run packaging units.
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-4xl font-heading font-bold mb-2 text-accent">11,800+</h3>
                <p className="text-lg font-medium">Total Women Engagements</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-4xl font-heading font-bold mb-2 text-accent">30+</h3>
                <p className="text-lg font-medium">Employees Trained</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Women Empowerment */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img
                src={womenImage}
                alt="Women working together"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Empowering Women, Building Communities
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our women-run packaging units provide fair wages and flexible work opportunities, enabling economic independence while maintaining work-life balance.
              </p>
              <p className="text-lg text-muted-foreground">
                Every purchase supports these women and their families, creating a ripple effect of positive change in our communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Circular Economy */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Our Planet: A Zero-Waste Ideology
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Nothing is discarded, everything is repurposed.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our coffee production is the primary driver behind recycling 200 kg+ of Agri-Waste, turning what would be waste into valuable, sustainable products.
              </p>
              <p className="text-lg text-muted-foreground">
                Even the used coffee grounds will be upcycled into natural scrubs when that product launches, completing our circular ecosystem.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={circularImage}
                alt="Circular economy"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Global Goals */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Aligned with Global Goals
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our mission directly supports the United Nations Sustainable Development Goals
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <p className="font-medium text-sm">No Poverty</p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <p className="font-medium text-sm">Good Health</p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <p className="font-medium text-sm">Gender Equality</p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Recycle className="h-8 w-8 text-accent" />
                </div>
                <p className="font-medium text-sm">Responsible Consumption</p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Leaf className="h-8 w-8 text-accent" />
                </div>
                <p className="font-medium text-sm">Climate Action</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impact;
