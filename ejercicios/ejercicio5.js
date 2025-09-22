
export function ejercicio5() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
    <button id="clickMe">Haz clic</button>
    <button id="removeEvent">Quitar evento</button>
  `;

  const btnClick = document.getElementById("clickMe");
  const btnRemove = document.getElementById("removeEvent");

  function mostrarAlerta() {
    alert("¡Botón clickeado!");
  }

  btnClick.addEventListener("click", mostrarAlerta);

  btnRemove.addEventListener("click", () => {
    btnClick.removeEventListener("click", mostrarAlerta);
    alert("Evento eliminado");
  });
}
