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

  // agregarDonut (donut) {
  //   this.setState((state) => {
  //     const donuts = { ...state.donuts };
  //     donuts[`donut${Date.now()}`] = donut;
  //     return ({ donuts });
  //   })
  // }

  componentDidMount() {
    this.setState({donuts});
  }

	render() {
		return (
      <BrowserRouter> 
      <div className="row"> 
      <div className="col fondo">     
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

      <div className="col fondo">
        <Donuts 
          donuts={this.state.donuts}
         // agregarDonut={this.agregarDonut}
          actualizarDonuts={this.actualizarDonuts}
        ></Donuts> 
      </div>

</div>
    </BrowserRouter>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('react-app'));
