import React from 'react';
import {ArcherContainer} from "react-archer";
import Octavos from "./fases/Octavos"
import Cuartos from "./fases/Cuartos"
import Semifinal from "./fases/Semifinal"
import Final from "./fases/Final"


import {Jumbotron , Container} from 'react-bootstrap';

import '../../utils/fonts.css';

export default class Libertadores extends React.Component {

    constructor(props){
        super(props);

        this.selectGanador=this.selectGanador.bind(this);
    }

    selectGanador(nro_partido,nro_proximoPartido,equipoGanador) {
        this.props.ganador(nro_partido,nro_proximoPartido,equipoGanador)
    }

    render() {
        return (

            <Jumbotron style={fixedSize}>

                {
                    this.props.llaves === null ?
                        <div className="container text-center p-5">
                            <h3>No ningún prode cargado</h3>
                        </div>
                        :
                        <>

                            <Container className="text-center">
                                <h2>{this.props.nombre}</h2>
                                <hr/>
                            </Container>
                            <ArcherContainer strokeColor='black' >
                                <div className="row">

                                    <Octavos
                                        ganador={this.selectGanador}
                                        llaves={this.props.llaves}
                                    />

                                    <Cuartos
                                        ganador={this.selectGanador}
                                        llaves={this.props.llaves}
                                    />

                                    <Semifinal
                                        ganador={this.selectGanador}
                                        llaves={this.props.llaves}
                                    />

                                    <Final
                                        ganador={this.selectGanador}
                                        llaves={this.props.llaves}
                                    />

                                </div>

                            </ArcherContainer>
                        </>

                }

            </Jumbotron>

        )
    }
}

const fixedSize = {
    height : '900px',
    weight : '700px',
    backgroundColor : '#fffff'
}

