import React, { Component } from 'react';

import { ItemContainer, Select, Option } from './index';

export class OptionsQuestions extends Component {
  render() {
    return (
      <ItemContainer>
        <Select>
          {this.props.options.map(option => {
            return <Option key={option} options={option}>{option}</Option>
          })}
        </Select>
      </ItemContainer>
    )
  }
}