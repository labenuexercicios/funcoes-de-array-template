// //PRÁTICA GUIADA 1

// const numeros = [3, 67,12, 90, -56, 98, 35, 24]

// function triplicaNumeros(arrayDeNumeros) {
//   const arrayTriplicado = []

//   for (let numero of arrayDeNumeros) {
//      const numeroTriplicado = numero * 3
//      arrayTriplicado.push(numeroTriplicado)
//   }

//   return arrayTriplicado
// }


// function retornaPares(arrayDeNumeros){
//   const arrayPares = []

//   for(let numero of arrayDeNumeros){
//     if(numero % 2 === 0){
//       arrayPares.push(numero)
//     }
//   }
//   return arrayPares
// }

// // console.log(retornaPares(numeros))

// function manipulaNumeros(arrayDeNumeros, callback) {
//   const novoArray = callback(arrayDeNumeros)

//   return novoArray
// }

// console.log('TRIPLICANDO',
// manipulaNumeros([98, 56, 74,30, 31, 89, -3, 47, 99], triplicaNumeros))

// console.log('SÓ PARES',
// manipulaNumeros([98, 56, 74,30, 31, 89, -3, 47, 99], retornaPares))


//PRÁTICA GUIADA 2 - map()

// const numeros = [3, 67,12, 90, -56, 98, 35, 24]

// const numerosTriplicados = numeros.map((elemento, indice, arrayOriginal) => {
//   return elemento * 3
//  })

// //console.log(numerosTriplicados)


// //PRÁTICA GUIADA 3 - filter()

// const numerosPares = numeros.filter((elemento, indice, arrayOriginal) => {
//   return elemento % 2 === 0

// })

// console.log(numerosPares)

// const paresTriplicados = numerosPares.map((elemento, indice, arrayOriginal) => {
//   return elemento * 3
// })

// console.log(paresTriplicados)


// SAIDERA

const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 }
]

// Item 1
function aumentoDeVida(poke) {
  poke.vida = 100
}

// Item 2
const pokemonsVidaCheia = pokemons.map(poke => {
  aumentoDeVida(poke)
  return poke
})

console.log(pokemonsVidaCheia)

// Item 3
const pokemonsDeFogo = pokemons.filter(function(poke) {
  return poke.tipo === 'fogo'
})

console.log(pokemonsDeFogo)


