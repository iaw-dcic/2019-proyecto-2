import React, { Component } from 'react';

export default class EditProde extends Component {
  
    constructor(props){
        super(props);
        this.state = {
            nombre: this.props.location.state.prode.nombre
        }
    }

    modificar(){
        let  axios = require('axios');
        //obtengo el token del usr
        var token = document.head.querySelector('meta[name="user-token"]');
        //uso Bearer
        window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token.content; 
        //realizo el post
        axios.post(`/api/prodes/${this.props.location.state.prode.id}/edit`, {
            id: this.props.location.state.prode.id,
            nombre: this.state.nombre
          })
          .then( (response) => {
           //redirijo a misProdes
           
            this.props.history.push('/prodes');
          })
          .catch(function (error) {
            console.log(error);
          });
    }


    nombreProde(e){
        //set state para cambiar nombre del prode
        this.setState({
            nombre: e.target.value
          });
    }


    render() {
        return (
            <div className="container">
                <h1>Editar Prode</h1>
                <div >
                    <label>
                        Nuevo nombre del Prode:
                        <input type="text" defaultValue={this.state.nombre} onChange={this.nombreProde.bind(this)}/>
                    </label>
                </div>
                
                <button className="btn btn-success btnNuevoProde" onClick={this.modificar.bind(this)}>Guardar Cambios</button>
            </div>
        )
    }
}
