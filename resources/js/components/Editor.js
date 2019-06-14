import React, { Component } from 'react';
import Remera from './Remera';
import Colores from './Colores';
import Stampas from './Stampas';
import Talles from './Talles';
import MisRemeras from './MisRemeras';
import axios from 'axios';

export default class Editor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colorActual: 'images/negra.jpg',
            stampaActual: 'images/design2.png',
            talleActual: 'M',
            remerasGuardadas: []
        }
    }

    componentDidMount = () => {

        window.axios = require('axios');
        let api_token = document.querySelector('meta[name="api-token"]');
        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;

        axios.get('/api/getRemeras').then(response => {
            this.setState({ remerasGuardadas: response.data })
            console.log(response.data);
        });

        if (localStorage.hasOwnProperty('colorActual')) {
            var currentColour = localStorage.getItem('colorActual');
            try {
                currentColour = JSON.parse(currentColour);
                this.setState({
                    colorActual: currentColour,
                });
            }
            catch{
                this.setState({
                    remera: 'images/negra.jpg'
                });
            }
        }
        if (localStorage.hasOwnProperty('talleActual')) {
            var currentSize = localStorage.getItem('talleActual');
            try {
                currentSize = JSON.parse(currentSize);
                this.setState({
                    talleActual: currentSize
                });
            }
            catch{
                this.setState({
                    talle: 'M'
                });
            }
        }

        if (localStorage.hasOwnProperty('stampaActual')) {
            var currentStampa = localStorage.getItem('stampaActual');
            try {
                currentStampa = JSON.parse(currentStampa);
                this.setState({
                    stampaActual: currentStampa
                });
            }
            catch{
                this.setState({
                    stampaActual: 'images/design2.png'
                });
            }
        }
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

    guardarRemera(e) {

        axios.post('/api/guardar', {

            colour: this.state.colorActual,
            stampa: this.state.stampaActual,
            size: this.state.talleActual

        }).then(response => {
            console.log(response.data);
            this.refresh();
        })
    }

    eliminarRemera = (e, id) => {
        try {
            axios.delete('/api/delete/' + id).then(response => {
                console.log(response.data);
                this.refresh();
            })
        } catch (e) {
            console.log('Error axios', e);
        }
    }

    refresh() {
        axios.get('/api/getRemeras').then(response => {
            this.setState({ remerasGuardadas: response.data })
            console.log(response.data);
        })
    }



    render() {
        return (
            <div className="container">
                <button type="submit" className="btn btn-dark" onClick={(e) => this.guardarRemera(e)}> Guardar </button>
                <div className="row">
                    <div className="col-md-8 remera">
                        <Remera
                            color={this.state.colorActual}
                            stampa={this.state.stampaActual}
                            widthR="550" heightR="500"
                            widthS="150" heightS="500"
                            size="big"
                            talle={this.state.talleActual}
                        />
                    </div>
                    <div className="col-md-4">
                        <Colores cambiarColor={this.cambiarColor} />
                        <Stampas cambiarStampa={this.cambiarStampa} />
                        <Talles cambiarTalle={this.cambiarTalle} />

                    </div>
                </div>
                <div className="row">
                    <h4>Mis remeras:</h4>
                    <MisRemeras misremeras={this.state.remerasGuardadas}
                        eliminar={this.eliminarRemera}
                    />
                </div>

            </div>
        );
    }
}