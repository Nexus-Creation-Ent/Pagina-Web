// 1. Capturamos elementos fuera del scroll para no saturar la memoria
const miEstilo = document.getElementById('style_section_2');
const seccion = document.querySelector('.bloque-mision-vision');

// Bandera para evitar que se disparen mil cambios al tiempo
let estaCambiando = false; 

function cambiarEstiloSuave(nuevoArchivo) {
  if (!seccion || !miEstilo || estaCambiando) return;

  estaCambiando = true; // Bloqueamos nuevas ejecuciones

  // Ocultamos la sección (fade out)
  seccion.classList.add('desvanecido');

  // Esperamos 500ms a que termine el fade out
  setTimeout(() => {
    miEstilo.href = nuevoArchivo;

    // Le damos un respiro al navegador para cargar la hoja de estilos
    setTimeout(() => {
      seccion.classList.remove('desvanecido'); // Fade in
      estaCambiando = false; // Liberamos el bloqueo
    }, 100);

  }, 500);
}

// 2. Escuchamos el scroll de forma limpia
window.addEventListener('scroll', () => {
  if (estaCambiando) return; // Si ya está haciendo la transición, pase de largo

  const scrollActual = window.scrollY;
  const esEstilo2 = miEstilo.href.includes('bloquemyv-2.css');

  // Bajar de 400px -> cambia a bloquemyv-2.css
  if (scrollActual > 400 && !esEstilo2) {
    cambiarEstiloSuave('./Styles/bloquemyv-2.css');
  } 
  // Subir de 400px -> regresa a bloquemyv.css
  else if (scrollActual <= 400 && esEstilo2) {
    cambiarEstiloSuave('./Styles/bloquemyv.css');
  }
});
