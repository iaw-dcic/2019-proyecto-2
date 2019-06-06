import React, { Component } from 'react';

class ListaCreaciones extends Component {
    state={
        creaciones: []
    }

    componentDidMount () {
        axios.get('/creaciones').then(response => {
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
                            {this.state.creaciones}
                        </div>
                    </div>
                </div>
        );
    }
}

export default ListaCreaciones;