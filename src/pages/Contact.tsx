import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Store, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="py-20 px-4 flex-grow">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-center">
            Get in Touch
          </h1>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for orders, partnerships, or just to say hello.
          </p>

          {/* D2C Orders */}
          <Card className="mb-8 border-none shadow-lg">
            <CardContent className="pt-8 pb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Store className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-heading font-bold mb-3">Direct Orders</h2>
                  <p className="text-muted-foreground mb-4">
                    For direct-to-customer orders, please use our online shop form for the fastest response.
                  </p>
                  <Link to="/shop">
                    <Button className="bg-accent hover:bg-accent/90">
                      Go to Shop
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Details */}
          <Card className="mb-8 border-none shadow-lg">
            <CardContent className="pt-8 pb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-bold mb-4">Phone & Email</h2>
                  <div className="space-y-3">
                    <a
                      href="tel:+91 8178244698"
                      className="flex items-center gap-2 text-lg hover:text-accent transition-colors"
                    >
                      <Phone className="h-5 w-5" />
                      +91 8178244698
                    </a>
                    <a
                      href="tel:+919289920466"
                      className="flex items-center gap-2 text-lg hover:text-accent transition-colors"
                    >
                      <Phone className="h-5 w-5" />
                      +91 92899 20466
                    </a>
                    <a
                      href="https://mail.google.com/mail/?view=cm&to=projectkhajoorenactus@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-lg hover:text-accent transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                      projectkhajoorenactus@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Partnerships */}
          <Card className="border-none shadow-lg">
            <CardContent className="pt-8 pb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-bold mb-3">
                    Partnerships & Sales
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    For potential large orders or in-person sampling opportunities, we are available at Campus Stalls and Wellness Hubs.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Interested in wholesale, corporate partnerships, or collaboration opportunities? We'd love to explore how we can work together.
                  </p>
                  <p className="font-medium">
                    Please call us to discuss partnership opportunities.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location Info */}
          <div className="mt-12 p-8 bg-card rounded-lg text-center">
            <h3 className="text-xl font-heading font-semibold mb-3">Visit Us</h3>
            <p className="text-muted-foreground">
              Indira Gandhi Delhi Technical University for Women
            </p>
            <p className="text-muted-foreground">New Delhi</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
