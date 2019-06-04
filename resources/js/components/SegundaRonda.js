import React, { Component } from 'react';

import './partidos.css'
export default class SegundaRonda extends Component {
    state = {
        isLoaded: false,
        items: []
    };

    componentWillMount() {
        fetch('/api/partidos/16')
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
            {items.map(item => (
                <li key={item.id}>
                    {item.junonombre} vs {item.jdosnombre}
                </li>
            ))}
        </ul>

    }
}