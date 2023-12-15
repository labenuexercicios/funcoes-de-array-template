// PRÁTICA 1.1

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let multiplicaPor3 = numeros.map(x => x * 3);
//console.log(multiplicaPor3);

let numerosPares = numeros.filter(x => x % 2 === 0);
//console.log(numerosPares);


// PRÁTICA 1.2
function qualquer(array1, callback) {
  let arrayX = array1;
  callback(arrayX)
}

// PRÁTICA 2
const arrayNumerico = [5, 7, 3, 4, 10, 55, 23, 8, 45];
let triplicarNumeros = arrayNumerico.map(z => z * 3);
//console.log(triplicarNumeros)

// PRÁTICA 3


// PRÁTICA EXTRA
const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 }
]

const pokemonsVidaCheia = pokemons.map(pokemon => pokemon.vida = 50);
console.log(pokemonsVidaCheia);

const pokemonsDeFogo = pokemons.filter(pokemon => pokemon.tipo === "fogo");
console.log(pokemonsDeFogo);