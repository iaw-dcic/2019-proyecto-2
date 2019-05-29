import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Donuts from './Donuts';
import Donut from './Donut';
import donuts from './donutscargadas';

class App extends Component {
  constructor() {
    super();

    this.state = {
      donuts: {}
    }
    
  }

  actualizarDonuts (clave, donut) {
    this.setState((state) => {
      const donuts = { ...state.donuts };
      donuts[clave] = donut;
      return ({ donuts });
    })
  }

  componentDidMount() {
    this.setState({donuts});
  }

	render() {
		return (
      <BrowserRouter> 
      <div className="row p-3">
      <div className="col border">
        {
            Object.keys(this.state.donuts).map((key) => (
              <Donut 
                key={key} 
                clave={key}
                donut={this.state.donuts[key]}>
                </Donut>

            ))
          }

       
      </div>
      <Donuts 
         donuts={this.state.donuts}
         actualizarDonuts={this.actualizarDonuts}
      ></Donuts>
      
    </div>
    </BrowserRouter>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('react-app'));
