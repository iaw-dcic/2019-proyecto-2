import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

var octavos1 = [];
var cuartos = [];
var semis = [];
var final = [];
export default class Container extends Component {

    constructor() {
        super()
        this.state = {
            teams: []
        }
    }

    componentDidMount() {
        axios.get('/api/teams').then(response => {
            this.setState({
                teams: response.data
            })
        })

        {
            this.state.teams.map((team) => (
                octavos1.push(<button type="button" class="btn btn-primary btn-sm mb-1">{team.nombre}</button>)
            ))
        }

        for (var i = 1; i <= 8; i++) {
            cuartos.push(<button type="button" id={i} class="btn btn-primary btn-sm mb-1">Cuartos {i}</button>);
        }
        for (var i = 1; i <= 4; i++) {
            semis.push(<button type="button" class="btn btn-primary btn-sm mb-1"></button>);
        }
        for (var i = 1; i <= 2; i++) {
            final.push(<button type="button" class="btn btn-primary btn-sm mb-1"></button>);
        }
    }

    render() {
        var octavos = [];
        {
            this.state.teams.map((team) => (
                octavos.push(team.nombre)
            ))
        }
        return (
            <div>
                <section id="bracket">
                    <div class="container">
                        <div class="split split-one">
                            <div class="round round-one current">
                                <div class="round-details">Round 1<br /><span class="date">March 16</span></div>
                                <ul class="matchup">
                                    <li class="team team-top">{octavos[0]}</li>
                                    <li class="team team-bottom">{octavos[1]}<span class="score">82</span></li>
                                </ul>
                                <ul class="matchup">
                                    <li class="team team-top">{octavos[2]}<span class="score">64</span></li>
                                    <li class="team team-bottom">{octavos[3]}<span class="score">56</span></li>
                                </ul>
                                <ul class="matchup">
                                    <li class="team team-top">{octavos[4]}<span class="score">68</span></li>
                                    <li class="team team-bottom">{octavos[5]}<span class="score">54</span></li>
                                </ul>
                                <ul class="matchup">
                                    <li class="team team-top">{octavos[6]}<span class="score">74</span></li>
                                    <li class="team team-bottom">{octavos[7]}<span class="score">92</span></li>
                                </ul>

                            </div>

                            <div class="round round-two">
                                <div class="round-details">Round 2<br /><span class="date">March 18</span></div>
                                <ul class="matchup">
                                    <li class="team team-top">{null}<span class="score">&nbsp;</span></li>
                                    <li class="team team-bottom">&nbsp;<span class="score">&nbsp;</span></li>
                                </ul>
                                <ul class="matchup">
                                    <li class="team team-top">&nbsp;<span class="score">&nbsp;</span></li>
                                    <li class="team team-bottom">&nbsp;<span class="score">&nbsp;</span></li>
                                </ul>
                            </div>

                            <div class="round round-three">
                                <div class="round-details">Round 3<br /><span class="date">March 22</span></div>
                                <ul class="matchup">
                                    <li class="team team-top">&nbsp;<span class="score">&nbsp;</span></li>
                                    <li class="team team-bottom">&nbsp;<span class="score">&nbsp;</span></li>
                                </ul>
                            </div>
                        </div>

                        <div class="champion">
                            <div class="final">
                                <i class="fa fa-trophy"></i>
                                <div class="round-details">championship <br /><span class="date">March 30 - Apr. 1</span></div>
                                <ul class="matchup championship">
                                    <li class="team team-top">&nbsp;<span class="vote-count">&nbsp;</span></li>
                                    <li class="team team-bottom">&nbsp;<span class="vote-count">&nbsp;</span></li>
                                </ul>
                            </div>
                            <div class="semis-l">
                                <div class="round-details">Ganador<br /><span class="date">March 26-28</span></div>
                                <ul class="matchup championship">
                                    <li class="team team-top">&nbsp;<span class="vote-count">&nbsp;</span></li>
                                </ul>
                            </div>
                        </div>


                        <div class="split split-two">


                            <div class="round round-three">
                                <div class="round-details">Round 3<br /><span class="date">March 22</span></div>
                                <ul class="matchup">
                                    <li class="team team-top">&nbsp;<span class="score">&nbsp;</span></li>
                                    <li class="team team-bottom">&nbsp;<span class="score">&nbsp;</span></li>
                                </ul>
                            </div>

                            <div class="round round-two">
                                <div class="round-details">Round 2<br /><span class="date">March 18</span></div>
                                <ul class="matchup">
                                    <li class="team team-top">&nbsp;<span class="score">&nbsp;</span></li>
                                    <li class="team team-bottom">&nbsp;<span class="score">&nbsp;</span></li>
                                </ul>
                                <ul class="matchup">
                                    <li class="team team-top">&nbsp;<span class="score">&nbsp;</span></li>
                                    <li class="team team-bottom">&nbsp;<span class="score">&nbsp;</span></li>
                                </ul>
                            </div>
                            <div class="round round-one current">
                                <div class="round-details">Round 1<br /><span class="date">March 16</span></div>
                                <ul class="matchup">
                                    <li class="team team-top">{octavos[8]}<span class="score">62</span></li>
                                    <li class="team team-bottom">{octavos[9]}<span class="score">54</span></li>
                                </ul>
                                <ul class="matchup">
                                    <li class="team team-top">{octavos[10]}<span class="score">68</span></li>
                                    <li class="team team-bottom">{octavos[11]}<span class="score">66</span></li>
                                </ul>
                                <ul class="matchup">
                                    <li class="team team-top">{octavos[12]}<span class="score">64</span></li>
                                    <li class="team team-bottom">{octavos[13]}<span class="score">56</span></li>
                                </ul>
                                <ul class="matchup">
                                    <li class="team team-top">{octavos[14]}<span class="score">36</span></li>
                                    <li class="team team-bottom">{octavos[15]}<span class="score">40</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}