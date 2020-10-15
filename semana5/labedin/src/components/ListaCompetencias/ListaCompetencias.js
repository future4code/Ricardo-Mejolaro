import React from 'react';
import './ListaCompetencias.css';

function ListaCompetencias(props) {
    return (
        <div className="competence-container">
            <h4>{props.competencia}</h4>
            {props.certificate && <img src={props.certificate} alt={"certificate"}/>}           
        </div>
    )
}

export default ListaCompetencias;