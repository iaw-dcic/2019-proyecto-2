import React from 'react';
import { ArcherElement } from "react-archer";
import Partido from "../Partido";

class Cuartos extends React.Component {

    constructor(props){
        super(props);
    }

    armarCuartos(){

        var proximoPartido = 12;
        var nextPartido=0;
        var rows = [];

        for (var i = 8; i < 12; i++) {

            if(nextPartido === 2){
                nextPartido = 0;
                proximoPartido++;
            }
            nextPartido++;

            rows.push(
                <div key={i} style={cuartosStyle}>
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

                { this.armarCuartos() }

            </div>
        );
    }
}

export default Cuartos;

const cuartosStyle = {marginTop: '60px' , marginBottom: '110px' , marginLeft: '70px'};
