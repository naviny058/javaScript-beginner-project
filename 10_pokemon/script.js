const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
};
let btn = document.querySelector('#generate')
let card = document.querySelector('.card')
async function fetchData() {
    const url = 'https://pokeapi.co/api/v2/pokemon/'
    const ranNum = Math.floor(Math.random() * 150)
    const finalUrl = url + ranNum
    const response = await fetch(finalUrl)
    const data = await response.json()
    generateCard(data)
}
fetchData()
function generateCard(data) {
    const statAttack = data.stats[1].base_stat;
    const statDefense = data.stats[2].base_stat;
    const statSpeed = data.stats[5].base_stat;
    const name = data.name
    const img = data.sprites.other.dream_world.front_default
    const themeColor = typeColor[data.types[0].type.name]

    card.innerHTML = `
    <img src=${img}
        alt="">
    <h2>${name}</h2>
    <div class="stats">
        <div class="div">
            <h4>${statAttack}</h4>
            <p>Attack</p>
        </div>
        <div class="div">
            <h4>${statDefense}</h4>
            <p>Defence</p>
        </div>
        <div class="div">
            <h4>${statSpeed}</h4>
            <p>Speed</p>
        </div>
    </div>
    `
    let circel = document.querySelector('.circle')
    circel.style.backgroundColor = `${themeColor}`
}
let generate = document.querySelector('#generate')
generate.addEventListener('click', fetchData)