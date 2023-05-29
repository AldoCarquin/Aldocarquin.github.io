const mostrarBtn = document.getElementById('mostrar-btn');
const contenidoAdicional = document.getElementById('contenido-adicional');

mostrarBtn.addEventListener('click', function() {
  if (contenidoAdicional.style.display === 'none') {
    contenidoAdicional.style.display = 'block';
    mostrarBtn.innerText = 'Mostrar menos';
  } else {
    contenidoAdicional.style.display = 'none';
    mostrarBtn.innerText = 'Mostrar más';
  }
});