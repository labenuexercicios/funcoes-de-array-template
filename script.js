// const pokemons = [
//   { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
//   { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
//   { nome: 'Charmander', tipo: 'fogo', vida: 35 },
//   { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
//   { nome: 'Squirtle', tipo: 'água', vida: 45 },
//   { nome: 'Psyduck', tipo: 'água', vida: 25 },
// ]


//prática guiada 

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const multiplicaPorTres = (array) =>{
//   const resposta = []
//   for(const  numero of array){
//     resposta.push(numero * 3)
//   }
//   return resposta
// }

//parametro === argumento
// const retornaPares = (array) => { //parametro
//   const resposta = []
//   for(const numero of array){
//     if(numero %2 === 0){
//       resposta.push(numero)
//     }
//   }
//   return resposta
// }
// console.log(multiplicaPorTres(numeros))//argumento
// console.log(retornaPares(numeros))


// const imprimirValoresDoCallBack = (array, funcaoCallBack) => {
//   const resposta = funcaoCallBack(array)
//   console.log(resposta) 
// }

// imprimirValoresDoCallBack(numeros, multiplicaPorTres)
// imprimirValoresDoCallBack(numeros, retornaPares)
//usando filter 












// filter pra filtrar 
const topMapReturn = numeros.filter((item) =>{
  return item %2 === 0
})

//usando map()
const topMap = numeros.map((item, indice, array)=>{
  return  item * 3
})

console.log(topMapReturn)

//resolução da fixacão
const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]

const aumentaVidaPokemon = (pokemon) => {
  return {
    ...pokemon, // spread operator
    vida: 100,
  }
}

const pokemonsVidaCheia = pokemons.map(aumentaVidaPokemon)
console.log(pokemonsVidaCheia)

const pokemonsDeFogo = pokemons.filter((pokemon) => {
  return pokemon.tipo === 'fogo'
})

console.log(pokemonsDeFogo)














