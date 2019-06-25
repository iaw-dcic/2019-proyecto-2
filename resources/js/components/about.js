import React, { Component } from 'react'

export default class About extends Component {
    render () {
    return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header text-white bg-dark">Informacion Personal</div>
                            <div className="card-body">

                            <ul >
                              <li>Integrantes: Gaston reyes</li>
                               <li>LU: 106878</li>
                              <li>Materia: INGENIERÍA DE APLICACIONES WEB</li>
                              <li>Año: 2019</li>
                            </ul>
                            
                            <ul >
                            <li>Se realizo con :</li>
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

       