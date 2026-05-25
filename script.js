// ===========================
// MENÚ HAMBURGUESA (MÓVIL)
// ===========================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMobile() {
  mobileMenu.classList.remove('open');
}

// ===========================
// SCROLL SUAVE A SECCIÓN
// ===========================
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

// ===========================
// FAQ DESPLEGABLE
// ===========================
function toggleFaq(btn) {
  const item = btn.parentElement;
  const isOpen = item.classList.contains('open');

  // Cerrar todos
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

  // Abrir el clickeado si estaba cerrado
  if (!isOpen) {
    item.classList.add('open');
  }
}

// ===========================
// FORMULARIO DE CONTACTO
// ===========================
function submitForm(e) {
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  msg.textContent = '✅ ¡Mensaje enviado! Te contactaremos pronto.';
  e.target.reset();
  setTimeout(() => { msg.textContent = ''; }, 5000);
}

// ===========================
// ANIMACIÓN AL HACER SCROLL
// ===========================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.product-card, .faq-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(28px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// ===========================
// NAVBAR: CAMBIO AL SCROLL
// ===========================
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 40) {
    navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.22)';
  } else {
    navbar.style.boxShadow = '0 2px 12px rgba(0,0,0,0.18)';
  }
});
