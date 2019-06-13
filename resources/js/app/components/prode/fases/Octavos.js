import React from 'react';
import { ArcherElement } from "react-archer";
import Partido from "../Partido";

class Octavos extends React.Component {

    constructor(props){
        super(props);
    }

    armarOctavos(){

        var proximoPartido = 8;
        var nextPartido=0;
        var rows = [];

        for (var i = 0; i < 8; i++) {

            if(nextPartido === 2){
                nextPartido = 0;
                proximoPartido++;
            }
            nextPartido++;

            rows.push(
                <div key={i} style={octavosStyle}>
                    <ArcherElement id={"partido"+i}
                                   relations={
                                       [{
                                           targetId: "partido"+proximoPartido,
                                           targetAnchor: 'left',
                                           sourceAnchor: 'right',
                                       }]
                                   }
                    >

                        <Partido
                            ganador={this.props.ganador}
                            partido={this.props.llaves[i]}
                        />

                    </ArcherElement>
                </div>
            );
        }

        return rows;

    }

    render() {
        return (
            <div className="column">

                { this.armarOctavos() }

            </div>
        );
    }
}

export default Octavos;

const octavosStyle = { marginTop: '20px' };

