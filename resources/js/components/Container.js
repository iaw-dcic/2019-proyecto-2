import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tournament from './Tournament/Tournament'
import Playoffs from './Playoffs/Playoffs'

export default class Container extends Component {

    constructor() {
        super()
        var content1 = <Tournament />;
        this.state = {
            content: content1
        }
    }

    handleChangeTournament() {
        this.setState({
            content: <Tournament />
        });
    }

    handleChangePlayoffs() {
        this.setState({
            content: <Playoffs />
        });
    }

    render() {
        return (
            <div className="hero-container2">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <ul className="nav nav-tabs justify-content-center">
                            <li className="nav-item mr-2">
                                <span className="nav-link active" onClick={(e) => this.handleChangeTournament()} >Crear PlayOff</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link active" onClick={(e) => this.handleChangePlayoffs()} >Mis PlayOffs</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <section id="bracket">
                            <div className="container playoffContainerDiv scrollbar-primary">
                                {this.state.content}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}
