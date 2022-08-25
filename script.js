// //Pratica Guiada I
const listaDeNumeros = [1,2,3,4,5,6,7,8,9,10]
// // a)
function funcaoA(array){
    const triplo=[]
    for(let valor of array){
        triplo.push(valor*3)
    }
    return triplo
}
console.log("A",funcaoA(listaDeNumeros));
// //b)
function funcaoB(array){
    const soPares=[]
    for(let valor of array){
        if(valor%2===0){
            soPares.push(valor)
        }
    }
    return soPares
}
console.log("B",funcaoB(listaDeNumeros));
// //c
function funcaoC(array,callback) {
   const result= callback(array)
   console.log("C",result);    
}
funcaoC(listaDeNumeros,funcaoA)
// //Pratica Guiada II
// /*O map() é uma função de array que:
// - Sempre devolve um array com o mesmo tamanho do original, mas com as modificações que fizemos
// - sempre recebe uma callback como parâmetro
// */
const returnMap=listaDeNumeros.map((item)=>{
    return item*3        
})
console.log("MAP",returnMap);
// //Pratica Guiada III
// /*O filter() é uma função de array que:
// - Sempre devolve um array com o mesmo tamanho ou menor do que o array original, mas apenas os itens que passarem na verificação (ou seja se forem true)com as modificações que fizemos
// - sempre recebe uma callback como parâmetro
// */
const returnFilter=listaDeNumeros.filter((item)=>{
    return item%2===0
})
console.log("FILTER",returnFilter);

// Fixação

const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]

console.log(pokemons);


// a)____________________________________________________________
const funcaoPoke = (objeto) => {
  const copiaObjeto = {...objeto, vida:100}
  return copiaObjeto 
}
console.log("A=>",funcaoPoke(pokemons[0]));

//b)____________________________________________________________
const pokemonsVidaCheia = pokemons.map(funcaoPoke)
console.log("B=>",pokemonsVidaCheia);

//c)____________________________________________________________
const pokemonsDeFogo = pokemons.filter(item=>item.tipo==="fogo")
console.log("C=>",pokemonsDeFogo);