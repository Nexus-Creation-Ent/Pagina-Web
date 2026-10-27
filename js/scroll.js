document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  let smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.5,
    effects: true
  });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#bloque-nuestro-trabajo",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5,
      pin: ".nt-sup",
      pinType: "transform",
      anticipatePin: 1
    }
  });

  // 1. ZOOM DE IMÁGENES (Ocupa del segundo 0 al 70 de la timeline)
  tl.to(".img-zoom", {
    scale: 1,
    opacity: 1,
    stagger: 0.2,
    duration: 70, // Le damos 70 unidades de tiempo
    ease: "none"
  }, 0);

  // 2. LLENADO DE TEXTO (Distribuido también en 70 unidades)
  let lineas = gsap.utils.toArray(".linea-fill");
  let duracionPorLinea = 70 / lineas.length;

  lineas.forEach((linea, index) => {
    tl.to(linea, {
      clipPath: "inset(0 0% 0 0)",
      ease: "none",
      duration: duracionPorLinea
    }, index === 0 ? 0 : ">");
  });

  // 3. ⚡ EL TRUCO DE LA PAUSA (Hold):
  // Forzamos a la timeline a durar hasta 100 unidades de tiempo sin hacer nada.
  // Esto crea un 30% de scroll de "congelamiento" donde todo queda quieto.
  tl.to({}, { duration: 10 }); 
});