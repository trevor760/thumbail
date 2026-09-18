/**
 * ============================================================
 *  CONFIGURATION DU SITE — PREMIER CLIC
 * ============================================================
 * Ce fichier est le SEUL endroit à modifier pour :
 *   - ajouter / retirer une miniature du portfolio
 *   - changer les catégories de filtres
 *   - modifier les témoignages
 *
 * Aucune autre modification de fichier n'est nécessaire.
 * Voir le README.md pour la marche à suivre complète.
 * ============================================================
 */

// ---- 1. MINIATURES DU PORTFOLIO -----------------------------
// Pour ajouter une miniature :
//   1) Dépose l'image dans /images/thumbnails/ (ex: thumbnail-07.jpg)
//   2) Ajoute une ligne ci-dessous avec le même nom de fichier
// Catégories disponibles : "gaming", "business", "challenge",
// "storytelling", "autres"
const PORTFOLIO_ITEMS = [
  {
    file: "thumbnail-01.jpg",
    title: "J'ai survécu 100 jours",
    category: "gaming",
    size: "tall", // "normal" | "wide" | "tall" — règle la taille dans la grille
  },
  {
    file: "thumbnail-02.jpg",
    title: "Comment j'ai géré 10 000 € / mois",
    category: "business",
    size: "wide",
  },
  {
    file: "thumbnail-03.jpg",
    title: "Dernier à lâcher gagne 5 000 €",
    category: "challenge",
    size: "normal",
  },
  {
    file: "thumbnail-04.jpg",
    title: "Il a tout perdu en une nuit",
    category: "storytelling",
    size: "normal",
  },
  {
    file: "thumbnail-05.jpg",
    title: "Ce boss est impossible",
    category: "gaming",
    size: "normal",
  },
  {
    file: "thumbnail-06.jpg",
    title: "Ma routine du matin à 5h",
    category: "autres",
    size: "wide",
  },
];

// ---- 2. EXEMPLES AVANT / APRÈS ------------------------------
const BEFORE_AFTER_ITEMS = [
  {
    before: "before-1.jpg",
    after: "after-1.jpg",
    label: "Chaîne storytelling",
  },
  {
    before: "before-2.jpg",
    after: "after-2.jpg",
    label: "Chaîne vlog / gaming",
  },
];

// ---- 3. TÉMOIGNAGES (placeholders à remplacer) --------------
const TESTIMONIALS = [
  {
    quote:
      "Le taux de clic de mes vidéos a nettement augmenté depuis que je travaille avec cette équipe. Le rendu est toujours au niveau des plus grosses chaînes.",
    name: "Nom Prénom",
    channel: "Nom de la chaîne — Gaming",
  },
  {
    quote:
      "Livraison rapide, échanges simples, et des miniatures qui correspondent vraiment à l'identité de ma chaîne. Exactement ce qu'il me fallait.",
    name: "Nom Prénom",
    channel: "Nom de la chaîne — Business",
  },
  {
    quote:
      "J'ai testé plusieurs designers avant de tomber sur cette agence. La différence sur les performances de mes vidéos est claire.",
    name: "Nom Prénom",
    channel: "Nom de la chaîne — Storytelling",
  },
];

// Rendu accessible aux autres scripts
window.SITE_CONFIG = { PORTFOLIO_ITEMS, BEFORE_AFTER_ITEMS, TESTIMONIALS };
