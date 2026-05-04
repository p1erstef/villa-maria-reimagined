import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  inverse?: boolean;
}

export const SectionTitle = ({ eyebrow, title, subtitle, align = "left", className, inverse }: SectionTitleProps) => (
  <div className={cn(
    "max-w-3xl mb-12",
    align === "center" && "mx-auto text-center",
    className
  )}>
    {eyebrow && (
      <div className={cn(
        "text-xs font-bold uppercase tracking-widest mb-4",
        inverse ? "text-accent" : "text-accent"
      )}>
        {eyebrow}
      </div>
    )}
    <h2 className={cn(
      "font-display text-4xl md:text-5xl lg:text-6xl uppercase leading-none text-balance",
      inverse ? "text-villa-cream" : "text-villa-noir"
    )}>
      {title}
    </h2>
    {subtitle && (
      <p className={cn(
        "mt-5 text-lg leading-relaxed text-pretty",
        inverse ? "text-villa-cream/80" : "text-muted-foreground"
      )}>
        {subtitle}
      </p>
    )}
  </div>
);
