// ===== Smooth Scroll to Contact Section =====
function scrollToContact() {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
}

// ===== Scroll-to-Top Button & Active Nav Link =====
window.onscroll = function () {
  const topBtn = document.getElementById("topBtn");

  // Show or hide scroll-to-top button
  if (topBtn) {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
  }

  // Highlight nav links on scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".main-nav a");
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
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

// ===== Responsive Mobile Navigation Toggle =====
const hamburger = document.getElementById("hamburger");
const mainNav = document.querySelector(".main-nav");

if (hamburger && mainNav) {
  // Toggle menu visibility
  hamburger.addEventListener("click", () => {
    mainNav.classList.toggle("show");
    hamburger.classList.toggle("open");
  });

  // Close menu when any nav link is clicked
  const navLinks = mainNav.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("show");
      hamburger.classList.remove("open");
    });
  });
}

// ===== Optional: Animate Hamburger Icon into an X =====
const style = document.createElement("style");
style.innerHTML = `
  .hamburger.open::before,
  .hamburger.open::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 2px;
    background-color: #0c4a6e;
    left: 5px;
  }
  .hamburger.open::before {
    transform: rotate(45deg) translateY(5px);
  }
  .hamburger.open::after {
    transform: rotate(-45deg) translateY(-5px);
  }
  .hamburger.open {
    color: transparent;
    position: relative;
  }
`;
document.head.appendChild(style);
