
import React, { Component } from 'react';

export default class Perfil extends Component {
    state = {
        items: []
    }
    componentWillMount() {
        fetch('http://localhost/pr2/api/cantidadpronosticos')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json.items,
                })
            });
    }
    render() {
        var { items } = this.state;
        return <div id="contenedor" className="row">
            <div className="form-group">
                <label >Selecciona el pronóstico a ver:</label>
                <select className="form-control" id="sel1">
                    {items.map((item, i) => (
                        <option key={i}>
                            {item.pronostico}
                        </option>
                    ))}

                </select>
            </div>
        </div >

    }
}