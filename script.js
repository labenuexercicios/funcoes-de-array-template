// //Pratica Guiada I
// const listaDeNumeros = [1,2,3,4,5,6,7,8,9,10]

// // a)
// function funcaoA(array){
//     const triplo=[]
//     for(let valor of array){
//         triplo.push(valor*3)
//     }
//     return triplo
// }
// console.log("A",funcaoA(listaDeNumeros));

// //b)
// function funcaoB(array){
//     const soPares=[]
//     for(let valor of array){
//         if(valor%2===0){
//             soPares.push(valor)
//         }
//     }
//     return soPares
// }
// console.log("B",funcaoB(listaDeNumeros));

// //c

// function funcaoC(array,callback) {
//    const result= callback(array)
//    console.log("C",result);    
// }
// funcaoC(listaDeNumeros,funcaoA)


// Prática Guiada II:
/*O map é uma função de array que:
- Sempre devolve um array com o mesmo tamanho do original, mas com as modificações que fizemos;
- Sempre recebe uma callback como parâmetro.*/

// const returnMap=listaDeNumeros.map(item=>item*3);

// console.log(returnMap);

// const returnMap=listaDeNumeros.map((item)=>{
//   return item*3        
// })

// console.log("MAP",returnMap);


// //Pratica Guiada III
// /*O filter() é uma função de array que:
// - Sempre devolve um array com o mesmo tamanho ou menor do que o array original, mas apenas os itens que passarem na verificação (ou seja se forem true)com as modificações que fizemos
// - sempre recebe uma callback como parâmetro
// */

// const returnFilter=listaDeNumeros.filter((item)=>{
//     return item%2===0
// })

// console.log("FILTER",returnFilter);


// Exercício de Fixação:
const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]

//A
console.log(pokemons);

function pokeFuncao(objeto){

    const pokemon100={...objeto, vida:100}

  return pokemon100

}

console.log(pokeFuncao(pokemons[1]));

//B
// const pokemonsVidaCheia = pokemons.map(pokeFuncao)

// console.log("MAP", pokemonsVidaCheia);

//C
// const pokemonsDeFogo = pokemonsVidaCheia.filter((item)=>{
//   return item.tipo === 'fogo'
// })

// console.log("FILTER", pokemonsDeFogo);

//Desafio: concatenação do FILTER no MAP

const pokemonsDeFogoVidaCheia = pokemons.map(pokeFuncao).filter((item)=>{
  return item.tipo === 'fogo'
})

console.log(pokemonsDeFogoVidaCheia);