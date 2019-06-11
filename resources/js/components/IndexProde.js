import React, { Component } from 'react';
import Eliminatoria from './Eliminatoria';

export default class IndexProde extends Component {
    constructor(props){
        super(props);
        this.state = {
            eliminatorias: this.props.location.state.eliminatorias
        }
        this.setGanador = this.setGanador.bind(this);
    }

     setGanador(indiceActual,idPasa){
         
        if (indiceActual === 15)
            alert('Felicitaciones campeon!!!');

        let eliminatorias_copia = this.state.eliminatorias.slice();
        eliminatorias_copia[indiceActual].id_pasa= idPasa;
        
        this.setState({
            eliminatorias:eliminatorias_copia
        }); 
     }

     guardarProde(){
        let eliminatorias= this.state.eliminatorias;
        const axios = require('axios');
        
        //obtengo el token del usr
        var token = document.head.querySelector('meta[name="user-token"]');
        //uso Bearer
        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token.content; 

        //obtengo el prode recibido de MisProdes
        const prode= this.state.eliminatorias[0].prode_id;

        let axiosConfig={
            headers:{
                'Accept': 'application/json',
               // 'Authorization': 'Bearer'+token.content
            }
        }
        axios.put(`/api/prodes/${prode}`, {
            eliminatorias
        }).then((response) => {
            this.props.history.push('/prodes');
        })
    }


  
    render() {
        return ( 
        <div>
         {this.state.eliminatorias.length > 0 ? 
            <div >
                    <div className="container"  >
                        <button onClick={() => this.guardarProde()} className="btn btn-primary btnGuardar"> Guardar Prode</button>
                        <h1>Prode: {this.props.location.state.prode.nombre}</h1>
                    </div>
                    <table className="table setAncho">
                            <thead>
                            <tr>
                            <th scope="col">Octavos</th>
                            <th scope="col" >Cuartos</th>
                            <th scope="col" >Semifinal</th>
                            <th scope="col">Final</th>
                            <th scope="col">Semifinal</th>                            
                            <th scope="col">Cuartos</th>                            
                            <th scope="col">Octavos</th>                            

                            </tr>
                            </thead>
                        <tbody>
                           <td className="octavos">
                           

                {//aqui el componente Eliminatoria se repite muchas veces. Hubiese sido mejor
                 // usar alguna estructura iterativa como el for. Pero dado que los indices 
                 // van cambiando continuamente, como asi las llamadas a los atributos
                 // (por ejemplo a id_A o a id_Pasa), se opto por dejarlo asi.

                 //Ademas que de esta forma el codigo respeta la estructura de llaves de la vista del fixture.
                }

                            <Eliminatoria 
                                            id_A={ this.state.eliminatorias[0].id_A}
                                            id_B={ this.state.eliminatorias[0].id_B}
                                            setGanador={this.setGanador}
                                            indice={0}
                            />
                            <Eliminatoria 
                                             id_A={ this.state.eliminatorias[1].id_A}
                                             id_B={ this.state.eliminatorias[1].id_B}
                                             setGanador={this.setGanador}
                                             indice={1}
                            />
                            <Eliminatoria 
                                           id_A={ this.state.eliminatorias[2].id_A}
                                           id_B={ this.state.eliminatorias[2].id_B}
                                           setGanador={this.setGanador}
                                           indice={2}
                            />
                            <Eliminatoria 
                                            id_A={ this.state.eliminatorias[3].id_A}
                                            id_B={ this.state.eliminatorias[3].id_B}
                                            setGanador={this.setGanador}
                                            indice={3}
                            />
                            </td>

                             {//CUARTOS
                           }
                           <td >
                               <div className="cuartos1">
                               
                           <Eliminatoria 
                                           id_A={ this.state.eliminatorias[0].id_pasa}
                                           id_B={ this.state.eliminatorias[1].id_pasa}
                                           setGanador={this.setGanador}
                                           indice={9}
                            />
                            </div>
                            <div className="cuartos2">
                            <Eliminatoria 
                                           id_A={ this.state.eliminatorias[2].id_pasa}
                                           id_B={ this.state.eliminatorias[3].id_pasa}
                                           setGanador={this.setGanador}
                                           indice={10}
                            />
                            </div>
                           </td>

                             {//Semifinal
                           }
                           <td>
                               <div  className="semifinal">
                           <Eliminatoria 
                                           id_A={ this.state.eliminatorias[9].id_pasa}
                                           id_B={ this.state.eliminatorias[10].id_pasa}
                                           setGanador={this.setGanador}
                                           indice={13}
                            />
                                </div>
                           </td>

                            {//final
                           }
                           <td>
                               <div className="final">
                          
                           <Eliminatoria 
                                           id_A={ this.state.eliminatorias[13].id_pasa}
                                           id_B={ this.state.eliminatorias[14].id_pasa}
                                           setGanador={this.setGanador}
                                           indice={15}
                            />  
                                </div> 
                           </td>

                              {//Semifinal
                           }
                           <td >
                               <div className="semifinal">
                           <Eliminatoria 
                                            id_A={ this.state.eliminatorias[11].id_pasa}
                                            id_B={ this.state.eliminatorias[12].id_pasa}
                                            setGanador={this.setGanador}
                                            indice={14}
                            />  
                                </div>         
                           </td>

                              {//Cuartos
                           }
                           <td>
                               <div  className="cuartos1">
                           <Eliminatoria 
                                            id_A={ this.state.eliminatorias[4].id_pasa}
                                            id_B={ this.state.eliminatorias[5].id_pasa}
                                            setGanador={this.setGanador}
                                            indice={11}
                            />
                            </div>
                            <div class="cuartos2">
                            <Eliminatoria 
                                            id_A={ this.state.eliminatorias[6].id_pasa}
                                            id_B={ this.state.eliminatorias[7].id_pasa}
                                            setGanador={this.setGanador}
                                            indice={12}
                            />   
                            </div>
                           </td>

                              {//octavos
                           }
                           <td className="octavos"> 
                          <Eliminatoria 
                                             id_A={ this.state.eliminatorias[4].id_A}
                                             id_B={ this.state.eliminatorias[4].id_B}
                                             setGanador={this.setGanador}
                                             indice={4}
                            />
                            <Eliminatoria 
                                            id_A={ this.state.eliminatorias[5].id_A}
                                            id_B={ this.state.eliminatorias[5].id_B}
                                            setGanador={this.setGanador}
                                            indice={5}
                            />
                            <Eliminatoria 
                                            id_A={ this.state.eliminatorias[6].id_A}
                                            id_B={ this.state.eliminatorias[6].id_B}
                                            setGanador={this.setGanador}
                                            indice={6}
                            />
                            <Eliminatoria 
                                             id_A={ this.state.eliminatorias[7].id_A}
                                             id_B={ this.state.eliminatorias[7].id_B}
                                             setGanador={this.setGanador}
                                             indice={7}
                            />
                            </td>

                        </tbody>
                    </table>        
            </div>
        : <div>
            <h1>:)</h1>
        </div>
            }
           
    </div>
    );
  }
}
