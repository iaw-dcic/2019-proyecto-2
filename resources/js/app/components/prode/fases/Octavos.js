import React from 'react';
import { ArcherElement } from "react-archer";
import Partido from "../Partido";

class Octavos extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="column">
                <div style={partidoBaseStyle}>
                    <ArcherElement id="partido0"
                        relations={
                            [{
                                targetId: 'partido8',
                                targetAnchor: 'left',
                                sourceAnchor: 'right',
                            }]
                        }
                    >

                        <Partido
                            ganador={this.props.ganador}
                            partido={this.props.llaves[0]}
                        />

                    </ArcherElement>
                </div>

                <div style={partidoBaseStyle}>
                    <ArcherElement id="partido1"
                        relations={
                            [{
                                targetId: 'partido8',
                                targetAnchor: 'left',
                                sourceAnchor: 'right',
                            }]
                        }
                    >
                        <Partido
                            ganador={this.props.ganador}
                            partido={this.props.llaves[1]}
                        />

                    </ArcherElement>
                </div>

                <div style={partidoBaseStyle}>
                    <ArcherElement id="partido2"
                        relations={
                            [{
                                targetId: 'partido9',
                                targetAnchor: 'left',
                                sourceAnchor: 'right',
                            }]
                        }
                    >

                        <Partido
                            ganador={this.props.ganador}
                            partido={this.props.llaves[2]}
                        />

                    </ArcherElement>
                </div>

                <div style={partidoBaseStyle}>
                    <ArcherElement id="partido3"
                        relations={
                            [{
                                targetId: 'partido9',
                                targetAnchor: 'left',
                                sourceAnchor: 'right',
                            }]
                        }
                    >
                        <Partido
                            ganador={this.props.ganador}
                            partido={this.props.llaves[3]}
                        />

                    </ArcherElement>
                </div>

                <div style={partidoBaseStyle}>
                    <ArcherElement id="partido4"
                        relations={
                            [{
                                targetId: 'partido10',
                                targetAnchor: 'left',
                                sourceAnchor: 'right',
                            }]
                        }
                    >

                        <Partido
                            ganador={this.props.ganador}
                            partido={this.props.llaves[4]}
                        />

                    </ArcherElement>
                </div>

                <div style={partidoBaseStyle}>
                    <ArcherElement id="partido5"
                        relations={
                            [{
                                targetId: 'partido10',
                                targetAnchor: 'left',
                                sourceAnchor: 'right',
                            }]
                        }
                    >

                        <Partido
                            ganador={this.props.ganador}
                            partido={this.props.llaves[5]}
                        />

                    </ArcherElement>
                </div>

                <div style={partidoBaseStyle}>
                    <ArcherElement id="partido6"
                        relations={
                            [{
                                targetId: 'partido11',
                                targetAnchor: 'left',
                                sourceAnchor: 'right',
                            }]
                        }
                    >
                        <Partido
                            ganador={this.props.ganador}
                            partido={this.props.llaves[6]}
                        />

                    </ArcherElement>
                </div>

                <div style={partidoBaseStyle}>
                    <ArcherElement id="partido7"
                        relations={
                            [{
                                targetId: 'partido11',
                                targetAnchor: 'left',
                                sourceAnchor: 'right',
                            }]
                        }
                    >
                        <Partido
                            ganador={this.props.ganador}
                            partido={this.props.llaves[7]}
                        />

                    </ArcherElement>
                </div>
            </div>
        );
    }
}

export default Octavos;

const partidoBaseStyle = { marginTop: '20px' };

