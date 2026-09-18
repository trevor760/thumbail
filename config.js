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
    category: "buisness",
    size: "tall", // "normal" | "wide" | "tall" — règle la taille dans la grille
  },
  {
    file: "PSDPRESTIGEONCLPICKV.png",
    title: "J'ai prestige 3 tous les brawlers",
    category: "gaming",
    size: "tall",
  },
  {
    file: "youyou.png",
    title: "brawl stars",
    category: "Gaming",
    size: "tall",
  },
  {
    file: "btaflunchv6.png",
    title: "Batflunch",
    category: "challenge",
    size: "tall",
  },
  {
    file: "macatia.png",
    title: "macatia",
    category: "challenge",
    size: "tall",
  },
];

// ---- 2. EXEMPLES AVANT / APRÈS ------------------------------
const BEFORE_AFTER_ITEMS = [
  {
    before: "PSDPRESTIGE.png",
    after: "PSDPRESTIGEONCLPICKV.png",
    label: "Gaming",
  },
  {
    before: "boofhinoim.png",
    after: "boofhinoi.png",
    label: "food",
  },
];

// ---- 3. TÉMOIGNAGES (placeholders à remplacer) --------------
const TESTIMONIALS = [
  {
    quote:
      "Rendu porpre et Pro.",
    name: "You",
    channel: "Youdelacad",
  },
  {
    quote:
      "Rapide et efficace.",
    name: "Batflunch",
    channel: "Batflunch",
  },
  {
    quote:
      "A l'écoute et rapide",
    name: "Oncle Pick",
    channel: "Oncle Pick",
  },
];

// Rendu accessible aux autres scripts
window.SITE_CONFIG = { PORTFOLIO_ITEMS, BEFORE_AFTER_ITEMS, TESTIMONIALS };
