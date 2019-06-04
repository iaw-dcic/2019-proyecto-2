import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SeccionCrear from './SeccionCrear';
import SeccionEditar from './SeccionEditar';

class App extends Component {
	render() {
		return (
			<BrowserRouter>

				<div className="row">
					<div className="col">
						<h2 className="text-center text-uppercase text-secondary mb-0">
							Crea tu Devil Donut <img className="donasbotones" src="img/Logo/logo.png" />
						</h2>
					</div>
				</div>
				<SeccionCrear />

				<br />

				<div className="row">
					<div className="col">
						<h2 className="text-center text-uppercase text-secondary mb-0">Edita tu Devil Donut</h2>
					</div>
				</div>
				<br />
				
				<SeccionEditar />
			</BrowserRouter>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('react-app'));


