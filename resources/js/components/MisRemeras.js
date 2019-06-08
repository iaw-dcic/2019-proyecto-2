import React, { Component } from 'react';
import axios from 'axios';

export default class MisRemeras extends Component {

    constructor(props) {
        super(props);
        this.state = {
            remeras: []
        }
    }

    componentDidMount() {

        window.axios = require('axios');
        let api_token = document.querySelector('meta[name="api-token"]');
        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;

        axios.get('/api/remerasGuardadas').then(response => {
            this.setState({ remeras: response.data })
            console.log(response.data);
        })
    }

    eliminar(e, remera) {
        this.props.eliminarRemera(remera);
    }

    render() {
        return (
            <div className="container">
                <h3 className="my-4">Elegir talle</h3>
                <div className="row">
                </div>
            </div>

        );
    }

}