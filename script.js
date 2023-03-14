
// // PRATICA GUIADA 1 - CALLBACK
// //

// function triplicarNumeros(arrayDeNumeros) {

// const arrayTriplicado = []

//   for(let numero of arrayDeNumeros) {



//     const numeroTriplicado = numero * 3
//     arrayTriplicado.push(numeroTriplicado)

//   }
//   return arrayTriplicado
// }

// //console.log(triplicarNumeros([4,6,98,-9,251]))

// function retornarPares(arrayDeNumeros) {

// const arrayPares = []

// for(let numero of arrayDeNumeros) {

//   if(numero % 2 === 0) {
//     arrayPares.push(numero)
//   }


// }

// return arrayPares

// }
// //console.log(retornarPares(numeros))

// function manipulaNumeros(arrayDeNumeros, callback) {
//   const novoArray = callback(arrayDeNumeros)
  
//   return novoArray
// }
// //console.log(manipulaNumeros([98,56,74,30,31,89,-3,47,99], triplicarNumeros))

// //console.log(manipulaNumeros([98,56,74,30,31,89,-3,47,99], retornarPares))

// //PRATICA GUIADA 2 MAP()

// const numeros = [3, 67, 12, 90, -56, 98, 35, 24]

// const numerosTriplicados = numeros.map((elemento, indice, arrayOriginal) => {
  
// return elemento * 3
// })

// //console.log(numerosTriplicados)

// // FILTER
// const numerosPares = numeros.filter((elemento, indice, arrayOriginal) => {
//    return elemento % 2 === 0
// })

// console.log(numerosPares)





















 const pokemons = [
   { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
   { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
   { nome: 'Charmander', tipo: 'fogo', vida: 35 },
   { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
   { nome: 'Squirtle', tipo: 'água', vida: 45 },
   { nome: 'Psyduck', tipo: 'água', vida: 25 }
 ]

 function completaVida(poke) {
  poke.vida = 100
  return poke
 }
 

//  console.log(completaVida(pokemons[0]))
//  console.log(completaVida(pokemons[1]))
//  console.log(completaVida(pokemons[2]))
//  console.log(completaVida(pokemons[3]))
//  console.log(completaVida(pokemons[4]))
//  console.log(completaVida(pokemons[5]))

const pokemonsVidaCheia = pokemons.map(completaVida)

console.log(pokemonsVidaCheia)

const pokemonsDeFogo = pokemons.filter((pokemon, indice, arrayOriginal) => {
  return pokemon.tipo === 'fogo'

})
console.log(pokemonsDeFogo)