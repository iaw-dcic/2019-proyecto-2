
import './partidos.css';
import React, { Component } from 'react';
import PrimerRonda from './PrimerRonda';
import SegundaRonda from './SegundaRonda';
import Playoffs from './Playoffs';
export default class NavIzq extends Component {


    render() {

        return <div id="contenedor" className="row">
            <div className="col-3">
                <ul className="nav flex-column nav-pills">
                    <li className="nav-item">
                        <a className="nav-link active show" data-toggle="pill" href="#perfil">Mi perfil</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#primerRonda">Primer Ronda</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#segundaRonda">Segunda Ronda</a>
                    </li>
                    <li className="nav-item  ">
                        <a className="nav-link" data-toggle="pill" href="#playoffs" role="button">Playoffs</a>

                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#ranking">Ranking</a>
                    </li>
                </ul>
            </div>

            <div className="col-8" >
                <div id="v-pills-tabContent" className="tab-content">
                    <div id="primerRonda" className="tab-pane fade">
                        <PrimerRonda />

                    </div>
                    <div id="segundaRonda" className="tab-pane fade">
                        <SegundaRonda />

                    </div>
                    <div id="playoffs" className="tab-pane fade">
                        <Playoffs />

                    </div>
                </div>
            </div>
        </div >

    }
}