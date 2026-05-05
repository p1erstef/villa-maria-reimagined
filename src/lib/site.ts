// Single source of truth for external URLs and contact info.
// Update these as new Tally forms are created.

export const SITE = {
  name: "Villa Maria",
  baseUrl: "https://www.villamariabordeaux.fr",
  tagline: "Le plus beau bureau de France.",
  address: {
    street: "31 avenue de Mirande",
    city: "Bordeaux",
    postal: "33200",
    country: "France",
  },
  contact: {
    email: "contact@villamariabordeaux.fr",
    phone: "[téléphone à confirmer]",
  },
  hours: "Lun–Ven · 8h–20h",
  // External booking & forms
  tydeck:
    "https://app.tydeck.io/marketplace/c-95c6c2778a90ad90852db11ac8d5713d",
  tally: {
    fallback: "https://tally.so/r/KY6vyX",
    visiteMensuel: "https://tally.so/r/KY6vyX", // [à remplacer]
    devisPrivatif: "https://tally.so/r/KY6vyX", // [à remplacer]
    reservationSalle: "https://tally.so/r/KY6vyX", // [à remplacer]
    devisEvenement: "https://tally.so/r/Me8qN8",
    contact: "https://tally.so/r/KY6vyX",
  },
  social: {
    instagram: "#",
    linkedin: "#",
  },
  partners: {
    creche:
      "https://motherworkcommunity.com/index.php/la-creche-les-petits-preneurs/",
  },
};

export const NAV = [
  { label: "Accueil", to: "/" },
  { label: "Offres", to: "/offres" },
  { label: "Événements", to: "/evenements" },
  { label: "La Villa", to: "/la-villa" },
  { label: "Histoire", to: "/histoire" },
  { label: "Blog", to: "/blog" },
];
