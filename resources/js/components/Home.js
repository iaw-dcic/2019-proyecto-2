import React, {Component} from 'react';
import Tarjeta from '../components/card/Tarjeta';
import axios from 'axios';

class Home extends Component {

    url = "/api/index";

    constructor(props){
        super(props);
        this.state = {
            llave1 : [],
            llave2 : [],
            llave3: [],
            llave4: [],
            llave5:[],
            llave6:[],
            llave7:[],
            llave8:[],
            equipos : [],
            cuartos : [],
            semis: [],
            final: [],
            campeon: []
        }
    }

    ganador(id){
        this.setState({
            llave1: id
        })
        console.log(this.state.llave1)
    }

    /**Cuando monte el componente que me liste los equipos */
    componentDidMount(){
        axios({
            method : 'get',
            url : this.url
        }).then(respuesta => {
            let r = respuesta.data;
            this.setState({
                equipos: r.data
            });
        }).catch(error=>{
            alert("Error")
        });


    }
    pintar_equipos(){
        return this.state.equipos.map((e, i) =>
            <div className="col-sm-6">
                {/* <Card key={i} id={e.id} name = {e.name} /> */}
                {/* Le pasamos una propiedad que se llama key y asi ...e le pasamos todas los atributos del objeto */}
                <Tarjeta key={i} {...e} ganador={this.ganador.bind(this)} />

            </div>
        );
    }

    render(){
        return (
            <div>
                <div className="page-header card bg-info text-center">
                     <h2 className="font-italic">Octavos de final</h2>
                </div>
                <div className="row">
                    {this.pintar_equipos()}
                </div>
            </div>
        );
    }
}

export default Home;
