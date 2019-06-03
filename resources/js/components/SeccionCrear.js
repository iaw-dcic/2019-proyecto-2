import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Donut from './Donut';
import BotonSabor from './BotonSabor';
import BotonGlaseado from './BotonGlaseado';
import BotonDecoracion from './BotonDecoracion';
import Axios from 'axios';

class SeccionCrear extends Component {
	constructor() {
		super();

		this.state = {
			//donuts: {},
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
		const donut={
		  'sabor_id': this.state.sabor,
		  'glaseado_id':this.state.glaseado,
		  'decorado_id':this.state.decoracion
		};
		Axios.post('/donuts',donut)
		.then(response => {
		  console.log(response)
			alert("Dona creada correctamente");
		});

		// Axios({
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

	// actualizarDonuts = (clave, donut) => {
	// 	this.setState((state) => {
	// 		const donuts = { ...state.donuts };
	// 		donuts[clave] = donut;
	// 		return { donuts };
	// 	});
	// };

	// componentDidMount() {
	// 	this.setState({ donuts });
	// }

	render() {
		return (			
				<div className="row">
					<div className="col fondo" id="box">
						<img src={ localStorage.getItem('saborImagen') } className="medioSabor" />
						<img src={ localStorage.getItem('glaseadoImagen') } className="medio" />
						<img src={ localStorage.getItem('decoracionImagen') } className="medio" />
					</div>

					<div className="col fondo" id="box">
						<br />
						<h4 className="font-weight-light mb-0">Sabor </h4>
						{/* <BotonSabor donut={this.props.donuts} actualizarDonuts={this.actualizarDonuts} /> */}
						<BotonSabor onClick={this.setSabor} />

						<h4 className="font-weight-light mb-0">Glaseado </h4>
						{/* <BotonGlaseado donut={this.props.donuts} actualizarDonuts={this.actualizarDonuts} /> */}
						<BotonGlaseado onClick={this.setGlaseado} />

						<h4 className="font-weight-light mb-0">Decoración </h4>
						{/* <BotonDecoracion donut={this.props.donuts} actualizarDonuts={this.actualizarDonuts} /> */}
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