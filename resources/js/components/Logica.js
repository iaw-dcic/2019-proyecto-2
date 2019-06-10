import React, { Component } from 'react';
import Axios from 'axios';

const ContextoLogica= React.createContext();

class ProovedorLogica extends Component {
    
    state={
        color: localStorage.getItem('color') ? localStorage.getItem('color') : 'Negro',
        cuello: localStorage.getItem('cuello') ? localStorage.getItem('cuello') : 'Redondo',
        tipo: localStorage.getItem('tipo') ? localStorage.getItem('tipo') : 'Mujer',
    }

    cambiarTipo = (tipoSeleccionado) => {
        localStorage.setItem("tipo", tipoSeleccionado.nombre);
        this.setState({tipo: tipoSeleccionado.nombre});
    }

    cambiarCuello = (cuelloSeleccionado) => {
    localStorage.setItem("cuello", cuelloSeleccionado.nombre);
      this.setState({cuello: cuelloSeleccionado.nombre});
    }

    cambiarColor = (colorSeleccionado) => {
      localStorage.setItem("color", colorSeleccionado.nombre);
      this.setState({color: colorSeleccionado.nombre});
    }
  
    guardarRemera =event=> {
        event.preventDefault();
        
        window.axios = require('axios');
        let api_token = document.querySelector('meta[name="api-token"]');
    
        if (api_token) window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;

        Axios.post('/api/remeras', {
            color_remera: this.state.color,
            tipo_remera: this.state.tipo,
            cuello_remera: this.state.cuello
        }).then (res=> {console.log(res); console.log(res.data)
        });
    }

    eliminarRemera=(id)=>{
        window.axios = require('axios');
        let api_token = document.querySelector('meta[name="api-token"]');
    
        if (api_token) window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token.content;

        Axios.post(`/api/eliminarRemera/${id}`, {
           id_remera: id,
        }).then (res=> {console.log(res); console.log(res.data)
        });
    }

    render() {
        return (
            <ContextoLogica.Provider value={{
                ...this.state,
                cambiarColor:this.cambiarColor,
                cambiarCuello:this.cambiarCuello,
                cambiarTipo:this.cambiarTipo,
                guardarRemera:this.guardarRemera,
                eliminarRemera:this.eliminarRemera
            }}>
                {this.props.children}
            </ContextoLogica.Provider>
        );
    }
}
const ConsumidorLogica=ContextoLogica.Consumer;

export {ConsumidorLogica, ProovedorLogica}