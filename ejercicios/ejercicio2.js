
export function ejercicio2() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `
    <h2 class="titulo">Título Original</h2>
    <a href="#">Ir a algún lugar</a>
  `;


  const enlace = document.getElementsByTagName("a")[0];
  enlace.href = "https://www.google.com";
  enlace.textContent = "Ir a Google";


  const titulo = document.querySelector(".titulo");
  titulo.textContent = "Título Modificado";

 
  document.body.style.backgroundColor = "#e6ffe6";
}
