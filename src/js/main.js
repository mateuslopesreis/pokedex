import '../css/style.css'

const inputPesquisa = document.querySelector('#inputPesquisa')
const btnLocalizar = document.querySelector("#btnLocalizar")
const pokedexDisplay = document.querySelector("#display")

/* Adicionando o evento*/

btnLocalizar.addEventListener('click',async function(){
    /*buscar os dados do pokemon na api */
    const dadosDoPokemon = await localizarPokemin(inputPesquisa.value)
    /*criar o cartão do Pokemon */
    criarCartao(dadosDoPokemon)

})


async function localizarPokemin(termoBuscar){
    const url = `https://pokeapi.co/api/v2/pokemon/${termoBuscar}`

    const response = await fetch(url)
    const pokemon = await response.json()
    //console.log(pokemon)
    return pokemon
}

function criarCartao(pokemon){
    const cartaoPokemon = document.createElement('div')
    cartaoPokemon.className='cartaoPokemon'
    cartaoPokemon.innerHTML = `
            <h2 class="identificador">${pokemon.id}</h2>
            <img class="pokemonSprite" src="${pokemon.sprites.other.dream_world.front_default}"/>
           
            <h1>${pokemon.name}</h1>
           
            <h3>${pokemon.types.map(item => 'Tipo ' + item.type.name).toString() 
               
        }</h3>

        <h3 class="weight">Peso ${pokemon.weight  / 10}kg</h3>

    `
    pokedexDisplay.innerHTML = '';

    pokedexDisplay.appendChild(cartaoPokemon)
}

/*pesquisa como substituir  e terminar o cartão */