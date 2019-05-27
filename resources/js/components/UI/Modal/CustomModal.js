import React, { Component } from "react";

import Aux from "../../../hoc/AuxDiv";
import Backdrop from "../Backdrop/Backdrop";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class CustomModal extends Component {
    /*shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate () {
        console.log('[Modal] WillUpdate');
    }*/

    constructor(props) {
        super(props);
        this.state = {
          modal: true
        };
    
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
    }

    render() {
        return (
            <Aux>
                {/*<Button color="danger" onClick={this.toggle}>
                    {this.props.buttonLabel}
                </Button>*/}
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Esta es tu hamburguesa!</ModalHeader>
                    <ModalBody>
                        {this.props.children}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" clicked={this.props.savingContinued} onClick={this.toggle}>
                            Guardar
                        </Button>{" "}
                        <Button color="secondary" clicked={this.props.savingCancelled} onClick={this.toggle}>
                            Cancelar
                        </Button>
                    </ModalFooter>
                </Modal>
            </Aux>
        );
    }
}

export default CustomModal;
