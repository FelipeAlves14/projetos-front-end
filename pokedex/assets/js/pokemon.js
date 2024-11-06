const content = document.querySelector('.content')
const pokemons = document.querySelectorAll('.pokemon')

function detalhePokemon(number) {
    const url = `https://pokeapi.co/api/v2/pokemon/${number}`
        return fetch(url)
            .then((response) => response.json())
            .then((jsonBody) => convertPokeApiDetailToPokemon(jsonBody))
            .then((pokemon) => {
                document.title = pokemon.name
                content.innerHTML = `
                    <div class="ilustration">
                        <div>
                            <a href="index.html">Voltar</a>
                            <h3 id="button-shiny">VARIAÇÃO</h3>
                            <img id="foto" class="${pokemon.number}" src="${pokemon.photo}" alt="${pokemon.name}">
                        </div>
                        <h1>${pokemon.name}</h1>
                        ${pokemon.types.map((type) => `<span class='type-detail ${type}'>${type}</span> `).join('')}
                    </div>
                    <article class="info">
                        <p>Altura: ${pokemon.height / 10} m</p>
                        <p>Peso: ${pokemon.weight / 10} kg</p>
                        <p>Stats:</p>
                        <ul>
                            ${pokemon.stats.map((stat) => `<li>${stat.stat.name}: ${stat.base_stat}</li>`).join('')}
                        </ul>
                    </article>
                    `
                    const button_shiny = document.getElementById('button-shiny')
                    const foto = document.getElementById('foto')
                    button_shiny.addEventListener('click', () => {
                        const url = `https://pokeapi.co/api/v2/pokemon/${foto.className}`
                        return fetch(url)
                            .then((response) => response.json())
                            .then((jsonBody) => convertPokeApiDetailToPokemon(jsonBody))
                            .then((pokemon) => {
                                foto.src = foto.src === pokemon.shiny ? pokemon.photo : pokemon.shiny
                            })
                        });
            })
}

function pokedex(){
    document.title = 'Pokédex'
    content.innerHTML = `
        <h1>Bem vindo a minha <span class="titulo">Pokédex</span></h1>
        <nav>
            <h2>Selecione a região:</h2>
            <ul>
                <li><span class="titulo region">Kanto</span></li>
                <li><span class="titulo region">Johto</span></li>
                <li><span class="titulo region">Hoenn</span></li>
                <li><span class="titulo region">Sinnoh</span></li>
                <li><span class="titulo region">Unova</span></li>
                <li><span class="titulo region">Kalos</span></li>
                <li><span class="titulo region">Alola</span></li>
                <li><span class="titulo region">Galar</span></li>
            </ul>
        </nav>

        <ol id="pokemonList" class="pokemons">

        </ol>
    `
}