
import './partidos.css';
import React, { Component } from 'react';
import PrimerRonda from './PrimerRonda';
import SegundaRonda from './SegundaRonda';
import Playoffs from './Playoffs';
import Perfil from './Perfil';
export default class NavIzq extends Component {

    state = {
        agregaProno: null,
    }

    render() {

        return <div id="contenedor" className="row">
            <div className="col-2">

                <ul className="nav flex-column nav-pills">
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#perfil">Mi perfil</a>
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

                </ul>

                <ul className="nav navIzq">
                    <li className="nav-item">
                        <a className="nav-link active show" data-toggle="pill" href="#perfil">Perfil</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#primerRonda">1er</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#segundaRonda">2da</a>
                    </li>
                    <li className="nav-item  ">
                        <a className="nav-link" data-toggle="pill" href="#playoffs" role="button">8vos</a>

                    </li>

                </ul>
            </div>

            <div className="col-10" >
                <div id="v-pills-tabContent" className="tab-content">
                    <div id="perfil" className="tab-pane fade">
                        <Perfil agregarProno={this.state.agregaProno} />

                    </div>
                    <div id="primerRonda" className="tab-pane fade">
                        <PrimerRonda />

                    </div>
                    <div id="segundaRonda" className="tab-pane fade">
                        <SegundaRonda />

                    </div>
                    <div id="playoffs" className="tab-pane fade">
                        <Playoffs agregarPronostico={this.agregarPronostico} />

                    </div>
                </div>
            </div>
        </div >

    }
    agregarPronostico = (pronost) => {

        this.setState({
            agregarProno: pronost
        });

    }
}