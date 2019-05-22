import React, { Component } from 'react';

import Partidos from './Partidos'
import Header from './Header'
export default class Ppal extends Component {

    state = {
        error: null,
        isLoaded: false,
        items: [],
        user: []
    };
    componentWillMount() {


        fetch('http://localhost/pr2/api/user')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    user: json
                })

            });

    };

    render() {

        if (this.state.error) {
            return <div>Error: {this.state.error.message}</div>;
        } else
            return (

                <div className="container" >
                    <Header user={this.state.user} />
                    <Partidos />
                </div>
            );
    }

}
