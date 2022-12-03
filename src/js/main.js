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
            <img class="pokemonSprite" src="${pokemon.sprites.front_default}"/>
            <h2>${pokemon.name}</h2>
    `
    pokedexDisplay.appendChild(cartaoPokemon)
}

/*pesquisa como substituir  e terminar o cartão */