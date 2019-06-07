import React from 'react';
import { ArcherElement } from "react-archer";
import Partido from "../Partido";

class Cuartos extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="column">
                <div style={partidoSegundaFase}>
                    <ArcherElement id="partido8"
                        relations={
                            [{
                                targetId: 'partido12',
                                targetAnchor: 'left',
                                sourceAnchor: 'right',
                            }]
                        }
                    >

                        <Partido
                            ganador={this.props.ganador}
                            partido={this.props.llaves[8]}

                        />

                    </ArcherElement>
                </div>

                <div style={partidoSegundaFase}>
                    <ArcherElement id="partido9"
                        relations={
                            [{
                                targetId: 'partido12',
                                targetAnchor: 'left',
                                sourceAnchor: 'right',
                            }]
                        }
                    >

                        <Partido
                            ganador={this.props.ganador}
                            partido={this.props.llaves[9]}
                        />

                    </ArcherElement>
                </div>

                <div style={partidoSegundaFase}>
                    <ArcherElement id="partido10"
                        relations={
                            [{
                                targetId: 'partido13',
                                targetAnchor: 'left',
                                sourceAnchor: 'right',
                            }]
                        }
                    >

                        <Partido
                            ganador={this.props.ganador}
                            partido={this.props.llaves[10]}

                        />

                    </ArcherElement>
                </div>

                <div style={partidoSegundaFase}>
                    <ArcherElement id="partido11"
                        relations={
                            [{
                                targetId: 'partido13',
                                targetAnchor: 'left',
                                sourceAnchor: 'right',
                            }]
                        }
                    >

                        <Partido
                            ganador={this.props.ganador}
                            partido={this.props.llaves[11]}

                        />

                    </ArcherElement>
                </div>

            </div>
        );
    }
}

export default Cuartos;

const partidoSegundaFase = {marginTop: '60px' , marginBottom: '110px' , marginLeft: '70px'};
