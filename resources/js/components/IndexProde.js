import React, { Component } from 'react';
import Eliminatoria from './Eliminatoria';
import Axios from 'axios';


export default class IndexProde extends Component {
    constructor(props){
        super(props);
        this.state = {
            eliminatorias:[]
        }
        this.setGanador = this.setGanador.bind(this);
    }

     componentDidMount(){
        const axios = require('axios');
        //obtengo el token del usr
        var token = document.head.querySelector('meta[name="user-token"]');
        //uso Bearer
        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token.content; 

        //obtengo el prode recibido de MisProdes
        const prode= this.props.location.state.prode;



        let axiosConfig={
            headers:{
                'Accept': 'application/json',
               // 'Authorization': 'Bearer'+token.content
            }
        }
        axios.get(`/api/prodes/${prode.id}`, axiosConfig).then((response) => {
            this.setState({
                    eliminatorias: response.data,
            })
            console.log(this.state.eliminatorias);
        })
        
    }

     setGanador(indiceActual,idPasa){
        console.log("en el ganador"+ this.state);
        let eliminatorias_copia = this.state.eliminatorias.slice();
        eliminatorias_copia[indiceActual].id_pasa= idPasa;
        //eliminatoriaAux.pasa= equipoPasa;
        this.setState({
            eliminatorias:eliminatorias_copia
        }); 
     }

     guardarProde(){
         console.log('no entra');
        let eliminatorias= this.state.eliminatorias;

        const axios = require('axios');
        //obtengo el token del usr
        var token = document.head.querySelector('meta[name="user-token"]');
        //uso Bearer
        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token.content; 

        //obtengo el prode recibido de MisProdes
        const prode= this.props.location.state.prode;



        let axiosConfig={
            headers:{
                'Accept': 'application/json',
               // 'Authorization': 'Bearer'+token.content
            }
        }
        axios.put(`/api/prodes/${prode.id}`, {
            eliminatorias

        }).then((response) => {
            this.props.history.push('/prodes');
        })
    }


  
    render() {
        return ( 
        <div>
         {this.state.eliminatorias.length >0 ? 
            <div className="container"  >
                    <button onClick={() => this.guardarProde()} className="btn btn-primary"> Guardar Prode</button>

                            <h1>Prode: </h1>

                            <table className="table">
                            <thead>
                            <tr>
                            <th scope="col" textAlign="center">Octavos</th>
                            <th scope="col"  textAlign="center">Cuartos</th>
                            <th scope="col"  textAlign="center">Semifinal</th>
                            <th scope="col">Final</th>
                            <th scope="col">Semifinal</th>                            
                            <th scope="col">Cuartos</th>                            
                            <th textAlign="right" scope="col">Octavos</th>                            

                            </tr>
                            </thead>
                        <tbody>

                           < td>
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
                           <td>
                               <br/><br/><br/>
                           <Eliminatoria 
                                           id_A={ this.state.eliminatorias[0].id_pasa}
                                           id_B={ this.state.eliminatorias[1].id_pasa}
                                           setGanador={this.setGanador}
                                           indice={9}
                            />
                            <br/><br/><br/><br/><br/>
                            <Eliminatoria 
                                           id_A={ this.state.eliminatorias[2].id_pasa}
                                           id_B={ this.state.eliminatorias[3].id_pasa}
                                           setGanador={this.setGanador}
                                           indice={10}
                            />




                           </td>

                             {//Semifinal
                           }
                           <td>
                           <br/><br/><br/><br/><br/><br/><br/><br/>
                           <Eliminatoria 
                                           id_A={ this.state.eliminatorias[9].id_pasa}
                                           id_B={ this.state.eliminatorias[10].id_pasa}
                                           setGanador={this.setGanador}
                                           indice={13}
                            />

                           
                           </td>

                            {//final
                           }
                           <td>
                           <br/><br/><br/><br/><br/><br/>
                           <Eliminatoria 
                                           id_A={ this.state.eliminatorias[13].id_pasa}
                                           id_B={ this.state.eliminatorias[14].id_pasa}
                                           setGanador={this.setGanador}
                                           indice={15}
                            />

                           
                           </td>


                              {//Semifinal
                           }
                           <td>
                         <br/><br/><br/><br/><br/><br/><br/><br/>
                           
                           <Eliminatoria 
                                            id_A={ this.state.eliminatorias[11].id_pasa}
                                            id_B={ this.state.eliminatorias[12].id_pasa}
                                            setGanador={this.setGanador}
                                            indice={14}
                            />

                           
                           </td>

                              {//Cuartos
                           }
                           <td>
                            <br/><br/><br/>
                           
                           <Eliminatoria 
                                            id_A={ this.state.eliminatorias[4].id_pasa}
                                            id_B={ this.state.eliminatorias[5].id_pasa}
                                            setGanador={this.setGanador}
                                            indice={11}
                            />
                            <br/><br/> <br/><br/><br/>
                            <Eliminatoria 
                                            id_A={ this.state.eliminatorias[6].id_pasa}
                                            id_B={ this.state.eliminatorias[7].id_pasa}
                                            setGanador={this.setGanador}
                                            indice={12}
                            />
                           
                           </td>

                              {//octavos
                           }
                           <td>
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
        </div>
            }
            </div>
        );
    }
}
