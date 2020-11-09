import React, { Component } from 'react';

import {
  FiltersContainer,
  Select,
  Option
} from './styles';

export default class Filters extends Component {
  onChangeOption = (event) => {
    this.props.filter(event.target.value)
  }
  
  render() {
    return (
      <FiltersContainer>
        <Select onChange={this.onChangeOption}>
          <Option value={'smaller'}>Menor número primeiro</Option>
          <Option value={'bigger'}>Maior número primeiro</Option>
          <Option value={'growing'}>A - Z</Option>
          <Option value={'decreasing'}>Z - A</Option>
        </Select>
      </FiltersContainer>
    );
  }
}