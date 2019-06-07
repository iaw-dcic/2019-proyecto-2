import React, { Component } from 'react';

import './partidos.css'
export default class PrimerRonda extends Component {
    state = {
        isLoaded: false,
        items: []
    };

    componentWillMount() {
        fetch('/pr2/api/partidos/32')
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

        return <div className="row table-responsive">
            <table className="table-striped ">
                <thead >
                    <tr>
                        <th scope="col">Jugador 1 </th>
                        <th> vs </th>
                        <th scope="col" >Jugador 2 </th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (

                        <tr key={item.id}>
                            <td> {item.junonombre} </td>
                            <td> vs </td>
                            <td>{item.jdosnombre}</td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    }
}