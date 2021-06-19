import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/Razas.js";
import Animales from "./Consulta.js";

let animalesInvestigados = [];

let btnAnimal = document.querySelector("#animal");
let btnEdad = document.querySelector("#edad");

let btnComentarios = document.querySelector("#comentarios");

let btnRegistrar = document.querySelector("#btnRegistrar");

btnAnimal.addEventListener("change", async () => {
  const { animales } = await Animales.getData();
  const template = animales.find((p) => p.name == btnAnimal.value);
  console.log(template);
  const preview = document.querySelector("#preview");
  preview.style.backgroundImage = `url(
    "./assets/imgs/${template.imagen}"
  )`;
});

btnRegistrar.addEventListener("click", async (click) => {
  click.preventDefault();

  const { animales } = await Animales.getData();
  const template = animales.find((p) => p.name == btnAnimal.value);
  console.log(template);

  let btnImg = template.imagen;
  console.log("img", btnImg);
  let btnSonido = template.sonido;
  console.log("sonido", btnSonido);

  let animalito;

  if (btnAnimal.value == "Leon") {
    animalito = new Leon(
      btnAnimal.value,
      btnEdad.value,
      btnImg,
      btnComentarios.value,
      btnSonido
    );
  } else if (btnAnimal.value == "Lobo") {
    animalito = new Lobo(
      btnAnimal.value,
      btnEdad.value,
      btnImg,
      btnComentarios.value,
      btnSonido
    );
  } else if (btnAnimal.value == "Oso") {
    animalito = new Oso(
      btnAnimal.value,
      btnEdad.value,
      btnImg,
      btnComentarios.value,
      btnSonido
    );
  } else if (btnAnimal.value == "Serpiente") {
    animalito = new Serpiente(
      btnAnimal.value,
      btnEdad.value,
      btnImg,
      btnComentarios.value,
      btnSonido
    );
  } else if (btnAnimal.value == "Aguila") {
    animalito = new Aguila(
      btnAnimal.value,
      btnEdad.value,
      btnImg,
      btnComentarios.value,
      btnSonido
    );
  }
  animalesInvestigados.push(animalito);
  console.log("push", animalesInvestigados);

  reloadTable();
});

const reloadTable = () => {
  const tabla = document.querySelector("#Animales");
  tabla.innerHTML = "";
  animalesInvestigados.forEach((a, i) => {
    tabla.innerHTML += `
    <div class="col-3 card bg-dark p-0">
      <div id="animalCard" onclick="modal('${i}')" style="background-image: url(./assets/imgs/${a.getImg()})">
                 
             
      </div>
      <button id="play-button player" class="audio" onclick="playAudio('${i}')"><img
        src="/assets/imgs/audio.svg"
        alt="Girl in a jacket"
        width="20"
        height="20"
      /></button>
    </div>

   
    `;
  });
  console.log("reload", animalesInvestigados);
};

window.playAudio = (i) => {
  const animalClick = animalesInvestigados[i];
  let sonido = `./assets/sounds/${animalClick.getSonido()}`;
  let audio = new Audio(sonido);
  audio.play();
  console.log("sonido", sonido);
};

window.modal = (i) => {
  $("#exampleModal").modal();
  const modalBody = document.querySelector(".modal-body");
  const imagenClick = animalesInvestigados[i];

  modalBody.querySelector.innerHTML = "";

  modalBody.innerHTML = `
  <div id="animalCard" style="background-image: url(./assets/imgs/${imagenClick.getImg()})"></div>
  <p class="pt-3">Nombre: ${imagenClick.getNombre()}</p>
  <p>Edad: ${imagenClick.getEdad()}</p>
  <p>Comentarios: ${imagenClick.getComentarios()}</p>
  
  
  `;
};
/* <audio controls muted src="./assets/sounds/${a.getSonido()}" ></audio>
        <button id="play" onclick"play(${a.getSonido()})">Play</button>
        <button onclick="playAudio()" type="button">Play Audio</button> */
