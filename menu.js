document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('hamburger-btn');
  const nav = document.getElementById('nav-principal');

  btn.addEventListener('click', function () {
    nav.classList.toggle('open');
  });

  // Fecha o menu ao clicar em um link (opcional)
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });
}); 