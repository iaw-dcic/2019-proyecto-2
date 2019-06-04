import React from 'react';
import ReactDOM from 'react-dom';
import ImageDonut from './ImageDonut';

class MostrarDonut extends React.Component {
	constructor(props) {
		super(props);

		this.img = new ImageDonut();
	}

	render() {
		return (
			<div>
				<button type="button" className="btn donutboton2">
					<img className="donasboton" src={this.img.getSaborURL(this.props.donut.sabor_id)} />
					<img className="donasboton" src={this.img.getGlaseadoURL(this.props.donut.glaseado_id)} />
					<img className="donasboton" src={this.img.getDecoracionURL(this.props.donut.decorado_id)} />
				</button>

				<br />
				<br />
				<br />
			</div>
		);
	}
}

export default MostrarDonut;
