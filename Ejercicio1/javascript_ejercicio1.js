let texo_lorem = document.querySelector("p");
let botom = document.getElementById("toggler");

botom.addEventListener("click", updateName);

function updateName() {
  texo_lorem.classList.toggle("text-naranja");
}