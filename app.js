// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  let amigoValue = document.querySelector("#amigo");
  if (amigoValue.value === "") {
    alert("Porfavor agregar un nombre");
  } else amigos.push(amigoValue.value);
  console.log("Amigo Agregado");
  amigoValue.value = "";
  actualizarLista();
}

function actualizarLista(params) {
  let listaSorteo = document.querySelector("#listaAmigosSecretos");
  listaSorteo.innerHTML = "";

  amigos.forEach((element) => {
    listaSorteo.innerHTML += `<li>${element}</li>`;
  });
}
function sorteoAmigos(amigosLista) {
  let listaSorteo = document.querySelector("#listaAmigosSecretos");
  listaSorteo.innerHTML = "";
  let seleccionado = Math.floor(Math.random() * amigos.length);
  console.log(seleccionado);
  if (amigos.length === 0) {
    alert("Ya no hay amigos por sortear");
  } else {
    listaSorteo.innerHTML += `<li > Tu amigo secreto es ${amigos[seleccionado]}</li>`;
    amigos.splice(seleccionado, 1);
  }
}
