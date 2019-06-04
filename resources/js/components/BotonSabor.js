import React from 'react';
import EditarDonut from './EditarDonut';
import axios from 'axios';

class BotonSabor extends React.Component {
	constructor() {
		super();

		this.state = {
			sabores: []
		};
	}

	componentWillMount() {
		axios.get('/api/sabores').then((response) => {
			this.setState({
				sabores: response.data
			});
		});
	}

	render() {
		return (
			<div>
				{this.state.sabores.map((sabor) => (
					<EditarDonut
						key={sabor.id}
						donut={sabor}
						name="sabor"
						onClick={() => this.props.onClick(sabor.id, sabor.url)}
					/>
				))}
			</div>
		);
	}
}
export default BotonSabor;
