import React, { Component } from 'react'

export default class About extends Component {
    render () {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header text-white bg-dark">Información personal</div>
                        <div className="card-body">
                            <ul >
                                <li>Alumno: Rodríguez Joaquín</li>
                                <li>LU: 108641</li>
                                <li>Materia: Ingeniería de Aplicaciones Web</li>
                                <li>Año: 2019</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header text-white bg-dark">Herramientas</div>
                        <div className="card-body">
                            <ul >
                                <li>Laravel</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                                <li>MySql</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}