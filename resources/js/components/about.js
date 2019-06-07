import React, { Component } from 'react'

export default class About extends Component {
    render () {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div >Información personal</div>
                        <div className="card-body">
                             <h1 >Informacion personal:</h1>
                            <ul >
                              <li>Integrantes: Gaston reyes</li>
                               <li>LU: 106878</li>
                              <li>Materia: INGENIERÍA DE APLICACIONES WEB</li>
                              <li>Año: 2019</li>
                            </ul>
                       </div>
                    </div>
                    <div className="card">
                        <div >Herramientas</div>
                        <div className="card-body">
                            <ul >
                                <li>Laravel</li>
                                <li>React</li>
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}