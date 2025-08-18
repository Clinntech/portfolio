// ===== Smooth scroll to Contact section =====
function scrollToContact() {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
}

// ===== Scroll-to-top button toggle =====
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
