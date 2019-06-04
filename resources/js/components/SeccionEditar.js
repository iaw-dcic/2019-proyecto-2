import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import MostrarDonut from './MostrarDonut';

class SeccionEditar extends Component {
	constructor() {
		super();

		this.state = {
			donuts: []
		};
	}

	componentDidMount() {
		axios.get('/api/donuts').then((response) => {
			this.setState({
				donuts: response.data
			});
		});
	}

	render() {
		return (
			<div className="row fondo">
				{this.state.donuts.map((donut) => 
					<MostrarDonut 
						key={donut.id}
						donut={donut} 
					/>
                )}
			</div>
		);
	}
}

export default SeccionEditar;
