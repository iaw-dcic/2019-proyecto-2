import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Matchup extends Component {
    constructor(props){
        super(props)
        this.state = {
            winner1: false,
            winner2: false,
            equipo1: this.props.team1,
            equipo2: this.props.team2,
        }
        this.handleClick1 = this.handleClick1.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
    }

    componentWillReceiveProps(nextProps){
        this.setState(prevState => {
            if(prevState.equipo1[4]!=nextProps.team1[4]){
                return {
                    winner1: false, 
                    winner2: false , 
                    equipo1: nextProps.team1, 
                    equipo2: nextProps.team2, 
                    logo1: nextProps.logo1, 
                    logo2: nextProps.logo2
                }
            }
            return {
                winner1: prevState.winner1, 
                winner2: prevState.winner2, 
                equipo1: nextProps.team1, 
                equipo2: nextProps.team2, 
                logo1: nextProps.logo1, 
                logo2: nextProps.logo2
            }
        })
    }
 
    handleClick1(){
        this.setState({winner1: true, winner2:false})
        const winner =this.state.equipo1
        this.props.onChange(this.props.id, winner)
    }
 
    handleClick2(){
        this.setState({winner2: true, winner1:false})
        const winner = this.state.equipo2
        this.props.onChange(this.props.id, winner)
    }

    render() {
        return (
            <div className="matchup">
                <div className="participants">
                    <div id="0" className={this.state.winner1 ? 'participant winner': this.state.winner2 ? 'participant loser' : 'participant'} onClick={this.handleClick1}>{this.state.equipo1[2] && <img src={this.state.equipo1[2]} width="20" height="20" />}<span>{this.state.equipo1[0]}</span></div>
                    <div id="1" className={this.state.winner2 ? 'participant winner': this.state.winner1 ? 'participant loser' : 'participant'} onClick={this.handleClick2}>{this.state.equipo2[2] && <img src={this.state.equipo2[2]} width="20" height="20" />}<span>{this.state.equipo2[0]}</span></div>
                </div>
            </div>
        );
    }
}