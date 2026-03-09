const toggle = document.querySelector(".nav-toggle");
const mobileNav = document.getElementById("mobileNav");

if (toggle && mobileNav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.classList.toggle("is-open");
    mobileNav.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Smooth scroll ONLY for on-page hash links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");

    if (!href || href === "#") return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();

    const header = document.querySelector(".site-header");
    const banner = document.querySelector(".lime-banner");

    const headerHeight = header ? header.offsetHeight : 0;
    const bannerHeight = banner ? banner.offsetHeight : 0;
    const extraOffset = 16;

    const y =
      target.getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight -
      bannerHeight -
      extraOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    if (mobileNav && toggle) {
      mobileNav.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
});

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
