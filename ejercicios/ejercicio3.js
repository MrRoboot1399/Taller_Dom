
export function ejercicio3() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
    <p>Primer párrafo existente</p>
    <button id="eliminar">Eliminar primer párrafo</button>
  `;

  const nuevoP = document.createElement("p");
  nuevoP.textContent = "Este es un párrafo creado dinámicamente";
  document.body.appendChild(nuevoP);

 
  const btnEliminar = document.querySelector("#eliminar");
  btnEliminar.addEventListener("click", () => {
    const primerP = document.querySelector("p");
    if (primerP) primerP.remove();
  });
}
