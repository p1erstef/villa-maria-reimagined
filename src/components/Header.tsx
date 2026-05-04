import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoNoir from "@/assets/logo/logo-noir.png";
import logoBlanc from "@/assets/logo/logo-blanc.png";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

interface HeaderProps {
  variant?: "light" | "dark";
}

export const Header = ({ variant = "light" }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isOverlay = variant === "dark" && !scrolled;
  const textClass = isOverlay ? "text-villa-cream" : "text-villa-noir";

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-300",
        scrolled ? "bg-villa-cream/95 backdrop-blur-md border-b border-border" : "bg-transparent",
        variant === "light" && "bg-villa-cream border-b border-border"
      )}
    >
      <div className="container-villa flex items-center justify-between h-20">
        <Link to="/" aria-label="Villa Maria — accueil" className="flex items-center">
          <img
            src={isOverlay ? logoBlanc : logoNoir}
            alt="Villa Maria"
            className="h-8 md:h-10 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-sm font-semibold uppercase tracking-wider transition-colors",
                  textClass,
                  "hover:text-accent",
                  isActive && "text-accent"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={SITE.tydeck}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-accent text-accent-foreground text-sm font-bold uppercase tracking-wider hover:bg-villa-terracotta-deep transition-colors"
          >
            Réserver
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className={cn("lg:hidden p-2", textClass)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-villa-cream border-t border-border">
          <nav className="container-villa py-6 flex flex-col gap-4">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "text-lg font-bold uppercase tracking-wider py-2 text-villa-noir",
                    isActive && "text-accent"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={SITE.tydeck}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center px-5 py-3 bg-accent text-accent-foreground font-bold uppercase tracking-wider"
            >
              Réserver
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
