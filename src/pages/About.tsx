import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Building, Users, Leaf, Heart, Target, Eye } from "lucide-react";

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

const pillars = [
  {
    icon: Building,
    title: "Our Model",
    description:
      "We are committed to a community-first, zero-waste model where we reinvest our returns into farmer incomes and women-run packaging units.",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
  {
    icon: Leaf,
    title: "The Philosophy",
    description:
      "Local production focusing on roasting, blending, and mixing — all with a zero-waste, regenerative approach that honours both people and planet.",
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  {
    icon: Users,
    title: "Women-Led",
    description:
      "Empowering women through fair-wage employment in home-based packaging units, creating sustainable livelihoods and economic independence.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
];

const timelineEvents = [
  {
    year: "Oct 2024",
    emoji: "🌱",
    title: "Project Founded",
    description:
      "Born from Enactus IGDTUW, Project Khajoor was established with a simple question: what if agricultural waste could become something extraordinary?",
  },
  {
    year: "2025",
    emoji: "📈",
    title: "Growing Impact",
    description:
      "Reached 200kg+ of agri-waste recycled, trained 30+ women in home-based packaging, and engaged 11,800+ women across our social outreach programmes.",
  },
  {
    year: "2026",
    emoji: "🚀",
    title: "Expanding the Family",
    description:
      "Expanding our zero-waste product line to include Gourmet Date Cakes and Natural Exfoliating Scrubs, completing the full circular loop.",
  },
];

const values = [
  {
    icon: Target,
    title: "Zero-Waste",
    description:
      "Every byproduct finds purpose. Nothing is discarded when it can be transformed into something valuable.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Heart,
    title: "Community First",
    description:
      "Our success is measured by the positive impact on farmers and women in our community.",
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "We believe in open communication about our processes, impact, and challenges — always.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: Leaf,
    title: "Quality",
    description:
      "Premium products that never compromise on taste, health, or environmental responsibility.",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
];

const About = () => {
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
            Our Story
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight mb-6 opacity-0 animate-fade-up"
            style={{ animationFillMode: "forwards", animationDelay: "0.25s" }}
          >
            Who We Are
          </h1>
          <p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto opacity-0 animate-fade-up"
            style={{ animationFillMode: "forwards", animationDelay: "0.4s" }}
          >
            Project Khajoor is a women-led circular enterprise established in October 2024 by Enactus, Indira Gandhi Delhi Technical University for Women.
          </p>
          <div
            className="accent-line mx-auto mt-8 opacity-0 animate-fade-up"
            style={{ animationFillMode: "forwards", animationDelay: "0.5s" }}
          />
        </div>
      </section>

      {/* ─── THREE PILLARS ───────────────────────────────── */}
      <section className="py-20 px-4 bg-card/40 border-y border-border">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <RevealSection key={i} delay={i * 100}>
                <div
                  className={`glass-card border ${pillar.border} rounded-3xl p-8 tilt-card hover:-translate-y-1 transition-all duration-300 h-full`}
                >
                  <div className={`w-14 h-14 ${pillar.bg} rounded-2xl flex items-center justify-center mb-6`}>
                    <pillar.icon className={`h-7 w-7 ${pillar.color}`} />
                  </div>
                  <h3 className={`font-heading font-bold text-xl mb-3 ${pillar.color}`}>
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR STORY TIMELINE ──────────────────────────── */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <RevealSection className="text-center mb-16">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-3">Timeline</p>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From a bold idea to a growing movement — brewing change, one cup at a time.
            </p>
            <div className="accent-line mx-auto mt-6" />
          </RevealSection>

          <div className="relative">
            {/* Vertical connector */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />

            {timelineEvents.map((event, i) => (
              <RevealSection key={i} delay={i * 150} className="relative mb-12 last:mb-0">
                <div className={`flex gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}>
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-background border-2 border-accent items-center justify-center text-lg z-10 shadow-glow-amber">
                    {event.emoji}
                  </div>

                  {/* Mobile dot */}
                  <div className="md:hidden flex-shrink-0 w-12 h-12 rounded-full bg-background border-2 border-accent flex items-center justify-center text-xl z-10 shadow-glow-amber">
                    {event.emoji}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 md:w-5/12 ${i % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                    <div className="glass-card border border-border rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 hover:-translate-y-0.5">
                      <span className="text-xs font-bold text-accent uppercase tracking-wider">
                        {event.year}
                      </span>
                      <h3 className="font-heading font-bold text-xl mt-1 mb-3">{event.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Empty spacer for alternating layout on desktop */}
                  <div className="hidden md:block flex-1 md:w-5/12" />
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR STORY NARRATIVE ─────────────────────────── */}
      <section className="py-20 px-4 bg-card/40 border-y border-border">
        <div className="container mx-auto max-w-4xl">
          <RevealSection className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight">
              Our Story
            </h2>
            <div className="accent-line mx-auto mt-4" />
          </RevealSection>

          <RevealSection>
            <div className="glass-card border border-border rounded-3xl p-8 md:p-12 space-y-5">
              {[
                "Born from Enactus IGDTUW, Project Khajoor is a movement promoting conscious consumption and empowering communities through sustainable business practices.",
                "Where others saw waste, we saw opportunity. By transforming discarded date seeds into a unique coffee alternative, we turned waste into value — reflecting our belief that sustainability begins with innovation.",
                "Our journey began by training women in our community, empowering them with entrepreneurial skills. Today, they lead our operations, managing packaging units from home while balancing work and family life.",
                "Every product we create, every person we employ, and every seed we process is a step towards a more sustainable, equitable future. We're not just selling coffee — we're brewing change, one cup at a time.",
              ].map((para, i) => (
                <p key={i} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ─── VALUES — BENTO GRID ─────────────────────────── */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <RevealSection className="text-center mb-16">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-3">What We Stand For</p>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight">
              Our Values
            </h2>
            <div className="accent-line mx-auto mt-4" />
          </RevealSection>

          <div className="grid md:grid-cols-2 gap-5">
            {values.map((value, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div
                  className="glass-card border border-border rounded-2xl p-7 flex gap-5 hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 ${value.bg} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className={`h-6 w-6 ${value.color}`} />
                  </div>
                  <div>
                    <h3 className={`font-heading font-bold text-lg mb-2 ${value.color}`}>
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
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

export default About;
