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
    file: "yomiplage.png",
    title: "yomi denzel",
    category: "lifestyle",
    size: "tall", // "normal" | "wide" | "tall" — règle la taille dans la grille
  },
  {
    file: "PSDPRESTIGEONCLPICKV.png",
    title: "J'ai prestige 3 tous les brawlers",
    category: "gaming",
    size: "wide",
  },
  {
    file: "youyou.png",
    title: "brawl stars",
    category: "Gaming",
    size: "normal",
  },
  {
    file: "btaflunchv6.png",
    title: "Batflunch",
    category: "prank",
    size: "normal",
  },
  {
    file: "macatia.png",
    title: "macatia",
    category: "food",
    size: "wide",
  },
];

// ---- 2. EXEMPLES AVANT / APRÈS ------------------------------
const BEFORE_AFTER_ITEMS = [
  {
    before: "PSDPRESTIGE.png",
    after: "PSDPRESTIGEONCLPICKV",
    label: "Gaming",
  },
  {
    before: "oncle.jpg",
    after: "oncle2.jpg",
    label: "gaming",
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
