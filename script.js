

const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 }
]


// Exercício de fixção
// Parte 1

function completaVida(poke){
  poke.vida = 100

  return poke
}



//console.log(completaVida(pokemons[0]))
//console.log(completaVida(pokemons[1]))
//console.log(completaVida(pokemons[2]))
//console.log(completaVida(pokemons[3]))
//console.log(completaVida(pokemons[4]))
//console.log(completaVida(pokemons[5]))

// Parte 2

//const pokemosVidaCheia = pokemons.map((poke, indice, arrayOriginal) => {

//})

const pokemosVidaCheia = pokemons.map(completaVida)
console.log(pokemosVidaCheia)

// Parte 3

const pokemonsDeFogo = pokemons.filter((pokemon, indice, arrayOriginal) => {
return pokemon.tipo === 'fogo'
})
console.log(pokemonsDeFogo)




// Prática Guiada I - Callbacks

// const numeros = [3, 67, 12, 0, -56, 98, 35, 24]

function triplicarNumeros (arrayDeNumeros) {
  const arrayTriplicado = []
  // for (let i = 0; i < array.length; i++)
// for (let index in array)
// for(let element of array)
for (let numero of arrayDeNumeros){
  const numeroTriplicado = numero * 3
  arrayTriplicado.push(numeroTriplicado)

}
return arrayTriplicado

}

//console.log(triplicarNumeros([7, 5, 85, 958, 445]))

function retornarPares(arrayDeNumeros){
const arrayPares = []

for(let numero of arrayDeNumeros){
if(numero % 2 === 0){
  arrayPares.push(numero)

}
}
return arrayPares
}

//console.log(retornarPares(numeros))

function manipulaNumeros(arrayDeNumeros, callback){
const novoArray = callback(arrayDeNumeros)

return novoArray
}

//console.log('TRIPLICANDO', manipulaNumeros([98, 52, 45, 78, 89, -3, 47, 99], triplicarNumeros))
//console.log('SÓ PARES', manipulaNumeros([98, 52, 45, 78, 89, -3, 47, 99], retornarPares))

// Prática guiada II- map()
const numeros = [3, 67, 12, 0, -56, 98, 35, 24]

const numerosTriplicados = numeros.map((elemento, indice, arrayOriginal) => {
  return elemento * 3
})
//console.log(numerosTriplicados)

// Prática Guiada III - filter()

const numerosPares = numeros.filter((elemento, indice, arrayOriginal) => {
  return elemento % 2 === 0

})

//console.log(numerosPares)
