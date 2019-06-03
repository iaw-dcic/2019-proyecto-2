import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation'
import Octavos from './Octavos'
import Cuartos from './Cuartos'
import SemiFinal from './SemiFinal'
import Final from './Final'
import Ganador from './Ganador'

import  "./css/cuadro.scss";

/* Main Component */
export default class Cuadro extends Component {

  state = {
      matches: [],
      cuartos: ["", "", "", "", "", "", "", ""],
      semifinal: ["", "", "", ""],
      final: ["", ""],
      ganador: ""
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

  octavos(){
let i=0;
    return this.state.matches.map(match => {
     return(

            <li key={match.id}  className="team-item">

                  <button id={match.team1_id} type="button" className= "btn btn-info" onClick={(e) => this.onClick1(e,match.team1_id, match.id-1)}>{match.team1_id}</button>
                    <time>vs</time>

                  <button  id={match.team2_id} type="button" className= "btn btn-info" onClick={(e) => this.onClick1(e,match.team2_id,match.id-1)} type="button">  {match.team2_id}</button>

            </li>
        );
    })
  }

  onClick1(event, newcuartos, i){
      console.log(event.target.id);
      let cuartos = [...this.state.cuartos];     // create the copy of state array
      cuartos[i] = newcuartos;                  //new value
      this.setState({ cuartos });            //update the value
  }

  onClick2(event, newsemi, i){
      console.log(event.target.id);
      let semifinal = [...this.state.semifinal];     // create the copy of state array
      semifinal[i] = newsemi;                  //new value
      this.setState({ semifinal });            //update the value
  }

  onClick3(event, newfinal, i){
      console.log(event.target.id);
      let final = [...this.state.final];     // create the copy of state array
      final[i] = newfinal;                  //new value
      this.setState({ final });            //update the value
  }


  onClick4(event, winner){
      console.log(event.target.id);
      this.setState({
        ganador:winner
      });
  }


        render() {
          return <div>

          <Navigation />

          <div className="tournament-container">
            <div className="tournament-headers">
            <h3>Round of 16</h3>
            <h3>Quarter-Finals</h3>
            <h3>Semi-Finals</h3>
            <h3>Final</h3>
            <h3>Winner</h3>
            </div>


              <div className="tournament-brackets">
                  <ul className="bracket bracket-1">
                    {this.octavos()}
                  </ul>

                    <ul className="bracket bracket-2">
                        <li className="team-item">

                            <button type="button" className= "btn btn-info" onClick={(e) => this.onClick2(e, this.state.cuartos[0], 0)}>  {this.state.cuartos[0]}</button>
                        <time>vs</time>
                            <button type="button" className= "btn btn-info" onClick={(e) => this.onClick2(e, this.state.cuartos[1], 0)}>
                              {this.state.cuartos[1]}</button>
                        </li>


                      <li className="team-item">

                            <button type="button" className= "btn btn-info" onClick={(e) => this.onClick2(e, this.state.cuartos[2], 1)}>  {this.state.cuartos[2]}</button>
                      <time>vs</time>

                            <button type="button" className= "btn btn-info" onClick={(e) => this.onClick2(e, this.state.cuartos[3], 1)}>  {this.state.cuartos[3]}</button>
                      </li>


                      <li className="team-item">

                          <button type="button" className= "btn btn-info" onClick={(e) => this.onClick2(e, this.state.cuartos[4], 2)}>    {this.state.cuartos[4]}</button>
                        <time>vs</time>

                          <button type="button" className= "btn btn-info" onClick={(e) => this.onClick2(e, this.state.cuartos[5], 2)}>    {this.state.cuartos[5]}</button>
                      </li>


                        <li className="team-item">

                        <button type="button" className= "btn btn-info" onClick={(e) => this.onClick2(e, this.state.cuartos[6], 3)}>    {this.state.cuartos[6]}</button>
                          <time>vs</time>

                        <button type="button" className= "btn btn-info" onClick={(e) => this.onClick2(e, this.state.cuartos[7], 3)}>      {this.state.cuartos[7]}</button>
                        </li>
                    </ul>

                <ul className="bracket bracket-3">
                 <li className="team-item">

                      <button type="button" className= "btn btn-info" onClick={(e) => this.onClick3(e, this.state.semifinal[0], 0)}>{this.state.semifinal[0]}</button>
                      <time>vs</time>

                        <button type="button"className= "btn btn-info" onClick={(e) => this.onClick3(e, this.state.semifinal[1], 0)}>    {this.state.semifinal[1]}</button>
                  </li>

                  <li className="team-item">

                      <button type="button" className= "btn btn-info" onClick={(e) => this.onClick3(e, this.state.semifinal[2], 1)}>      {this.state.semifinal[2]}</button>
                    <time>vs</time>

                      <button type="button" className= "btn btn-info" onClick={(e) => this.onClick3(e, this.state.semifinal[3], 1)}>    {this.state.semifinal[3]}</button>
                  </li>
                </ul>

                  <ul className="bracket bracket-4">
                    <li className="team-item">

                        <button type="button" className= "btn btn-info" onClick={(e) => this.onClick4(e, this.state.final[0])}>    {this.state.final[0]}</button>
                      <time>vs</time>
                        <button type="button" className= "btn btn-info" onClick={(e) => this.onClick4(e, this.state.final[1])}>
                          {this.state.final[1]}</button>
                    </li>
                  </ul>


                    <ul className="bracket bracket-5">
                      <li className="team-item">
                      {this.state.ganador}
                      </li>
                    </ul>


                    <input type="submit" className= "btn btn-info" value="Guardar" />








          </div>
            </div>
  </div>


      }
  }
