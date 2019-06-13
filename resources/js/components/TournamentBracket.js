import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Warriors from './Warriors.png';
import { writeHeapSnapshot } from 'v8';

class TournamentBracket extends Component {

    constructor() {
        super();
        this.state = {
            teams: [],
            e1: {},e2: {},e3: {},e4: {},e5: {},e6: {},e7: {},e8: {},
            w1: {},w2: {},w3: {},w4: {},w5: {},w6: {},w7: {},w8: {},
            ec1: {}, ec2: {}, ec3: {}, ec4: {},
            wc1: {}, wc2: {}, wc3: {}, wc4: {},
            ef1: {}, ef2: {},
            wf1: {}, wf2: {},
            f1: {}, f2: {},
            champ: {}

        }
    };

    componentWillMount() {
        axios.get('/api/teams').then(res => {
            this.setState({
                teams: res.data,
                e1: res.data[0],e2: res.data[1],e3: res.data[2],e4: res.data[3],e5: res.data[4],e6: res.data[5],e7: res.data[6],e8: res.data[7],
                w1: res.data[8],w2: res.data[9],w3: res.data[10],w4: res.data[11],w5: res.data[12],w6: res.data[13],w7: res.data[14],w8: res.data[15]
            })
            //console.log(this.state.teams[0].team_name);
            
        });
    }

    advanceTo = (id,advanceTo) => {
        //console.log(id)
        //console.log(advanceTo);
        switch(advanceTo){
            case 'ec1':
                this.setState({
                    ec1: this.state.teams[id-1]
                });
                break;
            case 'ec2':
                this.setState({
                    ec2: this.state.teams[id-1]
                });
                break;
            case 'ec3':
                this.setState({
                    ec3: this.state.teams[id-1]
                });
                break;
            case 'ec4':
                this.setState({
                    ec4: this.state.teams[id-1]
                });
                break;
            case 'wc1':
                this.setState({
                    wc1: this.state.teams[id-1]
                });
                break;
            case 'wc2':
                this.setState({
                    wc2: this.state.teams[id-1]
                });
                break;
            case 'wc3':
                this.setState({
                    wc3: this.state.teams[id-1]
                });
                break;
            case 'wc4':
                this.setState({
                    wc4: this.state.teams[id-1]
                });
                break;
            case 'ef1':
                this.setState({
                    ef1: this.state.teams[id-1]
                });
                break;
            case 'ef2':
                this.setState({
                    ef2: this.state.teams[id-1]
                });
                break;
            case 'wf1':
                this.setState({
                    wf1: this.state.teams[id-1]
                });
                break;
            case 'wf2':
                this.setState({
                    wf2: this.state.teams[id-1]
                });
                break;
            case 'f1':
                this.setState({
                    f1: this.state.teams[id-1]
                });
                break;
            case 'f2':
                this.setState({
                    f2: this.state.teams[id-1]
                });
                break;
            case 'champ':
                this.setState({
                    champ: this.state.teams[id-1]
                });
                break;
        }
    }
   
    resetBracket = (e) => {
        this.setState({
            e1: this.state.teams[0],e2: this.state.teams[1],e3: this.state.teams[2],e4: this.state.teams[3],e5: this.state.teams[4],e6: this.state.teams[5],e7: this.state.teams[6],e8: this.state.teams[7],
            w1: this.state.teams[8],w2: this.state.teams[9],w3: this.state.teams[10],w4: this.state.teams[11],w5: this.state.teams[12],w6: this.state.teams[13],w7: this.state.teams[14],w8: this.state.teams[15],
            ec1: {}, ec2: {}, ec3: {}, ec4: {},
            wc1: {}, wc2: {}, wc3: {}, wc4: {},
            ef1: {}, ef2: {},
            wf1: {}, wf2: {},
            f1: {}, f2: {},
            champ: {}
        })
    }

