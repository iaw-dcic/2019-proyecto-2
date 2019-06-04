import React from 'react';
import EditarDonut from './EditarDonut';
import axios from 'axios';

class BotonDecoracion extends React.Component {
	constructor() {
		super();

		this.state = {
			decoraciones: []
		};
	}

	componentWillMount() {
		axios.get('/api/decoraciones').then((response) => {
			this.setState({
				decoraciones: response.data
			});
		});
	}

	render() {
		return (
			<div>
				{this.state.decoraciones.map((decoracion) => (
					<EditarDonut
						key={decoracion.id}
						donut={decoracion}
						name="decoracion"
						onClick={() => this.props.onClick(decoracion.id, decoracion.url)}
					/>
				))}
			</div>
		);
	}
}
export default BotonDecoracion;
