import React, { Component } from 'react';
import Pronostico from '../models/Pronostico';
import Axios from 'axios';

export default class Pronosticos extends Component {

    constructor(props){
        super(props);
        this.fases = {'octavos': 0, 'cuartos': 1, 'semis': 2, 'final': 3, 'tercer_puesto': 3};
        this.state = { id: null, teams: [], results: [[], [], [], []]};
        this.guardarProde = this.guardarProde.bind(this);
        this.resetearProde = this.resetearProde.bind(this);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="title-box text-center">
                            <h3 className="title-a">Pronósticos</h3>
                            <p className="subtitle-a">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            <div className="line-mf"></div>
                        </div>
                    </div>
                </div>

                <form method="POST">
                    <div className="row">
                        <div className="col-12">
                            <div id="tablero-pronosticos" className="mb-5 d-flex justify-content-center align-items-center">
                            
                            </div>
                        </div>
                        <div className="col-12 d-flex w-100 justify-content-center align-items-center">
                            <button onClick={this.guardarProde} className="btn btn-success mx-1">Guardar</button>
                            <button onClick={this.resetearProde} className="btn btn-danger mx-1">Borrar</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    componentDidMount() {
        this.cargarDatos();
    }

    componentDidUpdate(prevProps, prevState) {
        this.crearTablero();        
    }

    cargarDatos(){
        let local = localStorage.getItem('state');
        if(local === null){
            this.obtenerProdes();
        }else{
            let prode = JSON.parse(local)
            this.setState(prode);
        }
    }

    //Guarda los datos en el servidor
    guardarProde(event) {
        event.preventDefault();
        let prode = JSON.parse(localStorage.getItem('state'));
        let user = 1;
        this.transformarDatosHaciaServidor(prode);
        Axios.post(`/api/user/${user}/prodes`, prode)
            .then((response) => console.log(response.data))
            .catch((error) => console.log(error));
        this.setState(prode);
    }

    //Reestablece los datos
    resetearProde(event){
        event.preventDefault();
        this.resetearDatos();
    }

    //Obtiene los datos del servidor
    obtenerProdes(){
        let user_id = 1;
        let prode_id = 1;
        Axios.get(`/api/user/${user_id}/prodes/${prode_id}/matches`)
            .then((response) => this.transformarDatosDesdeServidor(response.data, prode_id))
            .catch((error) => console.log(error));
    }

    //Transforma los datos obtenidos en el servidor
    transformarDatosDesdeServidor(partidos, prode_id){
        let data = { id: prode_id, teams: [], results: [[], [], [], []] };
        partidos.map((partido) => {
            let local = partido.local.nombre;
            let local_id = partido.local.id;
            let visitante = partido.visitante.nombre;
            let visitante_id = partido.visitante.id;
            let partido_id = partido.id;
            let goles_local = partido.goles_local;
            let goles_visitante = partido.goles_visitante;
            data.teams.push([local, visitante, local_id, visitante_id]);
            data.results[this.fases[partido.fase]].push([goles_local, goles_visitante, partido_id]);
        });
        this.guardarLocalStorage(data);
        this.setState(data);
    }

    transformarDatosHaciaServidor(prode){
        let teams = prode.teams;
        let results = prode.results.flat(2);
        let prode_nuevo = {id: prode.id, partidos: []};
        let posiciones = {8: 0, 9: 2, 10: 4, 11: 6, 12: 8, 13: 10, 14: 12, 15: 12}

        results.forEach((result, indice) => {
            let id = result[2];
            let local = null, visitante = null, local_id = null, visitante_id = null;
            let ganador = null, perdedor = null;
            let resultado_local = result[0], resultado_visitante = result[1];

            if(resultado_local == null || resultado_visitante == null) return;

            if(teams[indice] != null){
                //Los octavos los puedo tener directamente
                local = teams[indice][0];
                visitante = teams[indice][1];
                local_id = teams[indice][2];
                visitante_id = teams[indice][3];

            }else if(indice == 15){
                try{
                    let partido_1 = prode_nuevo.partidos[posiciones[indice]].resultado;
                    let partido_2 = prode_nuevo.partidos[posiciones[indice]+1].resultado;
                    
                    local = partido_1.perdedor.equipo;
                    visitante = partido_2.perdedor.equipo;
                    local_id = partido_1.perdedor.id;
                    visitante_id = partido_2.perdedor.id;
                }catch(exception){
                    return;
                }
            }else{
                //El resto se obtiene a partir de los ganadores de las etapas anteriores
                try{
                    let partido_1 = prode_nuevo.partidos[posiciones[indice]].resultado;
                    let partido_2 = prode_nuevo.partidos[posiciones[indice]+1].resultado;
                    
                    local = partido_1.ganador.equipo;
                    visitante = partido_2.ganador.equipo;
                    local_id = partido_1.ganador.id;
                    visitante_id = partido_2.ganador.id;
                }catch(exception){
                    return;
                }
            }

            if(resultado_local > resultado_visitante){
                ganador = {id: local_id, equipo: local};
                perdedor = {id: visitante_id, equipo: visitante};
            }else if(resultado_visitante > resultado_local){
                ganador = {id: visitante_id, equipo: visitante};
                perdedor = {id: local_id, equipo: local};
            }else{
                ganador = {id: null, equipo: null};
                perdedor = {id: null, equipo: null};
            }

            prode_nuevo.partidos.push({
                id,
                local: { local_id, local },
                visitante: { visitante_id, visitante },
                resultado: { ganador, perdedor, resultado_local, resultado_visitante }
            });
        });

        console.log(prode_nuevo);
    }

    //Setea el state y guarda los datos en el local storage
    guardarLocalStorage(data){
        localStorage.setItem('state', JSON.stringify(data));
    }

    //Actualiza el tablero en el div #tablero-pronosticos
    crearTablero(){
        $('#tablero-pronosticos').bracket({
            init: this.state,
            save: (data) => this.guardarLocalStorage(data),
            centerConnectors: true,
            disableToolbar: true,
            disableTeamEdit: true
        });
    }

    //Sirve para reestablecer el tablero
    resetearDatos(){
        let data = {
            id: null,
            teams: [['Francia', 'Argentina', null], //El tercer parametro es el ID del partido de la base de datos, si es nulo, es porque no fue creada
                ['Uruguay', 'Portugal', null],
                ['España', 'Rusia', null],
                ['Croacia', 'Dinamarca', null],
                ['Brasil', 'Mexico', null],
                ['Bélgica', 'Japón', null],
                ['Suecia', 'Suiza', null],
                ['Colombia', 'Inglaterra', null]],
            results: [
                [], //Octavos (8)
                [], //Cuartos (4)
                [], //Semis (2)
                [], //Final y tercer puesto
            ],
        }
        this.guardarLocalStorage(data);
        this.setState(data);
    }
}
