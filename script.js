const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 }
]
const aumentovida = (poke) => {
  const novaVida = { ...poke, vida: 100 }
  return novaVida;

}

//const vidacheia = pokemons.map(poke=>({nome:poke.nome,tipo:poke.tipo,vida:100}))   //<------- funciona

const pokemonVidaCheia = pokemons.map(aumentovida);

const pokemonsDeFogo = pokemons.filter((poke)=>{
  return poke.tipo ==="fogo"
})

console.log(pokemonVidaCheia);
console.log(pokemonsDeFogo);