import { useState, useId, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface FloatingLabelInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function FloatingLabelInput({
  label,
  error,
  id,
  className,
  value,
  ...props
}: FloatingLabelInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const generatedId = useId();
  const inputId = id ?? generatedId;

  const isFloated = isFocused || (value !== undefined && String(value).length > 0);

  return (
    <div className={cn("relative", className)}>
      <input
        id={inputId}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn(
          "peer w-full px-4 pt-6 pb-2 rounded-xl border bg-transparent text-sm text-foreground transition-all duration-200 outline-none",
          isFocused
            ? "border-accent shadow-[0_0_0_1px_hsl(var(--accent))] shadow-glow-amber"
            : "border-border hover:border-muted-foreground/50",
          error ? "border-destructive" : ""
        )}
        placeholder=" "
        {...props}
      />
      <label
        htmlFor={inputId}
        className={cn(
          "absolute left-4 pointer-events-none transition-all duration-200 font-medium",
          isFloated
            ? "top-2 text-[10px] text-accent tracking-wider uppercase"
            : "top-1/2 -translate-y-1/2 text-sm text-muted-foreground"
        )}
      >
        {label}
      </label>
      {/* Focus left-border glow */}
      <div
        className={cn(
          "absolute left-0 top-3 bottom-3 w-0.5 rounded-full bg-accent transition-all duration-300",
          isFocused ? "opacity-100" : "opacity-0"
        )}
      />
      {error && (
        <p className="mt-1.5 text-xs text-destructive">{error}</p>
      )}
    </div>
  );
}
