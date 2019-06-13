import React, { Component } from 'react';
import Colores from './Colores'

class ListaColores extends Component {
    state={
        colores: []            
    }

    componentDidMount () {
        axios.get('/api/colores').then(response => {
          this.setState({
            colores: response.data
          })
        })
    }

    render() {
        return (
            <div>
                <label className="TituloSeccion"> Seleccione el color</label>
                {this.state.colores.map(color => (
                    <Colores key={color.id} color={color}/>
                ))}
            </div>
        );
    }
}

export default ListaColores;