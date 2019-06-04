import React, { Component } from 'react';
import { Button } from 'reactstrap';
import ReactDOM from 'react-dom';
import Remera from './Remera';

export default class PanelSupremo extends Component {


    //TENGO que guardar la estampa en el state de la remera.
    /*
    state = {
        currentStampa: localStorage.getItem('image') ? localStorage.getItem('image') : null,
        //currentColur: localStorage.getItem('currentColour') ? localStorage.getItem('currentColour') :null,
        //colores: [],
        //stampas: [],
    }*/
    /*
   componentDidMount = () =>{
        window.axios = require('axios');
        try{
            const response = axios.get('/images')
            .then(res => {
                this.setState({stampas : res.data});
            }

            );
        }catch(e){
            console.log('axios failed:',e);
        }
    }*/

    //crearRemera = () => {}

    //eliminarRemera = () => {}

    //cambiarColor = () => {}

    //guardarRemera = () => {}

    //setStampa = () => {}
    
    render() {
        return (
            <div className="container">
                <div className = "row">
                    
                    <div className="col-md-8">
                        <Remera 
                            colorURL = "images/negra.jpg"
                            stampaURL = "images/design2.png"
                        />
                    </div>

                    <div className="col-md-4"> 
                        <h3 className="my-4">Elegir color</h3>
                        <div className="row">
                            <div className="col-md-3 col-sm-6 mb-4">
                                <a href="#">
                                <img className="img-fluid" src="images/negra.jpg" alt="" width="50" height="70"/>
                                </a>
                            </div>

                            <div className="col-md-3 col-sm-6 mb-4">
                                <a href="#">
                                    <img className="img-fluid" src="images/blanca.jpg" alt="" width="50" height="70"/>
                                </a>
                            </div>

                            <div className="col-md-3 col-sm-6 mb-4">
                                <a href="#">
                                    <img className="img-fluid" src="images/violeta.jpg" alt="" width="50" height="70"/>
                                </a>
                            </div>

                            <div className="col-md-3 col-sm-6 mb-4">
                                <a href="#">
                                    <img className="img-fluid" src="images/azul.jpg" alt="" width="50" height="70"/>
                                </a>
                            </div>
                        </div>
                        
                        <h3 className="my-4">Elegir estampa</h3>
                        <div className="row">
                            <div className="col-md-3 col-sm-6 mb-4">
                                <a href="#">
                                <img className="img-fluid" src="images/design1.jpg" alt="" width="50" height="70"/>
                                </a>
                            </div>

                            <div className="col-md-3 col-sm-6 mb-4">
                                <a href="#">
                                    <img className="img-fluid" src="images/design2.png" alt="" width="50" height="70"/>
                                </a>
                            </div>

                            <div className="col-md-3 col-sm-6 mb-4">
                                <a href="#">
                                    <img className="img-fluid" src="images/design3.png" alt="" width="50" height="70"/>
                                </a>
                            </div>

                            <div className="col-md-3 col-sm-6 mb-4">
                                <a href="#">
                                    <img className="img-fluid" src="images/design4.png" alt="" width="50" height="70"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}