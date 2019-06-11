import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation'

/* Main Component */
export default class Equipo extends Component {

  constructor(props) {

    super(props);
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

  setName(){

  }

  render() {
   /* Some css code has been removed for brevity */
    
  }
}
