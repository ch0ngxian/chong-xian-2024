import { cn } from "@/lib/utils";

export default function AnimatedGradientText({ children, className }) {
  return (
    <div className="group flex max-w-fit flex-row items-center justify-center duration-500 ease-out [--bg-size:300%]">
      <div className={cn("inline animate-gradient bg-gradient-to-r bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent", className)}>
        {children}
      </div>
    </div>
  );
}
