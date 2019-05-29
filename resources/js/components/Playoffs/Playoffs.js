import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Playoffs extends Component {
    constructor() {
        super()
        this.state = {
            playoffs: [],
            selected: '',
            selectedId: '',
            octavos: [],
            cuartos: [],
            semis: [],
            final: [],
            winner: ""
        }
    }

    componentDidMount() {
        axios.get('/api/playoffs').then(response => {
            this.setState({
                playoffs: response.data,
            })
        })
    }

    handleChange(e) {
        var finalAux = [];
        var semisAux = [];
        var cuartosAux = [];
        var octavosAux = [];
        var winnerAux = '';
        var selectedIdAux = '';
        var selectedAux = '';

        if (e.target.value != '') {
            var playoff = this.state.playoffs[e.target.value];
            var partidos = playoff['arbol'];

            var i = 0;
            winnerAux = partidos[1];
            selectedIdAux = playoff['id'];
            selectedAux = e.target.value;
            var k = 2;

            for (i = 0; i < 2; i++) {
                finalAux[i] = partidos[k];
                k++;
            }
            for (i = 0; i < 4; i++) {
                semisAux[i] = partidos[k];
                k++;
            }
            for (i = 0; i < 8; i++) {
                cuartosAux[i] = partidos[k];
                k++;
            }
            for (i = 0; i < 16; i++) {
                octavosAux[i] = partidos[k];
                k++;
            }
        }

        this.setState({
            selectedId: selectedIdAux,
            selected: selectedAux,
            octavos: octavosAux,
            cuartos: cuartosAux,
            semis: semisAux,
            final: finalAux,
            winner: winnerAux
        })
    }

    handleDeleteClick() {
        var $toDelete = this.state.selectedId;
        try {
            axios.delete('api/playoffs/delete/' + $toDelete)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
            this.limpiar();
        }
        catch (e) {
            console.log('Axios request failed', e);
        }
    }

    limpiar() {
        axios.get('/api/playoffs').then(response => {
            this.setState({
                playoffs: response.data,
                selected: '',
                selectedId: '',
                octavos: [],
                cuartos: [],
                semis: [],
                final: [],
                winner: '',
            })
        });
    }

    render() {
        var i = 0;
        return (
            <>
                <div>
                    <select id='playoff' name="playoff" onChange={(e) => this.handleChange(e)} value={this.state.selected}>
                        <option value=''>Seleccione</option>
                        {
                            this.state.playoffs.map((arbol, id) => (
                                <option key={id} value={id}>Playoff {id + 1}</option>
                            ))
                        }
                    </select>
                    <button type="button" className="btn btn-danger btn-sm mt-4" onClick={(e) => this.handleDeleteClick()}>Eliminar</button>
                </div>

                <div className="split split-one">
                    <div className="round round-one current">
                        <div className="round-details">Octavos<br /></div>
                        <ul className="matchup">
                            <li className="team team-top"><span>{this.state.octavos[0]}</span></li>
                            <li className="team team-bottom"><span>{this.state.octavos[1]}</span></li>
                        </ul>
                        <ul className="matchup">
                            <li className="team team-top"><span>{this.state.octavos[2]}</span></li>
                            <li className="team team-bottom"><span>{this.state.octavos[3]}</span></li>
                        </ul>
                        <ul className="matchup">
                            <li className="team team-top"><span>{this.state.octavos[4]}</span></li>
                            <li className="team team-bottom"><span>{this.state.octavos[5]}</span></li>
                        </ul>
                        <ul className="matchup">
                            <li className="team team-top"><span>{this.state.octavos[6]}</span></li>
                            <li className="team team-bottom"><span>{this.state.octavos[7]}</span></li>
                        </ul>

                    </div>

                    <div className="round round-two current">
                        <div className="round-details">Cuartos<br /></div>
                        <ul className="matchup">
                            <li className="team team-top"><span>{this.state.cuartos[0]}</span></li>
                            <li className="team team-bottom"><span>{this.state.cuartos[1]}</span></li>
                        </ul>
                        <ul className="matchup">
                            <li className="team team-top"><span>{this.state.cuartos[2]}</span></li>
                            <li className="team team-bottom"><span>{this.state.cuartos[3]}</span></li>
                        </ul>
                    </div>

                    <div className="round round-three current">
                        <div className="round-details">Semis<br /></div>
                        <ul className="matchup">
                            <li className="team team-top"><span>{this.state.semis[0]}</span></li>
                            <li className="team team-bottom"><span>{this.state.semis[1]}</span></li>
                        </ul>
                    </div>
                </div>

                <div className="champion">
                    <div className="final current">
                        <i className="fa fa-trophy"></i>
                        <div className="round-details">Final<br /></div>
                        <ul className="matchup championship">
                            <li className="team team-top"><span>{this.state.final[0]}</span></li>
                            <li className="team team-bottom"><span>{this.state.final[1]}</span></li>
                        </ul>
                    </div>
                    <div className="semis-l current">
                        <div className="round-details">Ganador<br /></div>
                        <ul className="matchup championship">
                            <li className="team team-top"><span>{this.state.winner}</span></li>
                        </ul>
                    </div>
                </div>

                <div className="split split-two">
                    <div className="round round-three current">
                        <div className="round-details">Semis<br /></div>
                        <ul className="matchup">
                            <li className="team team-top"><span>{this.state.semis[2]}</span></li>
                            <li className="team team-bottom"><span>{this.state.semis[3]}</span></li>
                        </ul>
                    </div>

                    <div className="round round-two current">
                        <div className="round-details">Cuartos<br /></div>
                        <ul className="matchup">
                            <li className="team team-top"><span>{this.state.cuartos[4]}</span></li>
                            <li className="team team-bottom"><span>{this.state.cuartos[5]}</span></li>
                        </ul>
                        <ul className="matchup">
                            <li className="team team-top"><span>{this.state.cuartos[6]}</span></li>
                            <li className="team team-bottom"><span>{this.state.cuartos[7]}</span></li>
                        </ul>
                    </div>
                    <div className="round round-one current">
                        <div className="round-details">Octavos<br /></div>
                        <ul className="matchup">
                            <li className="team team-top"><span>{this.state.octavos[8]}</span></li>
                            <li className="team team-bottom"><span>{this.state.octavos[9]}</span></li>
                        </ul>
                        <ul className="matchup">
                            <li className="team team-top"><span>{this.state.octavos[10]}</span></li>
                            <li className="team team-bottom"><span>{this.state.octavos[11]}</span></li>
                        </ul>
                        <ul className="matchup">
                            <li className="team team-top"><span>{this.state.octavos[12]}</span></li>
                            <li className="team team-bottom"><span>{this.state.octavos[13]}</span></li>
                        </ul>
                        <ul className="matchup">
                            <li className="team team-top"><span>{this.state.octavos[14]}</span></li>
                            <li className="team team-bottom"><span>{this.state.octavos[15]}</span></li>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}