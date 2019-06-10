import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import { url, TOKEN } from '../../components/config/config';

const ProdeSchema = Yup.object().shape({
    nombre: Yup.string()
        .max(60, 'Too Long!')
        .required('Required'),


});



class GuardarProde extends React.Component {

    /**Necesitamos alguien que maneje los valores que vamos a utilizar
     * Creamos un objeto Prode
    */
    prode = {
        nombre: '',
    }


    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    /**Este método no se ejecutará una vez se monte el componente,
     * si no que se esperará a recibir nuevas props de un componente padre
     * para ejecutarse. Tiene como parámetro las futuras propiedades que va
     * tener nuestro componente.
     */
    componentWillReceiveProps(nextProps) {
        this.setState(prevState => ({
            modal: nextProps.abrir_modal
        }));
    }


    guardar(value) {
        axios({
            method: 'post',
            url: `${url}/prode`,
            headers: {
                "Authorization": "bearer " + TOKEN
            },
            data: value + this.props.cuartos + this.props.semis + this.props.final + this.props.ganador
        }).then(respuesta => {
            let datos = respuesta.data;
            if (datos.ok) {
               console.log("exito");
            } else {
                console.log("error");
            }
        });

    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>GuardarProde</ModalHeader>

                    <ModalBody>
                        <div>
                        <Formik
                            initialValues={this.prode}
                            validationSchema={ProdeSchema}
                            onSubmit={value => { this.guardar(value); }}
                        >

                            {({ errors, touched, values, handleChange }) => (
                                <Form>
                                    <div className="row">
                                        <label>Nombre</label>

                                        <Field name="nombre" className="form-control" />
                                        {errors.nombre && touched.nombre ? (
                                            <div className="text-danger">{errors.nombre}</div>
                                        ) : null}
                                    </div>

                                    <Button type="submit" color="primary" onClick={() => { this.toggle() }}> Guardar</Button>

                                    <Button color="secondary" color="danger" onClick={this.toggle}>Cancel</Button>


                                </Form>
                            )}

                        </Formik>

                    </div>

                    </ModalBody>


                </Modal>
            </div >
        );
    }
}

export default GuardarProde;
