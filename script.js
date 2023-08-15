
/*RESUMO
CALLBACKS
const funcao1=()=>{
 return "Banana"
}

const funcao2=(callback)=>{
  console.log(`Eu gosto de comer ${callback()}`);
}

funcao2(funcao1)

Callbacks são funções passadas como argumento para outras funções e executadas dentro delas.

----------Funções de array-----------
MAP

const novoArrayModificado= array.map(callback)
O método .map() - recebe sempre uma callback e retorna sempre um array do mesmo tamanho do array original.
A callback recebida pelo .map() recebe como parâmetro três variáveis = (item, index, array)=>{}
item (primeira posição)=> retorna  cada item do array original
index (segunda posição)=> retorna o index dos itens do array original
array (terceira posição)=>retorna o array original (quase nunca usamos)

FILTER
const novoArrayFiltrado= array.filter(callback)

O método .filter() - recebe sempre uma callback e retorna sempre um array do mesmo tamanho ou menor do que o array original.
A callback recebida pelo .filter() recebe como parâmetro três variáveis = (item, index, array)=>{} igual ao map
no retorno do filter sempre colocamos uma condição que ira retornar  enviar os itens do array original que atenderem a esta condição. 

*/

//Prática1

const listaDeNumeros=[1,2,3,4,5,6,7,8,9,10]

function multiplicarPor3(array) {
  const novoArray=[]

  for (const numero of array) {
    novoArray.push(numero*3)
  }
  return novoArray
}

// console.log( multiplicarPor3(listaDeNumeros));

function retornaPares(array) {
  const novoArray=[]
  for (let index = 0; index < array.length; index++) {
   
    if(array[index]%2===0){
      novoArray.push(array[index])
    }
    
  }
  return novoArray
}

// console.log(retornaPares(listaDeNumeros));

function principal(array, callback) {

  const retornoCallback = callback(array)
  return retornoCallback 
}

// console.log(principal(listaDeNumeros,multiplicarPor3 ));
// console.log(principal(listaDeNumeros, retornaPares));

//Pratica 2

const callback1=(item, index,array)=>{

  return item*3

}
const nomes = ["Roberta", "Victor", "Lucas"]
const nomesDaMiranda = nomes.map((item)=>{
  return `${item} da Miranda`
})

const novaLista = listaDeNumeros.map((numero)=>{
  return numero*3
})

// console.log(novaLista );
//Prática 3

const novalistaDePares = listaDeNumeros.filter((cadaNumero)=>{
  return cadaNumero%2===0

})


// console.log(novalistaDePares);

//EXTRA
const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 }
]

const listaAlterada= pokemons.map((item)=>{

  
  return {...item, vida:100}

})

 const listaFiltrada = pokemons.filter((item)=>{

  return item.tipo==="fogo"

})

console.log(listaFiltrada);

console.log(listaAlterada);