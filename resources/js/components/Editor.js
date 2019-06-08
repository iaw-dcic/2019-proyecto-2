import React, { Component } from 'react';
import Remera from './Remera';
import Colores from './Colores';
import Stampas from './Stampas';
import Talles from './Talles';
import axios from 'axios';

export default class Editor extends Component {


    //TENGO que guardar la estampa en el state de la remera.

    constructor(props) {
        super(props);
        this.state = {
            colorActual: 'images/negra.jpg',
            stampaActual: 'images/design2.png',
            talleActual: 'M',
            remerasGuardadas:[]
        }
    }

   componentDidMount = () =>{

        window.axios = require('axios');
        let api_token = document.querySelector('meta[name="api-token"]');
        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;

        axios.get('/api/getRemeras').then(response => {
            this.setState({ remerasGuardadas: response.data })
            console.log(response.data);
        })
    }

    //eliminarRemera = (remera) => {}

    cambiarColor = (color) => {
        this.setState({
            colorActual: color,
        });
    }

    cambiarStampa = (stampa) => {
        this.setState({
            stampaActual: stampa,
        });
    }

    cambiarTalle = (talle) => {
        this.setState({
            talleActual: talle,
        })
    }

    guardarRemera(e){

        axios.post('/api/guardar', {

            colour: this.state.colorActual,
            stampa: this.state.stampaActual,
            size: this.state.talleActual
            
        }).then(response => {
            console.log(response.data);
        })
    }

    render() {
        return (
            <div className="container">

                <button className="btn btn-dark" onClick={(e) => this.guardarRemera(e)}> Guardar Remera </button>
                
                <div className="row">

                    <div className="col-md-8">
                        <Remera
                            color={this.state.colorActual}
                            stampa={this.state.stampaActual}
                        />
                    </div>

                    <div className="col-md-4">
                        <Colores cambiarColor={this.cambiarColor} />
                        <Stampas cambiarStampa={this.cambiarStampa} />
                        <Talles cambiarTalle={this.cambiarTalle}/>
                    </div>

                </div>

            </div>
        );
    }
}