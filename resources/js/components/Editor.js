import React, { Component } from 'react';
import { Button } from 'reactstrap';
import ReactDOM from 'react-dom';
import Remera from './Remera';
import Colores from './Colores';
import Stampas from './Stampas';

export default class Editor extends Component {


    //TENGO que guardar la estampa en el state de la remera.
    
    constructor(props) {
        super(props);
        this.state = {
            colorActual:'/images/negra.jpg',
            stampaActual:'/images/design2.png'
        }
    }
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

    //guardarRemera = () => {}

    //setStampa = () => {}
    
    
    render() {
        return (
            <div className="container">
                <div className = "row">
                    
                    <div className="col-md-8">
                        <Remera 
                            color = {this.state.colorActual}
                            stampa = {this.state.stampaActual}
                        />
                    </div>

                    <div className="col-md-4"> 
                        <Colores cambiarColor={this.cambiarColor}/>
                        <Stampas cambiarStampa={this.cambiarStampa}/>
                    </div>
                    
                </div>
            </div>
        );
    }
}