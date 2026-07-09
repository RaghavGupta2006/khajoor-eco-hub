import { cn } from "@/lib/utils";

export type PackSize = "trial" | "classic" | "eco";

interface Pack {
  id: PackSize;
  emoji: string;
  name: string;
  weight: string;
  tagline: string;
  badge?: string;
  quantityValue: number;
}

const packs: Pack[] = [
  {
    id: "trial",
    emoji: "🟤",
    name: "Trial Pack",
    weight: "100g",
    tagline: "Explore the taste",
    quantityValue: 1,
  },
  {
    id: "classic",
    emoji: "☕",
    name: "Classic Pack",
    weight: "250g",
    tagline: "Most loved choice",
    badge: "Most Popular",
    quantityValue: 2,
  },
  {
    id: "eco",
    emoji: "🌿",
    name: "Eco Bundle",
    weight: "1kg",
    tagline: "Best for families",
    badge: "Best Value",
    quantityValue: 8,
  },
];

interface PackSelectorProps {
  value: PackSize;
  onChange: (pack: PackSize, quantityValue: number) => void;
  className?: string;
}

export function PackSelector({ value, onChange, className }: PackSelectorProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
        Choose Your Pack
      </p>
      <div className="grid grid-cols-3 gap-3">
        {packs.map((pack) => {
          const isSelected = value === pack.id;
          return (
            <button
              key={pack.id}
              id={`pack-${pack.id}`}
              onClick={() => onChange(pack.id, pack.quantityValue)}
              className={cn(
                "relative flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all duration-300 text-center group",
                isSelected
                  ? "border-accent bg-accent/10 shadow-glow-amber"
                  : "border-border glass-card hover:border-accent/50 hover:-translate-y-1"
              )}
              aria-pressed={isSelected}
              aria-label={`Select ${pack.name} - ${pack.weight}`}
            >
              {/* Badge */}
              {pack.badge && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-gradient-accent text-accent-foreground whitespace-nowrap">
                  {pack.badge}
                </span>
              )}

              <span className="text-2xl">{pack.emoji}</span>

              <div className="space-y-0.5">
                <p
                  className={cn(
                    "text-xs font-bold",
                    isSelected ? "text-accent" : "text-foreground"
                  )}
                >
                  {pack.weight}
                </p>
                <p className="text-[10px] text-muted-foreground leading-tight">
                  {pack.tagline}
                </p>
              </div>

              {/* Selected indicator */}
              {isSelected && (
                <div className="absolute bottom-2 right-2 w-2.5 h-2.5 rounded-full bg-accent" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
