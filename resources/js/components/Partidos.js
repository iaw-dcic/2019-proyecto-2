import React, { Component } from 'react';


export default class Partidos extends Component {

    state = {
        isLoaded: false,
        items: []
    };


    componentWillMount() {
        fetch('http://localhost/pr2/api/partidos/64')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json.items
                })
            });
    }

    render() {
        var { items } = this.state;
        return <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">Test Hola</div>
                    <div className="card-body">
                        <ul>
                            {items.map(item => (
                                <li key={item.id}>
                                    {item.jugador_uno} vs {item.jugador_dos}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    }
}