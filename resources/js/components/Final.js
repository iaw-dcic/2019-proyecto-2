import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Final extends Component {
    state = {
        item: []
    };
/*
    componentWillMount() {
        fetch('api/matches/8')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    item: json.items[this.props.i]
                })
            });
    }

    handleClick(param, e) {
        console.log('Parameter', param);
        console.log('Event', e);
        document.getElementById("hola").innerHTML += "<p>" + param + "</p>";

    }
    */
    render() {
        var { item } = this.state;

        return <div>

        <div className="card">
              <li>
              equipo q gana
              <button type="button" > gana </button>
              </li>
                vs
              <li>
              equipo q gana
              <button type="button"> gana
             </button>
        </li>
        </div>

        </div>
    }
}
