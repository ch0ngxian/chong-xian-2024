import { cn } from "@/lib/utils";

export default function AnimatedShinyText({ children, className, shimmerWidth = 100 }) {
  return (
    <div
      style={{
        "--shimmer-width": `${shimmerWidth}px`,
      }}
      className={cn(
        "text-gray-500/50",
        "animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",
        "bg-gradient-to-r from-transparent via-black/90 via-50% to-transparent",
        className
      )}
    >
      {children}
    </div>
  );
}
