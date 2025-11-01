import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Users, Leaf } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="py-20 px-4 flex-grow">
        <div className="container mx-auto max-w-4xl">
          {/* Who We Are */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">
              Who We Are
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Project Khajoor is a women-led circular enterprise established in October 2024 by Enactus, Indira Gandhi Delhi Technical University for Women.
            </p>
          </div>

          {/* Our Model, Philosophy */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-10 pb-10">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">Our Model</h3>
                <p className="text-muted-foreground">
                  We are committed to a community-first, zero-waste model where we reinvest our returns into farmer incomes and women-run packaging units.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-10 pb-10">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">The Philosophy</h3>
                <p className="text-muted-foreground">
                  Local production focusing on roasting, blending, and mixing, all with a zero-waste, regenerative approach.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-10 pb-10">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">Women-Led</h3>
                <p className="text-muted-foreground">
                  Empowering women through fair-wage employment opportunities in home-based packaging units, creating sustainable livelihoods.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Our Story */}
          <div className="bg-card rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-heading font-bold mb-6 text-center">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Born from the vision of Enactus at IGDTUW, Project Khajoor represents more than just a business—it's a movement towards conscious consumption and community empowerment.
              </p>
              <p>
                We saw an opportunity where others saw waste. Date seeds, typically discarded as agricultural waste, became the foundation of our innovative coffee alternative. This transformation embodies our core belief: nothing should go to waste when it can create value.
              </p>
              <p>
                Our journey began with training programs for women in our community, providing them with skills and opportunities to become entrepreneurs in their own right. Today, these women form the backbone of our operations, managing packaging units from their homes while maintaining work-life balance.
              </p>
              <p>
                Every product we create, every person we employ, and every seed we process is a step towards a more sustainable, equitable future. We're not just selling coffee—we're brewing change, one cup at a time.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mt-20">
            <h2 className="text-3xl font-heading font-bold mb-10 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-card rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Zero-Waste</h3>
                <p className="text-muted-foreground">
                  Every byproduct finds purpose. Nothing is discarded when it can be transformed into something valuable.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Community First</h3>
                <p className="text-muted-foreground">
                  Our success is measured by the positive impact on farmers and women in our community.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Transparency</h3>
                <p className="text-muted-foreground">
                  We believe in open communication about our processes, impact, and challenges.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Quality</h3>
                <p className="text-muted-foreground">
                  Premium products that don't compromise on taste, health, or environmental impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
