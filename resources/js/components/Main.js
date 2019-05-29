import React, { Component } from 'react'
import BodyItems from './BodyItems'
import HeadItems from './HeadItems'
import ExtraItems from './ExtraItems'
import UpperbodyItems from './UpperbodyItems'
import LowerbodyItems from './LowerbodyItems'


export default class Main extends Component {

  state ={
    isLoaded: false,
    error: null,
    items: [],
  }

  /* componentDidMount() is a lifecycle method
   * that gets called after the component is rendered
   */
  componentDidMount() {
    /* fetch API in action */
    fetch('/api/resources')
      .then(response => {
        return response.json();
      })
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items,              
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
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
        <div>
          Error: {error.message}
        </div>
      );
    } 
    else if (!isLoaded) {
      return (
        <div>
          Loading...
        </div>
      );
    } 
    else {
      return (
      <div>                
        <h3>Lista de items para avatares</h3>
        <BodyItems items={this.state.items.bodyitems} />
        <HeadItems items={this.state.items.headitems}/>
        <UpperbodyItems items={this.state.items.upperbodyitems}/>
        <LowerbodyItems items={this.state.items.lowerbodyitems}/>
        <ExtraItems items={this.state.items.extraitems}/>
      </div>
      );
    }
  }
   
  render() {
   /* Some css code has been removed for brevity */
    return (
      <div className="container" style={{marginTop: 60 + 'px'}}>
        <div className="row justify-content-center">
          <div className="col-md-8">
            {this.renderApp()}  
          </div>
        </div>
      </div> 
    );
  }
}