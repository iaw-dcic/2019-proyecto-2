import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation'

/* Main Component */
export default class Equipo extends Component {

  constructor() {

    super();
    //Initialize the state in the constructor
    this.state = {
        teams: [],
    }
  }
  /*componentDidMount() is a lifecycle method
   * that gets called after the component is rendered
   */
  componentDidMount() {
    /* fetch API in action */
    fetch('/api/teams')
    .then(response => {
           return response.json();
       })
       .then(teams => {
           //Fetched product is stored in the state
           this.setState({ teams });
       });
  }

 renderProducts() {
    return this.state.teams.map(team => {
        return (
            /* When using list you need to specify a key
             * attribute that is unique for each list item
            */
            <li key={team.id} >
                { team.name }
            </li>
        );
    })
  }

getName(i){
  let cuartos = [...this.state.teams];     // create the copy of state array
  teams[i] = newteam;                  //new value
  return teams[i].name;
}


  render() {
   /* Some css code has been removed for brevity */
    return (
              <React.Fragment>

                  <main role="main" className="container">
                  <div className="row mt-5">
                  <div className="col-md-4">
                  <div className="card">
                      <h3> Equipos </h3>
                      <ul>
                        { this.renderProducts() }
                      </ul>
                  </div>
                  </div>
                  </div>
                  </main>
                </React.Fragment>
    );
  }
}
