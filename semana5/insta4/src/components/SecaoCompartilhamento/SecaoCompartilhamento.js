import React, { Component } from 'react'
import './SecaoCompartilhamento.css'

import { Icone } from '../Icone/Icone'

import iconeInstagram from '../../img/instagram.svg'
import iconeFacebook from '../../img/facebook.svg'
import iconeTwitter from '../../img/twitter.svg'

export class SecaoCompartilhamento extends Component {
	state = {
		comentario: ""
	}

	onChangeComentario = (event) => {
		this.setState({comentario: event.target.value})
	}

	onClickCompartilhamento = (event) => {
		alert(`Post compartilhado no ${event.target.id} com a mensagem: ${this.state.comentario}`)
		this.setState({comentario: ""})
	}

	render() {
		return <div className={'toshare-container'}>
			<Icone
				icone={iconeInstagram}
				onClickIcone={this.onClickCompartilhamento}
				id={'Instagram'}
			/>
			<Icone
				icone={iconeFacebook}
				onClickIcone={this.onClickCompartilhamento}
				id={'Facebook'}
			/>
			<Icone
				icone={iconeTwitter}
				onClickIcone={this.onClickCompartilhamento}
				id={'Twitter'}
			/>

			<input type="text" value={this.state.comentario} onChange={this.onChangeComentario}/>
		</div>
	}
}
