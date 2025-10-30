// ==============================
// PIXELFORGE STUDIOS JAVASCRIPT
// ==============================

// Scroll suave ao clicar nos links do menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Animação dos cards ao rolar a página
  const cards = document.querySelectorAll('.card');
  
  function aparecerCards() {
    cards.forEach(card => {
      const posicao = card.getBoundingClientRect().top;
      const alturaTela = window.innerHeight;
      if (posicao < alturaTela - 100) {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }
    });
  }
  
  window.addEventListener('scroll', aparecerCards);
  aparecerCards();
  
  // Validação do formulário
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
  
      const nome = form.querySelector('input[name="nome"]');
      const email = form.querySelector('input[name="email"]');
      const msg = form.querySelector('textarea[name="mensagem"]');
  
      if (!nome.value.trim() || !email.value.trim() || !msg.value.trim()) {
        alert('Por favor, preencha todos os campos antes de enviar!');
        return;
      }
  
      if (!email.value.includes('@')) {
        alert('Digite um e-mail válido!');
        return;
      }
  
      alert('Mensagem enviada com sucesso! 🚀');
      form.reset();
    });
  }
  
  // Efeito de entrada suave nos cards
  cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.6s ease-out";
  });
  