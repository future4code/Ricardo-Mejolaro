import React, { Component } from 'react';

import {Label, ItemContainer} from './index';

export class OpenQuestion extends Component {
  render() {
    return (
      <ItemContainer>
        <Label>{this.props.question}</Label>
      </ItemContainer>
    )
  }
}