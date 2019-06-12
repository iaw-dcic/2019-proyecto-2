import React from 'react';
import { ArcherElement } from "react-archer";
import Partido from "../Partido";

class Semifinal extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (

            <div className="column">
                <div style={semifinalStyle}>
                    <ArcherElement id="partido12"
                        relations={
                            [{
                                targetId: 'partido14',
                                targetAnchor: 'left',
                                sourceAnchor: 'right',
                            }]
                        }
                    >

                        <Partido
                            ganador={this.props.ganador}
                            partido={this.props.llaves[12]}

                        />

                    </ArcherElement>
                </div>

                <div style={semifinalStyle}>
                    <ArcherElement id="partido13"
                        relations={
                            [{
                                targetId: 'partido14',
                                targetAnchor: 'left',
                                sourceAnchor: 'right',
                            }]
                        }
                    >

                        <Partido
                            ganador={this.props.ganador}
                            partido={this.props.llaves[13]}

                        />

                    </ArcherElement>
                </div>
            </div>
        );
    }
}

export default Semifinal;

const semifinalStyle = {marginTop: '140px' ,marginBottom: '300px', marginLeft: '70px'};
