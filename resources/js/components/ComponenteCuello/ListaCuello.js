import React, { Component } from 'react';
import Cuello from './Cuello'

class ListaCuello extends Component {
    state={
        cuellos: []            
    }

    componentDidMount () {
        axios.get('/api/cuello').then(response => {
          this.setState({
            cuellos: response.data
          })
        })
    }

    render() {
        return (
            <div>
                <label className="TituloSeccion"> Seleccione tipo de cuello</label>
                    {this.state.cuellos.map(cuello => (
                        <Cuello key={cuello.id} cuello={cuello}/>
                ))}
            </div>
        );
    }
}

export default ListaCuello;