import React, { Component } from 'react';



export default class Eliminatoria extends Component {
    
   /*  id_A={ this.state.eliminatorias[3].id_A}
        id_B={ this.state.eliminatorias[3].id_B}
        setGanador={this.setGanador}
        indice={3} */
    
    //renderizo desps de recibir las props
    renderEliminatoria(){
        let equipoA=null;
        let equipoB = null;
        if(this.props.id_A!=null)
            equipoA= JSON.parse(localStorage.getItem(this.props.id_A));
        if(this.props.id_B!=null)
            equipoB= JSON.parse(localStorage.getItem(this.props.id_B));

            return          <tr>
                            <td>
                                <p>     <img    width={27} height={22}  src={equipoA ? equipoA.bandera : ""}  
                                                alt={equipoA ? equipoA.nombre : ""}>
                                        </img> 
                                        <button className="btn btn-light " 
                                            onClick={() => this.props.setGanador(this.props.indice, equipoA.id)}>
                                            {equipoA ? equipoA.nombre : ""}
                                        </button> 
       
                                </p>

                                <p>     <img    width={27} height={22}  src={equipoB ? equipoB.bandera : ""}  
                                                alt={equipoB ? equipoB.nombre : ""}>
                                        </img> 
                                        <button className="btn btn-light " 
                                            onClick={() => this.props.setGanador(this.props.indice, equipoB.id)}>
                                            {equipoB ? equipoB.nombre : ""} 
                                        </button> 
                                </p>
                            </td>
                            </tr>
    }
        

    render() {
        return (
            <div>
               {this.renderEliminatoria()}
            </div>   
        )
    }
}
