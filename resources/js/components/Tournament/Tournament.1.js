import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'


export default class Container extends Component {
    constructor() {
        super()
        this.state = {
            teams: []
        }
    }

    componentDidMount() {
        axios.get('/api/teams').then(response => {
            this.setState({
                teams: response.data
            })
        })
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">Test Component</div>
                <div className="card-body">
                    <ul className='list-group list-group-flush'>
                        {this.state.teams.map((team) => (
                                <div className="card-body">
                                    <h5 className="card-title">{team.nombre}</h5>
                                    
                                </div>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}