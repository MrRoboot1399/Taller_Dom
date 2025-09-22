
export function ejercicio4() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
    <div>Div original 1</div>
    <div>Div original 2</div>
  `;

  const nuevoDiv = document.createElement("div");
  nuevoDiv.textContent = "Soy un nuevo div";

  const primerDiv = resultado.querySelector("div");
  resultado.replaceChild(nuevoDiv, primerDiv);

  console.log("Se reemplazó el primer div por uno nuevo");
}
