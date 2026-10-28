
document.addEventListener("DOMContentLoaded", function () {
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const menuButton = document.getElementById("menuButton");
  const nav = document.getElementById("nav");

  function closeMenu() {
    if (nav) nav.classList.remove("open");

    if (menuButton) {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menú");
    }
  }

  if (menuButton && nav) {
    menuButton.setAttribute("aria-expanded", "false");

    menuButton.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("open");

      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute(
        "aria-label",
        isOpen ? "Cerrar menú" : "Abrir menú"
      );
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });
  }

  const whatsappLink = document.getElementById("whatsappLink");
  const contactHint = document.getElementById("contactHint");

  if (whatsappLink) {
    const message =
      "Hola, Gráficos Salva. Quiero consultar un diseño gráfico.";

    whatsappLink.href =
      "https://wa.me/240222449566?text=" +
      encodeURIComponent(message);

    whatsappLink.target = "_blank";
    whatsappLink.rel = "noopener noreferrer";
  }

  if (contactHint) {
    contactHint.textContent =
      "Pulsa el botón para consultar tu proyecto por WhatsApp.";
  }
});
  
