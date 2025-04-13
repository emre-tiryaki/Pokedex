const pokemon_list = document.getElementById('pokemon_list');
const search = document.getElementById('search');
const searchBtn = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const loader = document.getElementById("loader");

const pokemon_count = 200;
const pokemons = [];
//constant values


const bg_color = {
    grass: "#8BD369",
    water: "#3399FF",
    fire: "#FF603F",
    ice: "#66ccff",
    electric: "#FFd34d",
    ground: "#E2C56A",
    poison: "#9966FF",
    rock: "#999999",
    flying: "#9aa8fa",
    psychic: "#FF6ea4",
    bug: "#aabb22",
    normal: "#aaaa99",
    dragon: "#7766ee",
    fighting: "#c56e5c",
    fairy: "#f1a8ec",
}
// different background for all pokemons

//function just for fetching data
async function fetchData(input) {
    try{
        const Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);

        if(!Response.ok)
            throw new Error("Error fetching data");

        const Data = await Response.json();

        return Data;
    }
    catch{
        console.error(`Error fetching data`);
    }
}

//function for fetching all pokemons data and appending it into an array
async function getAllPokemons(){
    for(let i = 1;i <= pokemon_count;i++)
        pokemons[i - 1] = await fetchData(i);
}

//function for creating cards for pokemons
function createPokemonCards(name) {
    loader.style.display = "none"

    pokemons.forEach((pokemon) => {
       
            const pokemonDiv = document.createElement("div");
            pokemonDiv.classList.add("pokemon");
            
            const pokemonId = pokemon.id.toString().padStart(3, '0');
            const pokemonType = pokemon.types[0].type.name;
            const pokemonWeight = pokemon.weight;
            const pokemonExp = pokemon.base_experience
            const pokemonBg = bg_color[pokemonType];
            pokemonDiv.style.backgroundColor = `${pokemonBg}`;
            
            const innerPokemonDiv = `
                <div class="image_container">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="this is a picture of ${pokemon.name}">
                </div>
                
                <div class="poke_info">
                    <span class="poke-id">#${pokemonId}</span>
                    <h3 class="poke-name">${pokemon.name}</h3>
                    <small class="poke-exp">
                        <i class="fa-solid fa-flask"></i> ${pokemonExp}
                    </small>
                    <small class="poke-weight">
                        <i class="fa-solid fa-weight-scale"></i> ${pokemonWeight}kg
                    </small>
                    <div class="poke-type">
                        <i class="fa-brands fa-uncharted"></i>${pokemonType}
                    </div>
                </div>
            `;
    
            pokemonDiv.innerHTML = innerPokemonDiv;
            pokemon_list.appendChild(pokemonDiv)
       
    });


}

//main function
async function main() {
    await getAllPokemons();
    createPokemonCards("");
}

main();

searchInput.addEventListener('input', (e) => {
    //console.log(searchInput.value)
    const searchValue = searchInput.value.toLowerCase().trim();
    const pokemonNames = document.querySelectorAll('.poke-name');
  
    pokemonNames.forEach((pokemonName) => {
      pokemonName.parentElement.parentElement.style.display = 'block';
  
      if (!pokemonName.innerHTML.toLowerCase().includes(searchValue))
        pokemonName.parentElement.parentElement.style.display = 'none';
    });
});