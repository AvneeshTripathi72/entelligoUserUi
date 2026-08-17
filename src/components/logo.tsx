import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className, size = 18 }: LogoProps) {
  return (
    <div className={cn("bg-foreground text-background p-1 transform rotate-45 rounded-sm shadow-md", className)}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="-rotate-45"
      >
        <path d="M7 7h10v10"/>
        <path d="M7 17 17 7"/>
      </svg>
    </div>
  );
}
