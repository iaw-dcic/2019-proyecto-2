import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './page.css'
import ModeloBtn from './ModeloBtn'

export default class NotebookPanel extends Component {
  constructor() {
      // Required step: always call the parent class' constructor
      super();
      this.state={
        url:"ASDasdasd",
      }
      this.changeurl = this.changeurl.bind(this)
    }
    changeurl(someValue) {
      this.setState({
        url: someValue
      })
    }
    render() {
        return (
          <div className="features-image">
            <img src={this.state.url}/>
          </div>
        );
    }
    componentWillMount(){
      
    }

}
