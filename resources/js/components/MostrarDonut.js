import React from 'react';
import ReactDOM from 'react-dom';
import ImageDonut from './ImageDonut';

class MostrarDonut extends React.Component {
	constructor(props) {
		super(props);

		this.img = new ImageDonut();
	}

	handleClick = (e) => {
		console.log(e.currentTarget.value);
		console.log();
		this.props.onClick(e.currentTarget.value, e.currentTarget.value1, e.currentTarget.value2);
	};

	render() {
		return (
			<div>
				<button
					type="button"
					className="btn donutboton2"
					// value={this.props.donut.decorado_id}
					// value1={this.props.donut.glaseado_id}
					// value2={this.props.donut.sabor_id}
					// onClick={this.handleClick}
				>
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
