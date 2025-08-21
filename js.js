// ===== Smooth scroll to Contact section =====
function scrollToContact() {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
}

// ===== Scroll-to-top button toggle & nav highlight =====
window.onscroll = function () {
  const topBtn = document.getElementById("topBtn");
  if (topBtn) {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
  }

  // ===== Highlight nav links on scroll =====
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
};

// ===== Scroll to Top Function =====
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===== Mobile Nav Toggle =====
const hamburger = document.getElementById("hamburger");
const mainNav = document.querySelector("header nav");

if (hamburger && mainNav) {
  hamburger.addEventListener("click", () => {
    mainNav.classList.toggle("active");
    hamburger.classList.toggle("open"); // optional if animating into X
  });

  // Close menu when a nav link is clicked
  const navLinks = mainNav.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("active");
      hamburger.classList.remove("open"); // reset hamburger state
    });
  });
}

