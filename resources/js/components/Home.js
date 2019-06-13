import React, { Component } from 'react';

export default class Home extends Component {
    render () {
    return (
        <div>
            <div className='title'>
                <div className="jumbotron">
                    <h1 className="display-4">
                        <img src={`./images/copasudamericana.png`}/>
                        ¡Bienvenido a la Sudamericana Prode!
                    </h1>
                    <p className="lead">La página en la que podes realizar pronósticos de la Copa Sudamericana.</p>
                    <hr className="my-4"/>
                    <p>En esta página podes crear podres y establecer los resultados que según vos van a ser los que se den en la copa.</p>
                    <p>Si te consideras un verdadero fanático del futbol...</p>
                    <p>¿Vas a ser capaz de adivinar todos los partidos?</p>
                </div>
            </div>
        </div>
    )
    }
}