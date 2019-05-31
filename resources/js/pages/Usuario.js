import React, {Component} from 'react';
import Tarjeta from '../components/card/Tarjeta';
import axios from 'axios';

class Usuario extends Component {

    url = "https://jsonplaceholder.typicode.com";

    constructor(){
        super();
        this.state = {
            usuarios : [],
        }
    }

    componentDidMount(){
        axios.get(this.url+"/users").then((respuesta)=>{
            this.setState({
                usuarios: respuesta.data
            });
        }).catch(error=>{
            console.log(error);
        });
    }

    pintar_usuarios(){
        return this.state.usuarios.map((e, i) =>
            <div className="col-md-4">
                {/* <Card key={i} id={e.id} name = {e.name} /> */}
                {/* Le pasamos una propiedad que se llama key y asi ...e le pasamos todas los atributos del objeto */}
                <Tarjeta key={i} {...e} />
            </div>
        );
    }

    render(){
        return (
            <div>
                <div className="row">
                    {this.pintar_usuarios()}
                </div>
            </div>
        );
    }
}

export default Usuario;
