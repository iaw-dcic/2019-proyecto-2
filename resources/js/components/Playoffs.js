import React, { Component } from 'react';
import Octavos from './Octavos';
import Cuartos from './Cuartos';
import Semis from './Semis';
import './partidos.css'
export default class Playoffs extends Component {
    state = {
        items: []
    };

    componentWillMount() {
        fetch('http://localhost/pr2/api/partidos_dos/8')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json.items
                })
            });
    }

    handleClick(param, e) {
        console.log('Parameter', param);
        console.log('Event', e);
        document.getElementById("hola").innerHTML += "<p>" + param + "</p>";

    }
    render() {
        var { items } = this.state;
        return <div>

            <div className="row">
                <div className="col-2">
                    <p>8vos</p>
                </div>
                <div className="col-2">
                    <p>4tos</p>
                </div>
                <div className="col-4 text-center">
                    <p>Semis</p>
                </div>
                <div className="col-2 ">
                    <p>4tos</p>
                </div>
                <div className="col-2">
                    <p>8vos</p>
                </div>
            </div>
            <Octavos i={0} />
            <Cuartos />
            <Octavos i={1} />
            <Semis />
            <Octavos i={2} />
            <Cuartos />
            <Octavos i={3} />
            <div id="hola"></div>
        </div>


    }
}
