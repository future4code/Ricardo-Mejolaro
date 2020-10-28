import React, { Component } from 'react';

/*Tags Styleds*/
import {
  Header,
  H1,
  H2,
  Title,
} from './styles'

export default class App extends Component {
  render() {
    return (
      <Header>
        <H1>{this.props.titlePrincipal}</H1>
        <H2>{this.props.subTitle}</H2>
        <Title>{this.props.title}</Title>
      </Header>
    );
  }
}