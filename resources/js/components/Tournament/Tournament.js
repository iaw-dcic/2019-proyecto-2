import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

export default class Container extends Component {

    constructor() {
        super()
        this.state = {
            teams: [],
            cuartos: [],
            semis: [],
            final: [],
            winner: '',
        }
    }

    componentDidMount() {
        window.axios = require('axios');
        let api_token = document.querySelector('meta[name="api-token"]');
        let token = document.head.querySelector('meta[name="csrf-token"]');

        window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;

        if (localStorage.hasOwnProperty('teams')) {
            let teamsAux = localStorage.getItem('teams');
            let cuartosAux = localStorage.getItem('cuartos');
            let semisAux = localStorage.getItem('semis');
            let finalAux = localStorage.getItem('final');
            let winnerAux = localStorage.getItem('winner');

            try {
                teamsAux = JSON.parse(teamsAux);
                cuartosAux = JSON.parse(cuartosAux);
                semisAux = JSON.parse(semisAux);
                finalAux = JSON.parse(finalAux);

                this.setState({
                    teams: teamsAux,
                    cuartos: cuartosAux,
                    semis: semisAux,
                    final: finalAux,
                    winner: winnerAux
                });
            } catch (e) {
                this.cleanStart();
            }
        }
        else {
            this.cleanStart();
        }
    }

    cleanStart() {
        var cuartosAux = [];
        var semisAux = [];
        var finalAux = [];
        var winnerAux = "";
        for (var i = 0; i < 8; i++) {
            cuartosAux[i] = "";
        }
        for (var j = 0; j < 4; j++) {
            semisAux[j] = "";
        }
        for (var i = 0; i < 2; i++) {
            finalAux[i] = "";
        }
        axios.get('/api/teams').then(response => {
            this.setState({
                teams: response.data,
                cuartos: cuartosAux,
                semis: semisAux,
                final: finalAux,
                winner: winnerAux
            })
        })


    }

    saveIntoLocalStorage() {
        localStorage.setItem("teams", JSON.stringify(this.state.teams));
        localStorage.setItem("cuartos", JSON.stringify(this.state.cuartos));
        localStorage.setItem("semis", JSON.stringify(this.state.semis));
        localStorage.setItem("final", JSON.stringify(this.state.final));
    }

    handleOctavosClick(id, name, e) {
        var posCuartos = Math.trunc(id / 2);
        var cuartosAux = this.state.cuartos;

        var posSemis = Math.trunc(posCuartos / 2);
        var semisAux = this.state.semis;

        if (semisAux[posSemis].localeCompare("") != 0 && semisAux[posSemis].localeCompare(cuartosAux[posCuartos]) == 0) {
            var posFinal = Math.trunc(posSemis / 2);
            var finalAux = this.state.final;

            if (finalAux[posFinal].localeCompare("") != 0 && finalAux[posFinal].localeCompare(semisAux[posSemis]) == 0) {
                var winnerAux = this.state.winner;

                if (winnerAux.localeCompare("") != 0 && finalAux[posFinal].localeCompare(winnerAux) == 0) {
                    this.setState({
                        winner: name
                    });
                    localStorage.setItem("winner", name);
                }

                finalAux[posFinal] = name;

                this.setState({
                    final: finalAux
                });
            }

            semisAux[posSemis] = name;

            this.setState({
                semis: semisAux
            });
        }

        cuartosAux[posCuartos] = name;

        this.setState({
            cuartos: cuartosAux
        });

        this.saveIntoLocalStorage();
    }

    handleCuartosClick(id, name, e) {
        var cuartosAux = this.state.cuartos;

        if (cuartosAux[id].localeCompare("") != 0) {

            var posSemis = Math.trunc(id / 2);
            var semisAux = this.state.semis;


            var posFinal = Math.trunc(posSemis / 2);
            var finalAux = this.state.final;

            if (finalAux[posFinal].localeCompare("") != 0 && finalAux[posFinal].localeCompare(semisAux[posSemis]) == 0) {
                var winnerAux = this.state.winner;

                if (winnerAux.localeCompare("") != 0 && finalAux[posFinal].localeCompare(winnerAux) == 0) {
                    this.setState({
                        winner: name
                    });
                    localStorage.setItem("winner", name);
                }

                finalAux[posFinal] = name;

                this.setState({
                    final: finalAux
                });
            }

            semisAux[posSemis] = name;

            this.setState({
                semis: semisAux
            });
            this.saveIntoLocalStorage();
        }
    }

    handleSemisClick(id, name, e) {
        var semisAux = this.state.semis;

        if (semisAux[id].localeCompare("") != 0) {

            var posFinal = Math.trunc(id / 2);
            var finalAux = this.state.final;

            if (finalAux[posFinal].localeCompare("") != 0 && finalAux[posFinal].localeCompare(semisAux[id]) == 0) {
                var winnerAux = this.state.winner;

                if (winnerAux.localeCompare("") != 0 && finalAux[posFinal].localeCompare(winnerAux) == 0) {
                    this.setState({
                        winner: name
                    });
                    localStorage.setItem("winner", name);
                }
            }
            finalAux[posFinal] = name;

            this.setState({
                final: finalAux
            });
            this.saveIntoLocalStorage();
        }
    }

    handleFinalClick(id, name, e) {
        var finalAux = this.state.final;

        if (finalAux[id].localeCompare("") != 0) {
            this.setState({
                winner: name
            });
            localStorage.setItem("winner", name);
        }
    }

