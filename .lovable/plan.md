# Refonte du site Villa Maria

Refonte complète du site selon le plan d'action fourni, en conservant la direction artistique actuelle (typo XXL bold, accent rose/terracotta, photos pleine puissance) et en récupérant directement les assets du site Webflow existant (logo, photos villa, photos événements, icônes services).

## Direction artistique conservée

- **Logo** : récupéré du site actuel (versions noir + blanc)
- **Typo titres** : sans-serif condensée bold en très grand format ("AWESOME COWORKING" XXL)
- **Couleur d'accent** : rose/terracotta des CTA actuels
- **Photos** : récupération de toute la bibliothèque visible (façade, escalier, piscine, jardin, salles, événements GardenParty, portraits associés)
- **Icônes services** : récupération des pictos actuels (poste, piscine, crèche, salle réunion, boulodrome, yoga, fibre, douches, bulles)

## Structure du site (6 pages)

```
/                    Accueil
/offres              Hub des 4 offres
  /offres/journee    Pass journalier
  /offres/mensuel    Abonnement mensuel
  /offres/prive      Bureau privatif
  /offres/salles     Salles de réunion
/evenements          Événements & privatisation
/la-villa            Visite de la villa par espace
/histoire            Histoire & équipe fondatrice
/blog                Index blog (3 articles seed)
  /blog/[slug]       Article
```

## Page par page

### Accueil `/`

- **Hero** : titre choc "Le plus beau bureau de France." + sous-titre, image de fond façade/piscine (placeholder vidéo prêt à brancher), 4 CTA distincts (Journée · Mensuel · Privé · Événement)
- **Bloc chiffres** : 1 200 m² · 5 salles · +50 coworkers · 4,9/5 (chiffres marqués `[à confirmer]`)
- **4 cartes tarifs** visibles immédiatement avec prix ou "à partir de" + CTA propre
- **Galerie éditoriale** 5 photos en grille fixe (piscine, escalier, salle lumineuse, jardin, terrasse)
- **Services inclus** : grille des 9 pictos actuels (poste, piscine, crèche, salles, boulodrome, yoga, fibre, douches, bulles)
- **Témoignages** : 3 cartes avec avatar/prénom/entreprise (placeholders marqués `[à collecter]`)
- **Logos clients** : bande grise de placeholders `[logo client]`
- **Carte + infos pratiques** : Google Maps embed, parking, tram/bus, horaires, contact

### Hub Offres `/offres`

Grille des 4 offres avec photo, prix, public cible, lien vers la sous-page dédiée.

### Sous-pages offres (4)

Structure commune : hero photo + prix affiché + ce qui est inclus + idéal pour + CTA dédié.

- **Journée** → bouton vers Tydeck (URL existante conservée)
- **Mensuel (375€ HT/poste)** → formulaire Tally "Demander une visite"
- **Privatif** → formulaire Tally "Demander un devis bureau"
- **Salles** → formulaire Tally "Réserver une salle"

> Les URLs Tally sont à fournir au fur et à mesure (placeholders en attendant, l'URL Tally actuelle `KY6vyX` est branchée par défaut).

### Événements `/evenements`

- Hero dédié (photo GardenParty pleine largeur)
- Bloc capacité intérieur/extérieur (placeholders `[à confirmer]`)
- 4 blocs types : Baptême/Mariage · Afterwork/Team building · Séminaire · Petit-déj/Networking
- Galerie événements dédiée (photos GardenParty récupérées)
- Fourchettes de prix indicatives + formulaire Tally devis événement
- Témoignages événementiels séparés

### La Villa `/la-villa`

Page expérience par espaces : Entrée & escalier · Salles de travail · Extérieur/Piscine · Boulodrome · Salles de réunion · Espace détente. Chaque espace = photo grand format + légende (surface, ambiance, usage). Bloc "visite virtuelle" prêt à recevoir un embed Matterport plus tard.

### Histoire `/histoire`

- Storytelling court du projet (placeholder éditable)
- Mention du partenariat crèche Le Kocon
- Grille des fondateurs avec emplacements pour portraits individuels (en attendant : extraits de la photo de groupe actuelle marqués `[portrait pro à venir]`)
- Bloc valeurs/engagements optionnel

### Blog `/blog`

- Index avec cartes d'articles, filtres par famille (Intention d'achat · Différenciation · Lifestyle · Guides)
- 3 articles seed rédigés en MDX/markdown placeholder avec structure GEO (réponse directe en intro, fiche récap en fin) :
  1. Plus beaux lieux pour un baptême à Bordeaux
  2. Coworking avec piscine en France
  3. Organiser un afterwork d'entreprise à Bordeaux
- Les 9 autres titres listés dans le plan apparaissent en "à venir"

## Composants partagés

- **Header** : logo Villa Maria + nav (Accueil · Offres · Événements · La Villa · Histoire · Blog) + CTA "Réserver" rose. Burger mobile.
- **Footer** : adresse, contact, horaires, mini sitemap, mentions légales, lien crèche Le Kocon
- **Carte tarif** réutilisable (prix, inclus, cible, CTA)
- **Bloc témoignage** réutilisable
- **Bandeau CTA** de bas de page (Visiter la Villa)

## Réservations & formulaires

- **Pass journalier** : bouton externe vers Tydeck (URL actuelle conservée)
- **Tous les autres CTA** : ouvrent un formulaire Tally en modale ou redirigent. URL Tally actuelle `https://tally.so/r/KY6vyX` utilisée par défaut comme fallback ; les nouveaux formulaires Tally remplaceront chaque URL au fur et à mesure que vous les créerez (un placeholder clair par formulaire).

## SEO technique (livré dès la v1)

- URLs propres (`/offres/pass-journalier` etc.)
- `<title>` et `<meta description>` uniques par page, ciblant les mots-clés du plan
- Données structurées Schema.org `LocalBusiness` sur l'accueil et `Event` sur la page événements
- Open Graph + Twitter Card avec image hero
- `sitemap.xml` et `robots.txt`
- Balises sémantiques (h1 unique par page, h2/h3 hiérarchisés)

## Détails techniques

- React + Vite + Tailwind, design tokens HSL dans `index.css` (palette neutre crème/noir + accent rose terracotta extrait du site actuel)
- React Router pour les 9 routes
- Polices Google Fonts proches de l'existant (sans-serif condensée bold pour titres)
- Assets téléchargés depuis le CDN Webflow vers `src/assets/` puis importés en ES modules (optimisation Vite)
- Articles de blog en MDX/TS dans `src/content/blog/`
- Aucun backend nécessaire (Tydeck + Tally externes)
- Responsive mobile-first, viewport jusqu'à 1440px

## Ce qui reste à fournir après le build

Marqué clairement dans l'UI avec des balises `[à compléter]` :

- Vidéo hero drone + intérieur
- Chiffres réels (m², coworkers, note Google)
- Avis clients + portraits coworkers
- Logos clients avec accord
- Capacités exactes événements
- Photos shooting pro (espaces, événements, portraits fondateurs)
- URLs Tally définitives par formulaire
- Texte "histoire" final
