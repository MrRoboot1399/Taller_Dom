
export function ejercicio6() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
    <input type="text" id="tareaInput" placeholder="Escribe una tarea">
    <button id="agregar">Agregar tarea</button>
    <div id="listaTareas"></div>
  `;

  const input = document.getElementById("tareaInput");
  const btnAgregar = document.getElementById("agregar");
  const lista = document.getElementById("listaTareas");

  btnAgregar.addEventListener("click", () => {
    if (input.value.trim() === "") return;

    // Crear contenedor de la tarea
    const tareaDiv = document.createElement("div");
    tareaDiv.style.margin = "8px";
    tareaDiv.style.padding = "6px";
    tareaDiv.style.border = "1px solid #ccc";
    tareaDiv.style.borderRadius = "4px";
    tareaDiv.style.display = "flex";
    tareaDiv.style.justifyContent = "space-between";
    tareaDiv.style.alignItems = "center";

    // Texto
    const span = document.createElement("span");
    span.textContent = input.value;

    // Botón check
    const check = document.createElement("button");
    check.textContent = "✔";
    check.style.color = "orange";
    check.style.marginLeft = "10px";
    check.addEventListener("click", () => {
      check.style.color = check.style.color === "orange" ? "green" : "orange";
    });

    // Botón eliminar
    const eliminar = document.createElement("button");
    eliminar.textContent = "✖";
    eliminar.style.color = "red";
    eliminar.style.marginLeft = "10px";
    eliminar.addEventListener("click", () => {
      if (confirm("¿Seguro de eliminar esta tarea?")) {
        tareaDiv.remove();
      }
    });

    tareaDiv.appendChild(span);
    tareaDiv.appendChild(check);
    tareaDiv.appendChild(eliminar);

    lista.appendChild(tareaDiv);
    input.value = "";
  });
}
