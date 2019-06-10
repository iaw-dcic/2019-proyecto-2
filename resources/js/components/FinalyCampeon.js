import React, { Component } from 'react';
import Final from './Final.js';
export default class FinalyCampeon extends Component {


    render() {
        return <> <div className="row  texto-final justify-content-center align-items-center minh-100">
            <h3> FINAL MASTER 1000 </h3>
        </div>
            <div className="row justify-content-center align-items-center minh-100">
                <div className="col-2"></div>
                {this.props.j1 && <Final jugadorFinal1={this.props.j1} jugadorFinal2={this.props.j2} setJugador={this.props.setJugador} />}
                <div className="col-2"></div>
            </div>

            <div className="row  texto-final justify-content-center align-items-center minh-100">
                <h3> CAMPEON </h3>
            </div>
            <div className="row texto-final justify-content-center align-items-center minh-100">
                <h4> {this.props.campeon && this.props.campeon.nombre}  </h4>
            </div>
        </>
    }


}