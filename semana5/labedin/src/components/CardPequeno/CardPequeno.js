import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.imagem } alt="icones" />
            <div>
                <span>{ props.titulo }</span>
                <p>{ props.conteudo }</p>
            </div>
        </div>
    )
}

export default CardPequeno;