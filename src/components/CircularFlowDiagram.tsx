import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";

interface FlowNode {
  id: number;
  icon: string;
  label: string;
  description: string;
  color: string;
}

const nodes: FlowNode[] = [
  {
    id: 1,
    icon: "🌴",
    label: "Date Fruit Harvest",
    description:
      "Dates are harvested from palm trees. The fruit is used for food, leaving seeds as agricultural waste.",
    color: "hsl(155 40% 40%)",
  },
  {
    id: 2,
    icon: "🫘",
    label: "Seed Extraction",
    description:
      "Discarded date seeds are collected and cleaned — upcycling what would have been agri-waste.",
    color: "hsl(32 80% 55%)",
  },
  {
    id: 3,
    icon: "🔥",
    label: "Roast & Blend",
    description:
      "Seeds are roasted and blended in women-led home-based units, providing fair-wage employment.",
    color: "hsl(20 75% 48%)",
  },
  {
    id: 4,
    icon: "☕",
    label: "Date Seed Coffee",
    description:
      "The final product — a caffeine-free, naturally sweet, stomach-friendly beverage for you!",
    color: "hsl(32 80% 55%)",
  },
  {
    id: 5,
    icon: "♻️",
    label: "Upcycle Residuals",
    description:
      "Even used coffee grounds are upcycled into natural exfoliating scrubs — completing the zero-waste loop.",
    color: "hsl(155 40% 40%)",
  },
];

export function CircularFlowDiagram({ className }: { className?: string }) {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.15 });

  // Pentagon layout — extra padding so labels never clip
  const radius = 130;
  const cx = 200;
  const cy = 200;
  const totalNodes = nodes.length;
  // viewBox is 400×460 — gives 60px bottom padding for label text
  const VW = 400;
  const VH = 460;

  const getPosition = (index: number) => {
    // Start from top (-90°) and go clockwise
    const angle = (index / totalNodes) * 2 * Math.PI - Math.PI / 2;
    return {
      x: cx + radius * Math.cos(angle),
      y: cy + radius * Math.sin(angle),
    };
  };

  const positions = nodes.map((_, i) => getPosition(i));

  const toggleNode = (id: number) =>
    setActiveNode((prev) => (prev === id ? null : id));

  const activeNodeData = activeNode ? nodes.find((n) => n.id === activeNode) : null;

  return (
    <div ref={ref} className={cn("flex flex-col items-center gap-6", className)}>
      {/* SVG Diagram */}
      <div className="relative w-full max-w-[420px] mx-auto">
        <svg
          viewBox={`0 0 ${VW} ${VH}`}
          className="w-full h-auto"
          aria-label="Circular economy flow diagram — click each step to learn more"
          role="img"
        >
          {/* Animated connecting lines */}
          {positions.map((pos, i) => {
            const next = positions[(i + 1) % totalNodes];
            return (
              <line
                key={`line-${i}`}
                x1={pos.x}
                y1={pos.y}
                x2={next.x}
                y2={next.y}
                stroke="hsla(32,80%,55%,0.25)"
                strokeWidth="1.5"
                strokeDasharray="6 4"
                className="transition-all duration-700"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transitionDelay: `${i * 0.15}s`,
                }}
              />
            );
          })}

          {/* Center text */}
          <text
            x={cx}
            y={cy - 10}
            textAnchor="middle"
            fontSize="12"
            fill="hsl(38 30% 65%)"
            fontFamily="Inter, sans-serif"
            fontWeight="700"
            letterSpacing="0.05em"
          >
            ZERO
          </text>
          <text
            x={cx}
            y={cy + 6}
            textAnchor="middle"
            fontSize="12"
            fill="hsl(38 30% 65%)"
            fontFamily="Inter, sans-serif"
            fontWeight="700"
            letterSpacing="0.05em"
          >
            WASTE
          </text>
          <text
            x={cx}
            y={cy + 22}
            textAnchor="middle"
            fontSize="12"
            fill="hsl(38 30% 65%)"
            fontFamily="Inter, sans-serif"
            fontWeight="700"
            letterSpacing="0.05em"
          >
            LOOP
          </text>

          {/* Nodes */}
          {nodes.map((node, i) => {
            const pos = positions[i];
            const isActive = activeNode === node.id;
            return (
              <g
                key={node.id}
                role="button"
                tabIndex={0}
                aria-label={`${node.label}: ${node.description}`}
                aria-pressed={isActive}
                className="cursor-pointer focus:outline-none"
                onClick={() => toggleNode(node.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleNode(node.id);
                  }
                }}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transition: `opacity 0.5s ease ${i * 0.15}s`,
                }}
              >
                {/* Outer glow ring — always shown, glows more when active */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="36"
                  fill="none"
                  stroke={node.color}
                  strokeWidth={isActive ? 2 : 0.8}
                  opacity={isActive ? 0.7 : 0.3}
                  style={{ transition: "all 0.25s ease" }}
                />
                {/* Node circle */}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="27"
                  fill={isActive ? node.color : "hsla(28, 16%, 14%, 0.95)"}
                  stroke={node.color}
                  strokeWidth="1.5"
                  style={{ transition: "fill 0.25s ease" }}
                />
                {/* Emoji icon */}
                <text
                  x={pos.x}
                  y={pos.y + 8}
                  textAnchor="middle"
                  fontSize="18"
                  className="select-none"
                >
                  {node.icon}
                </text>
                {/* Label — positioned below each node */}
                {node.label.split(" ").map((word, wi) => (
                  <text
                    key={wi}
                    x={pos.x}
                    y={pos.y + 50 + wi * 12}
                    textAnchor="middle"
                    fontSize="9.5"
                    fill={isActive ? "hsl(38 80% 75%)" : "hsl(38 30% 72%)"}
                    fontFamily="Inter, sans-serif"
                    fontWeight="600"
                    className="select-none"
                    style={{ transition: "fill 0.25s ease" }}
                  >
                    {word}
                  </text>
                ))}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Description card — slides in when a node is active */}
      <div
        className={cn(
          "w-full glass-card border border-border rounded-2xl transition-all duration-400",
          activeNodeData
            ? "opacity-100 translate-y-0 p-5"
            : "opacity-0 translate-y-2 pointer-events-none max-h-0 overflow-hidden p-0 border-0"
        )}
        style={{ transitionProperty: "opacity, transform, max-height, padding, border-width" }}
        aria-live="polite"
      >
        {activeNodeData && (
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{activeNodeData.icon}</span>
              <h4
                className="font-heading font-bold text-base"
                style={{ color: activeNodeData.color }}
              >
                {activeNodeData.label}
              </h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {activeNodeData.description}
            </p>
          </div>
        )}
      </div>

      <p className="text-xs text-muted-foreground text-center">
        👆 Click or tap any step to learn more
      </p>
    </div>
  );
}
