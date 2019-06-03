import React, { Component } from 'react'

import UserHome from './UserHome'


export default class Main extends Component {

  constructor(props){
    super(props);
    const element = document.getElementById('api_token').content;
    this.state = {
      isLoaded: false,
      api_token: element,
    }
  }

  fetchResources(){
    // Obtengo recursos de avatares
    console.log("MAIN: fetching resources");
    fetch('/api/resources')
    .then( (response) => {
      return response.json();
    })
    .then(
      (result) => {
        console.log("MAIN: fetching resources finished");
        this.setState({
          items: result.items,
          isLoaded: true,              
        });
      }
    )
  }

  componentDidMount(){
    //Hago el fetch cuando se monta el componente
    this.fetchResources()
  }

   
  render() {    
    if(this.state.isLoaded){
      return (
        <UserHome 
          api_token={this.state.api_token}
          items={this.state.items}
        />
      );
    }
    else{
      return(
        <div className="container testing">
          <div className="row justify-content-center">
            <div className="col-md-1">
              <i className="fa fa-spinner fa-spin loading"/>
            </div>
          </div>
        </div>
      );
    }
  }
}