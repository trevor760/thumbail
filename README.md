# Premier Clic — site vitrine

Site statique (HTML / CSS / JS) pour une agence de création de miniatures YouTube, prêt à héberger gratuitement sur GitHub Pages.

## Arborescence

```
/index.html                        page unique du site
/style.css                         tous les styles
/script.js                         toute l'interactivité (menu, portfolio, lightbox, slider avant/après, formulaire)
/config.js                         LE SEUL fichier à modifier pour changer le contenu du portfolio, de l'avant/après et des témoignages
/README.md                         ce fichier
/images/logo.png                   logo de l'agence (placeholder)
/images/thumbnails/thumbnail-01.jpg … thumbnail-06.jpg   miniatures du portfolio (placeholders)
/images/before-after/before-1.jpg, after-1.jpg, before-2.jpg, after-2.jpg   exemples avant/après (placeholders)
```

## Ajouter une nouvelle miniature (le plus important)

Un site hébergé sur GitHub Pages n'a pas de serveur : il ne peut pas "regarder" tout seul ce qu'il y a dans un dossier. La méthode la plus simple sans backend est donc un petit fichier de configuration — `config.js` — que tu modifies à chaque ajout.

1. Dépose ton fichier image dans `/images/thumbnails/`, par exemple `thumbnail-07.jpg`.
2. Ouvre `config.js` et ajoute un bloc dans le tableau `PORTFOLIO_ITEMS` :

```js
{
  file: "thumbnail-07.jpg",
  title: "Titre de la vidéo",
  category: "gaming", // gaming | business | challenge | storytelling | autres
  size: "normal",     // normal | wide | tall — la place occupée dans la grille
},
```

3. Sauvegarde. C'est tout — le site affiche automatiquement la nouvelle miniature, avec les bons filtres et la bonne taille. Aucune autre ligne de code à toucher.

Le même principe s'applique aux exemples avant/après (tableau `BEFORE_AFTER_ITEMS`) et aux témoignages (tableau `TESTIMONIALS`), dans le même fichier `config.js`.

## Publier gratuitement sur GitHub Pages

1. Crée un nouveau dépôt sur GitHub (public), par exemple `premier-clic-site`.
2. Mets-y tous les fichiers de ce projet en respectant l'arborescence ci-dessus (le fichier `index.html` doit être à la racine du dépôt).
3. Sur GitHub : **Settings → Pages**.
4. Dans "Build and deployment", choisis **Source : Deploy from a branch**.
5. Choisis la branche `main` et le dossier `/root`, puis **Save**.
6. Après une à deux minutes, ton site est en ligne à l'adresse indiquée en haut de cette même page (généralement `https://ton-nom-utilisateur.github.io/premier-clic-site/`).

Chaque futur changement (nouvelle miniature, texte modifié) : tu modifies le fichier localement, tu le renvoies sur GitHub (commit + push), et le site se met à jour tout seul en une minute ou deux.

## Brancher le formulaire de contact

Le formulaire ne fait actuellement aucun envoi réel (GitHub Pages ne peut pas exécuter de backend) : à la soumission, il affiche juste un message de confirmation local et vide les champs. Pour recevoir vraiment les messages, deux options simples et gratuites, sans serveur à gérer :

- **Formspree** (formspree.io) : crée un formulaire sur leur site, puis remplace dans `index.html` l'attribut `id="contactForm"` par une balise `<form action="https://formspree.io/f/TON_ID" method="POST">` et adapte `script.js` en conséquence.
- **EmailJS** (emailjs.com) : permet d'envoyer l'e-mail directement depuis le JavaScript, sans backend, avec leur SDK.

## Ce qu'il faut remplacer avant de publier

- [ ] `images/logo.png` — remplacer par ton vrai logo (même nom de fichier, ou mets à jour les 2 occurrences dans `index.html`)
- [ ] Nom de l'agence "Premier Clic" — dans `index.html` (titre, footer) et `style.css` si besoin
- [ ] Les 6 miniatures de `/images/thumbnails/` — remplacer par tes propres réalisations (voir section ci-dessus)
- [ ] Les 4 images de `/images/before-after/` — remplacer par tes vrais exemples avant/après
- [ ] Les tarifs "XX €" dans `index.html` (section Tarifs) — trois occurrences
- [ ] Les témoignages dans `config.js` (`TESTIMONIALS`) — noms, chaînes et textes
- [ ] Les liens de réseaux sociaux (`#` dans le header, la section Contact et le footer) et l'adresse e-mail `contact@premierclic.fr`
- [ ] Les mentions légales dans le footer (actuellement un lien `#`)
- [ ] Le formulaire de contact — à connecter à Formspree ou EmailJS (voir ci-dessus)

## Compatibilité

Site testé responsive (mobile / tablette / desktop) et sans dépendance à un backend. Fonctionne sur les navigateurs modernes (Chrome, Edge, Firefox, Safari). Les animations respectent le paramètre système "réduire les animations" (`prefers-reduced-motion`).
