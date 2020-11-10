import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PokeCard(props) {
  const [pokemon, setPokemon] = useState({});

  // método que roda após a atualização do componente.
  // Um dos casos de atualização do componente é a
  // mudança da props que está sendo passado pra ele
  useEffect(() => {
    // aqui, é feita uma verificação da props anterior com a props atual.
    // Caso a props anterior seja diferente da props atual,
    // a função pegaPokemon é chamada.
    pegaPokemon(props.pokemon);
  }, [props.pokemon]);

  // função que bate na poke API com um nome específico de pokemon
  // Isso permite que consigamos pegar as infos dos pokemons.
  // Nos métodos de ciclo de vida, ela é chamada passando como
  // parâmetro o nome de pokemon que está chegando como props.
  const pegaPokemon = async (pokeName) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokeName}`
      );
      setPokemon(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const pokemonView = pokemon;

  return (
    <div>
      <p>{pokemonView.name}</p>
      <p>{pokemonView.weight} Kg</p>
      {pokemonView.types && <p>{pokemonView.types[0].type.name}</p>}
      {pokemonView.sprites && (
        <img src={pokemonView.sprites.front_default} alt={pokemonView.name} />
      )}
    </div>
  );
}
