import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard";

export default function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  const getAllPokemons = async () => {
    try {
      // função axios que está batendo na API e buscando 151 pokemons
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=151"
      );
      // função que está setando no estado os 151 pokemons
      setPokeList(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const changePokeName = (event) => {
    setPokeName(event.target.value);
  };

  // método que roda após a montagem do componente
  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="App">
      {/* evento onChange chama função toda vez que o usuário 
        escolhe um novo pokemon no dropdown */}
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {/* renderizando a lista de pokemons como opções do select */}
        {pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
      {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  );
}