    render() {

        return (
            <>
            <div className="container">

                <h1>2019 NBA Finals</h1>
                <main>
                    <ul className="round round-1">
                        <li className="spacer">&nbsp;</li>

                        <li className="game game-top ">{this.state.e1.team_name}<span onClick={this.advanceTo.bind(this,this.state.e1.id,"ec1")}>Avanzar</span></li>
                        <li className="game game-spacer">&nbsp;</li>

                        <li className="game game-bottom">{this.state.e8.team_name}<span onClick={this.advanceTo.bind(this,this.state.e8.id,"ec1")}>Avanzar</span></li>

                        <li className="spacer">&nbsp;</li>

                        <li className="game game-top ">{this.state.e4.team_name}<span onClick={this.advanceTo.bind(this,this.state.e4.id,"ec2")}>Avanzar</span></li>
                        <li className="game game-spacer">&nbsp;</li>
                        <li className="game game-bottom ">{this.state.e5.team_name}<span onClick={this.advanceTo.bind(this,this.state.e5.id,"ec2")}>Avanzar</span></li>

                        <li className="spacer">&nbsp;</li>

                        <li className="game game-top ">{this.state.e2.team_name}<span onClick={this.advanceTo.bind(this,this.state.e2.id,"ec3")}>Avanzar</span></li>
                        <li className="game game-spacer">&nbsp;</li>
                        <li className="game game-bottom ">{this.state.e7.team_name}<span onClick={this.advanceTo.bind(this,this.state.e7.id,"ec3")}>Avanzar</span></li>

                        <li className="spacer">&nbsp;</li>

                        <li className="game game-top ">{this.state.e3.team_name}<span onClick={this.advanceTo.bind(this,this.state.e3.id,"ec4")}>Avanzar</span></li>
                        <li className="game game-spacer">&nbsp;</li>
                        <li className="game game-bottom ">{this.state.e6.team_name}<span onClick={this.advanceTo.bind(this,this.state.e6.id,"ec4")}>Avanzar</span></li>

                        <li className="spacer">&nbsp;</li>

                        <li className="game game-top ">{this.state.w1.team_name}<span onClick={this.advanceTo.bind(this,this.state.w1.id,"wc1")}>Avanzar</span></li>
                        <li className="game game-spacer">&nbsp;</li>
                        <li className="game game-bottom ">{this.state.w8.team_name}<span onClick={this.advanceTo.bind(this,this.state.w8.id,"wc1")}>Avanzar</span></li>

                        <li className="spacer">&nbsp;</li>

                        <li className="game game-top ">{this.state.w4.team_name}<span onClick={this.advanceTo.bind(this,this.state.w4.id,"wc2")}>Avanzar</span></li>
                        <li className="game game-spacer">&nbsp;</li>
                        <li className="game game-bottom ">{this.state.w5.team_name}<span onClick={this.advanceTo.bind(this,this.state.w5.id,"wc2")}>Avanzar</span></li>

                        <li className="spacer">&nbsp;</li>

                        <li className="game game-top ">{this.state.w2.team_name}<span onClick={this.advanceTo.bind(this,this.state.w2.id,"wc3")}>Avanzar</span></li>
                        <li className="game game-spacer">&nbsp;</li>
                        <li className="game game-bottom ">{this.state.w7.team_name}<span onClick={this.advanceTo.bind(this,this.state.w7.id,"wc3")}>Avanzar</span></li>

                        <li className="spacer">&nbsp;</li>

                        <li className="game game-top ">{this.state.w3.team_name}<span onClick={this.advanceTo.bind(this,this.state.w3.id,"wc4")}>Avanzar</span></li>
                        <li className="game game-spacer">&nbsp;</li>
                        <li className="game game-bottom ">{this.state.w6.team_name}<span onClick={this.advanceTo.bind(this,this.state.w6.id,"wc4")}>Avanzar</span></li>

                        <li className="spacer">&nbsp;</li>
                    </ul>
                    <ul className="round round-2">
                        <li className="spacer">&nbsp;</li>

                        <li className="game game-top ">{this.state.ec1.team_name}<span onClick={this.advanceTo.bind(this,this.state.ec1.id,"ef1")}>Avanzar</span></li>
                        <li className="game game-spacer">&nbsp;</li>
                        <li className="game game-bottom ">{this.state.ec2.team_name}<span onClick={this.advanceTo.bind(this,this.state.ec2.id,"ef1")}>Avanzar</span></li>

                        <li className="spacer">&nbsp;</li>

                        <li className="game game-top ">{this.state.ec3.team_name}<span onClick={this.advanceTo.bind(this,this.state.ec3.id,"ef2")}>Avanzar</span></li>
                        <li className="game game-spacer">&nbsp;</li>
                        <li className="game game-bottom ">{this.state.ec4.team_name}<span onClick={this.advanceTo.bind(this,this.state.ec4.id,"ef2")}>Avanzar</span></li>

                        <li className="spacer">&nbsp;</li>

                        <li className="game game-top ">{this.state.wc1.team_name}<span onClick={this.advanceTo.bind(this,this.state.wc1.id,"wf1")}>Avanzar</span></li>
                        <li className="game game-spacer">&nbsp;</li>
                        <li className="game game-bottom ">{this.state.wc2.team_name}<span onClick={this.advanceTo.bind(this,this.state.wc2.id,"wf1")}>Avanzar</span></li>

                        <li className="spacer">&nbsp;</li>

                        <li className="game game-top ">{this.state.wc3.team_name}<span onClick={this.advanceTo.bind(this,this.state.wc3.id,"wf2")}>Avanzar</span></li>
                        <li className="game game-spacer">&nbsp;</li>
                        <li className="game game-bottom ">{this.state.wc4.team_name}<span onClick={this.advanceTo.bind(this,this.state.wc4.id,"wf2")}>Avanzar</span></li>

                        <li className="spacer">&nbsp;</li>
                    </ul>
                    <ul className="round round-3">
                        <li className="spacer">&nbsp;</li>

                        <li className="game game-top ">{this.state.ef1.team_name}<span onClick={this.advanceTo.bind(this,this.state.ef1.id,"f1")}>Avanzar</span></li>
                        <li className="game game-spacer">&nbsp;</li>
                        <li className="game game-bottom ">{this.state.ef2.team_name}<span onClick={this.advanceTo.bind(this,this.state.ef2.id,"f1")}>Avanzar</span></li>

                        <li className="spacer">&nbsp;</li>

                        <li className="game game-top ">{this.state.wf1.team_name}<span onClick={this.advanceTo.bind(this,this.state.wf1.id,"f2")}>Avanzar</span></li>
                        <li className="game game-spacer">&nbsp;</li>
                        <li className="game game-bottom ">{this.state.wf2.team_name}<span onClick={this.advanceTo.bind(this,this.state.wf2.id,"f2")}>Avanzar</span></li>

                        <li className="spacer">&nbsp;</li>
                    </ul>
                    <ul className="round round-4">
                        <li className="spacer">&nbsp;</li>

                        <li className="game game-top ">{this.state.f1.team_name}<span onClick={this.advanceTo.bind(this,this.state.f1.id,"champ")}>Avanzar</span></li>
                        <li className="game game-spacer">&nbsp;</li>
                        <li className="game game-bottom ">{this.state.f2.team_name}<span onClick={this.advanceTo.bind(this,this.state.f2.id,"champ")}>Avanzar</span></li>

                        <li className="spacer">&nbsp;</li>
                    </ul>
                    <ul className="round round-5">

                        <li className="game game-top">{this.state.champ.team_name}<span></span></li>

                    </ul>
                </main>
                    <button className="btn btn-success" onClick={this.resetBracket}>Reiniciar</button>
            </div>
                {/* 
                    this.state.teams.map( (resul, key) => 
                    <p key={resul.id} className="rojo">
                    {resul.team_name}
                    </p>
                    )
                    */
                }

            </>
        );
    }
}

export default TournamentBracket;