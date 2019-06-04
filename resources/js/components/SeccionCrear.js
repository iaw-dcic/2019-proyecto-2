import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BotonSabor from './BotonSabor';
import BotonGlaseado from './BotonGlaseado';
import BotonDecoracion from './BotonDecoracion';
import axios from 'axios';

class SeccionCrear extends Component {
	constructor() {
		super();

		this.state = {
			sabor: 4,
			glaseado: 6,
			decoracion: 6,

			saborImg: 'img/Donas/dona.png',
			glaseadoImg: 'img/Donas/glaseadoVacio2.png',
			decoracionImg: 'img/Donas/decoracionVacio.png'
		};

		this.setSabor = this.setSabor.bind(this);
		this.setGlaseado = this.setGlaseado.bind(this);
		this.setDecoracion = this.setDecoracion.bind(this);
		this.addDonut=this.addDonut.bind(this);

		// localStorage.setItem('saborImagen', 'img/Donas/dona.png');
		// localStorage.setItem('glaseadoImagen', 'img/Donas/glaseadoVacio2.png');
		// localStorage.setItem('decoracionImagen', 'img/Donas/decoracionVacio.png');
	}

	setSabor(saborId, saborImage){
        this.setState({
			sabor : saborId, 
			saborImg : saborImage
		})

		localStorage.setItem('saborImagen', saborImage);
	}

	setGlaseado(glaseadoId, glaseadoImage){
        this.setState({
			glaseado : glaseadoId, 
			glaseadoImg : glaseadoImage
		})

		localStorage.setItem('glaseadoImagen', glaseadoImage);
	}

	setDecoracion(decoracionId, decoracionImage){
        this.setState({
			decoracion : decoracionId, 
			decoracionImg : decoracionImage
		})

		localStorage.setItem('decoracionImagen', decoracionImage);
	}
	
	addDonut() {
		axios.post('/api/donuts',{
		  	sabor_id: this.state.sabor,
		  	glaseado_id:this.state.glaseado,
		  	decorado_id:this.state.decoracion
		})
		.then(response => {
		  console.log('Donut creada', response);
		});

		// axios({
        //     method: 'post',
        //     url: '/donuts',
        //     data: donut
        // })
        // .then(function (response) {
        //     //handle success
        //     console.log(response)

        // })
        // .catch(function (response) {
        //     //handle error
        //     console.log(response)
		// });
				
		}

	render() {
		return (			
				<div className="row">
					<div className="col-sm-9 col-md-6 fondo" id="box">
						<img src="img/Donas/dona.png" className="medio" />
						<img src={ localStorage.getItem('saborImagen') } className="medio" />
						<img src={ localStorage.getItem('glaseadoImagen') } className="medio" />
						<img src={ localStorage.getItem('decoracionImagen') } className="medio" />
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
							<button type="submit" className="btn btn-primary btn-xl" onClick={this.addDonut}>Guardar</button>
						</div>
					</div>
				</div>
		);
	}
}

export default SeccionCrear;

{/* <img src="img/Donas/dona.png" className="medio" />
		<img src="img/Donas/glaseadoVacio2.png" className="medio" />
		<img src="img/Donas/decoracionVacio.png" className="medio" /> */}