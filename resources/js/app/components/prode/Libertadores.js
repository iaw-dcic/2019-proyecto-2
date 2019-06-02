import React from 'react';
import {ArcherContainer, ArcherElement} from "react-archer";
import Partido from "./Partido";
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
                    this.props.llaves.length === 0 ?
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
                                    <div className="column">
                                        <div style={partidoBaseStyle}>
                                            <ArcherElement
                                                id="partido0"
                                                relations={
                                                    [{
                                                        targetId: 'partido8',
                                                        targetAnchor: 'left',
                                                        sourceAnchor: 'right',
                                                    }]
                                                }
                                            >

                                                <Partido
                                                    ganador={this.selectGanador}
                                                    partido={this.props.llaves[0]}
                                                />

                                            </ArcherElement>
                                        </div>

                                        <div style={partidoBaseStyle}>
                                            <ArcherElement
                                                id="partido1"
                                                relations={
                                                    [{
                                                        targetId: 'partido8',
                                                        targetAnchor: 'left',
                                                        sourceAnchor: 'right',
                                                    }]
                                                }
                                            >
                                                <Partido
                                                    ganador={this.selectGanador}
                                                    partido={this.props.llaves[1]}
                                                />

                                            </ArcherElement>
                                        </div>

                                        <div style={partidoBaseStyle}>
                                            <ArcherElement
                                                id="partido2"
                                                relations={
                                                    [{
                                                        targetId: 'partido9',
                                                        targetAnchor: 'left',
                                                        sourceAnchor: 'right',
                                                    }]
                                                }
                                            >

                                                <Partido
                                                    ganador={this.selectGanador}
                                                    partido={this.props.llaves[2]}
                                                />

                                            </ArcherElement>
                                        </div>

                                        <div style={partidoBaseStyle}>
                                            <ArcherElement
                                                id="partido3"
                                                relations={
                                                    [{
                                                        targetId: 'partido9',
                                                        targetAnchor: 'left',
                                                        sourceAnchor: 'right',
                                                    }]
                                                }
                                            >
                                                <Partido
                                                    ganador={this.selectGanador}
                                                    partido={this.props.llaves[3]}
                                                />

                                            </ArcherElement>
                                        </div>

                                        <div style={partidoBaseStyle}>
                                            <ArcherElement
                                                id="partido4"
                                                relations={
                                                    [{
                                                        targetId: 'partido10',
                                                        targetAnchor: 'left',
                                                        sourceAnchor: 'right',
                                                    }]
                                                }
                                            >

                                                <Partido
                                                    ganador={this.selectGanador}
                                                    partido={this.props.llaves[4]}
                                                />

                                            </ArcherElement>
                                        </div>

                                        <div style={partidoBaseStyle}>
                                            <ArcherElement
                                                id="partido5"
                                                relations={
                                                    [{
                                                        targetId: 'partido10',
                                                        targetAnchor: 'left',
                                                        sourceAnchor: 'right',
                                                    }]
                                                }
                                            >

                                                <Partido
                                                    ganador={this.selectGanador}
                                                    partido={this.props.llaves[5]}
                                                />

                                            </ArcherElement>
                                        </div>

                                        <div style={partidoBaseStyle}>
                                            <ArcherElement
                                                id="partido6"
                                                relations={
                                                    [{
                                                        targetId: 'partido11',
                                                        targetAnchor: 'left',
                                                        sourceAnchor: 'right',
                                                    }]
                                                }
                                            >

                                                <Partido
                                                    ganador={this.selectGanador}
                                                    partido={this.props.llaves[6]}
                                                />

                                            </ArcherElement>
                                        </div>

                                        <div style={partidoBaseStyle}>
                                            <ArcherElement
                                                id="partido7"
                                                relations={
                                                    [{
                                                        targetId: 'partido11',
                                                        targetAnchor: 'left',
                                                        sourceAnchor: 'right',
                                                    }]
                                                }
                                            >

                                                <Partido
                                                    ganador={this.selectGanador}
                                                    partido={this.props.llaves[7]}
                                                />

                                            </ArcherElement>
                                        </div>


                                    </div>

                                    <div className="column">
                                        <div style={partidoSegundaFase}>
                                            <ArcherElement
                                                id="partido8"
                                                relations={
                                                    [{
                                                        targetId: 'partido12',
                                                        targetAnchor: 'left',
                                                        sourceAnchor: 'right',
                                                    }]
                                                }
                                            >

                                                <Partido
                                                    ganador={this.selectGanador}
                                                    partido={this.props.llaves[8]}

                                                />

                                            </ArcherElement>
                                        </div>

                                        <div style={partidoSegundaFase}>
                                            <ArcherElement
                                                id="partido9"
                                                relations={
                                                    [{
                                                        targetId: 'partido12',
                                                        targetAnchor: 'left',
                                                        sourceAnchor: 'right',
                                                    }]
                                                }
                                            >

                                                <Partido
                                                    ganador={this.selectGanador}
                                                    partido={this.props.llaves[9]}
                                                />

                                            </ArcherElement>
                                        </div>

                                        <div style={partidoSegundaFase}>
                                            <ArcherElement
                                                id="partido10"
                                                relations={
                                                    [{
                                                        targetId: 'partido13',
                                                        targetAnchor: 'left',
                                                        sourceAnchor: 'right',
                                                    }]
                                                }
                                            >

                                                <Partido
                                                    ganador={this.selectGanador}
                                                    partido={this.props.llaves[10]}

                                                />

                                            </ArcherElement>
                                        </div>

                                        <div style={partidoSegundaFase}>
                                            <ArcherElement
                                                id="partido11"
                                                relations={
                                                    [{
                                                        targetId: 'partido13',
                                                        targetAnchor: 'left',
                                                        sourceAnchor: 'right',
                                                    }]
                                                }
                                            >

                                                <Partido
                                                    ganador={this.selectGanador}
                                                    partido={this.props.llaves[11]}

                                                />

                                            </ArcherElement>
                                        </div>

                                    </div>

                                    <div className="column">
                                        <div style={partidoTerceraFase}>
                                            <ArcherElement
                                                id="partido12"
                                                relations={
                                                    [{
                                                        targetId: 'partido14',
                                                        targetAnchor: 'left',
                                                        sourceAnchor: 'right',
                                                    }]
                                                }
                                            >

                                                <Partido
                                                    ganador={this.selectGanador}
                                                    partido={this.props.llaves[12]}

                                                />

                                            </ArcherElement>
                                        </div>

                                        <div style={partidoTerceraFase}>
                                            <ArcherElement
                                                id="partido13"
                                                relations={
                                                    [{
                                                        targetId: 'partido14',
                                                        targetAnchor: 'left',
                                                        sourceAnchor: 'right',
                                                    }]
                                                }
                                            >

                                                <Partido
                                                    ganador={this.selectGanador}
                                                    partido={this.props.llaves[13]}

                                                />

                                            </ArcherElement>
                                        </div>
                                    </div>

                                    <div className="column">
                                        <div style={partidoFinal}>
                                            <ArcherElement
                                                id="partido14"
                                            >

                                                <Partido
                                                    ganador={this.selectGanador}
                                                    partido={this.props.llaves[14]}

                                                />

                                            </ArcherElement>
                                        </div>
                                    </div>

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

const partidoBaseStyle = { marginTop: '20px' };
const partidoSegundaFase = {marginTop: '60px' , marginBottom: '110px' , marginLeft: '70px'};
const partidoTerceraFase = {marginTop: '140px' ,marginBottom: '300px', marginLeft: '70px'};
const partidoFinal = {marginTop: '325px' , marginLeft: '70px'};

