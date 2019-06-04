import React from 'react';
import EditarDonut from './EditarDonut';
import axios from 'axios';

class BotonGlaseado extends React.Component {
	constructor() {
		super();

		this.state = {
			glaseados: []
		};
	}

	componentWillMount() {
		axios.get('/api/glaseados').then((response) => {
			this.setState({
				glaseados: response.data
			});
		});
	}

	render() {
		return (
			<div>
				{this.state.glaseados.map((glaseado) => (
					<EditarDonut
						key={glaseado.id}
						donut={glaseado}
						name="glaseado"
						onClick={() => this.props.onClick(glaseado.id, glaseado.url)}
					/>
				))}
			</div>
		);
	}
}
export default BotonGlaseado;
