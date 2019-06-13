import React, { Component } from 'react';
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


    render() {
        return (
            <div>
                <Button color="light" onClick={() => { this.abrirModal(event) }}>Guardar Prode</Button>
                <GuardarProde abrir_modal={this.state.abrir_modal} cuartos={this.props.cuartos} semis={this.props.semis} final={this.props.final}campeon={this.props.campeon} new={this.props.new.bind(this)} />

            </div>
        );
    }
}

export default PanelBotones;
