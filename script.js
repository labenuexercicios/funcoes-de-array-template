// const arrayNumerico = [1,2,3,4,5,6,7,8]
// console.log(arrayNumerico);

// //método map
// const multiplicar = arrayNumerico.map((numero)=>{
//   return numero *3
// })
// console.log(multiplicar)


// //método filter
// const filtrarPares = arrayNumerico.filter((pares)=>{
//   return pares %2 === 0
// })
// console.log(filtrarPares);

// const multiplicarPor3 = (arrayNumerico)=>{
//   let novoArray = []
//   for(i = 0; i<arrayNumerico.length;i++){
//     novoArray.push(arrayNumerico[i]*3)
//   }
//   return novoArray
// }


// const dividirPor2 = (arrayNumerico)=>{
//   let novoArray = []
//   for(i=0;i<arrayNumerico.length;i++){
//     if(arrayNumerico[i]%2 === 0){

//     }
//   }
//   return novoArray
// }
// console.log(dividirPor2(arrayNumerico));

// const fazerOperacoes = (array, callback)=>{
//   const novoArray = callback(array)
//   return novoArray
// }

// console.log('callback multiplicando por 3', fazerOperacoes(arrayNumerico,multiplicarPor3))
// console.log('pegar pares e callback', fazerOperacoes(arrayNumerico,dividirPor2))

//////////////////////////////////


const pokemons = [

  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 }
]

const mudarVida = (poke)=>{
  const novaVida ={...poke,
    vida:100

  }
  return novaVida
}

const pokemonsVidaCheia = pokemons.map(mudarVida)

const pokemonsDeFogo = pokemons.filter((fogo)=>{
  return fogo.tipo === 'fogo'
})
console.log(pokemonsVidaCheia);
console.log(pokemonsDeFogo);