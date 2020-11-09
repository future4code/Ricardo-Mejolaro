import React, { Component } from 'react';
import axios from 'axios';

/*Components*/
import Filters from "../components/Filters/Filters";
import Card from "../components/Card/Card";

/*Tags Styleds*/
import {
  AppContainer,
  CardsContainer,
} from './styles';

/*Constantes reutulizáveis*/
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';


export default class App extends Component {
  state = {
    pokemonsDetails: [],
  }

  componentDidMount() {
    this.getPokemonsName();
  }

  getPokemonsName = async () => {
    try {
      const res = await axios.get(baseUrl);
      this.setState({ pokemonsName: res.data.results })

    } catch (error) {
      console.log(error)
    }

    this.getPokemonsDetails();
  }

  getPokemonsDetails = async () => {
    try {
      for (const pokemon of this.state.pokemonsName) {
        const res = await axios.get(`${baseUrl}${pokemon.name}`)
        const copyArray = [...this.state.pokemonsDetails, res.data]
        this.setState({ pokemonsDetails: copyArray })
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  orderPokemons = (order) => {
    let orderedPokemons = []
    if(order === 'smaller') {
      orderedPokemons = this.state.pokemonsDetails.sort((a, b) => {
        if (a.order > b.order) {
          return 1;
        }
        if (a.order < b.order) {
          return -1;
        }
        return 0;
      })
    }
    if(order === 'bigger') {
      orderedPokemons = this.state.pokemonsDetails.sort((a, b) => {
        if (a.order < b.order) {
          return 1;
        }
        if (a.order > b.order) {
          return -1;
        }
        return 0;
      })
    }
    if (order === 'growing') {
      orderedPokemons = this.state.pokemonsDetails.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      })
    }
    if (order === 'decreasing') {
      orderedPokemons = this.state.pokemonsDetails.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      })
    }
    this.setState({ pokemonsDetails: orderedPokemons });
  }

  render() {
    return (
      <AppContainer>
        <h1>Bem vindo ao mundo dos Pokemons!</h1>
        <Filters filter={this.orderPokemons}/>
        <CardsContainer>
          {this.state.pokemonsDetails.length > 0 && (
              this.state.pokemonsDetails.map(pokemon => {
                const pokemonName = `${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.substr(1).toLowerCase()}`
                return (
                  <Card
                    key={pokemon.id}
                    image={pokemon.sprites.back_default}
                    number={pokemon.order}
                    name={pokemonName}
                    powers={pokemon.types}
                  />)
              })
            )
          }
        </CardsContainer>
      </AppContainer>
    );
  }
}

