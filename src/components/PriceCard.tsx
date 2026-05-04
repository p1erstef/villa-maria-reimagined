import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PriceCardProps {
  eyebrow: string;
  title: string;
  price: string;
  unit?: string;
  description: string;
  cta: string;
  to?: string;
  href?: string;
  highlighted?: boolean;
}

export const PriceCard = ({
  eyebrow, title, price, unit, description, cta, to, href, highlighted,
}: PriceCardProps) => {
  const content = (
    <div
      className={cn(
        "group relative h-full flex flex-col p-7 border transition-all duration-300",
        highlighted
          ? "bg-villa-noir text-villa-cream border-villa-noir hover:bg-villa-terracotta-deep hover:border-villa-terracotta-deep"
          : "bg-card border-border hover:border-accent hover:-translate-y-1"
      )}
    >
      <div className={cn(
        "text-xs font-bold uppercase tracking-widest mb-4",
        highlighted ? "text-accent" : "text-muted-foreground"
      )}>
        {eyebrow}
      </div>
      <h3 className="font-display text-2xl uppercase mb-3 leading-none">{title}</h3>
      <div className="flex items-baseline gap-1 mb-4">
        <span className="font-display text-3xl">{price}</span>
        {unit && (
          <span className={cn("text-sm", highlighted ? "text-villa-cream/70" : "text-muted-foreground")}>
            {unit}
          </span>
        )}
      </div>
      <p className={cn("text-sm leading-relaxed flex-1 mb-6", highlighted ? "text-villa-cream/85" : "text-muted-foreground")}>
        {description}
      </p>
      <div className="flex items-center justify-between text-sm font-bold uppercase tracking-wider">
        <span>{cta}</span>
        <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {content}
      </a>
    );
  }
  return <Link to={to || "#"} className="block h-full">{content}</Link>;
};
