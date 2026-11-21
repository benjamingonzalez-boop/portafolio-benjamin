document.getElementById('f').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('ok').textContent = '¡Gracias! Tu mensaje está listo para enviarse.';
  this.reset();
});
document.querySelectorAll('.skill-btn').forEach(boton => {
  boton.addEventListener('click', () => {
    const fila = boton.closest('.skill-row');
    const estaAbierto = fila.classList.toggle('active');
    boton.textContent = estaAbierto ? '←' : '→';
  });
});