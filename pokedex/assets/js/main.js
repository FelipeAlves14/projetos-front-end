const button_shiny = document.getElementById('button-shiny')
const foto = document.getElementById('foto')
const pokemonList = document.getElementById('pokemonList')
const regions = document.querySelectorAll('.region')

regions.forEach((region) => {
    region.addEventListener('click', () => {
        switch(region.innerHTML){
            case 'Kanto':
                pokeApi.getPokemons(0, 151).then((pokemons = []) => {
                    const newHtml = pokemons.map(convertPokemonToLi).join('')
                    pokemonList.innerHTML = newHtml
                })
                break
            case 'Johto':
                pokeApi.getPokemons(151, 100).then((pokemons = []) => {
                    const newHtml = pokemons.map(convertPokemonToLi).join('')
                    pokemonList.innerHTML = newHtml
                })
                break
            case 'Hoenn':
                pokeApi.getPokemons(251, 135).then((pokemons = []) => {
                    const newHtml = pokemons.map(convertPokemonToLi).join('')
                    pokemonList.innerHTML = newHtml
                })
                break
            case 'Sinnoh':
                pokeApi.getPokemons(386, 107).then((pokemons = []) => {
                    const newHtml = pokemons.map(convertPokemonToLi).join('')
                    pokemonList.innerHTML = newHtml
                })
                break
            case 'Unova':
                pokeApi.getPokemons(493, 156).then((pokemons = []) => {
                    const newHtml = pokemons.map(convertPokemonToLi).join('')
                    pokemonList.innerHTML = newHtml
                })
                break
            case 'Kalos':
                pokeApi.getPokemons(649, 72).then((pokemons = []) => {
                    const newHtml = pokemons.map(convertPokemonToLi).join('')
                    pokemonList.innerHTML = newHtml
                })
                break
            case 'Alola':
                pokeApi.getPokemons(721, 86).then((pokemons = []) => {
                    const newHtml = pokemons.map(convertPokemonToLi).join('')
                    pokemonList.innerHTML = newHtml
                })
                break
            case 'Galar':
                pokeApi.getPokemons(807, 84).then((pokemons = []) => {
                    const newHtml = pokemons.map(convertPokemonToLi).join('')
                    pokemonList.innerHTML = newHtml
                })
                break
        }
    });
});

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

button_shiny.addEventListener('click', () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${foto.className}`
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => convertPokeApiDetailToPokemon(jsonBody))
        .then((pokemon) => {
            foto.src = foto.src === pokemon.shiny ? pokemon.photo : pokemon.shiny
        })

});