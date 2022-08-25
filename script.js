// const listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const multiplicaPorTres = (arrayDeNumeros) => {
//   const arrayMultiplicado = [];

//   for (const numero of arrayDeNumeros) {
//     arrayMultiplicado.push(numero * 3);
//   }
//   // console.log('TRIPLO', arrayMultiplicado);
//   return arrayMultiplicado;
// }

// // multiplicaPorTres(listaDeNumeros)
// console.log('Triplo', multiplicaPorTres(listaDeNumeros));

// const retornaPares = (arrayDeNumeros) => {
//   const arrayPares = [];

//   for (let numero of arrayDeNumeros) {
//     if (numero % 2 === 0) {
//       arrayPares.push(numero);
//     }
//   }
//   return arrayPares;
// }

// console.log('Pares', retornaPares(listaDeNumeros));


// // const imprimeNumeros = (arrayDeNumeros, callBack) {
// //   const response = callBack(arrayDeNumeros);

// //   console.log('FUNCTION C', response);
// // }

// // imprimeNumeros(listaDeNumeros, multiplicaPorTres);
// // imprimeNumeros(listaDeNumeros, retornaPares);
// // CALLBACK - com o callback você faz uma lógica onde com o primeiro parâmetro você busca a 
// // array que você quer usar, e no segundo parâmetro a função que você quer usar, dando a 
// // possibilidade de fazer várias combinações de arrays e funções diferentes.
// const imprimeNumeros = (arrayDeNumeros, callBack) => {
//   const response = callBack(arrayDeNumeros);
//   console.log('ImprimeNumeros', response);
// }

// imprimeNumeros(listaDeNumeros, multiplicaPorTres);
// imprimeNumeros(listaDeNumeros, retornaPares);

// // MAP
// const multiplicaPorTresComMap = listaDeNumeros.map((numero, indice, array) => {
//   return numero * 3;
// })

// console.log('MAP', multiplicaPorTresComMap);

// //FILTER
// const retornaParesComFilter = listaDeNumeros.filter((num, indice, array) => {
//   console.log('ÍNDICE ', indice);
//   return num % 2 === 0; // indice e array não são utilizados nesse exemplo 
//   // mas podem ser úteis em outras situações
// })

// console.log('FILTER', retornaParesComFilter);


// // Então o Map pode alterar a array e o Filter só checa uma condição e 
// // devolve o que se encaixa na condição, certo?


// const pokemons = [
//   { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
//   { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
//   { nome: 'Charmander', tipo: 'fogo', vida: 35 },
//   { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
//   { nome: 'Squirtle', tipo: 'água', vida: 45 },
//   { nome: 'Psyduck', tipo: 'água', vida: 25 },
// ]

// console.log(pokemons);
// // PARTE A
// const aumentaVida = (poke) => {
//   return {
//     nome: poke.nome,
//     tipo: poke.tipo,
//     vida: 100
//   }

//   // return {...poke, vida: 100} OUTRA FORMA DE FAZER 
// }

// const pikachu = {
//   nome: "Pikachu",
//   tipo: "elétrico",
//   vida: 10
// }

// console.log(pikachu);
// console.log(aumentaVida(pikachu));

// // PARTE B
// const pokemonsVidaCheia = pokemons.map(aumentaVida);

// console.log('Pokémons Vida Cheia', pokemonsVidaCheia);
// console.log('Pokémons Vida Descheia', pokemons);


// // const pokemonsVidaCheia1 = pokemons.map((a) => a.vida = 100)
// // console.log(pokemons);

// // PARTE C
// const pokemonsDeFogo = pokemonsVidaCheia.filter((poke) => {
//   return poke.tipo === 'fogo';
// })

// console.log('Pokémons de Fogo', pokemonsDeFogo);

let pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]

console.log(pokemons);
// PARTE A
const aumentaVida = (poke) => {
  return {
    nome: poke.nome,
    tipo: poke.tipo,
    vida: 100
  }

  // return {...poke, vida: 100} OUTRA FORMA DE FAZER 
}

const pikachu = {
  nome: "Pikachu",
  tipo: "elétrico",
  vida: 10
}

console.log(pikachu);
console.log(aumentaVida(pikachu));

// PARTE B
pokemons = pokemons.map(aumentaVida);

console.log('Pokémons Vida Cheia', pokemons);
// console.log('Pokémons Vida Descheia', pokemons);


// const pokemonsVidaCheia1 = pokemons.map((a) => a.vida = 100)
// console.log(pokemons);

// PARTE C
const pokemonsDeFogo = pokemons.filter((poke) => {
  return poke.tipo === 'fogo';
})

console.log('Pokémons de Fogo', pokemonsDeFogo);
//