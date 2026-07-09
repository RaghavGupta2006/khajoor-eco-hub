import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FloatingLabelInput } from "@/components/FloatingLabelInput";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Phone, MapPin, Store, Mail, Instagram, ArrowRight, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

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

const contactCards = [
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91 81782 44698", "+91 92899 20466"],
    hrefs: ["tel:+918178244698", "tel:+919289920466"],
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["projectkhajoorenactus@gmail.com"],
    hrefs: ["https://mail.google.com/mail/?view=cm&to=projectkhajoorenactus@gmail.com"],
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: Instagram,
    title: "Instagram",
    lines: ["@project_khajoor"],
    hrefs: ["https://www.instagram.com/project_khajoor?igsh=cGNuaHU4anFrYnM5"],
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    external: true,
  },
  {
    icon: MapPin,
    title: "Location",
    lines: ["Indira Gandhi Delhi Technical", "University for Women, New Delhi"],
    hrefs: [],
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("contacts").insert([
        {
          full_name: formData.name.trim(),
          email_address: formData.email.trim(),
          contact_number: "",
          quantity: 0,
        },
      ]);
      if (error) {
        console.error("Supabase error:", JSON.stringify(error));
        throw new Error(error.message || "Database error");
      }
      toast.success("Message sent! We'll get back to you soon. 🌴");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please reach out via phone or email.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Reach Out
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight mb-6 opacity-0 animate-fade-up"
            style={{ animationFillMode: "forwards", animationDelay: "0.25s" }}
          >
            Get in Touch
          </h1>
          <p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto opacity-0 animate-fade-up"
            style={{ animationFillMode: "forwards", animationDelay: "0.4s" }}
          >
            We'd love to hear from you. Reach out for orders, partnerships, or just to say hello.
          </p>
          <div
            className="accent-line mx-auto mt-8 opacity-0 animate-fade-up"
            style={{ animationFillMode: "forwards", animationDelay: "0.5s" }}
          />
        </div>
      </section>

      {/* ─── TWO-COLUMN LAYOUT ───────────────────────────── */}
      <section className="py-12 px-4 flex-grow">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* LEFT — Contact info cards */}
            <div className="space-y-5">
              <RevealSection>
                <h2 className="text-2xl font-heading font-bold mb-6">Contact Details</h2>
              </RevealSection>

              {contactCards.map((card, i) => (
                <RevealSection key={i} delay={i * 80}>
                  <div
                    className={`glass-card border ${card.border} rounded-2xl p-5 flex gap-4 hover:-translate-y-0.5 hover:shadow-card-dark transition-all duration-300`}
                  >
                    <div className={`w-11 h-11 ${card.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <card.icon className={`h-5 w-5 ${card.color}`} />
                    </div>
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-wider mb-1.5 ${card.color}`}>
                        {card.title}
                      </p>
                      {card.lines.map((line, li) => (
                        card.hrefs[li] ? (
                          <a
                            key={li}
                            href={card.hrefs[li]}
                            target={card.external ? "_blank" : undefined}
                            rel={card.external ? "noopener noreferrer" : undefined}
                            className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={li} className="text-sm text-muted-foreground">{line}</p>
                        )
                      ))}
                    </div>
                  </div>
                </RevealSection>
              ))}

              {/* D2C order CTA card */}
              <RevealSection delay={400}>
                <div className="glass-card border border-accent/30 rounded-2xl p-5 flex gap-4 items-center bg-accent/5">
                  <div className="w-11 h-11 bg-accent/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Store className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-wider mb-1 text-accent">Direct Orders</p>
                    <p className="text-sm text-muted-foreground">
                      For direct-to-customer orders, use our online shop.
                    </p>
                  </div>
                  <Link to="/shop" className="flex-shrink-0">
                    <button
                      id="contact-goto-shop"
                      className="p-2.5 rounded-xl bg-accent text-accent-foreground hover:shadow-glow-amber transition-all duration-300"
                      aria-label="Go to shop"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </Link>
                </div>
              </RevealSection>

              {/* Partnerships card */}
              <RevealSection delay={480}>
                <div className="glass-card border border-border rounded-2xl p-5 space-y-2">
                  <p className="text-sm font-bold text-foreground">Partnerships & Campus Sales</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Interested in wholesale, corporate partnerships, or campus stall opportunities? Call us to discuss — we'd love to collaborate.
                  </p>
                </div>
              </RevealSection>
            </div>

            {/* RIGHT — Quick message form */}
            <RevealSection delay={200} className="lg:sticky lg:top-24 lg:self-start">
              <div className="glass-card border border-border rounded-3xl p-8 md:p-10">
                <div className="mb-8">
                  <p className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-2">Quick Message</p>
                  <h2 className="text-2xl font-heading font-extrabold tracking-tight">
                    Send Us a Note
                  </h2>
                  <p className="text-sm text-muted-foreground mt-2">
                    We typically respond within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <FloatingLabelInput
                    label="Your Name"
                    name="name"
                    id="contact-name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />

                  <FloatingLabelInput
                    label="Your Email *"
                    name="email"
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />

                  {/* Textarea with floating label styling */}
                  <div className="relative">
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder=" "
                      className="peer w-full px-4 pt-7 pb-3 rounded-xl border border-border bg-transparent text-sm text-foreground transition-all duration-200 outline-none resize-none hover:border-muted-foreground/50 focus:border-accent focus:shadow-[0_0_0_1px_hsl(var(--accent))]"
                    />
                    <label
                      htmlFor="contact-message"
                      className="absolute left-4 pointer-events-none transition-all duration-200 font-medium peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-muted-foreground peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-accent peer-focus:tracking-wider peer-focus:uppercase top-2 text-[10px] text-accent tracking-wider uppercase"
                      style={{
                        top: formData.message.length > 0 ? "0.5rem" : undefined,
                        fontSize: formData.message.length > 0 ? "0.625rem" : undefined,
                        color: formData.message.length > 0 ? "hsl(32 80% 55%)" : undefined,
                        textTransform: formData.message.length > 0 ? "uppercase" : undefined,
                        letterSpacing: formData.message.length > 0 ? "0.05em" : undefined,
                      }}
                    >
                      Your Message
                    </label>
                  </div>

                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={isSubmitting}
                    className="relative w-full py-4 rounded-2xl font-bold text-base bg-accent text-accent-foreground hover:shadow-glow-amber-lg transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message →"
                      )}
                    </span>
                    {!isSubmitting && (
                      <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </button>
                </form>
              </div>
            </RevealSection>
          </div>

          {/* ─── LOCATION ─────────────────────────────────── */}
          <RevealSection className="mt-16">
            <div className="glass-card border border-border rounded-3xl p-8 text-center max-w-2xl mx-auto">
              <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Visit Us</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Indira Gandhi Delhi Technical University for Women<br />
                <span className="text-foreground font-medium">New Delhi, India</span>
              </p>
              <p className="mt-3 text-xs text-muted-foreground">
                We are also available at Campus Stalls and Wellness Hubs — call us for the schedule.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
