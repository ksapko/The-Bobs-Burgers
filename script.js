const container = document.querySelector(".container");
const btn = document.querySelector("#generate-btn");
const characterInfo = document.querySelector(".character-info");
let index = 0;
let characterData = [];

fetch("https://bobsburgers-api.herokuapp.com/characters/?limit=9&skip=225/")
  .then((res) => res.json())
  .then((data) => (characterData = data))
  .then(() => buildCharacter(characterData));

function buildCharacter() {
  console.log(characterData);
  const template = `
    <div id="character-info" class="card">
        <div class="card-head">
            <img src="${characterData[index].image}" alt="">
            <h2><strong>${characterData[index].name}</strong></h2>
        </div>
        <div class="card-body">
            <span><i class="fa-solid fa-cake-candles"></i> ${characterData[index].age}</span>
            <span><i class="fa-solid fa-user"></i> ${characterData[index].gender}</span>
            <p>occupation: <span>${characterData[index].occupation}</span></p>
            <p>firstEpisode: <span>${characterData[index].firstEpisode}</span></p>
        </div>
    </div>
  `;
  characterInfo.innerHTML = template;
}

btn.addEventListener("click", () => {
  index++;
  buildCharacter();
});
