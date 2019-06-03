
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Octavos extends Component {
    state = {
        matches: [],
        prediction:null
    };

    componentDidMount() {
        fetch('api/matches/16')
        .then(response => {
               return response.json();
           })
           .then(matches => {
               //Fetched product is stored in the state
               this.setState({ matches });
           });
    }

    onClick(event){
        console.log(event.target.id);
    }

    render() {

      return this.state.matches.map(match => {
            return (

                <div className="card">
                <li key={match.id} >
                      {match.team1_id}
                      <button id={match.team1_id} type="button" onClick={this.onClick}> gana</button>
                      </li>
                        vs
                      <li>
                      {match.team2_id}
                      <button  id={match.team2_id} type="button" onClick={this.onClick} type="button"> gana </button>
                </li>
                </div>
            );
        })

    }
    }
