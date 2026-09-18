/**
 * PREMIER CLIC — script.js
 * Toute la logique du site. Les données affichées (miniatures,
 * avant/après, témoignages) viennent de config.js — voir ce fichier
 * pour ajouter du contenu sans toucher au reste du code.
 */
(function () {
  "use strict";

  const CONFIG = window.SITE_CONFIG || { PORTFOLIO_ITEMS: [], BEFORE_AFTER_ITEMS: [], TESTIMONIALS: [] };

  document.getElementById("year").textContent = new Date().getFullYear();

  /* ------------------------------------------------------------ NAV ---- */
  const nav = document.getElementById("nav");
  const navBurger = document.getElementById("navBurger");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("is-scrolled", window.scrollY > 20);
  });

  navBurger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navBurger.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".nav__links a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("is-open"));
  });

  /* ------------------------------------------------------- PORTFOLIO --- */
  const portfolioGrid = document.getElementById("portfolioGrid");
  const portfolioEmpty = document.getElementById("portfolioEmpty");
  const filterButtons = document.querySelectorAll("#portfolioFilters .chip");

  function renderPortfolio() {
    portfolioGrid.querySelectorAll(".portfolio__item").forEach((el) => el.remove());

    CONFIG.PORTFOLIO_ITEMS.forEach((item, index) => {
      const el = document.createElement("div");
      el.className = "portfolio__item reveal is-visible";
      el.dataset.category = item.category;
      el.dataset.size = item.size || "normal";
      el.setAttribute("tabindex", "0");
      el.setAttribute("role", "button");
      el.setAttribute("aria-label", "Voir la miniature : " + item.title);

      el.innerHTML =
        '<img src="images/thumbnails/' + item.file + '" alt="' + item.title + '" loading="lazy" />' +
        '<div class="portfolio__overlay">' +
        '<span class="portfolio__cat">' + labelForCategory(item.category) + "</span>" +
        '<span class="portfolio__item-title">' + item.title + "</span>" +
        "</div>";

      const open = () => openLightbox("images/thumbnails/" + item.file, item.title);
      el.addEventListener("click", open);
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      });

      portfolioGrid.appendChild(el);
    });

    applyFilter(currentFilter);
  }

  function labelForCategory(cat) {
    const map = {
      gaming: "Gaming",
      business: "Business",
      challenge: "Challenge",
      storytelling: "Storytelling",
      autres: "Autres",
    };
    return map[cat] || cat;
  }

  let currentFilter = "all";

  function applyFilter(filter) {
    currentFilter = filter;
    let visibleCount = 0;
    portfolioGrid.querySelectorAll(".portfolio__item").forEach((el) => {
      const show = filter === "all" || el.dataset.category === filter;
      el.style.display = show ? "" : "none";
      if (show) visibleCount++;
    });
    portfolioEmpty.style.display = visibleCount === 0 ? "block" : "none";
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      applyFilter(btn.dataset.filter);
    });
  });

  /* --------------------------------------------------------- LIGHTBOX -- */
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxClose = document.getElementById("lightboxClose");

  function openLightbox(src, caption) {
    lightboxImg.src = src;
    lightboxImg.alt = caption;
    lightboxCaption.textContent = caption;
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.querySelectorAll("[data-close]").forEach((el) => el.addEventListener("click", closeLightbox));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  /* ------------------------------------------------------ AVANT/APRÈS -- */
  const compareGrid = document.getElementById("compareGrid");

  function renderCompare() {
    CONFIG.BEFORE_AFTER_ITEMS.forEach((item) => {
      const wrap = document.createElement("div");
      wrap.className = "compare__item reveal";
      wrap.innerHTML =
        '<div class="compare__frame">' +
        '<span class="compare__tag compare__tag--before">Avant</span>' +
        '<span class="compare__tag compare__tag--after">Après</span>' +
        '<img class="before-img" src="images/before-after/' + item.before + '" alt="Avant retouche" />' +
        '<img class="after-img" src="images/before-after/' + item.after + '" alt="Après retouche" />' +
        '<div class="compare__handle"></div>' +
        "</div>" +
        '<div class="compare__caption">' + item.label + "</div>";

      compareGrid.appendChild(wrap);
      initCompareDrag(wrap.querySelector(".compare__frame"));
    });
  }

  function initCompareDrag(frame) {
    const afterImg = frame.querySelector(".after-img");
    const handle = frame.querySelector(".compare__handle");
    let dragging = false;

    function setPosition(clientX) {
      const rect = frame.getBoundingClientRect();
      let x = ((clientX - rect.left) / rect.width) * 100;
      x = Math.max(0, Math.min(100, x));
      afterImg.style.clipPath = "inset(0 0 0 " + x + "%)";
      handle.style.left = x + "%";
    }

    frame.addEventListener("pointerdown", (e) => {
      dragging = true;
      frame.setPointerCapture(e.pointerId);
      setPosition(e.clientX);
    });
    frame.addEventListener("pointermove", (e) => {
      if (dragging) setPosition(e.clientX);
    });
    ["pointerup", "pointercancel", "pointerleave"].forEach((evt) =>
      frame.addEventListener(evt, () => (dragging = false))
    );
  }

  /* -------------------------------------------------------- TÉMOIGNAGES */
  const testimonialsTrack = document.getElementById("testimonialsTrack");

  function renderTestimonials() {
    CONFIG.TESTIMONIALS.forEach((t) => {
      const card = document.createElement("div");
      card.className = "card testimonial-card reveal";
      const initials = t.name
        .split(" ")
        .map((w) => w[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

      card.innerHTML =
        '<span class="testimonial-card__tag">Exemple — à remplacer</span>' +
        '<div class="testimonial-card__mark">”</div>' +
        '<p class="testimonial-card__quote">' + t.quote + "</p>" +
        '<div class="testimonial-card__author">' +
        '<div class="testimonial-card__avatar">' + initials + "</div>" +
        "<div><strong>" + t.name + "</strong><span>" + t.channel + "</span></div>" +
        "</div>";

      testimonialsTrack.appendChild(card);
    });
  }

  /* ------------------------------------------------------- REVEAL/SCROLL */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    items.forEach((el) => observer.observe(el));
  }

  /* ------------------------------------------------------------- FORM -- */
  const contactForm = document.getElementById("contactForm");
  const formSuccess = document.getElementById("formSuccess");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Aucun backend : ce bloc affiche une confirmation locale.
    // Pour un envoi réel, connectez ce formulaire à un service comme
    // Formspree ou EmailJS (voir le README.md).
    formSuccess.classList.add("is-visible");
    contactForm.querySelectorAll("input, textarea, select").forEach((f) => {
      if (f.type !== "submit") f.value = "";
    });
  });

  /* ------------------------------------------------------------- INIT -- */
  renderPortfolio();
  renderCompare();
  renderTestimonials();
  initReveal();
})();
