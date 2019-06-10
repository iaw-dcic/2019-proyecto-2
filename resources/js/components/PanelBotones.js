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

    pintar_equipos() {
        return this.state.equipos.map((e, i) =>
            <Tabla key={i} e={e} ganadorO={this.ganadorO.bind(this)} />
        );
    }

    abrirModal(event) {
        event.preventDefault();
        this.setState({
            abrir_modal: true,
        });

    }

    render() {
        return (
            <div className="btn-group btn-group-justified">
                <Button color="danger" onClick={() => { this.abrirModal(event) }}>Guardar Prode</Button>
                <GuardarProde abrir_modal={this.state.abrir_modal} cuartos={this.props.cuartos} semis={this.props.semis} campeon={this.props.campeon} />


            </div>
        );
    }
}

export default PanelBotones;
