
export function ejercicio1() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
    <div id="info">Texto original del DIV</div>
    <p class="detalle">Detalle original</p>
    <p>Otro párrafo</p>
    <a href="#">Enlace original</a>
  `;


  const info = document.getElementById("info");
  console.log("Texto dentro del div info:", info.textContent);

  const detalle = document.querySelector(".detalle");
  detalle.textContent = "Este es un detalle modificado";

 
  const parrafos = document.querySelectorAll("p");
  parrafos.forEach(p => p.style.backgroundColor = "lightblue");
}
