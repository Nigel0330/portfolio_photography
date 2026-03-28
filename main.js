const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const navEl = menuBtn.closest("nav");

function closeMenu() {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
  navEl.classList.remove("menu-open");
}

function openMenu() {
  navLinks.classList.add("open");
  menuBtnIcon.setAttribute("class", "ri-close-line");
  navEl.classList.add("menu-open");
}

menuBtn.addEventListener("click", () => {
  if (navLinks.classList.contains("open")) {
    closeMenu();
  } else {
    openMenu();
  }
});

navLinks.addEventListener("click", (e) => {
  const anchor = e.target.closest("a");
  if (!anchor) return;
  if (anchor.closest(".nav__logo")) return;
  closeMenu();
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    closeMenu();
  }
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
  portfolioImages[category].forEach(({ src, alt }, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => openLightbox(category, index));
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

// Simple image viewer — click any instagram photo to view it full size
const igViewer = document.getElementById("igViewer");
const igViewerImg = document.getElementById("igViewerImg");

document.querySelector(".instagram__container").addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    igViewerImg.src = e.target.src;
    igViewerImg.alt = e.target.alt;
    igViewer.classList.add("open");
    document.body.style.overflow = "hidden";
  }
});

igViewer.addEventListener("click", () => {
  igViewer.classList.remove("open");
  document.body.style.overflow = "";
});

// Contact Modal (Google icon)
const googleContactBtn = document.getElementById("googleContactBtn");
const contactModal = document.getElementById("contactModal");
const contactModalClose = document.getElementById("contactModalClose");
const contactForm = document.getElementById("contactForm");
const contactSuccess = document.getElementById("contactSuccess");

function openContactModal() {
  contactModal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeContactModal() {
  contactModal.classList.remove("open");
  document.body.style.overflow = "";
}

googleContactBtn.addEventListener("click", openContactModal);

const footerContactBtn = document.getElementById("footerContactBtn");
footerContactBtn.addEventListener("click", openContactModal);
contactModalClose.addEventListener("click", closeContactModal);
contactModal.addEventListener("click", (e) => {
  if (e.target === contactModal) closeContactModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeContactModal();
});

// EmailJS init
emailjs.init("UR-MeEwNKdRYIVCCp");

const contactSubmitBtn = contactForm.querySelector(".contact__form__submit");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email   = document.getElementById("contactEmail").value.trim();
  const message = document.getElementById("contactMessage").value.trim();

  if (!email) return;

  contactSubmitBtn.disabled = true;
  contactSubmitBtn.textContent = "Sending...";

  const templateParams = {
    email:   email,
    message: message || "(no message provided)",
    title:   "New Inquiry",
  };

  emailjs.send("service_79d4d2e", "template_ww551y7", templateParams)
    .then(() => {
      contactSuccess.classList.add("visible");
      contactForm.reset();
      setTimeout(() => {
        contactSuccess.classList.remove("visible");
        closeContactModal();
      }, 2500);
    })
    .catch((err) => {
      console.error("EmailJS error:", err);
      alert("Something went wrong. Please try again or email us directly.");
    })
    .finally(() => {
      contactSubmitBtn.disabled = false;
      contactSubmitBtn.textContent = "Send";
    });
});

// Lightbox
const lightbox      = document.getElementById("lightbox");
const lightboxImg   = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev  = document.getElementById("lightboxPrev");
const lightboxNext  = document.getElementById("lightboxNext");
const lightboxCounter = document.getElementById("lightboxCounter");

let lightboxImages  = [];
let lightboxIndex   = 0;

function openLightbox(category, index) {
  lightboxImages = portfolioImages[category];
  lightboxIndex  = index;
  lightbox.classList.add("open");
  updateLightbox();
}

function closeLightbox() {
  lightbox.classList.remove("open");
}

function updateLightbox() {
  lightboxImg.classList.add("fade");
  setTimeout(() => {
    lightboxImg.src = lightboxImages[lightboxIndex].src;
    lightboxImg.alt = lightboxImages[lightboxIndex].alt;
    lightboxImg.classList.remove("fade");
  }, 220);
  lightboxCounter.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
}

function lightboxGoNext() {
  lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
  updateLightbox();
}

function lightboxGoPrev() {
  lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
  updateLightbox();
}

lightboxClose.addEventListener("click", closeLightbox);
lightboxNext.addEventListener("click", lightboxGoNext);
lightboxPrev.addEventListener("click", lightboxGoPrev);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "ArrowRight") lightboxGoNext();
  if (e.key === "ArrowLeft")  lightboxGoPrev();
  if (e.key === "Escape")     closeLightbox();
});