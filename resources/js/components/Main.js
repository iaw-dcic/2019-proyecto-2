import React, { Component } from 'react'

import UserHome from './UserHome'


export default class Main extends Component {

  constructor(props){
    super(props);
    const element = document.getElementById('api_token').content;
    this.state = {
      api_token: element,
    }
  }  
   
  render() {
    return (
      <UserHome api_token={this.state.api_token}/>
    );
  }
}