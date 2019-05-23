import React, { Component } from 'react';

import NavIzq from './NavIzq'
import Header from './Header'
export default class Ppal extends Component {

    state = {

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
                <React.Fragment>
                    <Header user={this.state.user} />
                    <NavIzq />
                </React.Fragment>
            );
    }

}
