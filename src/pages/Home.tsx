import { Link } from "react-router-dom";
import { ArrowDown, ChevronRight, Recycle, Users, Leaf, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ImpactSlider } from "@/components/ImpactSlider";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import heroImage from "@/assets/hero-coffee.jpg";
import productImage from "@/assets/coffee-product.jpg";

// Reveal section wrapper
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

const impactStats = [
  {
    icon: Recycle,
    value: 200,
    suffix: "kg+",
    label: "Agri-Waste Recycled",
    description: "Date seeds upcycled from agricultural waste",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Users,
    value: 30,
    suffix: "+",
    label: "Women Empowered",
    description: "Trained in home-based packaging units",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    icon: TrendingUp,
    value: 11800,
    suffix: "+",
    label: "Women Engagements",
    description: "Total social outreach and inclusion",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Leaf,
    value: 100,
    suffix: "%",
    label: "Zero-Waste Goal",
    description: "Nothing is discarded, everything is repurposed",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
];

const processSteps = [
  {
    number: "01",
    emoji: "🌴",
    title: "Date Seeds Collected",
    description:
      "Agricultural waste — discarded date seeds — are gathered from local farms, turning trash into treasure.",
  },
  {
    number: "02",
    emoji: "🔥",
    title: "Roasted & Blended",
    description:
      "Women-led home-based units carefully roast and blend the seeds with fair wages and flexible hours.",
  },
  {
    number: "03",
    emoji: "☕",
    title: "Your Perfect Cup",
    description:
      "You enjoy a naturally sweet, caffeine-free, stomach-friendly coffee alternative — and support a community.",
  },
];

const benefits = [
  { emoji: "✓", text: "Naturally sweet, zero added sugar" },
  { emoji: "✓", text: "100% caffeine-free — no crash, ever" },
  { emoji: "✓", text: "Stomach-friendly & easy to digest" },
  { emoji: "✓", text: "Made from upcycled date seeds" },
];

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* ─── HERO SECTION ──────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Background image with rich overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />

        {/* Floating ambient glow */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-green-500/8 blur-3xl pointer-events-none" />

        {/* Floating badge */}
        <div className="absolute top-8 right-8 md:top-12 md:right-12 animate-float">
          <div className="glass-card rounded-2xl px-4 py-2.5 flex items-center gap-2 text-xs font-bold text-accent border border-accent/20">
            <Leaf className="h-3.5 w-3.5" />
            100% Zero Waste
          </div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <p
            className="text-accent text-sm md:text-base font-bold uppercase tracking-[0.3em] mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            Where Coffee Meets Conscious Living
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold mb-6 leading-[0.95] tracking-tight text-foreground opacity-0 animate-fade-up"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >
            The Caffeine-Free{" "}
            <span className="gradient-text-warm block">Future of Coffee</span>
          </h1>
          <p
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            A Zero-Waste, Women-Led Circular Economy brewing change from discarded date seeds into your favourite cup.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-up"
            style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}
          >
            <Link to="/shop">
              <button
                id="hero-shop-cta"
                className="group relative px-8 py-4 rounded-2xl font-bold text-base bg-accent text-accent-foreground hover:shadow-glow-amber-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Shop Date Seed Coffee
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </Link>
            <a
              href="#mission"
              className="flex items-center gap-2 px-6 py-4 rounded-2xl font-semibold text-sm text-muted-foreground border border-border hover:border-accent/50 hover:text-foreground glass-card transition-all duration-300 hover:-translate-y-1"
              id="hero-mission-link"
            >
              Our Mission
              <ArrowDown className="h-4 w-4 animate-float" />
            </a>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ─── PRODUCT HIGHLIGHT — BENTO GRID ───────────────── */}
      <section id="mission" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <RevealSection className="text-center mb-16">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-3">Our Product</p>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight">
              Date Seed Coffee
            </h2>
            <div className="accent-line mx-auto mt-4" />
          </RevealSection>

          <div className="grid lg:grid-cols-5 gap-6">
            {/* Large product image — 3 cols */}
            <RevealSection className="lg:col-span-3" delay={100}>
              <div className="group relative h-full min-h-[400px] rounded-3xl overflow-hidden glass-card border border-border hover:border-accent/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover">
                <img
                  src={productImage}
                  alt="Date Seed Coffee by Project Khajoor"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ minHeight: "400px" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-card rounded-xl p-4">
                    <p className="text-xs text-accent font-bold uppercase tracking-wider mb-1">Premium</p>
                    <h3 className="font-heading font-bold text-lg">Khajoor Date Seed Coffee</h3>
                    <p className="text-xs text-muted-foreground">Naturally sweet · Caffeine-free · Zero-waste</p>
                  </div>
                </div>
              </div>
            </RevealSection>

            {/* Right bento stack — 2 cols */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Benefits card */}
              <RevealSection delay={200} className="flex-1">
                <div className="h-full glass-card border border-border rounded-3xl p-7 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300">
                  <p className="text-xs text-accent font-bold uppercase tracking-wider mb-5">Key Benefits</p>
                  <ul className="space-y-4">
                    {benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <span className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center text-accent text-xs font-bold flex-shrink-0">
                          ✓
                        </span>
                        <span className="text-muted-foreground">{b.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealSection>

              {/* CTA card */}
              <RevealSection delay={300}>
                <div className="glass-card border border-accent/30 rounded-3xl p-6 bg-accent/5 hover:-translate-y-1 hover:shadow-glow-amber transition-all duration-300">
                  <p className="text-sm text-muted-foreground mb-3">Ready to make a difference?</p>
                  <Link to="/shop">
                    <button
                      id="bento-shop-btn"
                      className="w-full py-3 rounded-xl font-bold text-sm bg-accent text-accent-foreground hover:shadow-glow-amber transition-all duration-300"
                    >
                      Order Now →
                    </button>
                  </Link>
                </div>
              </RevealSection>

              {/* Teaser card — coming soon */}
              <RevealSection delay={400}>
                <div className="relative glass-card border border-border rounded-3xl p-6 overflow-hidden group hover:border-muted-foreground/30 transition-all duration-300">
                  <div className="shimmer absolute inset-0 opacity-30" />
                  <div className="relative">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Coming Soon</p>
                    <p className="font-heading font-bold text-sm">Date Cakes & Natural Scrubs</p>
                    <p className="text-xs text-muted-foreground mt-1">Expanding our zero-waste mission</p>
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* ─── IMPACT SNAPSHOT — ANIMATED COUNTERS ──────────── */}
      <section className="py-24 px-4 bg-card/40 border-y border-border">
        <div className="container mx-auto max-w-6xl">
          <RevealSection className="text-center mb-16">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-3">Our Impact</p>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight">
              Mission in Action
            </h2>
            <div className="accent-line mx-auto mt-4" />
          </RevealSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {impactStats.map((stat, i) => (
              <RevealSection key={i} delay={i * 100}>
                <div
                  className={`glass-card border border-border rounded-3xl p-6 hover:border-accent/30 tilt-card transition-all duration-300`}
                >
                  <div className={`w-12 h-12 ${stat.bg} rounded-2xl flex items-center justify-center mb-4`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    className={`text-4xl font-heading font-extrabold ${stat.color} leading-none mb-2`}
                  />
                  <p className="font-semibold text-sm text-foreground mb-1">{stat.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{stat.description}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── IMPACT CALCULATOR ────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-3xl">
          <RevealSection className="text-center mb-12">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-3">Your Contribution</p>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight mb-4">
              See Your Impact
            </h2>
            <p className="text-muted-foreground">
              Drag the slider to visualise the real-world change your order creates.
            </p>
            <div className="accent-line mx-auto mt-4" />
          </RevealSection>

          <RevealSection>
            <div className="glass-card border border-border rounded-3xl p-8">
              <ImpactSlider />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── 3-STEP PROCESS TIMELINE ──────────────────────── */}
      <section className="py-24 px-4 bg-card/40 border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <RevealSection className="text-center mb-16">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-3">How It Works</p>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight">
              From Seed to Cup
            </h2>
            <div className="accent-line mx-auto mt-4" />
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop) — visible amber dashed line */}
            <div className="hidden md:block absolute top-[3.25rem] left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px border-t border-dashed border-accent/40 z-0" />

            {processSteps.map((step, i) => (
              <RevealSection key={i} delay={i * 150}>
                <div className="relative text-center glass-card border border-border rounded-3xl p-8 hover:border-accent/30 hover:-translate-y-2 transition-all duration-300 group">
                  {/* Step number */}
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 text-xs font-bold text-accent border border-accent/40 bg-background rounded-full">
                      {step.number}
                    </span>
                  </div>

                  <div className="text-4xl mb-4 mt-2 group-hover:animate-float inline-block">
                    {step.emoji}
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </RevealSection>
            ))}
          </div>

          <RevealSection className="text-center mt-12" delay={500}>
            <Link to="/impact">
              <button
                id="home-learn-impact-btn"
                className="px-6 py-3 rounded-xl font-semibold text-sm border border-border glass-card hover:border-accent/50 hover:text-accent text-muted-foreground transition-all duration-300 hover:-translate-y-0.5"
              >
                Learn More About Our Impact →
              </button>
            </Link>
          </RevealSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
