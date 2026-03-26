const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const navEl = menuBtn.closest("nav");

menuBtn.addEventListener("click", (e) => {
  const isOpen = navLinks.classList.contains("open");

  if (!isOpen) {
    navLinks.style.display = "flex";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        navLinks.classList.add("open");
      });
    });
  } else {
    navLinks.classList.remove("open");
    setTimeout(() => {
      navLinks.style.display = "none";
    }, 300);
  }

  menuBtnIcon.setAttribute("class", !isOpen ? "ri-close-line" : "ri-menu-line");
  navEl.classList.toggle("menu-open", !isOpen);
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
  navEl.classList.remove("menu-open");
  setTimeout(() => {
    navLinks.style.display = "none";
  }, 300);
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".about__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
});
ScrollReveal().reveal(".about__container img", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".service__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".service__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".service__card", {
  duration: 1000,
  delay: 1000,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

ScrollReveal().reveal(".blog__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".blog__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".blog__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".blog__content .blog__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

// Portfolio modal
const portfolioImages = {
  engagement: [
    { src: "images/engage1.jpg", alt: "Engagement" },
    { src: "images/engage2.jpg", alt: "Engagement" },
    { src: "images/engage3.jpg", alt: "Engagement" },
    { src: "images/engage4.jpg", alt: "Engagement" },
    { src: "images/engage5.jpg", alt: "Engagement" },
    { src: "images/engage6.jpg", alt: "Engagement" },
  ],
  family: [
    { src: "images/family1.jpg", alt: "Family" },
    { src: "images/family2.jpg", alt: "Family" },
    { src: "images/family3.jpg", alt: "Family" },
    { src: "images/family4.jpg", alt: "Family" },
    { src: "images/family5.jpg", alt: "Family" },
    { src: "images/family6.jpg", alt: "Family" },
  ],
  maternity: [
    { src: "images/maternity1.jpg", alt: "Maternity" },
    { src: "images/maternity2.jpg", alt: "Maternity" },
    { src: "images/maternity3.jpg", alt: "Maternity" },
    { src: "images/maternity4.jpg", alt: "Maternity" },
    { src: "images/maternity5.jpg", alt: "Maternity" },
    { src: "images/maternity6.jpg", alt: "Maternity" },
  ],
};

const modal      = document.getElementById("portfolioModal");
const modalTitle = document.getElementById("modalTitle");
const modalGrid  = document.getElementById("modalGrid");
const modalClose = document.getElementById("modalClose");

function openModal(category, label) {
  modalTitle.textContent = label;
  modalGrid.innerHTML = "";
  portfolioImages[category].forEach(({ src, alt }) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    modalGrid.appendChild(img);
  });
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

document.querySelectorAll(".portfolio__toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");
    const label  = btn.closest(".portfolio__card").querySelector(".portfolio__label").textContent;
    openModal(target, label);
  });
});

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

const instagram = document.querySelector(".instagram__flex");

// Duplicate items for seamless loop on row 1
Array.from(instagram.children).forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  instagram.appendChild(duplicateNode);
});

// Create a second reverse row using the same images
const instagram2 = instagram.cloneNode(true);
instagram2.classList.add("reverse");
instagram2.removeAttribute("id");
instagram.parentElement.appendChild(instagram2);

// Hide hero logo when scrolled away from the hero section (mobile only)
const heroLogo = document.querySelector(".hero__logo");

function updateHeroLogoVisibility() {
  // Hide once the user scrolls down even a little — the nav is fixed so
  // the logo would otherwise float over every section below the hero.
  if (window.scrollY > 10) {
    heroLogo.classList.add("hero__logo--hidden");
  } else {
    heroLogo.classList.remove("hero__logo--hidden");
  }
}

window.addEventListener("scroll", updateHeroLogoVisibility, { passive: true });
updateHeroLogoVisibility();