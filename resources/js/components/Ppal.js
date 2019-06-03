import React, { Component } from 'react';
import Footer from './Footer'
import NavIzq from './NavIzq'
import Header from './Header'
export default class Ppal extends Component {


    render() {

        return (
            <React.Fragment>
                <Header />
                <NavIzq />
                <Footer />
            </React.Fragment>
        );
    }

}
