import React, { Component } from 'react';
import Creacion from './Creacion'

class ListaCreaciones extends Component {
    state={
        creaciones: []
    }

    componentDidMount () {
        axios.get('api/creaciones').then(response => {
          this.setState({
            creaciones: response.data
          })
        })
    }

    render() {
        return (
                <div className="py-5">
                    <div className="container">
                        <div className="row">                          
                            {this.state.creaciones.map(
                                creacion =>{
                                    return <Creacion key={creacion.id} creacion={creacion} />
                                }
                            )}
                             
                        </div>
                    </div>
                </div>
        );
    }
}

export default ListaCreaciones;