import { cn } from "@/lib/utils";

interface HairlineDividerProps {
  className?: string;
  light?: boolean;
}

export function HairlineDivider({ className, light = false }: HairlineDividerProps) {
  return (
    <hr
      className={cn("hairline", className)}
      style={light ? { borderTopColor: "rgba(255,255,255,0.20)" } : {}}
    />
  );
}
