function generatePoem(event) {
    event.preventDefault();

    

new Typewriter("#poem", {
  strings: ["Il n'y a pas d'amour heureux"],
  autoStart: true,
});
   
}


let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);