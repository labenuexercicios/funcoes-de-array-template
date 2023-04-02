const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 }
]
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const multiplicaporTres = (array) => {
  const resposta = []
  for (const numero of array) {
    resposta.push(numero * 3)
  }

  return resposta
}

const retornaPares = (array) => {
  const resposta = []
  for (const numero of array) {
    if (numero % 2 === 0) {
      resposta.push(numero)
    }
  }
  return resposta
}
const funcaoComplexa = (array, funcaocallback) => {
  const resposta = funcaocallback(array)
  console.log(resposta)
}
// funcaoComplexa(numeros, multiplicaporTres)
// funcaoComplexa(numeros, retornaPares)

const topdasGalaxias = numeros.filter((item) => {
  return item % 2 == 0
}).map((item) => {
  return item * 3
})

const pikachu = {
  nome: "pikachu",
  tipo: "eletrico",
  vida: 35
}
const aumentaPoke = (poke) => {
  return {
    nome: poke.nome,
    tipo: 'Fogo',
    vida: 100
  }
}

console.log(pikachu)
const aumenta = aumentaPoke(pikachu)
console.log(aumenta)
const pokemonsVidaCheia = pokemons.map(aumentaPoke)
console.log(pokemonsVidaCheia)
const pokeVidaMil = pokemons.filter((poke)=> poke.vida =2000).filter((item)=> item.tipo =="fogo")

console.log(pokeVidaMil)

console.log(pokemonsVidaCheia)

const pokemonsDeFoto = pokemons.filter((item) => {return item.tipo == "fogo"})

// console.log(pokemons)
// console.log(pokemonsDeFoto)