import { useState } from "react";
import { Leaf, Users, Coffee } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImpactSliderProps {
  className?: string;
  initialValue?: number;
}

// Impact ratios derived from README data:
// 200kg+ waste recycled across all production → ~500g per bag estimated
// 30+ women trained → ~15min fair-wage work per bag estimated
const WASTE_PER_BAG_G = 500;    // grams of agri-waste recycled per bag
const EMPLOYMENT_MIN_PER_BAG = 15; // minutes of women's employment per bag
const CAFFEINE_CUPS_PER_BAG = 15; // cups of caffeinated coffee avoided per bag

export function ImpactSlider({ className, initialValue = 1 }: ImpactSliderProps) {
  const [bags, setBags] = useState(initialValue);

  const wasteRecycled = bags * WASTE_PER_BAG_G;
  const employmentMin = bags * EMPLOYMENT_MIN_PER_BAG;
  const caffeineAvoided = bags * CAFFEINE_CUPS_PER_BAG;

  const formatWaste = (g: number) =>
    g >= 1000 ? `${(g / 1000).toFixed(1)}kg` : `${g}g`;

  const formatTime = (min: number) => {
    if (min < 60) return `${min} min`;
    const h = Math.floor(min / 60);
    const m = min % 60;
    return m > 0 ? `${h}h ${m}m` : `${h} hr`;
  };

  return (
    <div className={cn("space-y-6", className)}>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground">
            Your Order Impact
          </span>
          <span className="text-sm font-bold text-accent">
            {bags} {bags === 1 ? "bag" : "bags"}
          </span>
        </div>
        <input
          type="range"
          min={1}
          max={20}
          value={bags}
          onChange={(e) => setBags(Number(e.target.value))}
          className="w-full h-2 appearance-none rounded-full cursor-pointer"
          style={{
            background: `linear-gradient(to right, hsl(32 80% 55%) 0%, hsl(32 80% 55%) ${((bags - 1) / 19) * 100}%, hsl(28 14% 22%) ${((bags - 1) / 19) * 100}%, hsl(28 14% 22%) 100%)`,
          }}
          id="impact-slider"
          aria-label="Adjust number of bags to see your impact"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>1 bag</span>
          <span>20 bags</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="glass-card rounded-xl p-4 text-center space-y-2">
          <div className="w-9 h-9 rounded-full bg-accent/15 flex items-center justify-center mx-auto">
            <Leaf className="h-4 w-4 text-accent" />
          </div>
          <div className="text-lg font-heading font-bold text-accent">
            {formatWaste(wasteRecycled)}
          </div>
          <p className="text-xs text-muted-foreground leading-tight">
            Agri-waste recycled
          </p>
        </div>

        <div className="glass-card rounded-xl p-4 text-center space-y-2">
          <div className="w-9 h-9 rounded-full bg-green-500/15 flex items-center justify-center mx-auto">
            <Users className="h-4 w-4 text-green-400" />
          </div>
          <div className="text-lg font-heading font-bold text-green-400">
            {formatTime(employmentMin)}
          </div>
          <p className="text-xs text-muted-foreground leading-tight">
            Women's employment
          </p>
        </div>

        <div className="glass-card rounded-xl p-4 text-center space-y-2">
          <div className="w-9 h-9 rounded-full bg-blue-500/15 flex items-center justify-center mx-auto">
            <Coffee className="h-4 w-4 text-blue-400" />
          </div>
          <div className="text-lg font-heading font-bold text-blue-400">
            {caffeineAvoided}
          </div>
          <p className="text-xs text-muted-foreground leading-tight">
            Caffeine cups skipped
          </p>
        </div>
      </div>

      <p className="text-xs text-muted-foreground text-center italic">
        * Estimates based on 200kg+ waste recycled and 30+ women trained milestones.
      </p>
    </div>
  );
}
