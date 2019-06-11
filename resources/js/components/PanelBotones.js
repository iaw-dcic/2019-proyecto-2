import React, { Component } from 'react';
import Listar from '../pages/teams/Listar';
import GuardarProde from '../pages/prode/GuardarProde'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class PanelBotones extends Component {

    constructor(props) {
        super(props);
        this.state = {
            abrir_modal: false,
        }
    }

    componentDidMount() {
        this.setState({
            abrir_modal: false
        });
    }

    abrirModal(event) {
        event.preventDefault();
        this.setState({
            abrir_modal: true,
        });

    }
    componentDidMount(){
        var axios = require('axios');


        let api_token = document.querySelector('meta[name="api-token"]');
        let token = document.head.querySelector('meta[name="csrf-token"]');
        axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;

        axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token;
    }



    render() {
        return (
            <div>
                <Button color="danger" onClick={() => { this.abrirModal(event) }}>Guardar Prode</Button>
                <GuardarProde abrir_modal={this.state.abrir_modal} cuartos={this.props.cuartos} semis={this.props.semis} final={this.props.final}campeon={this.props.campeon} new={this.props.new.bind(this)} />

            </div>
        );
    }
}

export default PanelBotones;
