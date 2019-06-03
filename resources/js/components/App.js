import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Donut from './Donut';
import Sabores from './Sabores';
import Glaseados from './Glaseados';
import Decoraciones from './Decoraciones';
import donuts from './donutscargadas';

class App extends Component {
	constructor() {
		super();

		this.state = {
			donuts: {}
		};
	}

	actualizarDonuts = (clave, donut) => {
		this.setState((state) => {
			const donuts = { ...state.donuts };
			donuts[clave] = donut;
			return { donuts };
		});
	};

	componentDidMount() {
		this.setState({ donuts });
	}

	render() {
		return (
			<BrowserRouter>
			
				<div className="row">
					<div  className="col fondo" id="box">
						{Object.keys(this.state.donuts).map((key) => (
							<Donut key={key} clave={key} donut={this.state.donuts[key]} />
						))}
					</div>

					<div className="col fondo" id="box">
						<br />
						<h4 className="font-weight-light mb-0">Sabor </h4>
						<Sabores donut={this.props.donuts} actualizarDonuts={this.actualizarDonuts} />

						<h4 className="font-weight-light mb-0">Glaseado </h4>
						<Glaseados donut={this.props.donuts} actualizarDonuts={this.actualizarDonuts} />

						<h4 className="font-weight-light mb-0">Decoración </h4>
						<Decoraciones donut={this.props.donuts} actualizarDonuts={this.actualizarDonuts} />

						<br />
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('react-app'));
