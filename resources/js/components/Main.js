import React, { Component } from 'react'

import UserHome from './UserHome'


export default class Main extends Component {

  constructor(props){
    super(props);
    const element = document.getElementById('api_token').content;
    this.state = {
      isLoaded: true,
      error: null,
      api_token: element,
    }
  }
  fetchResources(){
    fetch('/api/resources')
    .then( (response) => {
      return response.json();
    })
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.items,              
        });
      },
      (error) => {
        this.setState({
        isLoaded: true,
        error
      });
    }
  )
  }

  renderApp(){
    const { error, isLoaded, } = this.state;
    if (error) {
      return (
        <div className="container testing">
          Error: {error.message}
        </div>
      );
    } 
    else if (!isLoaded) {
      return (
        <div className="container testing">
          <div className="col-md-8 testing">
            <i className="fa fa-spinner fa-spin"></i>
          </div>
        </div>
      );
    } 
    else {
      return (
          <UserHome api_token={this.state.api_token}/>
      );
    }
  }
   
  render() {
    return (
        this.renderApp()
    );
  }
}