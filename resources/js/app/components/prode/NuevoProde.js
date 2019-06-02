import React from 'react';
import {Modal,Button} from 'react-bootstrap';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/es/FormControl";

class NuevoProde extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            nombre: "",
        };

        this.nuevoProde = this.nuevoProde.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({nombre: event.target.value});
    }

    nuevoProde(nombre) {

        if(nombre != ""){
            this.props.onHide();
            this.props.crear(nombre);
        }

    }

    render() {
        return (
            <Modal
                {...this.props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Crear Prode
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Ingrese nombre del prode</h4>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Nombre"
                            value={this.state.nombre}
                            onChange={this.handleChange}
                        />

                        <InputGroup.Append>
                            <Button
                                variant="outline-secondary"
                                onClick={ () => this.nuevoProde(this.state.nombre) }>
                                Siguiente
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default NuevoProde;
