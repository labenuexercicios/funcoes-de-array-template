const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]

const aumentaVida = (poke)=>{
    return {
      nome: poke.nome,
      tipo: poke.tipo,
      vida: 100
    }
}

const pikachu = {
  nome: 'Pikachu',
  tipo: 'elétrico',
  vida: 35
}
console.log(pikachu);
console.log('Aumentando a vida do Pikachu:', aumentaVida(pikachu));

//B

const pokemonsVidaCheia = pokemons.map(aumentaVida)
console.log('Pokemons Vida Cheia', pokemonsVidaCheia);

//C
const pokemonsFogo = pokemons.filter((poke)=>{
  return poke.tipo === 'fogo'
})

console.log(pokemonsFogo);



