import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './page.css'
import SizeBtn from './SizeBtn'

export default class Sizes extends Component {

  constructor() {
      // Required step: always call the parent class' constructor
      super();
      this.state = {
          sizes: []
        }

    }
    render() {
        return (
            <div className="container">
              <h1>Size</h1>
              {this.state.sizes.map(size => <SizeBtn valor={size} handler={this.props.handler}/>)}
            </div>
        );
    }
    componentWillMount(){
      fetch('/api/v1/size').then(
           (response)=>{
               return response.json();
           }   )
       .then(s => {
           this.setState({ sizes: s });
       });
    }
}
