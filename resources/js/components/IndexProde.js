import React, { Component } from 'react';
import Eliminatoria from './Eliminatoria';
import Axios from 'axios';


export default class IndexProde extends Component {
    constructor(props){
        super(props);
        this.state = {
            eliminatorias:[]
        }
    }

     metodoCall(){
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
        let response = axios.get(`/api/prodes/${prode.id}`, axiosConfig);

       return response;
    }

    //-----------------------local storage------------------------------------
    componentWillMount(){
        localStorage.getItem('eliminatorias') && this.setState({
            eliminatorias: JSON.parse(localStorage.getItem('eliminatorias'))
        })
    }

     async componentDidMount(){
        if (!localStorage.getItem('eliminatorias')){
            const response = await this.metodoCall();
            this.setState((estadoActual)=> {
                var eliminatorias= response.data;
            return ({ eliminatorias })
            })
        }
        //sino uso el guardado en localStorage   
    }

    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('eliminatorias', JSON.stringify(nextState.eliminatorias));
    }
 //-----------------------local storage------------------------------------

            //obj       int             int
    avanzar(eliminatoria,equipoPasa, indiceProxRonda){
        let existe=null;

        this.state.eliminatorias.forEach((eliminatoria) => {    
            if (eliminatoria.cruce_id == indiceProxRonda   && existe===null){
                existe= eliminatoria;
            }
        });

        //si cruce es impar -> es equipo_A
        if (eliminatoria.cruce_id % 2 != 0) 
            //la eliminatoria no existe
            if (existe == null){
                existe = {
                    cruce_id: indiceProxRonda,
                    prode_id: eliminatoria.prode_id,
                    nombre_A: equipoPasa,
                    nombre_B: null,
                    

                }
            } 
           

        
        const eliminatorias_copia ={ ...this.state.eliminatorias};
        //creo la nueva eliminatoria o veo si existe y agrego otro equipo




        this.setState({
            
            eliminatorias: eliminatorias_copia
        });
         /*let eliminatoriaAux = eliminatorias_copia[eliminatoria.cruce_id-1];
        eliminatoriaAux.pasa= equipoPasa;
        this.setState({
            eliminatorias: eliminatorias_copia
        });   */

       // console.log(this.state.eliminatorias);

    }


     setGanador(eliminatoria1,eliminatoria2,nroCruce){
     
     
        if (eliminatoria1.pasa !=null && eliminatoria2.pasa == null){
            if (eliminatoria1.includes(eliminatoria1.nombre_A)){
                var bandera_A= eliminatoria1.bandera_A;
            }
            else if (eliminatoria1.includes(eliminatoria1.nombre_B)){
                var bandera_A= null;
                var bandera_B= eliminatoria1.bandera_B;
            }

            let eliminatorias_copia = this.state.eliminatorias.slice();
            var eliminatoria = new Eliminatoria(nroCruce,eliminatoria1.prode_id,eliminatoria1.pasa,
                                null, bandera_A,bandera_B,null);

            //eliminatoriaAux.pasa= equipoPasa;
            this.setState({
                eliminatorias:eliminatorias_copia
            }); 

     }


       



       /*  let eliminatorias_copia = this.state.eliminatorias.slice();
        let eliminatoria = eliminatorias_copia[indiceProxRonda];
        eliminatoria.pasa= equipoPasa;
        this.setState({
            eliminatorias:eliminatorias_copia
        }); 
        */ 

        return eliminatoria;
    } 

    render() {
        return (
            <div >
                            <h1>Prode: </h1>

                            <table className="table">
                            <thead>
                            <tr>
                            <th scope="col">Octavos</th>
                            <th scope="col">Cuartos</th>
                            <th scope="col">Semifinal</th>
                            <th scope="col">Final</th>
                            <th scope="col">Semifinal</th>                            
                            <th scope="col">Cuartos</th>                            
                            <th scope="col">Octavos</th>                            

                            </tr>
                            </thead>
                        <tbody>

                        
                            <Eliminatoria 
                                            eliminatoria={this.state.eliminatorias[0]}
                                            setGanador={this.setGanador}
                                            indiceProxRonda={9}
                                            avanzar={this.avanzar}
                            />
                            <Eliminatoria 
                                            eliminatoria={this.state.eliminatorias[1]}
                                            setGanador={this.setGanador}
                                            indiceProxRonda={9}
                                            avanzar={this.avanzar}
                            />
                            <Eliminatoria 
                                            eliminatoria={this.state.eliminatorias[2]}
                                            setGanador={this.setGanador}
                                            indiceProxRonda={10}
                                            avanzar={this.avanzar}
                            />
                            <Eliminatoria 
                                            eliminatoria={this.state.eliminatorias[3]}
                                            setGanador={this.setGanador}
                                            indiceProxRonda={10}
                                            avanzar={this.avanzar}
                            />
                        


                             {//CUARTOS
                           }
                           <td>
                           <Eliminatoria 
                                            eliminatoria={this.setGanador(this.state.eliminatorias[0],this.state.eliminatorias[1],9) }
                                            setGanador={this.setGanador}
                                            indiceProxRonda={13}
                                            avanzar={this.avanzar}
                            />

                            <Eliminatoria 
                                            eliminatoria={this.setGanador(this.state.eliminatorias[2], this.state.eliminatorias[3],10)}
                                            setGanador={this.setGanador}
                                            indiceProxRonda={13}
                                            avanzar={this.avanzar}
                            />




                           </td>

                             {//Semifinal
                           }
                           <td>
                          
                           
                           </td>

                            {//final
                           }
                           <td>
                          
                           
                           </td>


                              {//Semifinal
                           }
                           <td>
                          
                           
                           </td>

                              {//Cuartos
                           }
                           <td>
                          
                           
                           </td>

                              {//octavos
                           }
                          <Eliminatoria 
                                            eliminatoria={this.state.eliminatorias[4]}
                                            setGanador={this.setGanador}
                                            indiceProxRonda={1}
                            />
                            <Eliminatoria 
                                            eliminatoria={this.state.eliminatorias[5]}
                                            setGanador={this.setGanador}
                                            indiceProxRonda={2}
                            />
                            <Eliminatoria 
                                            eliminatoria={this.state.eliminatorias[6]}
                                            setGanador={this.setGanador}
                                            indiceProxRonda={2}
                            />
                            <Eliminatoria 
                                            eliminatoria={this.state.eliminatorias[7]}
                                            setGanador={this.setGanador}
                                            indiceProxRonda={2}
                            />


                            </tbody>
                            </table>
                    
            </div>
        );
    }
}
