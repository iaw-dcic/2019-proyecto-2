import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import axios from 'axios';


const ProdeSchema = Yup.object().shape({
    name: Yup.string()
        .max(60, 'Too Long!')
        .required('Required'),


});




class GuardarProde extends React.Component {

    /**Necesitamos alguien que maneje los valores que vamos a utilizar
     * Creamos un objeto Prode
    */
    prode = {
        name: '',
    }


    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            user_id: 0,
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
            url: `api/prode`,

            data : {
                'name' : value.name,
                'cuartos': [this.props.cuartos[0].id,this.props.cuartos[1].id,this.props.cuartos[2].id,this.props.cuartos[3].id,this.props.cuartos[4].id,this.props.cuartos[5].id,this.props.cuartos[6].id,this.props.cuartos[7].id],
                'semis': [this.props.semis[0].id,this.props.semis[1].id,this.props.semis[2].id,this.props.semis[3].id],
                'final': [this.props.final[0].id,this.props.final[1].id],
                'campeon': [this.props.campeon[0].id],

            }
        }).then(function (response) {
            console.log(response);
            alert(response.data.message);
        }).catch(function (error) {
          console.log(error);
        });

        this.props.new();

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

                                        <Field name="name" className="form-control" />
                                        {errors.name && touched.name ? (
                                            <div className="text-danger">{errors.name}</div>
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