    handleSaveClick(e) {
        window.axios = require('axios');
        let api_token = document.querySelector('meta[name="api-token"]');
        let token = document.head.querySelector('meta[name="csrf-token"]');

        window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;

        try {
            axios.post('/api/playoffs', {
                teams: this.state.teams,
                cuartos: this.state.cuartos,
                semis: this.state.semis,
                final: this.state.final,
                winner: this.state.winner
            }).then(res => {
                console.log(res);
                console.log(res.data);
            })
        }
        catch (e) {
            console.log('Axios request failed', e);
        }
    }

    render() {
        var octavos = [];
        {
            this.state.teams.map((team) => (
                octavos.push(team.nombre)
            ))
        }

        var listaOctavos1 = [];
        for (let i = 0; i <= 3; i++) {
            listaOctavos1.push(
                <ul key={i} className="matchup">
                    <li className="team team-top"><span onClick={(e) => this.handleOctavosClick((2 * i), octavos[2 * i], e)}>{octavos[2 * i]}</span></li>
                    <li className="team team-bottom"><span onClick={(e) => this.handleOctavosClick((2 * i) + 1, octavos[(2 * i) + 1], e)}>{octavos[(2 * i) + 1]}</span></li>
                </ul>
            );
        }

        var listaOctavos2 = [];
        for (let i = 4; i <= 7; i++) {
            listaOctavos2.push(
                <ul key={i} className="matchup">
                    <li className="team team-top"><span onClick={(e) => this.handleOctavosClick((2 * i), octavos[2 * i], e)}>{octavos[2 * i]}</span></li>
                    <li className="team team-bottom"><span onClick={(e) => this.handleOctavosClick((2 * i) + 1, octavos[(2 * i) + 1], e)}>{octavos[(2 * i) + 1]}</span></li>
                </ul>
            );
        }

        var listaCuartos1 = [];
        for (let i = 0; i <= 1; i++) {
            listaCuartos1.push(
                <ul key={i} className="matchup">
                    <li className="team team-top"><span onClick={(e) => this.handleCuartosClick((2 * i), this.state.cuartos[(2 * i)], e)}>{this.state.cuartos[(2 * i)]}</span></li>
                    <li className="team team-bottom"><span onClick={(e) => this.handleCuartosClick((2 * i)+1, this.state.cuartos[(2 * i)+1], e)}>{this.state.cuartos[(2 * i)+1]}</span></li>
                </ul>
            );
        }

        var listaCuartos2 = [];
        for (let i = 2; i <= 3; i++) {
            listaCuartos2.push(
                <ul key={i} className="matchup">
                    <li className="team team-top"><span onClick={(e) => this.handleCuartosClick((2 * i), this.state.cuartos[(2 * i)], e)}>{this.state.cuartos[(2 * i)]}</span></li>
                    <li className="team team-bottom"><span onClick={(e) => this.handleCuartosClick((2 * i)+1, this.state.cuartos[(2 * i)+1], e)}>{this.state.cuartos[(2 * i)+1]}</span></li>
                </ul>
            );
        }

        return (
            <>
                <div className="split split-one">
                    <div className="round round-one current">
                        <div className="round-details">Octavos<br /></div>
                        {
                            listaOctavos1.map((par) => (
                                par
                            ))
                        }
                    </div>

                    <div className="round round-two current">
                        <div className="round-details">Cuartos<br /></div>
                        {
                            listaCuartos1.map((par) => (
                                par
                            ))
                        }
                    </div>

                    <div className="round round-three current">
                        <div className="round-details">Semis<br /></div>
                        <ul className="matchup">
                            <li className="team team-top"><span onClick={(e) => this.handleSemisClick(0, this.state.semis[0], e)}>{this.state.semis[0]}</span></li>
                            <li className="team team-bottom"><span onClick={(e) => this.handleSemisClick(1, this.state.semis[1], e)}>{this.state.semis[1]}</span></li>
                        </ul>
                    </div>
                </div>

                <div className="champion">
                    <div className="final current">
                        <i className="fa fa-trophy"></i>
                        <div className="round-details">Final<br /></div>
                        <ul className="matchup championship">
                            <li className="team team-top"><span onClick={(e) => this.handleFinalClick(0, this.state.final[0], e)}>{this.state.final[0]}</span></li>
                            <li className="team team-bottom"><span onClick={(e) => this.handleFinalClick(1, this.state.final[1], e)}>{this.state.final[1]}</span></li>
                        </ul>
                    </div>
                    <div className="semis-l current">
                        <div className="round-details">Ganador<br /></div>
                        <ul className="matchup championship">
                            <li className="team team-top"><span>{this.state.winner}</span></li>
                        </ul>
                        <button type="button" className="btn btn-primary btn-sm" onClick={(e) => this.handleSaveClick(e)}>Guardar</button>
                    </div>
                </div>

                <div className="split split-two">
                    <div className="round round-three current">
                        <div className="round-details">Semis<br /></div>
                        <ul className="matchup">
                            <li className="team team-top"><span onClick={(e) => this.handleSemisClick(2, this.state.semis[2], e)}>{this.state.semis[2]}</span></li>
                            <li className="team team-bottom"><span onClick={(e) => this.handleSemisClick(3, this.state.semis[3], e)}>{this.state.semis[3]}</span></li>
                        </ul>
                    </div>

                    <div className="round round-two current">
                        <div className="round-details">Cuartos<br /></div>
                        {
                            listaCuartos2.map((par) => (
                                par
                            ))
                        }
                    </div>
                    <div className="round round-one current">
                        <div className="round-details">Octavos<br /></div>
                        {
                            listaOctavos2.map((par) => (
                                par
                            ))
                        }
                    </div>
                </div>

            </>
        );
    }
}