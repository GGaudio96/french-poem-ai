function displayPoem(response) {

  new Typewriter("#poem", {
  strings: response.data.answer,
  autoStart: true,
});
   
}


function generatePoem(event) {
    event.preventDefault();
let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "35b4b416c408f4a70ee442o1td5f0b38";
    let prompt = `generate a french poem about ${instructionsInput.value}`;
    let context = "generate a short one line romantic poem following the user instructions in the french language";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(displayPoem);

    let poemElement = document.querySelector("#poem");
    
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `Generating a French poem about ${instructionsInput.value}`
    
}



let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);