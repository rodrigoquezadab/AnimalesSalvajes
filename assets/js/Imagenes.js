import Animales from "./Consulta.js";
const btnAnimal = document.querySelector("#animal");
const btnEdad = document.querySelector("#edad");
const btnRegistrar = document.querySelector("#btnRegistrar");

btnAnimal.addEventListener("change", async () => {
  console.log("click");
  const { animales } = await Animales.getData();
  const animal = document.getElementById("animal").value;
  const template = animales.find((p) => p.name == animal);
  const preview = document.querySelector("#preview");
  preview.style.backgroundImage = `url(
    "./assets/imgs/${template.imagen}"
  )`;

  //animalesTemplate.map((p) => console.log(p.name));
  /* .find((p) => p.name == pj)
    .animales.map((i) => `<img with="200" src="/assets/imgs/${pj}/${i}"/>`)
    .join(""); */

  //document.getElementById("preview")[0].innerHTML = animalesTemplate;
  //console.log(animalesTemplate);
});
