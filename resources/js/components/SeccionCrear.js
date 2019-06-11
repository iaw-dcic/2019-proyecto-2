import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BotonSabor from './BotonSabor';
import BotonGlaseado from './BotonGlaseado';
import BotonDecoracion from './BotonDecoracion';
import ImageDonut from './ImageDonut';
import axios from 'axios';
import MostrarDonut from './MostrarDonut';

class SeccionCrear extends Component {
	constructor() {
		super();

		this.state = {
			sabor: 4,
			glaseado: 6,
			decoracion: 6,

			saborImg: 'img/Donas/dona.png',
			glaseadoImg: 'img/Donas/glaseadoVacio2.png',
			decoracionImg: 'img/Donas/decoracionVacio.png',

			donuts: []
		};

		this.setSabor = this.setSabor.bind(this);
		this.setGlaseado = this.setGlaseado.bind(this);
		this.setDecoracion = this.setDecoracion.bind(this);
		this.addDonut = this.addDonut.bind(this);
		this.updateDonut = this.addDonut.bind(this);

		this.img = new ImageDonut();
	}

	setSabor(saborId, saborImage) {
		this.setState({
			sabor: saborId,
			saborImg: saborImage
		});

		localStorage.setItem('saborImagen', saborImage);
	}

	setGlaseado(glaseadoId, glaseadoImage) {
		this.setState({
			glaseado: glaseadoId,
			glaseadoImg: glaseadoImage
		});

		localStorage.setItem('glaseadoImagen', glaseadoImage);
	}

	setDecoracion(decoracionId, decoracionImage) {
		this.setState({
			decoracion: decoracionId,
			decoracionImg: decoracionImage
		});

		localStorage.setItem('decoracionImagen', decoracionImage);
	}

	addDonut() {
		window.axios = require('axios');
		let api_token = document.querySelector('meta[name="api-token"]');

		if (api_token) window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;

		axios
			.post('/api/donuts', {
				sabor_id: this.state.sabor,
				glaseado_id: this.state.glaseado,
				decorado_id: this.state.decoracion
			})
			.then((response) => {
				console.log('Donut creada', response);
			});

		this.componentDidMount();
	}

	componentDidMount() {
		window.axios = require('axios');
        let api_token = document.querySelector('meta[name="api-token"]');
    
		if (api_token) window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;
		
		axios.get('/api/donuts').then((response) => {
			this.setState({
				donuts: response.data
			});
		});
	}
  
	render() {
		return (
			<div>
				<div className="row">
					<div className="col">
						<h2 className="text-center text-uppercase text-secondary mb-0">
							Crea tu Devil Donut <img className="donasbotones" src="img/Logo/logo.png" />
						</h2>
					</div>
				</div>

				<div className="row">
					<div className="col-sm-9 col-md-6 fondo" id="box">
						<img src="img/Donas/dona.png" className="medio" />
						<img src={localStorage.getItem('saborImagen')} className="medio" />
						<img src={localStorage.getItem('glaseadoImagen')} className="medio" />
						<img src={localStorage.getItem('decoracionImagen')} className="medio" />
					</div>

					<div className="col-sm-3 col-md-6 fondo" id="box">
						<br />
						<h4 className="font-weight-light mb-0">Sabor </h4>
						<BotonSabor onClick={this.setSabor} />

						<h4 className="font-weight-light mb-0">Glaseado </h4>
						<BotonGlaseado onClick={this.setGlaseado} />

						<h4 className="font-weight-light mb-0">Decoración </h4>
						<BotonDecoracion onClick={this.setDecoracion} />

						<br />

						<div className="form-group">
							<button type="submit" className="btn btn-primary btn-xl" onClick={this.addDonut}>
								Guardar
							</button>
						</div>
					</div>
				</div>

				<br />

				<div className="row">
					<div className="col">
						<h2 className="text-center text-uppercase text-secondary mb-0">Edita tu Devil Donut</h2>
					</div>
				</div>
				<br />

				<div className="row fondo">
					{this.state.donuts.map((donut) => (
						<MostrarDonut
							key={donut.id}
							donut={donut}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default SeccionCrear;
