import React, { Component } from 'react';
import '../ComponenteRemera/Remera.css'
import ListaColores from '../ComponenteColor/ListaColores'
import ListaTipo from '../ComponenteTipo/ListaTipo';
import ListaCuello from '../ComponenteCuello/ListaCuello';
import Axios from 'axios';

class EditarRemera extends Component {

    state={
        color:"",
        cuello: "",
        tipo:"",
        id:this.props.match.params.id
    }


    componentDidMount () {
        Axios.get(`/api/mostrarRemera/${this.state.id}`).then(response => {
   
          this.setState({
            cuello: response.data.cuello,
            tipo: response.data.tipo,
            color: response.data.color,
          })
        })
    }  
    editarRemera=(id)=>{
        window.axios = require('axios');
        let api_token = document.querySelector('meta[name="api-token"]');
    
        if (api_token) window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;

        Axios.post(`/api/editarRemera/${id}`, {
            color_remera: this.state.color,
            tipo_remera: this.state.tipo,
            cuello_remera: this.state.cuello
        }).then (res=> {console.log(res); console.log(res.data)
        });
    }
    render() {
        
        return (
            <React.Fragment>
            <div className="container-fluid text-center d-none d-lg-block PanelGeneral">
                <div className="row my-2 text-capitalize text-center">
                  <div className="col-10 mx-auto col-lg-6 panelBotones">
                        <ListaTipo />
                        <ListaColores />
                        <ListaCuello />
                  </div>
  
                  <div className="col-10 mx-auto col-lg-6 PanelImagen">
                        <div >
                            <img src={"../img/"+this.state.color+this.state.cuello+this.state.tipo+".png"} alt="modeloRemera" className="imagen" />
                            <div>
                                <button className="BotonGeneral" onClick={this.editarRemera(this.state.id)}>Editar Remera</button>
                            </div>
                        </div>
                  </div>
               </div>
            </div>
            </React.Fragment>
        );
    }
}

export default EditarRemera;