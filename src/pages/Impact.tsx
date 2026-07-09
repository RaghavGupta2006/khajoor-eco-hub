import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { CircularFlowDiagram } from "@/components/CircularFlowDiagram";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Users, Recycle, Heart, TrendingUp, Leaf } from "lucide-react";

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

// Scroll-triggered animated progress bar
function AnimatedProgressBar({ value, max, color, delay = 0 }: {
  value: number;
  max: number;
  color: string;
  delay?: number;
}) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div ref={ref} className="h-2.5 bg-muted rounded-full overflow-hidden">
      <div
        className="h-full rounded-full"
        style={{
          width: isVisible ? `${pct}%` : "0%",
          background: color,
          boxShadow: `0 0 10px ${color}90`,
          transition: `width 1.2s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        }}
      />
    </div>
  );
}

const keyMetrics = [
  {
    icon: Users,
    value: 11800,
    suffix: "+",
    label: "Women Engagements",
    description: "Total social outreach and inclusion",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
  {
    icon: TrendingUp,
    value: 30,
    suffix: "+",
    label: "Employees Trained",
    description: "Women empowered with entrepreneurial skills",
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  {
    icon: Recycle,
    value: 200,
    suffix: "kg+",
    label: "Agri-Waste Recycled",
    description: "Date seeds upcycled from agricultural waste",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
  {
    icon: Leaf,
    value: 100,
    suffix: "%",
    label: "Zero-Waste Goal",
    description: "Nothing is ever discarded",
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
];

// UN SDGs with official colors
const sdgGoals = [
  {
    number: "SDG 1",
    name: "No Poverty",
    icon: Heart,
    color: "#E5243B",
    description: "Creating income opportunities for marginalised communities.",
  },
  {
    number: "SDG 3",
    name: "Good Health",
    icon: Heart,
    color: "#4C9F38",
    description: "Providing a caffeine-free, stomach-friendly beverage alternative.",
  },
  {
    number: "SDG 5",
    name: "Gender Equality",
    icon: Users,
    color: "#FF3A21",
    description: "Empowering women through fair-wage home-based employment.",
  },
  {
    number: "SDG 12",
    name: "Responsible Consumption",
    icon: Recycle,
    color: "#BF8B2E",
    description: "Zero-waste circular production from seed to scrub.",
  },
  {
    number: "SDG 13",
    name: "Climate Action",
    icon: Leaf,
    color: "#3F7E44",
    description: "Reducing agricultural waste and carbon impact.",
  },
];

const Impact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* ─── HERO ────────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p
            className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-4 opacity-0 animate-fade-up"
            style={{ animationFillMode: "forwards", animationDelay: "0.1s" }}
          >
            Our Impact
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight mb-6 opacity-0 animate-fade-up"
            style={{ animationFillMode: "forwards", animationDelay: "0.25s" }}
          >
            The Seed of Change
          </h1>
          <p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto opacity-0 animate-fade-up"
            style={{ animationFillMode: "forwards", animationDelay: "0.4s" }}
          >
            Every bag of Khajoor Coffee purchased directly supports our goal: transforming agri-waste and empowering home-based, fair-wage, women-run packaging units.
          </p>
          <div
            className="accent-line mx-auto mt-8 opacity-0 animate-fade-up"
            style={{ animationFillMode: "forwards", animationDelay: "0.5s" }}
          />
        </div>
      </section>

      {/* ─── KEY METRICS ─────────────────────────────────── */}
      <section className="py-20 px-4 bg-card/40 border-y border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {keyMetrics.map((metric, i) => (
              <RevealSection key={i} delay={i * 100}>
                <div
                  className={`glass-card border ${metric.border} rounded-3xl p-6 hover:-translate-y-1 tilt-card transition-all duration-300`}
                >
                  <div className={`w-12 h-12 ${metric.bg} rounded-2xl flex items-center justify-center mb-4`}>
                    <metric.icon className={`h-6 w-6 ${metric.color}`} />
                  </div>
                  <AnimatedCounter
                    target={metric.value}
                    suffix={metric.suffix}
                    className={`text-4xl font-heading font-extrabold ${metric.color} leading-none mb-2`}
                  />
                  <p className="font-semibold text-sm text-foreground mb-1">{metric.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{metric.description}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CIRCULAR ECONOMY DIAGRAM ────────────────────── */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <RevealSection className="text-center mb-16">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-3">The Loop</p>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight mb-4">
              Our Circular Economy
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From date palm to your cup and back again — every step is designed to leave nothing behind.
            </p>
            <div className="accent-line mx-auto mt-6" />
          </RevealSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <RevealSection>
              <CircularFlowDiagram />
            </RevealSection>

            <RevealSection delay={200} className="space-y-6">
              <div className="space-y-4">
                {[
                  {
                    emoji: "🌴",
                    title: "Nothing is wasted",
                    text: "Date seeds that were once considered agricultural waste are now the heart of our product.",
                  },
                  {
                    emoji: "👩",
                    title: "Women lead the process",
                    text: "Home-based packaging units give women flexible, fair-wage employment that balances work and family.",
                  },
                  {
                    emoji: "♻️",
                    title: "Grounds become scrubs",
                    text: "Used coffee grounds are upcycled into natural exfoliating scrubs — completing the zero-waste circle.",
                  },
                  {
                    emoji: "📦",
                    title: "200kg+ recycled",
                    text: "Our circular model has already kept over 200kg of agricultural waste out of landfills.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-4 glass-card border border-border rounded-2xl hover:border-accent/30 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <span className="text-2xl flex-shrink-0 mt-0.5">{item.emoji}</span>
                    <div>
                      <p className="font-semibold text-sm mb-1">{item.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ─── WOMEN EMPOWERMENT ───────────────────────────── */}
      <section className="py-24 px-4 bg-card/40 border-y border-border">
        <div className="container mx-auto max-w-5xl">
          <RevealSection className="text-center mb-16">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-3">Community</p>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight">
              Empowering Women,
              <br />
              <span className="gradient-text-warm">Building Communities</span>
            </h2>
            <div className="accent-line mx-auto mt-6" />
          </RevealSection>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial / Quote card */}
            <RevealSection>
              <div className="glass-card border border-border rounded-3xl p-8 h-full flex flex-col justify-between">
                <div>
                  <span className="text-7xl leading-none text-accent/30 font-heading font-extrabold">"</span>
                  <p className="text-lg text-foreground leading-relaxed -mt-4 mb-6">
                    Our women-run packaging units provide fair wages and flexible work opportunities, enabling economic independence while maintaining work-life balance.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Every purchase supports these women and their families, creating a ripple effect of positive change in our communities.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-border flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">
                    PK
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Project Khajoor</p>
                    <p className="text-xs text-muted-foreground">Enactus IGDTUW</p>
                  </div>
                </div>
              </div>
            </RevealSection>

            {/* Progress visuals — scroll-animated bars */}
            <RevealSection delay={150} className="space-y-5">
              {[
                { label: "Women Trained & Employed", value: 30, max: 50, unit: "30+ / 50 goal", color: "hsl(155 40% 40%)" },
                { label: "Women Engagements", value: 11800, max: 15000, unit: "11,800+ / 15k goal", color: "hsl(32 80% 55%)" },
                { label: "Agri-Waste Recycled (kg)", value: 200, max: 500, unit: "200+ / 500kg goal", color: "hsl(155 60% 50%)" },
              ].map((item, i) => (
                <div key={i} className="glass-card border border-border rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-semibold">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.unit}</p>
                  </div>
                  <AnimatedProgressBar
                    value={item.value}
                    max={item.max}
                    color={item.color}
                    delay={i * 150}
                  />
                </div>
              ))}
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ─── UN SDG GOALS ─────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <RevealSection className="text-center mb-16">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-3">Global Alignment</p>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight mb-4">
              Aligned with Global Goals
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our mission directly supports the United Nations Sustainable Development Goals.
            </p>
            <div className="accent-line mx-auto mt-6" />
          </RevealSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {sdgGoals.map((goal, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div
                  className="group rounded-2xl p-5 text-center hover:-translate-y-2 transition-all duration-300 cursor-default border"
                  style={{
                    background: `${goal.color}12`,
                    borderColor: `${goal.color}35`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${goal.color}25`, border: `1px solid ${goal.color}50` }}
                  >
                    <goal.icon className="h-6 w-6" style={{ color: goal.color }} />
                  </div>
                  <p
                    className="text-xs font-bold uppercase tracking-wider mb-1"
                    style={{ color: goal.color }}
                  >
                    {goal.number}
                  </p>
                  <p className="text-sm font-semibold text-foreground mb-2">{goal.name}</p>
                  <p
                    className="text-xs text-muted-foreground leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    {goal.description}
                  </p>
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

export default Impact;
