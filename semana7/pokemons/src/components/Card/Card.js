import React, { Component } from 'react';

import {
  CardContainer,
  PokemonImageContainer,
  PokemonImage,
  PokemonNumber,
  PokemonName,
  PowerContainer,
  PokemonPower
} from './styles';

export default class Card extends Component {
  state = {
    powers: this.props.powers,
  }

  render() {
    return (
      <CardContainer>
        <PokemonImageContainer>
          <PokemonImage src={this.props.image} />
        </PokemonImageContainer>
        <PokemonNumber>N° {this.props.number}</PokemonNumber>
        <PokemonName>{this.props.name}</PokemonName>
        <PowerContainer>
          {this.state.powers.length > 0 &&
            this.state.powers.map(power => {
              const powerName = `${power.type.name.charAt(0).toUpperCase()}${power.type.name.substr(1).toLowerCase()}`
              return <PokemonPower key={power.type.name}>{powerName}</PokemonPower>
            })
          }
        </PowerContainer>
      </CardContainer>
    );
  }
}