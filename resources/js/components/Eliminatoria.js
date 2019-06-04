import React, { Component } from 'react';



export default class Eliminatoria extends Component {

    constructor(props){
        super(props);
        this.state={
            eliminatoria:{
                cruce_id:"",
                prode_id:"",
                nombre_A:"",
                nombre_B:"",
                bandera_A:"",
                bandera_B:"",
                pasa: null
            }
        }
    }
    //this.props.eliminatoria
    //this.props.setGanador()
    //this.props.indiceProxRonda
    //this.props.avanzar()

    avanzar(eliminatoria,equipoPasa){
        //modificar el estado del encuentro para poner quien pasa
        //this.props.setGanador(eliminatoria,this.props.indiceProxRonda, equipoPasa);
        if (eliminatoria.nombre_A != null  && eliminatoria.nombre_B !=null)
            this.props.avanzar(eliminatoria,equipoPasa, this.props.indiceProxRonda);

        //sino, no puedo avanzar aun
    }
    
    //renderizo desps de recibir las props
    renderEliminatoria(){
       if (this.props.eliminatoria)
            return          <tr>
                            <td>
                                <p>     <img    width={25} height={25}  src={this.props.eliminatoria.bandera_A}  
                                                alt={this.props.eliminatoria.nombre_A}>
                                        </img> 
                                        <button className="btn btn-light " 
                                            onClick={() => this.avanzar(this.props.eliminatoria, 1)}>
                                            {this.props.eliminatoria.nombre_A}
                                        </button> 
       
                                </p>

                                <p>     <img    width={25} height={25}  src={this.props.eliminatoria.bandera_B}  
                                                alt={this.props.eliminatoria.nombre_B}>
                                        </img> 
                                        <button className="btn btn-light " 
                                            onClick={() => this.avanzar(this.props.eliminatoria, 2)}>
                                            {this.props.eliminatoria.nombre_B} 
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
