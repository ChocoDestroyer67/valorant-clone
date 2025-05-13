// Animaciones al hacer scroll
document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(".animado");

  const mostrarElemento = (elemento) => {
    const rect = elemento.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      elemento.classList.add("visible");
    }
  };

  const revisarScroll = () => {
    elementos.forEach((el) => {
      if (!el.classList.contains("visible")) {
        mostrarElemento(el);
      }
    });
  };

  window.addEventListener("scroll", revisarScroll);
  revisarScroll(); // Llamada inicial
});

// Efecto hover suave para botones
const botones = document.querySelectorAll(".btn");
botones.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
    btn.style.transition = "transform 0.3s ease";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});
