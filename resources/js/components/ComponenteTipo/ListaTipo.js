import React, { Component } from 'react';
import Tipo from './Tipos'

class ListaTipo extends Component {

    state={
        tipos: []            
    }

    componentDidMount () {
        axios.get('/api/tipo').then(response => {
          this.setState({
            tipos: response.data
          })
        })
    }

    render() {
        return (
            <div>
                <label className="TituloSeccion"> Seleccione tipo de remera</label>
                    {this.state.tipos.map(tipo => (
                        <Tipo key={tipo.id} tipo={tipo}/>
                ))}
            </div>
        );
    }
}

export default ListaTipo;