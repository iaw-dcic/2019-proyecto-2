import React, { Component } from 'react';
import axios from 'axios';
import MostrarDonut from './MostrarDonut';

class SeccionEditar extends Component {
	constructor() {
		super();

		this.state = {
			donuts: []
		};
	}

	componentWillMount() {
		axios.get('/api/donuts').then((response) => {
			this.setState({
				donuts: response.data
			});
		});
	}

	render() {
		return (
			<div className="row fondo">
				{this.state.donuts.map((donut) => (
					<MostrarDonut
						key={donut.id}
						donut={donut}
						// onClick={() => this.props.onClick(donut.decorado_id, donut.glaseado_id, donut.sabor_id)}
					/>
				))}
			</div>
		);
	}
}

export default SeccionEditar;
