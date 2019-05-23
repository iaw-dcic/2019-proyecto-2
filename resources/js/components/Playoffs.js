import React, { Component } from 'react';

import './partidos.css'
export default class Playoffs extends Component {
    state = {
        isLoaded: false,
        items: []
    };

    componentWillMount() {
        fetch('http://localhost/pr2/api/partidos/8')
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
        return <ul>
            {items.map((item, i) => (

                <div className="partido row" key={i}>
                    <div className="col-8">
                        {item.jugador_uno}
                    </div>

                    <div className="col-8">
                        {item.jugador_dos}
                    </div>
                    <div className="col-4 ganador text-center">
                        Djoko
                    </div>
                    <hr />
                </div>


            ))}
        </ul>

    }
}