import React, { Component } from 'react';
import styled from 'styled-components';

import { PageOne } from './components/PageOne/PageOne';
import { PageTwo } from './components/PageTwo/PageTwo';
import { PageThree } from './components/PageThree/PageThree';
import { PageFinal } from './components/PageFinal/PageFinal';

const ButtonContainer = styled.div`
  display: flex;
`

const Button = styled.button`
  margin: 20px auto;
`

export default class App extends Component {
  state = {
    page: 1
  }

  renderPage = () => {
    switch (this.state.page) {
      case 1:
        return <PageOne />
      case 2:
        return <PageTwo />
      case 3:
        return <PageThree />
      case 4:
        return <PageFinal />
      default:
        return <div>Pagina não encontrada!</div>
    }
  }

  nextPage = () => {
    this.setState({ page: this.state.page + 1 })
  }

  render() {
    return (
      <div>
        {this.renderPage()}
        {this.state.page !== 4 &&
          <ButtonContainer>
            <Button onClick={this.nextPage}>Próxima etapa</Button>
          </ButtonContainer>
        }
      </div>
    );
  }
}

