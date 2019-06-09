import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Main from './Main';

export default class Readme extends Component {
    
    render () {
        return (
            <> <Main />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        
            
            <div class="card-header"><h1>Bienvenidos a <i>Prode Libertadores!</i></h1></div>

                <div class="card-body card card-readme">               
                    <p> </p>
                    <p> Esta página le permite a cada usuario crear y almacenar prodes de la Copa Libertadores 2019.</p>
                    <p> Los prodes se pueden almacenar para verlos cada vez que el usuario decida, o eliminarlos.</p>
                    <p> si así lo prefiere</p>
                    <p> </p>
                    <p> Esta página fue creada por el estudiante <b>LUCAS MONZÓN</b> de la Universidad Nacional del Sur. </p>
                    <p> L:U 105336 </p>
                    <p> <i>Contacto:</i> <a href="http://monzon.lucas4@gmail.com"> monzon.lucas4@gmail.com</a></p>

                </div> 
                </div>
                </div>
            </div>
            </>      
        )
    }
}