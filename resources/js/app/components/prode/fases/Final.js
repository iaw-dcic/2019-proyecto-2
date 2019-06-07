import React from 'react';
import { ArcherElement } from "react-archer";
import Partido from "../Partido";

class Final extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="column">
                <div style={partidoFinal}>
                    <ArcherElement id="partido14">
                        <Partido
                            ganador={this.props.ganador}
                             partido={this.props.llaves[14]}
                        />
                    </ArcherElement>
                </div>
            </div>
        );
    }
}

export default Final;

const partidoFinal = {marginTop: '325px' , marginLeft: '70px'};
