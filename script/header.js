export function initHeaderMenu() {
  const overlay = document.querySelector(".menu-overlay");
  const hamburgers = document.querySelectorAll(".hamburger");
  const menuLinks = document.querySelectorAll(".menu-mobile a");

  if (!overlay || hamburgers.length === 0) return;

  function openMenu() {
    overlay.classList.add("active");
    document.body.classList.add("menu-open");
    hamburgers.forEach((btn) => btn.classList.add("active"));
  }

  function closeMenu() {
    overlay.classList.remove("active");
    document.body.classList.remove("menu-open");
    hamburgers.forEach((btn) => btn.classList.remove("active"));
  }

  function toggleMenu() {
    overlay.classList.contains("active") ? closeMenu() : openMenu();
  }

  hamburgers.forEach((btn) => {
    btn.addEventListener("click", toggleMenu);
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("active")) {
      closeMenu();
    }
  });
}
