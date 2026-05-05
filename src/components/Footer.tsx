import { Link } from "react-router-dom";
import logoBlanc from "@/assets/logo/logo-blanc.png";
import { NAV, SITE } from "@/lib/site";

export const Footer = () => {
  return (
    <footer className="bg-villa-noir text-villa-cream">
      <div className="container-villa py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logoBlanc} alt="Villa Maria" className="h-12 w-auto mb-6" />
          <p className="font-serif italic text-2xl leading-tight max-w-md">
            {SITE.tagline}
          </p>
          <p className="mt-4 text-sm text-villa-cream/70 max-w-md">
            Espace de coworking premium et lieu d'événements dans une villa
            Belle Époque à Bordeaux.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest mb-5 text-villa-cream/60">
            Navigation
          </h3>
          <ul className="space-y-3">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm hover:text-accent transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest mb-5 text-villa-cream/60">
            Contact
          </h3>
          <address className="not-italic text-sm space-y-3 text-villa-cream/85">
            <div>
              {SITE.address.street}<br />
              {SITE.address.postal} {SITE.address.city}
            </div>
            <div>
              <a href={`mailto:${SITE.contact.email}`} className="hover:text-accent">
                {SITE.contact.email}
              </a>
            </div>
            <div>{SITE.contact.phone}</div>
            <div>{SITE.hours}</div>
            <div className="pt-3">
              <a
                href={SITE.partners.creche}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-wider underline hover:text-accent"
              >
                Crèche Le Kocon →
              </a>
            </div>
          </address>
        </div>
      </div>

      <div className="border-t border-villa-cream/10">
        <div className="container-villa py-6 flex flex-col md:flex-row gap-3 justify-between text-xs text-villa-cream/60">
          <span>© {new Date().getFullYear()} Villa Maria — Tous droits réservés</span>
          <div className="flex gap-6">
            <Link to="/mentions-legales" className="hover:text-accent">Mentions légales</Link>
            <Link to="/confidentialite" className="hover:text-accent">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
